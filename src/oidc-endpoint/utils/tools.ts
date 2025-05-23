import crypto from "crypto";
import { aesDecrypt } from "../../oidc-hook/aes";
import jwt from "jsonwebtoken";
//CODE_EXPIRES_MS The authorization code is an intermediate credential in the OAuth2 authorization code flow, used to exchange for an access token  
//TOKEN_EXPIRES_MS The access token is the final credential in the OAuth2 authorization code flow, used to access protected resources  
//CLOCK_TOLERANCE_MS Clock tolerance is designed to handle time synchronization issues, ensuring the token's validity period does not expire due to time discrepancies
interface OIDCSetting {
  issuer: string;
  code_expires_in: number;
  token_expires_in: number;
  refresh_token_expires_in: number;
  allow_refresh_tokens: boolean;
  publicKeyPem: string;
  privateKeyPem: string;
}
interface AuthCodeRecord {
  clientId: string;
  userId: string;
  expires: number;
}
// Use a Map to store refresh tokens
export const authCodes = new Map<string, AuthCodeRecord>();
export const refreshTokens = new Map<
  string,
  {
    userId: string;
    clientId: string;
    expires: number;
  }
>();
let database: any;
let SECRET: string;
// Set up database connection
export const setDatabase = (db: any) => {
  database = db;
};

export const setSecret = (secret: string) => {
  SECRET = secret;
};
export const getOIDCSetting = async (): Promise<OIDCSetting> => {
  try {
    const settings = await database("ext_oidc_settings")
      .select("*")
      .where("id", "1");
    if (settings.length > 0) {
      const {
        issuer,
        code_expires_in,
        token_expires_in,
        refresh_token_expires_in,
        allow_refresh_tokens,
        publicKeyPem,
        privateKeyPem,
      } = settings[0];
      return {
        issuer,
        code_expires_in,
        token_expires_in,
        refresh_token_expires_in,
        allow_refresh_tokens,
        publicKeyPem: aesDecrypt(publicKeyPem, SECRET),
        privateKeyPem: aesDecrypt(privateKeyPem, SECRET),
      };
    }
    return {
      issuer: "",
      code_expires_in: 0,
      token_expires_in: 0,
      refresh_token_expires_in: 0,
      allow_refresh_tokens: false,
      publicKeyPem: "",
      privateKeyPem: "",
    };
  } catch (error) {
    console.error("使用 knex 查询数据库时发生错误:", error);
    return {
      issuer: "",
      code_expires_in: 0,
      token_expires_in: 0,
      refresh_token_expires_in: 0,
      allow_refresh_tokens: false,
      publicKeyPem: "",
      privateKeyPem: "",
    };
  }
};

//Generate a secure random authorization code
export const generateAuthorizationCode = async(
  clientId: string,
  userId: string
): Promise<string> => {
  const code = crypto.randomBytes(32).toString("hex");
  const { code_expires_in } = await getOIDCSetting();

  authCodes.set(code, {
    clientId,
    userId,
    expires: Date.now() + code_expires_in * 1000,
  });

// Regularly clean up expired codes
  setTimeout(() => authCodes.delete(code), code_expires_in * 1000);
  return code;
};

//Verify and consume the authorization code
export const validateAuthorizationCode = async (
  code: string
): Promise<AuthCodeRecord | null> => {
  const record = authCodes.get(code);
  if (!record || record.expires < Date.now()) {
    // Clean up invalid code
    authCodes.delete(code);
    return null;
  }
  // Single-use
  authCodes.delete(code);
  return record;
};

export const validateRefreshToken = async (
  token: string,
  clientId: string
): Promise<{ userId: string; } | null> => {
  const record = refreshTokens.get(token);
  if (!record || record.expires < Date.now() || record.clientId !== clientId) {
    refreshTokens.delete(token);
    return null;
  }
  // Delete old token
  refreshTokens.delete(token);
  return { userId: record.userId };
};

//Generate standard JWT tokens
export const generateTokens = async(
  payload: object
): Promise<{
  accessToken: string;
  refreshToken?: string;
}> => {
  const { privateKeyPem, token_expires_in } = await getOIDCSetting();
  const accessToken = jwt.sign(
    {
      ...payload,
      exp: Math.floor(Date.now() / 1000) + token_expires_in,
      iat: Math.floor(Date.now() / 1000),
    },
    privateKeyPem,
    { algorithm: "RS256" }
  );

  // Only generate refresh tokens when needed
  if (payload["scope"]?.includes("offline_access")) {
    const refreshToken = crypto.randomBytes(64).toString("hex");
    return { accessToken, refreshToken };
  }

  return { accessToken };
};
// access_token resource token verification middleware
export const verifyToken = async (req, res, next) => {
  try {
    const token =
      (req.headers._authorization || "").split(" ")[1] ||
      req.body?.access_token ||
      req.query?._access_token;

    if (!token) {
      return res.status(401).json({ error: "unauthorized" });
    }
    const { publicKeyPem } =await getOIDCSetting();
    const CLOCK_TOLERANCE_SEC = 5; // 允许的时钟误差（秒）
    const decoded = jwt.verify(token, publicKeyPem, {
      algorithms: ["RS256"],
      clockTolerance: CLOCK_TOLERANCE_SEC,
    });

    // Attach decoded information to the request object
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: "invalid_token", details: err.message });
  }
};
