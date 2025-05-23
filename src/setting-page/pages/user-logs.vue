<template>
  <div class="oidc-tokens-management">
    <div div="oidc-header">
      <v-input v-model="searchQuery" :placeholder="translate('oidc_logs_search_placeholder')" clearable
      class="search-input">
      <template #prepend>
        <v-icon name="search" />
      </template>
    </v-input>
    </div>
    <div class="oidc-body">
      <Table :columns="tableHeaders" :items="logs" :item-key="'id'" :fixed-header="true" :sortable="false"
      :maxHeight="'768px'" class="token-table">
      <template #item.client_name="{ item }">
        <v-text-overflow :text="item.client_name" :tooltip="item.client_name" />
      </template>
      <template #item.client_uri="{ item }">
        <v-text-overflow :text="item.client_uri" :tooltip="item.client_uri || ''" />
      </template>
      <template #item.client_id="{ item }">
        <v-text-overflow :text="item.client_id" :tooltip="item.client_id" />
      </template>
      <template #item.user_id="{ item }">
        <v-text-overflow :text="item.user_id || '-'" :tooltip="item.user_id || ''" />
      </template>
      <template #no-items>
        <div class="no-items-message">
          {{
            loading
              ? translate("oidc_logs_no_items_loading")
              : searchQuery
                ? translate("oidc_logs_no_items_search_empty")
                : translate("oidc_logs_no_items_empty")
          }}
        </div>
      </template>
    </Table>
    <div class="pagination">
      <div>
        <span class="total-clients" style="color: #94a1b5">{{
          translate("oidc_logs_total_count", {
            totalLogs: totalLogs,
          })
        }}</span>
      </div>
      <div>
        <v-pagination v-model="page" :length="pageLength" :totalVisible="10" @update:modelValue="fetchLogs" />
      </div>
    </div>
    </div>

    <div v-if="!pageVisit" class="overlay">
      <div class="overlay-text">
        {{ translate("oidc_empty_key_error_tips") }}
      </div>
    </div>
  </div>
</template>

<script setup>
import Table from "../components/table.vue";
import { ref, watch, onMounted } from "vue";
import { getOIDCUserLogs,getOIDCProviderConfig } from "../utils/api";
import { useApi } from "@directus/extensions-sdk";
import { getTranslate } from "../locales/i18n";
const translate = getTranslate();
const api = useApi();
const logs = ref([]);
const totalLogs = ref(0);
const pageLimit = ref(20);
const loading = ref(false);
const searchQuery = ref("");
const page = ref(1);
const pageLength = ref(0);
const pageVisit = ref(true);

const tableHeaders = [
  {
    text: translate("oidc_logs_columns_client_name"),
    value: "client_name",
    sortable: true,
    width: "200px",
  },
  {
    text: translate("oidc_logs_columns_client_uri"),
    value: "client_uri",
    sortable: true,
    width: "200px",
  },
  {
    text: translate("oidc_logs_columns_client_id"),
    value: "client_id",
    sortable: true,
    width: "200px",
  },
  {
    text: translate("oidc_logs_columns_username"),
    value: "username",
    sortable: true,
    width: "200px",
  },
  {
    text: translate("oidc_logs_columns_date_created"),
    value: "date_created",
    sortable: true,
    width: "100px",
  },
];

const fetchLogs = async () => {
  try {
    loading.value = true;
    const data = await getOIDCUserLogs(
      api,
      searchQuery.value,
      page.value,
      pageLimit.value
    );
    logs.value = data.userLogs;
    totalLogs.value = data.count;
    pageLength.value =
      totalLogs.value % pageLimit.value === 0
        ? totalLogs.value / pageLimit.value
        : Math.floor(totalLogs.value / pageLimit.value) + 1;
  } catch (error) {
    console.error(translate("oidc_logs_get_failed"), error);
  } finally {
    loading.value = false;
  }
};
const OIDCConfig = async () => (await getOIDCProviderConfig(api))

watch(searchQuery, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    fetchLogs();
  }
});

onMounted(async () => {
  const config = await OIDCConfig()
  if (config.privateKeyPem && config.publicKeyPem) {
    fetchLogs();
  } else {
    pageVisit.value = false
  }
});
</script>

<style scoped>
.action-button {
  cursor: pointer;
  color: #0066cc;
}

.action-button:hover {
  color: #0066ff;
}

.oidc-tokens-management {
  display: flex;
  flex-direction: column;
}

.search-input {
  max-width: 400px;
}

.token-table {
  border: 1px solid var(--theme--border-color, #e0e0e0);
  border-radius: var(--theme--border-radius, 4px);
  overflow: hidden;
}

:deep(.v-text-overflow[title]) {
  cursor: help;
}

.revoke-button:hover:not(:disabled) {
  background-color: rgba(var(--theme--danger-rgb), 0.1) !important;
  color: var(--theme--danger);
}

.no-items-message {
  padding: 2rem;
  text-align: center;
  color: var(--theme--foreground-subdued, #666);
}

.v-chip[non-interactive] {
  cursor: default;
}

.v-text-overflow {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pagination {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  z-index: 10;
}

.overlay-text {
  font-size: 18px;
  color: #333;
  text-align: center;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
}

@media (max-width: 768px) {
  .oidc-header {
    flex-direction: column;
    align-items: stretch;
  }

  .oidc-header .v-input {
    max-width: none;
  }

  .oidc-body {
    overflow-x: auto;
  }
}
</style>
