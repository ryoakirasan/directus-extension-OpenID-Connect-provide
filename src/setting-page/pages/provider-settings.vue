<template>
  <div class="oidc-settings-container">
    <div v-if="cryptoWarning" class="warning-message">{{ cryptoWarning }}</div>

    <div class="layout-grid">

      <div class="column-main">
        <BaseCard :title="translate('oidc_provider_settings_title')" icon="settings">
          <div class="form-group">
            <label for="issuer">{{ translate('oidc_provider_settings_issuer_label') }}</label>
            <input type="text" id="issuer" v-model="settings.issuer" required />
          </div>
          <div class="form-group">
            <label for="token_expires_in">{{ translate('oidc_provider_settings_token_expiry_label') }}</label>
            <input type="number" id="token_expires_in" v-model.number="settings.token_expires_in" required min="1" />
          </div>
          <div class="form-group">
            <label for="refresh_token_expires_in">{{ translate('oidc_provider_settings_refresh_token_expiry_label') }}</label>
            <input type="number" id="refresh_token_expires_in" v-model.number="settings.refresh_token_expires_in"
              required min="1" />
          </div>
          <div class="form-group">
            <label for="code_expires_in">{{ translate('oidc_provider_settings_code_expiry_label') }}</label>
            <input type="number" id="code_expires_in" v-model.number="settings.code_expires_in"
              required min="1" />
          </div>
          <div class="form-group form-group-checkbox">
            <input type="checkbox" id="allow_refresh_tokens" v-model="settings.allow_refresh_tokens" />
            <label for="allow_refresh_tokens">{{ translate('oidc_provider_settings_allow_refresh_tokens_label') }}</label>
          </div>

          <hr class="divider">
          <div class="form-group key-management">
            <label>{{ translate('oidc_provider_settings_key_pair_title') }}</label>
            <p class="key-instructions">
              {{ translate('oidc_provider_settings_key_instructions_part1') }}
              <strong v-if="!isCryptoAvailable" class="crypto-unavailable">{{ translate('oidc_provider_settings_key_instructions_part2') }}</strong>
            </p>
            <div class="form-group key-input-group">
              <label for="publicKeyPemInput">{{ translate('oidc_provider_settings_public_key_label') }}</label>
              <textarea id="publicKeyPemInput" v-model.trim="settings.publicKeyPem" style="resize: none;" rows="8"
                placeholder="-----BEGIN PUBLIC KEY-----\n...\n-----END PUBLIC KEY-----"
                :disabled="saving || generatingKeys"></textarea>
            </div>
            <div class="form-group key-input-group">
              <label for="privateKeyPemInput">{{ translate('oidc_provider_settings_private_key_label') }}</label>
              <div class="private-key-warning">
                ⚠️ <span v-html="translate('oidc_provider_settings_private_key_warning')"></span>
              </div>
              <textarea id="privateKeyPemInput" v-model.trim="settings.privateKeyPem" style="resize: none;" rows="8"
                placeholder="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----"
                :disabled="saving || generatingKeys" class="private-key-textarea"></textarea>
            </div>
            <div class="generate-button-container">
              <button type="button" @click="generateKeyPair" :disabled="generatingKeys || !isCryptoAvailable || saving"
                style="width: 100%;" class="button button-primary generate-button">
                <span v-if="generatingKeys">{{ translate('oidc_provider_settings_generating_keys') }}</span>
                <span v-else>{{ translate('oidc_provider_settings_generate_new_keys') }}</span>
              </button>
              <span v-if="!isCryptoAvailable" class="crypto-note">{{ translate('oidc_provider_settings_crypto_note') }}</span>
            </div>
          </div>

          <div class="card-actions">
            <button type="button" @click="cancelEdit" :disabled="saving || !hasChanges"
              class="button button-outline">{{ translate('oidc_provider_settings_cancel_changes') }}</button>
            <button type="submit" v-if="hasChanges" :disabled="saving" @click="saveSettings"
              class="button button-primary">
              {{ saving ? translate('oidc_provider_settings_saving') : translate('oidc_provider_settings_save_changes') }}
            </button>
          </div>
        </BaseCard>
      </div>

      <div class="column-sidebar">
        <BaseCard :title="translate('oidc_provider_settings_config_endpoint_title')">
          <div class="endpoint-display">
            <input disabled :value="configEndpoint" class="endpoint-input">
            <button type="button" @click="copyToClipboard(configEndpoint)"
              class="button button-outline button-small">{{ translate('oidc_provider_settings_copy_button') }}</button>
          </div>
        </BaseCard>
        <BaseCard :title="translate('oidc_provider_settings_jwks_endpoint_title')">
          <div class="endpoint-display">
            <input disabled :value="jwksEndpoint" class="endpoint-input">
            <button type="button" @click="copyToClipboard(jwksEndpoint)"
              class="button button-outline button-small">{{ translate('oidc_provider_settings_copy_button') }}</button>
          </div>
        </BaseCard>
      </div>

    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, computed } from 'vue';
