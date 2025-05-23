import { defineEndpoint } from "@directus/extensions-sdk";
import bodyParser from "body-parser";
import {
  generateAuthorizationCode,
  generateTokens,
  getOIDCSetting,
  refreshTokens,
  setDatabase,
  setSecret,
  validateAuthorizationCode,
  validateRefreshToken,
  verifyToken,
} from "./utils/tools";

interface OIDCClient {
  client_id: string;
  client_secret: string;
  redirect_uri: string;
  client_name: string;
}

export default defineEndpoint({
  id: "oidc-provider",
  handler: async (router, context) => {
    const { services, getSchema, env } = context;
    const { ItemsService } = services;
    const { database } = context; // database is the knex instance
    const schema = await getSchema();
    const { SECRET, PUBLIC_URL } = env;
    setDatabase(database);
    setSecret(SECRET);

    const ENDPOINT_ID = "oidc-provider";

    const baseUrl = (PUBLIC_URL || "").replace(/\/+$/, "");
    const oidcUrl = `${baseUrl}/${ENDPOINT_ID}`;

    // Get OIDC client configuration
    const getOIDCClients = async (clientId: string): Promise<OIDCClient[]> => {
      const clientsService = new ItemsService("ext_oidc_clients", { schema });
      const clients = await clientsService.readByQuery({
        filter: {
          client_id: {
            _eq: clientId,
          },
          status: {
            _eq: true,
          },
        },
        fields: ["client_id", "client_secret", "redirect_uri", "client_name"],
      });
      return clients.map((client) => client);
    };

    const errorHandler = (err, req, res, next) => {
      console.error(`[OIDC Error] ${req.method} ${req.path}:`, err);
      res.status(500).json({ error: "server_error" });
    };

    // Lifecycle:
    // After user login, the authorization server generates a short-term authorization code
    // The frontend obtains this authorization code via the redirect URL
    // The backend exchanges the authorization code + client secret for the real access token
    // OIDC discovery endpoint
    router.get("/.well-known/openid-configuration", (req, res) => {
      res.json({
        issuer: baseUrl,
        authorization_endpoint: `${oidcUrl}/authorize`,
        token_endpoint: `${oidcUrl}/token`,
        userinfo_endpoint: `${oidcUrl}/userinfo`,
        jwks_uri: `${oidcUrl}/jwks`,
        scopes_supported: ["openid", "email", "profile", "offline_access"],
        response_types_supported: ["code", "id_token token"],
        grant_types_supported: ["authorization_code", "refresh_token"],
        subject_types_supported: ["public"],
        id_token_signing_alg_values_supported: ["RS256"],
        token_endpoint_auth_methods_supported: ["client_secret_basic"],
        claims_supported: [
          "sub",
          "name",
          "email",
          "email_verified",
          "preferred_username",
          "role",
        ],
      });
    });

    // Authorization endpoint
    router.get("/authorize", async (req, res) => {
      try {
        const { response_type, client_id, redirect_uri, scope, state } =
          req.query;
        if (response_type !== "code") {
          return res.status(400).json({ error: "unsupported_response_type" });
        }
        //@ts-ignore
        const accountability = req.accountability;
        const query = req.query;
        // 客户端验证
        const clients = await getOIDCClients(query.client_id as string);
        const client = clients.find((c) => c.client_id === String(client_id));

        if (!client || client.redirect_uri !== redirect_uri) {
          return res.status(400).json({ error: "invalid_client" });
        }

        // Client-side validation
        // @ts-ignore
        if (!accountability?.user) {
          return res.redirect(
            `/admin/login?redirect=${encodeURIComponent(req.originalUrl)}`
          );
        }

        // Login check
        const code = await generateAuthorizationCode(
          client_id as string,
          accountability.user
        );
        const redirectUrl = new URL(redirect_uri as string);
        redirectUrl.searchParams.set("code", code);
        if (state) redirectUrl.searchParams.set("state", state as string);

        return res.redirect(redirectUrl.toString());
      } catch (err) {
        errorHandler(err, req, res, () => {});
      }
    });

    // Token endpoint
    router.post(
      "/token",
      //@ts-ignore
      bodyParser.urlencoded({ extended: false }),
      async (req, res) => {
        try {
          const { grant_type, code, client_id, client_secret, refresh_token } =
            req.body;
          if (grant_type !== "authorization_code") {
            return res.status(400).json({ error: "unsupported_grant_type" });
          }

          const { token_expires_in, refresh_token_expires_in } =
            await getOIDCSetting();
          // Process refresh token request
          if (grant_type === "refresh_token") {
            if (!refresh_token) {
              return res.status(400).json({
                error: "invalid_request",
                error_description: "Missing refresh_token",
              });
            }
            // Validate refresh token
            const refreshPayload = await validateRefreshToken(
              refresh_token,
              client_id
            );
            if (!refreshPayload) {
              return res.status(400).json({
                error: "invalid_grant",
                error_description: "Invalid refresh token",
              });
            }
            // Retrieve user information
            const usersService = new ItemsService("directus_users", { schema });
            const user = await usersService.readOne(refreshPayload.userId);
            // Generate new token
            const { accessToken, refreshToken } = await generateTokens({
              sub: user.id,
              client_id,
              scope: "openid profile email",
            });
            return res.json({
              access_token: accessToken,
              refresh_token: refreshToken,
              token_type: "Bearer",
              expires_in: token_expires_in,
            });
          }
          // Client verification
          const query = req.query;
          const clients = await getOIDCClients(query.client_id as string);
          const client = clients.find((c) => c.client_id === client_id);
          if (!client || client.client_secret !== client_secret) {
            return res.status(400).json({ error: "invalid_client" });
          }
          // Authorization code verification
          const authCode = await validateAuthorizationCode(code);
          if (!authCode) {
            return res.status(400).json({ error: "invalid_grant" });
          }
          // Retrieve user information
          const usersService = new ItemsService("directus_users", { schema });
          const user = await usersService.readOne(authCode.userId);

          // Check if offline_access was requested
          const scope = req.body.scope || "";
          const includeRefreshToken = scope.includes("offline_access");
          // Insert login log
          const userLogsService = new ItemsService("ext_oidc_user_logs", {
            schema,
          });
          await userLogsService.createOne({
            user_id: user.id,
            client_id,
            client_uri: client.redirect_uri,
            client_name: client.client_name,
            username: user.email,
            ip: req.ip,
            user_agent: req.headers["user-agent"],
          });
          // Generate resource access token
          const { accessToken, refreshToken } = await generateTokens({
            sub: user.id,
            client_id,
            scope:
              "openid profile email" +
              (includeRefreshToken ? " offline_access" : ""),
          });
          // If there is a refresh token, store it
          if (includeRefreshToken && refreshToken) {
            refreshTokens.set(refreshToken, {
              userId: user.id,
              clientId: client_id,
              expires: Date.now() + refresh_token_expires_in * 1000,
            });
            // Set automatic cleanup of expired refresh_token
            setTimeout(
              () => refreshTokens.delete(refreshToken),
              refresh_token_expires_in * 1000
            );
          }
          //access_token: Proves that the client has the right to access resources, carried by the client when requesting the resource server, and verified by the resource server to determine whether access is allowed.
          //id_token: Proves the user's identity, containing basic user information (such as sub, name, email, etc.), parsed and verified by the client after successful authentication, used for the client to understand who the currently logged-in user is.
          //idToken
          const idToken = await generateTokens({
            iss: baseUrl,
            sub: user.id,
            aud: client_id,
            preferred_username: user.email.split("@")[0],
            name: `${user.first_name} ${user.last_name}`,
            email: user.email,
            email_verified: user.status === "active",
            role: user.role,
          });

          const response: any = {
            access_token: accessToken,
            token_type: "Bearer",
            expires_in: token_expires_in,
            id_token: idToken.accessToken,
          };
          if (refreshToken) {
            response.refresh_token = refreshToken;
            response.refresh_token_expires_in = refresh_token_expires_in;
          }
          res.json(response);
        } catch (err) {
          errorHandler(err, req, res, () => {});
        }
      }
    );

    // userinfo endpoint
    router.get("/userinfo", verifyToken, async (req, res) => {
      try {
        const usersService = new ItemsService("directus_users", { schema });
        // @ts-ignore
        const user = await usersService.readOne(req.user.sub);
        res.json({
          sub: user.id,
          preferred_username: user.email.split("@")[0],
          name: `${user.first_name} ${user.last_name}`,
          email: user.email,
          email_verified: user.status === "active",
          role: user.role,
        });
      } catch (err) {
        errorHandler(err, req, res, () => {});
      }
    });

    // JWKS endpoint
    router.get("/jwks", async (req, res) => {
      const { publicKeyPem } = await getOIDCSetting();
      res.json({
        keys: [
          {
            kty: "RSA",
            alg: "RS256",
            use: "sig",
            kid: "1",
            n: publicKeyPem,
            e: "AQAB",
          },
        ],
      });
    });

    router.use(errorHandler);
  },
});
