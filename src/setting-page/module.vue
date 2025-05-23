<template>
    <private-view :title="page_title">
        <template v-if="breadcrumb" #headline>
            <v-breadcrumb :items="breadcrumb" />
        </template>

        <template #navigation>
            <page-navigation :current="page" :pages="all_pages" />
        </template>

        <div class="lp-container">
            <component :is="currentComponent" v-if="currentComponent" />
        </div>
    </private-view>
</template>

<script setup>
import { ref, watch, computed } from 'vue';
import PageNavigation from './components/navigation.vue';
import ClientManagement from './pages/client-management.vue';
import ProviderSettings from './pages/provider-settings.vue';
import UserLogs from './pages/user-logs.vue';
import { getTranslate } from "./locales/i18n";
const translate = getTranslate();
const props = defineProps({
    page: {
        type: String,
        default: 'home',
    },
});

const page_title = ref('OIDC Provider');
const page_cards = ref([]);
const breadcrumb = ref([{ name: 'OIDC Provider', to: "" }]);
const all_pages = ref([]);

const currentComponent = computed(() => {
    switch (props.page) {
        case 'client-management': return ClientManagement;
        case 'provider-settings': return ProviderSettings;
        case 'user-logs': return UserLogs;
        default: return ClientManagement;
    }
});

const render_page = (page) => {
    if (page === null) {
        page_title.value = '500: Internal Server Error';
        breadcrumb.value.splice(1, 1);
    } else {
        switch (page) {
            case 'client-management':
                page_title.value = translate("client_management");
                break;
            case 'provider-settings':
                page_title.value = translate("provider_settings");
                break;
            case 'user-logs':
                page_title.value = translate("user_logs");
                break;
            default:
                page_title.value = '404: Not Found';
        }

        if (page === 'home') {
            breadcrumb.value.splice(1, 1);
        } else {
            breadcrumb.value[1] = {
                name: page_title.value,
                to: `/ext-oidc-provider/${page}`,
            };
        }
    }
};

const fetch_all_pages = () => {
    all_pages.value = [
        {
            label: translate("client_management"),
            uri: 'client-management',
            to: '/ext-oidc-provider/client-management',
            icon: 'security',
            color: '#10b6c9',
        },
        {
            label: translate("provider_settings"),
            uri: 'provider-settings',
            to: '/ext-oidc-provider/provider-settings',
            icon: 'settings',
            color: '#107cc9',
        },
        {
            label: translate("user_logs"),
            uri: 'user-logs',
            to: '/ext-oidc-provider/user-logs',
            icon: 'key',
            color: '#8510c9',
        },
    ];

    page_cards.value = [...all_pages.value];
};

watch(
    () => props.page,
    (newPage) => render_page(newPage),
    { immediate: true }
);

fetch_all_pages();
</script>

<style lang="scss">
.lp-container {
    padding: var(--content-padding);
    padding-top: 0;
    width: 100%;
    height: calc(100% - 100px);
    &>div {
        margin-bottom: var(--content-padding);
    }
}

.lp-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: var(--input-padding);
    row-gap: var(--input-padding);

    .lp-card {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        text-align: center;
        border-radius: var(--border-radius);
        padding: var(--input-padding);
        color: white;
        cursor: pointer;
        transition: transform 0.2s;

        &:hover {
            transform: translateY(-5px);
        }

        .v-icon {
            width: 100%;
            height: 50px;
            margin-bottom: 6px;

            i {
                font-size: 50px;
                color: white;
            }
        }

        .lp-card-title {
            display: block;
            font-weight: bold;
            font-size: 1.4em;
            line-height: 1.2;
        }
    }
}

@media (max-width: 1200px) {
    .lp-cards {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 600px) {
    .lp-cards {
        grid-template-columns: 1fr;
    }
}
</style>