import BaseCard from '../components/basecard.vue';
import { getOIDCProviderConfig, setOIDCProviderConfig } from '../utils/api';
import { useApi } from "@directus/extensions-sdk";
import { getTranslate } from '../locales/i18n'; // 从i18n模块导入 globalI18n 和 setLocale
const translate = getTranslate()
const api = useApi();
const defaultSettings = {
  issuer: document.location.origin,
  token_expires_in: 3600,
  code_expires_in: 300,
  refresh_token_expires_in: 604800,
  allow_refresh_tokens: true,
  publicKeyPem: '',
  privateKeyPem: ''
};
const settings = ref(JSON.parse(JSON.stringify(defaultSettings)));
const originalSettings = ref(JSON.parse(JSON.stringify(defaultSettings)));
const saving = ref(false);
const generatingKeys = ref(false);
const isCryptoAvailable = ref(false);
const cryptoWarning = ref('');
const jwksEndpoint = computed(() => {
  let origin = '';
  try {
    if (settings.value?.issuer) {
      const url = new URL(settings.value.issuer);
      origin = url.origin;
    } else if (typeof window !== 'undefined') {
      origin = window.location.origin;
    }
  } catch (e) {
    console.warn(translate('oidc_provider_settings_issuer_invalid_format'), e);
  }
  return `${origin.replace(/\/$/, '')}/oidc-provider/jwks`;
});
const configEndpoint = computed(() => {
   let origin = '';
  try {
    if (settings.value?.issuer) {
      const url = new URL(settings.value.issuer);
      origin = url.origin;
    } else if (typeof window !== 'undefined') {
      origin = window.location.origin;
    }
  } catch (e) {
    console.warn(translate('oidc_provider_settings_issuer_invalid_format'), e);
  }
  return `${origin.replace(/\/$/, '')}/oidc-provider/.well-known/openid-configuration`;
});
const hasChanges = computed(() => {
  if (!settings.value || !originalSettings.value) return false;
  const currentTrimmed = {
    ...settings.value,
    publicKeyPem: settings.value.publicKeyPem?.trim() ?? '',
    privateKeyPem: settings.value.privateKeyPem?.trim() ?? ''
  };
  const originalTrimmed = {
    ...originalSettings.value,
    publicKeyPem: originalSettings.value.publicKeyPem?.trim() ?? '',
    privateKeyPem: originalSettings.value.privateKeyPem?.trim() ?? ''
  };
  return JSON.stringify(currentTrimmed) !== JSON.stringify(originalTrimmed);
});
const loadSettings = async () => {
  try {
    const config = await getOIDCProviderConfig(api);
    settings.value = { ...defaultSettings, ...config };
    originalSettings.value = JSON.parse(JSON.stringify(settings.value));
  } catch (error) {
    console.error(translate('oidc_provider_settings_load_failed_prefix'), error);
    showNotification(translate('oidc_provider_settings_load_failed'), 'error');
  }
};
const checkCryptoAvailability = () => {
  if (typeof window !== 'undefined' && window.crypto && window.crypto.subtle) {
    isCryptoAvailable.value = true;
    cryptoWarning.value = '';
  } else {
    isCryptoAvailable.value = false;
    const currentProtocol = typeof window !== 'undefined' ? window.location.protocol : '';
    const currentHostname = typeof window !== 'undefined' ? window.location.hostname : '';
    if (currentProtocol === 'http:' && !['localhost', '127.0.0.1'].includes(currentHostname)) {
      cryptoWarning.value = translate('oidc_provider_settings_crypto_warning_https');
    } else if (!window.crypto?.subtle) {
      cryptoWarning.value = translate('oidc_provider_settings_crypto_warning_browser');
    }
  }
};
const saveSettings = async () => {
  if (!settings.value.issuer || settings.value.token_expires_in <= 0 || settings.value.refresh_token_expires_in <= 0) {
    showNotification(translate('oidc_provider_settings_validation_issuer_expiry'), 'error');
    return;
  }
  let invalidKey = false;
  let errorMsg = translate('oidc_provider_settings_validation_key_check');
  if (settings.value.publicKeyPem && !isValidPem(settings.value.publicKeyPem, 'PUBLIC KEY')) {
    errorMsg += translate('oidc_provider_settings_validation_public_key_invalid');
    invalidKey = true;
  }
  if (settings.value.privateKeyPem && !isValidPem(settings.value.privateKeyPem, 'PRIVATE KEY')) {
    errorMsg += translate('oidc_provider_settings_validation_private_key_invalid');
    invalidKey = true;
  }
  if (invalidKey) {
    showNotification(errorMsg, 'error', { duration: 5000 });
    return;
  }
  if ((settings.value.publicKeyPem && !settings.value.privateKeyPem) ||
    (!settings.value.publicKeyPem && settings.value.privateKeyPem)) {
    showNotification(translate('oidc_provider_settings_validation_key_pair_required'), 'warning');
    return;
  }
  saving.value = true;
  try {
    const dataToSave = {
      issuer: settings.value.issuer,
      token_expires_in: settings.value.token_expires_in,
      refresh_token_expires_in: settings.value.refresh_token_expires_in,
      code_expires_in: settings.value.code_expires_in,
      allow_refresh_tokens: settings.value.allow_refresh_tokens,
      publicKeyPem: settings.value.publicKeyPem?.trim() ?? '',
      privateKeyPem: settings.value.privateKeyPem?.trim() ?? ''
    };
    await setOIDCProviderConfig(api, dataToSave);
    originalSettings.value = JSON.parse(JSON.stringify(dataToSave));
    settings.value = JSON.parse(JSON.stringify(dataToSave));
    showNotification(translate('oidc_provider_settings_save_success'), 'success');
  } catch (error) {
    console.error(translate('oidc_provider_settings_save_failed_prefix'), error);
    showNotification(`${translate('oidc_provider_settings_save_failed_prefix')} ${error.message || translate('unknown_error')}`, 'error');
  } finally {
    saving.value = false;
  }
};
const cancelEdit = () => {
  settings.value = JSON.parse(JSON.stringify(originalSettings.value));
  showNotification(translate('oidc_provider_settings_changes_cancelled'), 'info');
};
const generateKeyPair = async () => {
  if (!isCryptoAvailable.value) {
    showNotification(cryptoWarning.value || translate('oidc_provider_settings_crypto_api_unavailable'), 'error');
    return;
  }
  if (settings.value.publicKeyPem || settings.value.privateKeyPem) {
    if (!window.confirm(translate('oidc_provider_settings_generate_confirm'))) {
      return;
    }
  }
  generatingKeys.value = true;
  try {
    const keyPair = await window.crypto.subtle.generateKey(
      {
        name: 'RSASSA-PKCS1-v1_5',
        modulusLength: 2048,
        publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
        hash: 'SHA-256',
      },
      true,
      ['sign', 'verify']
    );
    const publicKeyDer = await window.crypto.subtle.exportKey('spki', keyPair.publicKey);
    const privateKeyDer = await window.crypto.subtle.exportKey('pkcs8', keyPair.privateKey);
    settings.value.publicKeyPem = arrayBufferToPem(publicKeyDer, 'PUBLIC KEY');
    settings.value.privateKeyPem = arrayBufferToPem(privateKeyDer, 'PRIVATE KEY');
    showNotification(translate('oidc_provider_settings_generate_success'), 'success');
  } catch (err) {
    console.error(translate('oidc_provider_settings_generate_failed_prefix'), err);
    showNotification(translate('oidc_provider_settings_generate_failed'), 'error');
  } finally {
    generatingKeys.value = false;
  }
};
const arrayBufferToBase64 = (buffer) => {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return typeof window !== 'undefined' && typeof window.btoa === 'function'
    ? window.btoa(binary)
    : '';
};
const arrayBufferToPem = (keyBuffer, type) => {
  const base64String = arrayBufferToBase64(keyBuffer);
  if (!base64String) return '';
  let pemString = `-----BEGIN ${type}-----\n`;
  for (let i = 0; i < base64String.length; i += 64) {
    pemString += base64String.substring(i, Math.min(i + 64, base64String.length)) + '\n';
  }
  pemString += `-----END ${type}-----\n`;
  return pemString;
};
const copyToClipboard = async (text) => {
  if (!text) return;
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      showNotification(translate('oidc_provider_settings_copied'), 'success');
    } catch (err) {
      console.error(translate('oidc_provider_settings_copy_failed_prefix'), err);
      window.prompt(translate('oidc_provider_settings_copy_manual_prompt'), text);
    }
  } else {
    window.prompt(translate('oidc_provider_settings_copy_manual_prompt'), text);
  }
};
const isValidPem = (pemString, type) => {
  if (typeof pemString !== 'string' || !pemString) return false;
  const trimmed = pemString.trim();
  return trimmed.startsWith(`-----BEGIN ${type}-----`) &&
    trimmed.endsWith(`-----END ${type}-----`);
};
const showNotification = (message, type = 'info') => {
  console.log(`[${type}] ${message}`);
  alert(`(${type}) ${message}`);
};
onMounted(() => {
  loadSettings();
  checkCryptoAvailability();
});
</script>

