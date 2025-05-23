<template>
  <div class="oidc-clients">
    <div class="oidc-header">
      <v-button @click="openAddDialog">
        <v-icon name="add" />
        {{ translate("oidc_clients_add_client") }}
      </v-button>
      <v-input v-model="searchQuery" :placeholder="translate('oidc_clients_search_placeholder')" clearable>
        <template #prepend>
          <v-icon name="search" />
        </template>
      </v-input>
    </div>

    <div class="oidc-body">
      <Table :items="clients" :columns="columns" :selectable="false" :sortable="true" :row-clickable="true"
        @row-click="openEditDialog" class="client-table" :fixed-header="true"
        :no-items-message="translate('oidc_clients_no_items_message')"
        :search-message="translate('oidc_clients_search_message')" :loading="loading">
        <template #item.status="{ item }">
          <Tag :text="item.status
              ? translate('oidc_clients_status_active')
              : translate('oidc_clients_status_disabled')
            " :color="item.status ? 'var(--green)' : 'var(--danger)'" />
        </template>
        <template #item.redirect_uri="{ item }">
          <span class="uri-cell" :title="item.redirect_uri">{{
            item.redirect_uri
            }}</span>
        </template>
        <template #item.date_created="{ item }">
          <span class="date-cell" :title="item.date_created">{{
            item.date_created
            }}</span>
        </template>
        <template #item.actions="{ item }">
          <div class="action-button" @click.stop="confirmRemoveClient(item)">
            <span small icon>{{
              translate("oidc_clients_delete_client_action")
              }}</span>
          </div>
        </template>
      </Table>

      <div class="pagination">
        <div>
          <span class="total-clients" style="color: #94a1b5">
            {{
              translate("oidc_clients_total_count", {
                totalClients: totalClients,
              })
            }}
          </span>
        </div>
        <div>
          <v-pagination v-model="page" :length="pageLength" :totalVisible="10" @update:modelValue="fetchClients" />
        </div>
      </div>
    </div>
    <v-dialog v-model="showDialog" @esc="closeDialog">
      <v-card>
        <v-card-title>{{
          isEditing
            ? translate("oidc_clients_edit_title")
            : translate("oidc_clients_add_title")
        }}</v-card-title>
        <v-card-text>
          <OidcClientForm v-if="showDialog" v-model="currentClient" :is-editing="isEditing" @save="saveClient"
            @cancel="closeDialog" />
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="showRevokeConfirmDialog" @esc="closeDialog" max-width="400px">
      <v-card>
        <v-card-title class="headline">{{
          translate("oidc_clients_confirm_delete_title")
          }}</v-card-title>
        <v-card-text>
          {{ translate("oidc_clients_confirm_delete_message_part1") }}
          <strong>{{ clientToRemove?.client_name }}</strong>
          {{ translate("oidc_clients_confirm_delete_message_part2") }}
        </v-card-text>
        <v-card-actions>
          <div :style="{ display: 'flex', gap: '1.0rem' }">
            <v-button text @click="showRevokeConfirmDialog = false" :disabled="deleting">{{
              translate("oidc_clients_cancel")
              }}</v-button>
            <v-button color="error" @click="executeDeleteClient" :loading="deleting">{{
              translate("oidc_clients_confirm_delete_button") }}</v-button>
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <div v-if="!pageVisit" class="overlay">
      <div class="overlay-text">
        {{ translate("oidc_empty_key_error_tips") }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import {
  getOIDCClients,
  setOIDCClient,
  getOIDCClient,
  updateOIDCClient,
  deleteOIDCClient,
  getOIDCProviderConfig,
} from "../utils/api";
import { generateRandomString } from "../utils/tools";
import Table from "../components/table.vue";
import Tag from "../components/tag.vue";
import OidcClientForm from "../forms/oidcClientForm.vue";
import { useApi } from "@directus/extensions-sdk";
import { getTranslate } from "../locales/i18n";

const translate = getTranslate();
const api = useApi();
const clients = ref([]);
const searchQuery = ref("");
const showDialog = ref(false);
const isEditing = ref(false);
const currentClient = ref({});
const editingClientId = ref(null);
const clientToRemove = ref(null);
const showRevokeConfirmDialog = ref(false);
const loading = ref(false);
const page = ref(1);
const pageLength = ref(0);
const pageVisit = ref(true);
const columns = [
  {
    text: translate("oidc_clients_columns_name"),
    value: "client_name",
    width: "180px",
    sortable: true,
  },
  {
    text: translate("oidc_clients_columns_client_id"),
    value: "client_id",
    width: "200px",
    sortable: true,
  },
  {
    text: translate("oidc_clients_columns_status"),
    value: "status",
    width: "100px",
    sortable: true,
    align: "center",
  },
  {
    text: translate("oidc_clients_columns_redirect_uri"),
    value: "redirect_uri",
    width: "auto",
    sortable: false,
  },
  {
    text: translate("oidc_clients_columns_date_created"),
    value: "date_created",
    width: "auto",
    sortable: true,
  },
  {
    text: translate("oidc_clients_columns_actions"),
    value: "actions",
    width: "120px",
    sortable: false,
    align: "center",
  },
];

const totalClients = ref(0);
const pageLimit = ref(20);

const fetchClients = async () => {
  try {
    loading.value = true;
    const data = await getOIDCClients(
      api,
      searchQuery.value,
      page.value,
      pageLimit.value
    );
    clients.value = data.clients;
    totalClients.value = data.count;
    pageLength.value =
      totalClients.value % pageLimit.value === 0
        ? totalClients.value / pageLimit.value
        : Math.floor(totalClients.value / pageLimit.value) + 1;
  } catch (error) {
    console.error(translate("oidc_clients_get_lists_failed"), error);
  } finally {
    loading.value = false;
  }
};

const resetCurrentClient = () => {
  currentClient.value = {
    client_name: "",
    client_site: "",
    status: true,
    client_id: generateRandomString(16),
    client_secret: generateRandomString(32),
    redirect_uri: "",
  };
  editingClientId.value = null;
};

const openAddDialog = () => {
  isEditing.value = false;
  resetCurrentClient();
  showDialog.value = true;
};

const openEditDialog = async (client) => {
  try {
    loading.value = true;
    const clientData = (await getOIDCClient(api, client.id)).data;
    currentClient.value = clientData;
    editingClientId.value = clientData.id;
    isEditing.value = true;
    showDialog.value = true;
  } catch (error) {
    console.error(translate("oidc_clients_get_deatil_failed"), error);
  } finally {
    loading.value = false;
  }
};

const closeDialog = () => {
  showDialog.value = false;
  showRevokeConfirmDialog.value = false;
};
const saveClient = async () => {
  try {
    if (isEditing.value && editingClientId.value) {
      await updateOIDCClient(api, editingClientId.value, currentClient.value);
    } else {
      await setOIDCClient(api, currentClient.value);
    }
    fetchClients();
    closeDialog();
  } catch (error) {
    console.error(translate("oidc_clients_save_client_failed"), error);
  }
};

const confirmRemoveClient = (client) => {
  clientToRemove.value = client;
  showRevokeConfirmDialog.value = true;
};

const executeDeleteClient = async () => {
  try {
    if (clientToRemove.value?.id) {
      await deleteOIDCClient(api, [clientToRemove.value.id]);
      fetchClients();
    }
  } catch (error) {
    console.error(translate("oidc_clients_delete_client_failed"), error);
  } finally {
    showRevokeConfirmDialog.value = false;
    clientToRemove.value = null;
  }
};

const OIDCConfig = async () => (await getOIDCProviderConfig(api))

watch(searchQuery, async (newValue, oldValue) => {
  if (newValue !== oldValue) {
    fetchClients();
  }
});

onMounted(async () => {
  const config = await OIDCConfig()
  if (config.privateKeyPem && config.publicKeyPem) {
    fetchClients();
  }else {
    pageVisit.value = false
  }
});
</script>

<style scoped>
.action-button {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #0066cc;
  width: 100%;
  height: 100%;
}

.action-button:hover {
  color: #0066ff;
}

.oidc-clients {
  display: flex;
  flex-direction: column;
}

.oidc-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  border-radius: var(--border-radius, 8px);
}

.oidc-header .v-input {
  max-width: 350px;
  flex-grow: 1;
}

.client-table {
  width: 100%;
}

.uri-cell {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 350px;
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