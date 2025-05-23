# Directus Extension: directus-extension-OpenID-Connect-provide
---

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Directus Version](https://img.shields.io/badge/Directus-%5E10.10.0-ff69b4)](https://directus.io/)
[![GitHub stars](https://img.shields.io/github/stars/ryoakirasan/directus-extension-OpenID-Connect-provide?style=social)](https://github.com/ryoakirasan/directus-extension-OpenID-Connect-provide)

---

## Project Background

**Directus** is an excellent open-source Headless Content Management System (CMS) that offers powerful data management and API generation capabilities. In many application scenarios, we wish to leverage Directus' built-in user management system as a unified identity authentication source. The **directus-extension-OpenID-Connect-provide** extension was created for this purpose, aiming to transform your Directus instance into a fully functional OpenID Connect (OIDC) Service Provider.

Through this extension, external applications can follow the OpenID Connect protocol to utilize your Directus application's user management features as an authentication service. This means you can centralize user identity management and provide secure, standard authentication and authorization services for multiple third-party applications.

---

## Feature Screenshots

*   **Client Management Page**:
    <img width="1692" alt="Image" src="https://github.com/user-attachments/assets/ab57a011-b9d1-4fa4-b399-8a65a6f27585" />

*   **Provider Settings Page**:
    <img width="1754" alt="image" src="https://github.com/user-attachments/assets/bf885d73-5990-4a28-982e-0079e2891571" />

*   **User Authorization Logs Page**:
    <img width="1693" alt="Image" src="https://github.com/user-attachments/assets/042c4cc4-1e86-4b3f-9001-f80b33692bd4" />

---

## Video Example
[Click me to watch the video](https://player.vimeo.com/video/1086840877)

---

## Feature Overview

### 1. OIDC Core Endpoint Implementation
This extension implements the standard endpoints defined in the OpenID Connect Core specification:
*   **Discovery Endpoint (`/.well-known/openid-configuration`)**: Provides OIDC service metadata for easy client auto-configuration.
*   **Authorization Endpoint (`/oidc-provider/authorize`)**: Handles user authentication requests and issues Authorization Codes.
*   **Token Endpoint (`/oidc-provider/token`)**: Exchanges Authorization Codes or Refresh Tokens for Access Tokens, ID Tokens, and Refresh Tokens.
*   **UserInfo Endpoint (`/oidc-provider/userinfo`)**: Clients use Access Tokens to retrieve basic information about the current logged-in user.
*   **JWKS Endpoint (`/oidc-provider/jwks`)**: Publishes the JSON Web Key Set used to verify the signature of ID Tokens.

### 2. Management Interface (Directus Module)
Provides an integrated Directus module for administrators to configure and manage the OIDC service:
*   **Client Management**:
    *   Create, Read, Update, and Delete (CRUD) OIDC client applications.
    *   Configure Client ID, Client Secret, Redirect URI, client name, site, etc.
    *   Enable/Disable specific clients.
*   **Provider Settings**:
    *   Configure the OIDC Issuer URL.
    *   Set the expiration times for Access Tokens, Refresh Tokens, and Authorization Codes.
    *   Generate or manually enter the RS256 key pair (public/private keys) used for ID Token signing.
*   **User Logs**:
    *   View logs of user authorizations performed through this OIDC service.

### 3. Data Storage and Security
*   **Custom Data Tables**:
    *   `ext_oidc_clients`: Stores configuration information for OIDC client applications.
    *   `ext_oidc_settings`: Stores global configuration for the OIDC Service Provider (e.g., Issuer, key pair, Token expiration).
    *   `ext_oidc_user_logs`: Stores logs of user authorizations via OIDC.
    *   The extension automatically checks and creates these tables upon initial loading.
*   **Sensitive Data Encryption**:
    *   Client Secrets (`client_secret`) and the OIDC Service Provider's Private Key (`privateKeyPem`) are encrypted using AES-256-CBC with the Directus project's `SECRET` before being stored in the database.
    *   They are automatically decrypted when read from the database, ensuring the security of sensitive information.

### 4. Directus Integration and Hooks
*   **Middleware Handling**:
    *   Uses the `middlewares.before` hook to preprocess requests sent to OIDC endpoints, ensuring compatibility with Directus' own authentication system and handling path redirection from `/admin/oidc-provider/*` to `/oidc-provider/*`.
*   **Data Filtering**:
    *   Uses the `filter` hook to automatically handle encryption and decryption of sensitive fields by calling the `SECRET` environment variable from `.env` when creating, updating, and reading `ext_oidc_clients` and `ext_oidc_settings` data.
    *   Public and private keys are partially masked in the management interface to enhance security.
*   **SPA Route Handling**:
    *   Injects JavaScript scripts using `embed('head')` to handle redirection to the client application after OIDC login within Directus.

### 5. Internationalization (i18n)
The management interface supports multiple languages and currently includes (AI-translated):
*   English (en)
*   Simplified Chinese (zh-Hans / zh-CN)
*   Traditional Chinese (zh-Hant / zh-TW)
*   Japanese (ja)
*   Korean (ko)
*   German (de)
*   French (fr)
*   Italian (it)
*   Vietnamese (vi)

---

## Directory Structure

```
+ src/
  + oidc-endpoint/               # OIDC Core Endpoint Logic
    - index.ts
    + utils/
      - tools.ts
  + oidc-hook/                   # Directus Hooks Logic
    - aes.ts
    - collectionModel.ts
    - index.ts
  + setting-page
    + components/
      - basecard.vue
      - navigation.vue
      - statscard.vue
      - table.vue
      - tag.vue
    + forms/                     # Form Components
      - oidcClientForm.vue       # OIDC Client Configuration Form
    - index.ts                   # Module Entry File, defines module routes and basic info
    + locales/                   # Internationalization Language Files
      - de.json
      - en.json
      - fr.json
      - i18n.ts
      - it.json
      - ja.json
      - ko.json
      - vi.json
      - zh-Hans.json
      - zh-Hant.json
    - module.vue
    + pages/                     # Module Subpage Components
      - client-management.vue    # Client Management Page
      - provider-settings.vue    # Service Provider Settings Page
      - user-logs.vue            # User Authorization Logs Page
    + utils/                     # Module Related Utility Functions
      - api.ts
      - tools.ts
```

---

## Important Notes

1.  **Security**:
    *   **Directus `SECRET`**: This extension relies on the `SECRET` environment variable configured in your Directus project's `.env` file to encrypt client secrets and the OIDC private key. The `SECRET` string in the `.env` file should be a random string of 32 characters or more.
    *   **HTTPS**: In a production environment, it is strongly recommended that your Directus instance and all OIDC clients are accessed via HTTPS to ensure communication security.
    *   **Redirect URI**: Ensure that the client's Redirect URI is configured precisely to avoid open redirection vulnerabilities.
2.  **Directus `PUBLIC_URL`**:
    *   Please ensure that the `PUBLIC_URL` environment variable in Directus is correctly configured. The OIDC Issuer URL and other endpoint addresses will be generated based on this `PUBLIC_URL`. If `PUBLIC_URL` is not configured or is configured incorrectly, the OIDC service may not function properly.
3.  **User Management**:
    *   This extension is not responsible for user management. It only provides an OIDC service for other applications to perform user authentication.
    *   You need to manage users and roles within Directus yourself, ensuring the accuracy and security of user information.
4.  **Additional Settings**:
    *   Since `embed('head')` is used to inject JavaScript scripts into the Directus application, you need to add `CONTENT_SECURITY_POLICY_DIRECTIVES__SCRIPT_SRC="'self' 'unsafe-inline' 'unsafe-eval'"` to the Directus `.env` file.
    *   After installing the extension, you need to stop and restart the Directus service for it to automatically initialize and create the corresponding data tables.
---

## How to Use

### 1. Install the Extension

1.  **Clone the repository** (or download the source code):
    ```bash
    git clone https://github.com/ryoakirasan/directus-extension-OpenID-Connect-provide.git
    cd directus-extension-OpenID-Connect-provide
    ```

2.  **Install dependencies**:
    ```bash
    # Using pnpm
    pnpm install
    # Using npm
    # npm install
    # Using yarn
    # yarn install
    ```

3.  **Build the extension**:
    ```bash
    pnpm run build
    # npm run build
    # yarn build
    ```

4.  **Copy the extension to the Directus directory**:
    Copy the built extension files (`app.js` and `api.js`) from the `dist` directory to your Directus project's `extensions/directus-extension-OpenID-Connect-provide/` directory.

5.  **Restart the Directus service**:
    If you are using Docker, restart the Directus container:
    ```bash
    docker-compose restart directus
    ```
    If running the Node.js service directly, restart that service.

### 2. Configure the Directus Environment

*   Ensure your Directus project configuration (`.env`) includes the `SECRET` environment variable.
*   Ensure your Directus project configuration (`.env`) includes the `PUBLIC_URL` environment variable, e.g., `PUBLIC_URL="https://your-directus-domain.com"`.

### 3. Use the Extension

1.  **Access the Management Interface**:
    *   Log in to the Directus admin panel.
    *   Navigate to **Settings** -> **Modules**. You should see a module named "OIDC Provider".
    *   Click the module name to enter the extension's management interface.

2.  **Configure Provider Settings**:
    *   The first time you use it, be sure to visit the "Provider Settings" page.
    *   **Issuer URL**: This will usually auto-populate with your `PUBLIC_URL`. You can modify it if needed.
    *   **Token Expiration**: Set the expiration times for Access Tokens, Refresh Tokens, and Codes according to your requirements.
    *   **Key Pair**:
        *   Click the "Generate New Key Pair" button to generate public and private keys for RS256 signing.
        *   Alternatively, if you already have a key pair, you can manually paste the PEM-formatted public and private keys.
        *   **Important**: After generating or entering the keys, be sure to click "Save Changes". If the private and public keys are empty, the OIDC service will not be able to issue tokens correctly.
    *   **Allow Refresh Tokens**: Check this option as needed.
    *   Save the settings.

3.  **Manage OIDC Clients**:
    *   Visit the "Client Management" page.
    *   Click the "Add Client" button.
    *   Fill in the client application's name, site URL, and Redirect URI.
    *   The Client ID and Client Secret can be automatically generated by the system or manually entered.
    *   Save the client configuration.
    *   You can edit or delete existing clients on this page.

4.  **View User Logs**:
    *   Visit the "User Logs" page to view detailed records of user authorizations performed through this OIDC service.

## Development and Contribution

We welcome community contributions! If you would like to contribute to this project, please follow these steps:

1.  **Fork this repository**.
2.  **Create your feature branch** (`git checkout -b feature/YourFeature`).
3.  **Commit your changes** (`git commit -m 'Add some AmazingFeature'`).
4.  **Push to the branch** (`git push origin feature/YourFeature`).
5.  **Open a Pull Request**.

---

## Contact and Support

If you encounter any issues or have any questions during use, please feel free to contact us through the following channels:

*   **GitHub Issues**: Submit issues on the [Issues](https://github.com/ryoakirasan/directus-extension-OpenID-Connect-provide/issues) page of this repository.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). See the [LICENSE](LICENSE) file for details.
