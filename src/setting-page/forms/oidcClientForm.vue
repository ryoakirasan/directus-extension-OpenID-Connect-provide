<template>
  <div class="oidc-client-form">
    <!-- Client Name -->
    <label for="client-name-input">{{ translate('oidc_clients_form_client_name_label') }}</label>
    <v-input id="client-name-input" v-model="editableClient.client_name" :label="translate('oidc_clients_form_client_name_label')" :placeholder="translate('oidc_clients_form_client_name_placeholder')" required
      :rules="[validators.required]" :disabled="isEditing" :autofocus="!isEditing" class="form-field"
      @update:modelValue="updateModelValue" />
    <!-- Client Site -->
    <label for="client-site-input">{{ translate('oidc_clients_form_client_site_label') }}</label>
    <v-input id="client-site-input" v-model="editableClient.client_site" :label="translate('oidc_clients_form_client_site_label')"
      :placeholder="translate('oidc_clients_form_client_site_placeholder')" class="form-field"
      @update:modelValue="updateModelValue" />
    <!-- Client ID -->
    <label for="client-id-input">{{ translate('oidc_clients_form_client_id_label') }}</label>
    <v-input id="client-id-input" v-model="editableClient.client_id" :label="translate('oidc_clients_form_client_id_label')" :placeholder="translate('oidc_clients_form_client_id_placeholder')" required
      :rules="[validators.required]" :disabled="isEditing" class="form-field" @update:modelValue="updateModelValue" />
    <!-- Client Secret -->
    <label for="client-secret-input">{{ translate('oidc_clients_form_client_secret_label') }}</label>
    <div class="form-field">
      <div class="secret-group">
        <v-input id="client-secret-input" v-model="editableClient.client_secret" :label="translate('oidc_clients_form_client_secret_label')"
          :type="showPassword ? 'text' : 'password'" :placeholder="translate('oidc_clients_form_client_secret_placeholder')" required :rules="[validators.required]"
          @update:modelValue="updateModelValue" />
        <div class="generate-button" @click="togglePasswordVisibility">
          <v-icon :name="showPassword ? 'visibility_off' : 'visibility'" />
        </div>
      </div>
    </div>
    <!-- Redirect URI -->
    <label for="redirect-uri-input">{{ translate('oidc_clients_form_redirect_uri_label') }}</label>
    <v-input id="redirect-uri-input" v-model="editableClient.redirect_uri" :label="translate('oidc_clients_form_redirect_uri_label')"
      :placeholder="translate('oidc_clients_form_redirect_uri_placeholder')" required :rules="[validators.required, validators.validUrl]"
      class="form-field" @update:modelValue="updateModelValue" />
    <!-- Client Status -->
    <div v-if="isEditing" class="form-field radio-group-field">
      <label class="radio-group-label">{{ translate('oidc_clients_form_status_label') }}</label>
      <div class="radio-options">
        <v-radio v-model="editableClient.status" :value="true" :label="translate('oidc_clients_form_status_active')" name="client-status"
          @update:modelValue="updateModelValue" />
        <v-radio v-model="editableClient.status" :value="false" :label="translate('oidc_clients_form_status_disabled')" name="client-status"
          @update:modelValue="updateModelValue" />
      </div>
    </div>
    <div class="dialog-actions">
      <v-button secondary @click="$emit('cancel')">{{ translate('oidc_clients_form_cancel_button') }}</v-button>
      <v-button @click="$emit('save')" :disabled="isFormInvalid">
        {{ isEditing ? translate('oidc_clients_form_update_button') : translate('oidc_clients_form_save_button') }}
      </v-button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, defineProps, defineEmits } from 'vue';
import { getTranslate } from '../locales/i18n';
const translate = getTranslate()
const props = defineProps({
  modelValue: {
    type: Object,
    required: true,
  },
  isEditing: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['update:modelValue', 'save', 'cancel']);
const editableClient = ref({});
const showPassword = ref(false);
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const updateModelValue = () => {
  emit('update:modelValue', JSON.parse(JSON.stringify(editableClient.value)));
};
const validators = {
  required: (v) => (v !== null && v !== undefined && String(v).trim() !== '') || translate('oidc_clients_form_required_validator'),
  validUrl: (v) => {
    if (!v) return true;
    try {
      new URL(v);
      return true;
    } catch {
      if (/^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//.test(v)) return true;
      return translate('oidc_clients_form_valid_url_validator');
    }
  },
  optionalUrl: (v) => !v || validators.validUrl(v)
};
const isFormInvalid = computed(() => {
  if (!editableClient.value || Object.keys(editableClient.value).length === 0) return true;
  const clientData = editableClient.value;
  return !(
    validators.required(clientData.client_name) === true &&
    validators.required(clientData.client_id) === true &&
    validators.required(clientData.client_secret) === true &&
    validators.required(clientData.redirect_uri) === true &&
    validators.validUrl(clientData.redirect_uri) === true
  );
});

watch(
  () => props.modelValue,
  (newValue) => {
    editableClient.value = JSON.parse(JSON.stringify({ status: props.isEditing ? true : undefined, ...newValue || {} }));
  },
  { immediate: true, deep: true }
);
</script>


<style scoped>
.oidc-client-form {
  padding: 0.5rem 0;
}

.form-field {
  margin-bottom: 1.25rem;
}

.form-field:last-of-type {
  margin-bottom: 0;
}

.secret-group {
  position: relative;
  width: 100%;
}

.generate-button {
  position: absolute;
  right: 0.5rem;
  top: 25%;
  height: 100%;
  cursor: pointer;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: 0.9rem;
  color: var(--text-color-secondary, #555);
}


.radio-group-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: 0.9rem;
  color: var(--text-color-secondary, #555);
}

.radio-options {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 0.25rem;
}

.dialog-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color-light, #eee);
}
</style>