<style scoped>
.oidc-settings-container {
  font-family: var(--font-family-sans, sans-serif);
}

.warning-message {
  padding: 10px 15px;
  border-radius: var(--border-radius, 4px);
  text-align: center;
  background-color: var(--warning-10, #fff3cd);
  color: var(--warning-dark, #856404);
  border: 1px solid var(--warning-border, #ffeeba);
  margin-bottom: 20px;
}

.layout-grid {
  display: grid;
  grid-template-columns: 5fr 5fr;
  gap: 20px;
}

.column-sidebar {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.column-main {
  min-width: 0;
}

.column-sidebar {
  min-width: 0;
}

@media (max-width: 992px) {

  .layout-grid {
    grid-template-columns: 1fr;
  }
}


.private-key-warning {
  padding: 8px 12px;
  margin-bottom: 8px;
  border-radius: var(--border-radius, 4px);
  background-color: var(--danger-10, #f8d7da);
  color: var(--danger-dark, #721c24);
  border: 1px solid var(--danger-border, #f5c6cb);
  font-size: 0.85rem;
}

.key-instructions {
  font-size: 0.9rem;
  color: var(--text-subdued, #666);
  margin-bottom: 15px;
}

.crypto-unavailable {
  color: var(--danger, #dc3545);
  font-weight: bold;
}

.crypto-note {
  font-size: 0.8rem;
  color: var(--text-muted, #888);
  margin-left: 5px;
  vertical-align: middle;
}

.key-management>label {
  font-weight: var(--font-weight-bold, bold);
  display: block;
  margin-bottom: 10px;
}

.key-input-group {
  margin-bottom: 15px;
  position: relative;
}

.key-input-group label {
  font-weight: var(--font-weight-normal, normal);
  font-size: var(--font-size-extra-small, 0.8rem);
  color: var(--text-subdued, #666);
  display: block;
  margin-bottom: 4px;
}

.key-input-group textarea {
  width: 100%;
  font-family: var(--font-family-mono, monospace);
  font-size: 0.85rem;
  line-height: 1.4;
  border: 1px solid var(--border-color-normal, #ccc);
  border-radius: var(--border-radius-input, 4px);
  padding: 8px 12px;
  box-sizing: border-box;
  background-color: var(--input-background, #fff);
  color: var(--input-text-color, #333);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.key-input-group textarea:focus {
  border-color: var(--primary, #007bff);
  box-shadow: 0 0 0 2px var(--primary-a10, rgba(0, 123, 255, 0.1));
  outline: none;
}

.key-input-group textarea:disabled {
  background-color: var(--background-subdued, #f5f5f5);
  cursor: not-allowed;
  color: var(--text-muted-light, #999);
  border-color: var(--border-color-subtle, #e0e0e0);
}


.generate-button-container {
  width: 100%;
  margin-top: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;

}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--input-label-margin-bottom, 5px);
  margin-bottom: var(--input-spacing-vertical, 15px);
}

.form-group:last-of-type {
  margin-bottom: 0;
}

.form-group-checkbox {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--content-padding-quarter, 8px);
  margin-bottom: var(--input-spacing-vertical, 15px);
}

.form-group-checkbox label {
  margin-bottom: 0;
  cursor: pointer;
  color: var(--text-normal, #555);
  font-weight: var(--font-weight-normal, normal);
}

.form-group>label:not(.key-management > label) {
  font-weight: var(--font-weight-medium, 500);
  color: var(--text-normal, #333);
  font-size: var(--font-size-small, 0.9rem);
  margin-bottom: 0;
}

.form-group input[type="text"],
.form-group input[type="number"] {
  padding: var(--input-padding-vertical, 8px) var(--input-padding-horizontal, 12px);
  border: 1px solid var(--border-color-normal, #ccc);
  border-radius: var(--border-radius-input, 4px);
  font-size: var(--font-size-normal, 1rem);
  background-color: var(--input-background, #fff);
  color: var(--input-text-color, #333);
  box-sizing: border-box;
  width: 100%;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.form-group input[type="text"]:focus,
.form-group input[type="number"]:focus {
  border-color: var(--primary, #007bff);
  box-shadow: 0 0 0 2px var(--primary-a10, rgba(0, 123, 255, 0.1));
  outline: none;
}

.form-group input[type="checkbox"] {
  accent-color: var(--primary, #007bff);
  cursor: pointer;
  width: var(--input-height-small, 18px);
  height: var(--input-height-small, 18px);
  padding: 0;
  vertical-align: middle;
  margin: 0;
}

.form-group input:disabled {
  background-color: var(--background-subdued, #f5f5f5);
  cursor: not-allowed;
  color: var(--text-muted-light, #999);
  border-color: var(--border-color-subtle, #e0e0e0);
}

.divider {
  border: none;
  border-top: 1px solid var(--border-color-subtle, #e0e0e0);
  margin: var(--input-spacing-vertical, 20px) 0;
}

.card-actions {
  padding-top: var(--content-padding, 16px);
  margin-top: var(--content-padding, 16px);
  border-top: 1px solid var(--border-color-subtle, #e0e0e0);
  display: flex;
  justify-content: flex-end;
  gap: var(--content-padding-half, 10px);
}

.button {
  padding: var(--button-padding-vertical, 8px) var(--button-padding-horizontal, 16px);
  border: none;
  border-radius: var(--border-radius-button, 4px);
  cursor: pointer;
  font-size: var(--font-size-small, 0.9rem);
  font-weight: var(--font-weight-medium, 500);
  transition: background-color 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
  line-height: 1.5;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.button:hover:not(:disabled) {
  opacity: 0.85;
}

.button:active:not(:disabled) {
  transform: translateY(1px);
}

.button-primary {
  background-color: var(--primary, #007bff);
  color: var(--text-on-primary, white);
}

.button-primary:hover:not(:disabled) {
  background-color: var(--primary-hover, #0056b3);
  box-shadow: var(--card-shadow-hover, 0 2px 5px rgba(0, 123, 255, 0.2));
  opacity: 1;
}

.button-secondary {
  background-color: var(--secondary, #6c757d);
  color: var(--text-on-secondary, white);
}

.button-secondary:hover:not(:disabled) {
  background-color: var(--secondary-hover, #5a6268);
  box-shadow: var(--card-shadow-hover, 0 2px 5px rgba(108, 117, 125, 0.2));
  opacity: 1;
}

.button-outline {
  background-color: transparent;
  border: 1px solid var(--primary, #007bff);
  color: var(--primary, #007bff);
}

.button-outline:hover:not(:disabled) {
  background-color: var(--primary-10, rgba(0, 123, 255, 0.1));
  opacity: 1;
}

.button-small {
  padding: 4px 10px;
  font-size: 0.8rem;
}

.endpoint-display {
  display: flex;
  align-items: center;
  gap: 10px;
}

.endpoint-input {
  flex-grow: 1;
  padding: 8px 12px;
  border: 1px solid var(--border-color-normal, #ccc);
  border-radius: var(--border-radius-input, 4px);
  background-color: var(--background-subdued, #f5f5f5);
  cursor: text;
  font-family: var(--font-family-mono, monospace);
  font-size: 0.9rem;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
