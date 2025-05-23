import { defineHook } from "@directus/extensions-sdk";
import { aesDecrypt, aesEncrypt } from "./aes";
import {
  oidcClientModel,
  oidcSettingsModel,
  oidcUserLogsModel,
} from "./collectionModel";

export default defineHook(
  ({ filter, init, embed }, { database, getSchema, services, env }) => {
    embed(
      "head",
      `
<script>
/**
 * SPA Route Change Listener (handles route redirection after oidc login, as directus adds "admin" prefix to all redirects, which needs to be handled)
 * @description Listens for route changes in a SPA application and unsubscribes under specific conditions.
 * @param {Function} callback - The callback function to execute on route change.
 * @param {Object} options - Configuration options.
 * @param {string} options.initialPath - The initial path from which listening starts.
 * @param {string} options.targetPath - The target path to match for specific actions.
 * @returns {Function} A function to unsubscribe the listener.
 */
function setupConditionalRouteListener(callback, options = {}) {
  const {
    initialPath = '/admin/login',
    targetPath = '/admin/oidc-provider/authorize'
  } = options;

  // Verify if currently on the initial path
  const currentPath = window.location.pathname;
  if (currentPath !== initialPath) {
    return () => {}; // Return an empty function to avoid call errors
  }

  let unsubscribe = null;
  let isUnsubscribed = false;

  // The actual route listener function
  function handleRouteChange(newPath, oldPath) {

    // Check if redirected to the target path
    if (newPath.startsWith(targetPath)) {
      window.location.reload();
      return;
    }

    // Check if still on the initial path (ignore)
    if (newPath === initialPath) {
      return;
    }

    // Redirect to other paths, then unsubscribe
    console.log('Redirected to a non-target path, unsubscribing');
    if (unsubscribe && !isUnsubscribed) {
      unsubscribe();
      isUnsubscribed = true;
    }
  }

  // Set up the listener
  unsubscribe = setupSPARouteListener(handleRouteChange);

  // Return the unsubscribe function
  return () => {
    if (unsubscribe && !isUnsubscribed) {
      unsubscribe();
      isUnsubscribed = true;
    }
  };
}

// Original SPA route listener function
function setupSPARouteListener(callback) {
  let currentPath = window.location.pathname + window.location.search + window.location.hash;

  function checkRouteChange() {
    const newPath = window.location.pathname + window.location.search + window.location.hash;
    if (newPath !== currentPath) {
      const oldPath = currentPath;
      currentPath = newPath;
      callback(newPath, oldPath);
    }
  }

  window.addEventListener('popstate', checkRouteChange);
  window.addEventListener('hashchange', checkRouteChange);

  const originalPushState = window.history.pushState;
  const originalReplaceState = window.history.replaceState;

  window.history.pushState = function(state, title, url) {
    originalPushState.apply(this, arguments);
    checkRouteChange();
  };

  window.history.replaceState = function(state, title, url) {
    originalReplaceState.apply(this, arguments);
    checkRouteChange();
  };

  return function() {
    window.removeEventListener('popstate', checkRouteChange);
    window.removeEventListener('hashchange', checkRouteChange);
    window.history.pushState = originalPushState;
    window.history.replaceState = originalReplaceState;
  };
}

const unsubscribe = setupConditionalRouteListener(
  (newPath, oldPath) => {
    // console.log("router changed", newPath, oldPath)
  },
  {
    initialPath: '/admin/login',
    targetPath: '/admin/oidc-provider/authorize'
  }
);
</script>
`
    );
    const OIDC_ENDPOINT = "/oidc-provider";
    const ADMIN_OIDC_ENDPOINT = "/admin/oidc-provider";
    //https://directus.io/docs/configuration/security-limits
    //Secret string for the project. Used for secret signing.
    //This should be a long, random string.
    const { SECRET } = env;
    const { CollectionsService, FieldsService } = services;

    init("app.before", async ({ app }) => {
      const modelsToCheck = [
        oidcUserLogsModel,
        oidcClientModel,
        oidcSettingsModel,
      ];
      const collectionsService = new CollectionsService({
        schema: await getSchema(),
      });
      const ensureCollectionExists = async (model) => {
        try {
          await collectionsService.readOne(model.collection);
        }catch (error) {
          await collectionsService.createOne(model);
        }
      }
      for (const model of modelsToCheck) {
        await ensureCollectionExists(model);
      }
    });

    //Middleware for handling OIDC routes and redirects
    init("middlewares.before", async ({ app }) => {
      app.use(async (req, res, next) => {
        // Handle OIDC endpoint modifications
        // Directus's default middleware enforces validation if the request headers or query contain authorization or access_token. However, the OIDC's authentication encryption is inconsistent with the system's.
        // Therefore, it's necessary to remove these for OIDC routes (/oidc-provider) to avoid hijacking, and rename authorization and access_token to _authorization and _access_token. Later, when OIDC authentication is accessed,
        // it will automatically retrieve values from _authorization and _access_token for authentication.
        if (req.path.startsWith(OIDC_ENDPOINT)) {
          if (
            req.path === `${OIDC_ENDPOINT}/userinfo` &&
            req.query.access_token
          ) {
            req.query._access_token = req.query.access_token;
            delete req.query.access_token;
          } else {
            req.headers._authorization = req.headers.authorization;
            delete req.headers.authorization;
          }
          return next();
        }
        // Handle admin to non-admin redirects
        if (req.path.startsWith(ADMIN_OIDC_ENDPOINT)) {
          const queryString = req.url.includes("?")
            ? req.url.substring(req.url.indexOf("?"))
            : "";
          const newPath = `${req.path.replace(
            ADMIN_OIDC_ENDPOINT,
            OIDC_ENDPOINT
          )}${queryString}`;
          return res.redirect(302, newPath);
        }
        next();
      });
    });

    // Filter to handle user updates (preserved from original)
    filter("users.update", async (item: any) => {
      if (item.last_page?.startsWith(OIDC_ENDPOINT)) {
        item.last_page = "/content";
      }
      return item;
    });

    filter("ext_oidc_clients.items.read", async (items: any) => {
      items = items.map((item: any) => {
        if (item.client_secret && item.client_secret !== "") {
          try {
            // 解密 client_secret
            item.client_secret = aesDecrypt(item.client_secret, SECRET);
          } catch (error) {
            console.error("Error decrypting client_secret:", error);
          }
        }
        return item;
      });
      return items;
    });

    filter("ext_oidc_clients.items.create", async (item: any) => {
      // Only encrypt when client_secret has a value
      if (item.client_secret && item.client_secret !== "") {
        try {
          // encrypt client_secret
          item.client_secret = aesEncrypt(item.client_secret, SECRET);
        } catch (error) {
          console.error("Error encrypting client_secret:", error);
        }
      }
      return item;
    });
    filter("ext_oidc_clients.items.update", async (item: any) => {
      // Only encrypt when client_secret has a value
      if (item.client_secret && item.client_secret !== "") {
        try {
          // encrypt client_secret
          item.client_secret = aesEncrypt(item.client_secret, SECRET);
        } catch (error) {
          console.error("Error decrypting client_secret:", error);
        }
      }
      return item;
    });

    filter(
      "ext_oidc_settings.items.read",
      async (items: any, meta, context) => {
        items = items.map((item: any) => {
          return keyDecrypt(item);
        });
        return items;
      }
    );
    filter(
      "ext_oidc_settings.items.update",
      async (item: any, meta, context) => {
          return keyEncrypt(item);
      }
    );
    filter(
      "ext_oidc_settings.items.create",
      async (item: any, meta, context) => {
          return keyEncrypt(item);
      }
    )

    // Decrypt key
    const keyDecrypt = (item:any)=>{
      let { privateKeyPem, publicKeyPem } = item;
      if (!privateKeyPem || !publicKeyPem) {
        return item;
      }
      try {
        publicKeyPem = aesDecrypt(publicKeyPem, SECRET);
        if (
          publicKeyPem !== "" &&
          publicKeyPem.indexOf("......") === -1 &&
          publicKeyPem.indexOf("BEGIN PUBLIC KEY") !== -1 &&
          publicKeyPem.indexOf("END PUBLIC KEY") !== -1
        ) {
          publicKeyPem = [
            publicKeyPem.split("\n")[0],
            publicKeyPem.split("\n")[1],
            "......",
            publicKeyPem.split("\n")[publicKeyPem.split("\n").length - 2],
            publicKeyPem.split("\n")[publicKeyPem.split("\n").length - 1],
          ];
          item.publicKeyPem = publicKeyPem.join("\n");
        }
      } catch (error) {
        console.error("Error decrypting publicKeyPem:", error);
      }

      try {
        privateKeyPem = aesDecrypt(privateKeyPem, SECRET);
        if (
          privateKeyPem !== "" &&
          privateKeyPem.indexOf("......") === -1 &&
          privateKeyPem.indexOf("BEGIN PRIVATE KEY") !== -1 &&
          privateKeyPem.indexOf("END PRIVATE KEY") !== -1
        ) {
          privateKeyPem = [
            privateKeyPem.split("\n")[0],
            privateKeyPem.split("\n")[1],
            "......",
            privateKeyPem.split("\n")[privateKeyPem.split("\n").length - 2],
            privateKeyPem.split("\n")[privateKeyPem.split("\n").length - 1],
          ];
          item.privateKeyPem = privateKeyPem.join("\n");
        }
      } catch (error) {
        console.error("Error decrypting privateKeyPem:", error);
      }
      return item;
    }
    // Encrypt key
    const keyEncrypt = (item:any)=>{
      let publicKeyPem = item?.publicKeyPem;
      let privateKeyPem = item?.privateKeyPem;
      if (
        publicKeyPem &&
        publicKeyPem !== "" &&
        publicKeyPem.indexOf("......") === -1 &&
        publicKeyPem.indexOf("BEGIN PUBLIC KEY") !== -1 &&
        publicKeyPem.indexOf("END PUBLIC KEY") !== -1
      ) {
        try {
          publicKeyPem = aesEncrypt(publicKeyPem, SECRET);
          item.publicKeyPem = publicKeyPem;
        } catch (error) {
          console.error("Error encrypting publicKeyPem:", error);
        }
      } else {
        delete item.publicKeyPem;
      }
      if (
        privateKeyPem &&
        privateKeyPem !== "" &&
        privateKeyPem.indexOf("......") === -1 &&
        privateKeyPem.indexOf("BEGIN PRIVATE KEY") !== -1 &&
        privateKeyPem.indexOf("END PRIVATE KEY") !== -1
      ) {
        try {
          privateKeyPem = aesEncrypt(privateKeyPem, SECRET);
          item.privateKeyPem = privateKeyPem;
        } catch (error) {
          console.error("Error encrypting privateKeyPem:", error);
        }
      } else {
        delete item.privateKeyPem;
      }
      return item;
    }
  }
  
);

