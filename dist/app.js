import { resolveComponent, openBlock, createBlock, withCtx, createElementBlock, Fragment, renderList, createVNode, createCommentVNode, ref, computed, watch, normalizeClass, normalizeStyle, createElementVNode, createTextVNode, toDisplayString, withModifiers, renderSlot, unref, onMounted, withDirectives, vModelText, vModelCheckbox, createSlots, resolveDynamicComponent } from 'vue';
import { createI18n } from 'vue-i18n';
import { useApi } from '@directus/extensions-sdk';

var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main$8 = {
    name: 'PageNavigation',
    inheritAttrs: false,
    props: {
      current: {
        type: String,
        default: null,
      },
      pages: {
        type: Array,
        default: [],
      },
    },
  };

function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_icon = resolveComponent("v-icon");
  const _component_v_list_item_icon = resolveComponent("v-list-item-icon");
  const _component_v_text_overflow = resolveComponent("v-text-overflow");
  const _component_v_list_item_content = resolveComponent("v-list-item-content");
  const _component_v_list_item = resolveComponent("v-list-item");
  const _component_v_list = resolveComponent("v-list");

  return ($props.pages)
    ? (openBlock(), createBlock(_component_v_list, {
        key: 0,
        nav: ""
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList($props.pages, (navItem) => {
            return (openBlock(), createBlock(_component_v_list_item, {
              key: navItem.to,
              active: navItem.uri == $props.current,
              to: navItem.to
            }, {
              default: withCtx(() => [
                createVNode(_component_v_list_item_icon, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_icon, {
                      name: navItem.icon,
                      color: navItem.color
                    }, null, 8 /* PROPS */, ["name", "color"])
                  ]),
                  _: 2 /* DYNAMIC */
                }, 1024 /* DYNAMIC_SLOTS */),
                createVNode(_component_v_list_item_content, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_text_overflow, {
                      text: navItem.label
                    }, null, 8 /* PROPS */, ["text"])
                  ]),
                  _: 2 /* DYNAMIC */
                }, 1024 /* DYNAMIC_SLOTS */)
              ]),
              _: 2 /* DYNAMIC */
            }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["active", "to"]))
          }), 128 /* KEYED_FRAGMENT */))
        ]),
        _: 1 /* STABLE */
      }))
    : createCommentVNode("v-if", true)
}
var PageNavigation = /*#__PURE__*/_export_sfc(_sfc_main$8, [['render',_sfc_render$1],['__file',"navigation.vue"]]);

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const formatDateTime = (isoString) => {
  const date = new Date(isoString);
  const pad = (num) => num.toString().padStart(2, "0");
  return [date.getFullYear(), pad(date.getMonth() + 1), pad(date.getDate())].join(
    "-"
  ) + " " + [pad(date.getHours()), pad(date.getMinutes()), pad(date.getSeconds())].join(
    ":"
  );
};
const getOIDCClients = async (api, search, offset = 1, limit = 20) => {
  const fields = [
    "id",
    "date_created",
    "client_id",
    "client_name",
    "client_site",
    "status",
    "redirect_uri"
  ];
  const fieldsQuery = fields.map((field) => `fields[]=${field}`).join("&");
  const sortQuery = `sort[]=id`;
  const pageQuery = `page=${offset}`;
  const searchQuery = `search=${search}`;
  const limitQuery = `limit=${limit}`;
  let query = `?${fieldsQuery}&${sortQuery}&${pageQuery}&${limitQuery}`;
  if (search) {
    query += `&${searchQuery}`;
  }
  try {
    const url = "/items/ext_oidc_clients" + query;
    const response = (await api.get(url)).data;
    const count = Number(
      (await api.get("/items/ext_oidc_clients?aggregate[count]=*")).data.data[0].count
    );
    const datas = response.data;
    const clients = datas.map((data) => ({
      id: data.id,
      date_created: formatDateTime(data.date_created),
      client_name: data.client_name,
      client_site: data.client_site,
      client_id: data.client_id,
      redirect_uri: data.redirect_uri,
      status: data.status
    }));
    return {
      clients,
      count
    };
  } catch (error) {
    console.error("Error request:", error);
    return {};
  }
};
const setOIDCClient = async (api, client) => {
  try {
    const response = await api.post("/items/ext_oidc_clients", client);
    return response.data;
  } catch (error) {
    console.error("Error request:", error);
    throw error;
  }
};
const getOIDCClient = async (api, id) => {
  try {
    const response = await api.get(`/items/ext_oidc_clients/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error request:", error);
    return {
      id: "",
      client_name: "",
      client_site: "",
      client_id: "",
      client_secret: "",
      redirect_uri: "",
      status: false
    };
  }
};
const updateOIDCClient = async (api, id, client) => {
  try {
    const response = await api.patch(`/items/ext_oidc_clients/${id}`, client);
    return response.data;
  } catch (error) {
    console.error("Error request:", error);
    return {
      id: "",
      client_name: "",
      client_site: "",
      client_id: "",
      client_secret: "",
      redirect_uri: "",
      status: false
    };
  }
};
const deleteOIDCClient = async (api, ids) => {
  try {
    await api.delete(`/items/ext_oidc_clients/`, {
      data: ids
    });
    return "success";
  } catch (error) {
    console.error("Error request", error);
    return "error";
  }
};
const getOIDCProviderConfig = async (api) => {
  var _a;
  const defaultConfig = {
    issuer: document.location.origin,
    token_expires_in: 0,
    refresh_token_expires_in: 0,
    allow_refresh_tokens: true,
    require_client_secret: true,
    publicKeyPem: "",
    privateKeyPem: ""
  };
  try {
    const response = await api.get("/items/ext_oidc_settings");
    return __spreadValues(__spreadValues({}, defaultConfig), ((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.data) || {});
  } catch (error) {
    console.error("Error request:", error);
    return defaultConfig;
  }
};
const setOIDCProviderConfig = async (api, config) => {
  try {
    const response = await api.patch("/items/ext_oidc_settings", config);
    return response == null ? void 0 : response.data;
  } catch (error) {
    console.error("Error request:", error);
    throw error;
  }
};
const getOIDCUserLogs = async (api, search, offset = 1, limit = 20) => {
  const fields = [
    "id",
    "date_created",
    "user_id",
    "client_id",
    "client_uri",
    "client_name",
    "username"
  ];
  const fieldsQuery = fields.map((field) => `fields[]=${field}`).join("&");
  const sortQuery = `sort[]=-date_created`;
  const pageQuery = `page=${offset}`;
  const searchQuery = `search=${search}`;
  const limitQuery = `limit=${limit}`;
  let query = `?${fieldsQuery}&${sortQuery}&${pageQuery}&${limitQuery}`;
  if (search) {
    query += `&${searchQuery}`;
  }
  try {
    const url = "/items/ext_oidc_user_logs" + query;
    const response = (await api.get(url)).data;
    const count = Number(
      (await api.get("/items/ext_oidc_user_logs?aggregate[count]=*")).data.data[0].count
    );
    const datas = response.data;
    const userLogs = datas.map((data) => ({
      id: data.id,
      date_created: formatDateTime(data.date_created),
      user_id: data.user_id,
      client_id: data.client_id,
      client_name: data.client_name,
      client_uri: data.client_uri,
      username: data.username
    }));
    return {
      userLogs,
      count
    };
  } catch (error) {
    console.error("Error request:", error);
    return {};
  }
};

const generateRandomString = (length) => {
  if (typeof length !== "number" || !Number.isInteger(length) || length <= 0) {
    console.error("Error: Invalid length. Please provide a positive integer for the string length.");
    return "";
  }
  const characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let randomString = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }
  return randomString;
};

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css$7 = "\n.v-table-container[data-v-ca034995] {\n    overflow-y: auto;\n    border-radius: 8px;\n    background-color: white;\n}\n.v-table-container.has-border[data-v-ca034995] {\n    border: 1px solid #e0e0e0;\n}\n.v-table[data-v-ca034995] {\n    width: 100%;\n    border-collapse: collapse;\n    font-size: 0.9rem;\n    border: none;\n}\n.v-table th[data-v-ca034995] {\n    position: relative;\n    padding-left: 12px;\n    font-weight: 600;\n    background-color: white;\n    cursor: default;\n    border-bottom: 1px solid #e0e0e0;\n}\n.v-table.fixed-header th[data-v-ca034995] {\n    position: sticky;\n    top: 0;\n    z-index: 10;\n    box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.1);\n}\n.v-table td[data-v-ca034995] {\n    height: 34.5px;\n    padding-left: 12px;\n    border-top: 1px solid #e0e0e0;\n    border-left: none;\n    border-right: none;\n}\n.v-table tr:first-child td[data-v-ca034995] {\n    border-top: none;\n}\n.v-table tr[data-v-ca034995]:hover {\n    background-color: var(--background-highlight);\n}\n.v-table tr.clickable[data-v-ca034995] {\n    cursor: pointer;\n}\n.v-table tr.selected[data-v-ca034995] {\n    background-color: var(--background-highlight);\n}\n.header-content[data-v-ca034995] {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n}\n.sort-icon[data-v-ca034995] {\n    font-size: 0.8em;\n    opacity: 0.8;\n}\n.empty-state[data-v-ca034995] {\n    text-align: center;\n    padding: 24px;\n    color: var(--foreground-subdued);\n    border: none;\n}\n@media (max-width: 768px) {\n.v-table th[data-v-ca034995],\n    .v-table td[data-v-ca034995] {\n        padding: 8px 12px;\n}\n}\n";
n(css$7,{});

const _hoisted_1$6 = {
  key: 0,
  style: { width: '24px'}
};
const _hoisted_2$5 = ["checked", "indeterminate"];
const _hoisted_3$5 = ["onClick"];
const _hoisted_4$4 = { class: "header-content" };
const _hoisted_5$4 = {
  key: 0,
  class: "sort-icon"
};
const _hoisted_6$4 = ["onClick"];
const _hoisted_7$4 = { key: 0 };
const _hoisted_8$4 = ["checked", "onChange"];
const _hoisted_9$3 = { key: 0 };
const _hoisted_10$3 = ["colspan"];


const _sfc_main$7 = {
  __name: 'table',
  props: {
    items: {
        type: Array,
        default: () => []
    },
    columns: {
        type: Array,
        default: () => [],
        validator: (cols) => cols.every(c => 'text' in c && 'value' in c && (!c.align || ['left', 'center', 'right'].includes(c.align)))
    },
    fixedHeader: {
        type: Boolean,
        default: false
    },
    maxHeight: {
        type: String,
        default: '100%'
    },
    sortable: {
        type: Boolean,
        default: false
    },
    rowClickable: {
        type: Boolean,
        default: false
    },
    selectable: {
        type: Boolean,
        default: false
    },
    defaultSort: {
        type: String,
        default: ''
    },
    defaultSortDirection: {
        type: String,
        default: 'asc',
        validator: (val) => ['asc', 'desc'].includes(val)
    },
    border: {
        type: Boolean,
        default: true
    },
    headerFontSize: {
        type: String,
        default: '1.1rem'
    },
    /**
     * @description Property name to use as a unique identifier for each row. Defaults to 'id'.
     * If data items lack 'id' or need a different field, provide this prop.
     */
    itemIdKey: {
        type: String,
        default: 'id'
    }
},
  emits: ['rowClick', 'sortChange', 'selectionChange'],
  setup(__props, { emit: __emit }) {

const props = __props;

const emit = __emit;

/**
 * @description Internal state for selection. Uses a Set to store unique identifiers of selected rows for better performance.
 * @type {import('vue').Ref<Set<string | number>>}
 */
const internalSelectionState = ref(new Set());

/**
 * @description Processed data items ensuring each item has a unique internal ID for tracking and a 'selected' state based on `internalSelectionState`.
 * @type {import('vue').ComputedRef<Array<object & { _internalId: string | number, selected: boolean }>>}
 */
const processedItems = computed(() => {
    return props.items.map((item, index) => {
        const uniqueId = item[props.itemIdKey] !== undefined && item[props.itemIdKey] !== null
                         ? item[props.itemIdKey]
                         : `_generated_${index}`;
        const isSelected = internalSelectionState.value.has(uniqueId);
        return {
            ...item,
            _internalId: uniqueId,
            selected: isSelected
        };
    });
});

const sortColumn = ref(props.defaultSort);
const sortDirection = ref(props.defaultSortDirection);

/**
 * @description Computed property: Get the count of selected rows.
 * @returns {number} The number of selected rows.
 */
const selectedCount = computed(() => internalSelectionState.value.size);

/**
 * @description Computed property: Determine if all rows are selected.
 * @returns {boolean} True if all rows are selected, false otherwise.
 */
const isAllSelected = computed(() => {
    const totalItems = processedItems.value.length;
    return totalItems > 0 && selectedCount.value === totalItems;
});

/**
 * @description Computed property: Determine if the selection is in an indeterminate state (partial selection).
 * @returns {boolean} True if some, but not all, rows are selected.
 */
const isIndeterminate = computed(() => {
    return selectedCount.value > 0 && selectedCount.value < processedItems.value.length;
});

/**
 * @description Computed property: Sorts the processed data items based on the current sort state.
 * @returns {Array<object>} The array of sorted data items.
 */
const sortedAndSelectedItems = computed(() => {
    const itemsToSort = [...processedItems.value];
    if (!sortColumn.value || !props.sortable) {
        return itemsToSort;
    }

    return itemsToSort.sort((a, b) => {
        const aValue = a[sortColumn.value];
        const bValue = b[sortColumn.value];

        // Handle null or undefined values (sort them to the end in ascending order)
        if (aValue == null && bValue == null) return 0;
        if (aValue == null) return sortDirection.value === 'asc' ? 1 : -1;
        if (bValue == null) return sortDirection.value === 'asc' ? -1 : 1;

        // Type-specific comparison
        if (typeof aValue === 'string' && typeof bValue === 'string') {
             return sortDirection.value === 'asc'
                ? aValue.localeCompare(bValue)
                : bValue.localeCompare(aValue);
        } else if (typeof aValue === 'number' && typeof bValue === 'number') {
             return sortDirection.value === 'asc'
                 ? aValue - bValue
                 : bValue - aValue;
        } else {
            // Fallback to string comparison for other types
            const valA = String(aValue);
            const valB = String(bValue);
             return sortDirection.value === 'asc'
                 ? valA.localeCompare(valB)
                 : valB.localeCompare(valA);
        }
    });
});

/**
 * @description Handles the click event on a table header for sorting.
 * @param {string} columnValue - The 'value' of the clicked column.
 */
const handleSort = (columnValue) => {
    const columnConfig = props.columns.find(c => c.value === columnValue);
    if (!props.sortable || !columnConfig || columnConfig.sortable === false) {
        return;
    }

    if (sortColumn.value === columnValue) {
        sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
    } else {
        sortColumn.value = columnValue;
        sortDirection.value = 'asc';
    }
    emit('sortChange', { column: sortColumn.value, direction: sortDirection.value });
};

/**
 * @description Handles the click event on a table row.
 * @param {object} item - The data item associated with the clicked row.
 */
const handleRowClick = (item) => {
    if (props.selectable) {
         toggleSelection(item);
    }
    if (props.rowClickable) {
       emit('rowClick', item);
    }
};

/**
 * @description Toggles the selection state of a specific row.
 * @param {object} item - The data item to toggle selection for (must contain `_internalId`).
 */
const toggleSelection = (item) => {
    const id = item._internalId;
    if (internalSelectionState.value.has(id)) {
        internalSelectionState.value.delete(id);
    } else {
        internalSelectionState.value.add(id);
    }
    emitSelectionChange();
};

/**
 * @description Handles the change event on the header checkbox (select/deselect all).
 */
const handleSelectAllToggle = () => {
    const shouldSelectAll = !isAllSelected.value;
    if (shouldSelectAll) {
        processedItems.value.forEach(item => internalSelectionState.value.add(item._internalId));
    } else {
        internalSelectionState.value.clear();
    }
    emitSelectionChange();
};

/**
 * @description Handles the change event on an individual row checkbox.
 * @param {object} item - The data item associated with the checkbox.
 * @param {boolean} isChecked - The current checked state of the checkbox.
 */
const handleSingleSelectChange = (item, isChecked) => {
    const id = item._internalId;
    if (isChecked) {
        internalSelectionState.value.add(id);
    } else {
        internalSelectionState.value.delete(id);
    }
    emitSelectionChange();
};

/**
 * @description Emits the 'selectionChange' event with the array of currently selected data items.
 */
const emitSelectionChange = () => {
    const selectedItems = processedItems.value.filter(item => internalSelectionState.value.has(item._internalId));
    emit('selectionChange', selectedItems);
};

/**
 * @description Watches for changes in the original `props.items` array.
 * Removes selected items from `internalSelectionState` if they no longer exist in the new `items` array.
 */
watch(() => props.items, (newItems) => {
    const newIds = new Set(newItems.map((item, index) => item[props.itemIdKey] ?? `_generated_${index}`));
    const currentSelectedIds = Array.from(internalSelectionState.value);
    let selectionChanged = false;

    currentSelectedIds.forEach(id => {
        if (!newIds.has(id)) {
            internalSelectionState.value.delete(id);
            selectionChanged = true;
        }
    });

    if (selectionChanged) {
        emitSelectionChange();
    }
}, { deep: true, immediate: true }); // immediate: true ensures initial state is processed

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(["v-table-container", { 'has-border': __props.border }]),
    style: normalizeStyle({ maxHeight: __props.fixedHeader ? __props.maxHeight : 'auto' })
  }, [
    createElementVNode("table", {
      class: normalizeClass(["v-table", { 'fixed-header': __props.fixedHeader, 'bordered': __props.border }])
    }, [
      createElementVNode("thead", null, [
        createElementVNode("tr", null, [
          (__props.selectable)
            ? (openBlock(), createElementBlock("th", _hoisted_1$6, [
                createElementVNode("div", null, [
                  createElementVNode("input", {
                    type: "checkbox",
                    checked: isAllSelected.value,
                    indeterminate: isIndeterminate.value,
                    onChange: handleSelectAllToggle,
                    style: {
                                verticalAlign: 'text-top',
                                marginTop: '-3px'
                            }
                  }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_2$5)
                ])
              ]))
            : createCommentVNode("v-if", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.columns, (column) => {
            return (openBlock(), createElementBlock("th", {
              key: column.value,
              style: normalizeStyle({
                        width: column.width,
                        fontSize: __props.headerFontSize,
                        height:'42px',
                        placeItems: column.align || 'left' // Align header content
                    }),
              onClick: $event => (handleSort(column.value))
            }, [
              createElementVNode("div", _hoisted_4$4, [
                createTextVNode(toDisplayString(column.text) + " ", 1 /* TEXT */),
                (__props.sortable && sortColumn.value === column.value)
                  ? (openBlock(), createElementBlock("span", _hoisted_5$4, toDisplayString(sortDirection.value === 'asc' ? '↑' : '↓'), 1 /* TEXT */))
                  : createCommentVNode("v-if", true)
              ])
            ], 12 /* STYLE, PROPS */, _hoisted_3$5))
          }), 128 /* KEYED_FRAGMENT */))
        ])
      ]),
      createElementVNode("tbody", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(sortedAndSelectedItems.value, (item, index) => {
          return (openBlock(), createElementBlock("tr", {
            key: item._internalId ?? index,
            onClick: $event => (handleRowClick(item)),
            class: normalizeClass({ 'clickable': __props.rowClickable || __props.selectable, 'selected': item.selected })
          }, [
            (__props.selectable)
              ? (openBlock(), createElementBlock("td", _hoisted_7$4, [
                  createElementVNode("div", null, [
                    createElementVNode("input", {
                      type: "checkbox",
                      checked: item.selected,
                      onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"])),
                      onChange: $event => (handleSingleSelectChange(item, $event.target.checked)),
                      style: {
                                verticalAlign: 'text-top',
                                marginTop: '-5px'
                            }
                    }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_8$4)
                  ])
                ]))
              : createCommentVNode("v-if", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.columns, (column) => {
              return (openBlock(), createElementBlock("td", {
                key: column.value,
                style: normalizeStyle({ textAlign: column.align || 'left' })
              }, [
                (_ctx.$slots[`item.${column.value}`])
                  ? renderSlot(_ctx.$slots, `item.${column.value}`, {
                      key: 0,
                      item: item
                    }, undefined, true)
                  : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                      createTextVNode(toDisplayString(item[column.value]), 1 /* TEXT */)
                    ], 64 /* STABLE_FRAGMENT */))
              ], 4 /* STYLE */))
            }), 128 /* KEYED_FRAGMENT */))
          ], 10 /* CLASS, PROPS */, _hoisted_6$4))
        }), 128 /* KEYED_FRAGMENT */)),
        (sortedAndSelectedItems.value.length === 0)
          ? (openBlock(), createElementBlock("tr", _hoisted_9$3, [
              createElementVNode("td", {
                colspan: __props.columns.length + (__props.selectable ? 1 : 0),
                class: "empty-state"
              }, [
                renderSlot(_ctx.$slots, "empty", {}, () => [
                  _cache[1] || (_cache[1] = createTextVNode("No Data"))
                ], true)
              ], 8 /* PROPS */, _hoisted_10$3)
            ]))
          : createCommentVNode("v-if", true)
      ])
    ], 2 /* CLASS */)
  ], 6 /* CLASS, STYLE */))
}
}

};
var Table = /*#__PURE__*/_export_sfc(_sfc_main$7, [['__scopeId',"data-v-ca034995"],['__file',"table.vue"]]);

var css$6 = "\n.custom-tag[data-v-a1751954] {\n  display: inline-block; \n  padding: 4px 8px; \n  border-radius: 4px; \n  font-size: 0.85em; \n  font-weight: 500;\n  line-height: 1.2; \n  text-align: center;\n  white-space: nowrap; \n  vertical-align: middle;\n}\n";
n(css$6,{});

const _sfc_main$6 = {
  __name: 'tag',
  props: {
  text: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'var(--grey-500)' 
  },
  textColor: {
      type: String,
      default: '#ffffff'
  }
},
  setup(__props) {

const props = __props;

const tagStyle = computed(() => {
  return {
    backgroundColor: props.color,
    color: props.textColor
  };
});

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("span", {
    class: "custom-tag",
    style: normalizeStyle(tagStyle.value)
  }, toDisplayString(__props.text), 5 /* TEXT, STYLE */))
}
}

};
var Tag = /*#__PURE__*/_export_sfc(_sfc_main$6, [['__scopeId',"data-v-a1751954"],['__file',"tag.vue"]]);

var acceptLanguageParser = {};

var regex = /((([a-zA-Z]+(-[a-zA-Z0-9]+){0,2})|\*)(;q=[0-1](\.[0-9]+)?)?)*/g;

var isString = function(s){
    return typeof(s) === 'string';
};

function parse(al){
    var strings = (al || "").match(regex);
    return strings.map(function(m){
        if(!m){
            return;
        }

        var bits = m.split(';');
        var ietf = bits[0].split('-');
        var hasScript = ietf.length === 3;

        return {
            code: ietf[0],
            script: hasScript ? ietf[1] : null,
            region: hasScript ? ietf[2] : ietf[1],
            quality: bits[1] ? parseFloat(bits[1].split('=')[1]) : 1.0
        };
    }).filter(function(r){
            return r;
        }).sort(function(a, b){
            return b.quality - a.quality;
        });
}

function pick(supportedLanguages, acceptLanguage, options){
    options = options || {};

    if (!supportedLanguages || !supportedLanguages.length || !acceptLanguage) {
        return null;
    }

    if(isString(acceptLanguage)){
        acceptLanguage = parse(acceptLanguage);
    }

    var supported = supportedLanguages.map(function(support){
        var bits = support.split('-');
        var hasScript = bits.length === 3;

        return {
            code: bits[0],
            script: hasScript ? bits[1] : null,
            region: hasScript ? bits[2] : bits[1]
        };
    });

    for (var i = 0; i < acceptLanguage.length; i++) {
        var lang = acceptLanguage[i];
        var langCode = lang.code.toLowerCase();
        var langRegion = lang.region ? lang.region.toLowerCase() : lang.region;
        var langScript = lang.script ? lang.script.toLowerCase() : lang.script;
        for (var j = 0; j < supported.length; j++) {
            var supportedCode = supported[j].code.toLowerCase();
            var supportedScript = supported[j].script ? supported[j].script.toLowerCase() : supported[j].script;
            var supportedRegion = supported[j].region ? supported[j].region.toLowerCase() : supported[j].region;
            if (langCode === supportedCode &&
              (options.loose || !langScript || langScript === supportedScript) &&
              (options.loose  || !langRegion || langRegion === supportedRegion)) {
                return supportedLanguages[j];
            }
        }
    }

    return null;
}

acceptLanguageParser.parse = parse;
acceptLanguageParser.pick = pick;

var client_management$8 = "Client Management";
var provider_settings$8 = "Provider Settings";
var user_logs$8 = "User Logs";
var oidc_empty_key_error_tips$8 = "PrivateKey and PublicKey are empty, please go to \"Provider Settings\" to generate PrivateKey and PublicKey.";
var oidc_clients_add_client$8 = "Add Client";
var oidc_clients_search_placeholder$8 = "Search client name or ID...";
var oidc_clients_status_active$8 = "Active";
var oidc_clients_status_disabled$8 = "Disabled";
var oidc_clients_no_items_message$8 = "No matching clients found";
var oidc_clients_search_message$8 = "Searching...";
var oidc_clients_total_count$8 = "Total {totalClients} clients";
var oidc_clients_edit_title$8 = "Edit Client";
var oidc_clients_add_title$8 = "Add New Client";
var oidc_clients_confirm_delete_title$8 = "Confirm Deletion";
var oidc_clients_confirm_delete_message_part1$8 = "Are you sure you want to delete client ";
var oidc_clients_confirm_delete_message_part2$8 = "? This action cannot be undone.";
var oidc_clients_cancel$8 = "Cancel";
var oidc_clients_confirm_delete_button$8 = "Confirm Delete";
var oidc_clients_delete_client_action$8 = "Delete Client";
var oidc_clients_columns_name$8 = "Name";
var oidc_clients_columns_client_id$8 = "Client ID";
var oidc_clients_columns_status$8 = "Status";
var oidc_clients_columns_redirect_uri$8 = "Redirect URI";
var oidc_clients_columns_date_created$8 = "Creation Time";
var oidc_clients_columns_actions$8 = "Actions";
var oidc_clients_get_lists_failed$8 = "Failed to get client list:";
var oidc_clients_get_deatil_failed$8 = "Failed to get client details:";
var oidc_clients_save_client_failed$8 = "Failed to save client:";
var oidc_clients_delete_client_failed$8 = "Failed to delete client:";
var oidc_clients_form_client_name_label$8 = "Client Name";
var oidc_clients_form_client_name_placeholder$8 = "e.g., My Web Application";
var oidc_clients_form_client_site_label$8 = "Client Site URL";
var oidc_clients_form_client_site_placeholder$8 = "e.g., http://example.com";
var oidc_clients_form_client_id_label$8 = "Client ID";
var oidc_clients_form_client_id_placeholder$8 = "System generated unique identifier";
var oidc_clients_form_client_secret_label$8 = "Client Secret";
var oidc_clients_form_client_secret_placeholder$8 = "Enter a strong secret";
var oidc_clients_form_redirect_uri_label$8 = "Redirect URI";
var oidc_clients_form_redirect_uri_placeholder$8 = "e.g., http://localhost:8080/callback";
var oidc_clients_form_status_label$8 = "Client Status";
var oidc_clients_form_status_active$8 = "Active";
var oidc_clients_form_status_disabled$8 = "Disabled";
var oidc_clients_form_cancel_button$8 = "Cancel";
var oidc_clients_form_update_button$8 = "Update";
var oidc_clients_form_save_button$8 = "Save";
var oidc_clients_form_required_validator$8 = "This field is required";
var oidc_clients_form_valid_url_validator$8 = "Please enter a valid URL (e.g., http://example.com or myapp://callback)";
var oidc_provider_settings_title$8 = "OIDC Provider Settings";
var oidc_provider_settings_issuer_label$8 = "Issuer";
var oidc_provider_settings_token_expiry_label$8 = "Access Token Expiry (seconds)";
var oidc_provider_settings_refresh_token_expiry_label$8 = "Refresh Token Expiry (seconds)";
var oidc_provider_settings_code_expiry_label$8 = "CODE Token Expiry (seconds)";
var oidc_provider_settings_allow_refresh_tokens_label$8 = "Allow Refresh Tokens";
var oidc_provider_settings_key_pair_title$8 = "RS256 Signing Key Pair (Public/Private)";
var oidc_provider_settings_key_instructions_part1$8 = "You can manually paste the Public and Private Keys in PEM format, or use the button below to generate a new key pair (if your browser supports it).";
var oidc_provider_settings_key_instructions_part2$8 = "(Automatic generation not supported in this environment)";
var oidc_provider_settings_public_key_label$8 = "Public Key (PEM Format):";
var oidc_provider_settings_private_key_label$8 = "Private Key (PEM Format):";
var oidc_provider_settings_private_key_warning$8 = "⚠️Security Warning: Handle the Private Key with extreme caution. Ensure pasting in a secure environment, avoiding observation or transmission over insecure networks. In production environments, directly entering the Private Key in the frontend is generally not recommended.";
var oidc_provider_settings_generating_keys$8 = "Generating...";
var oidc_provider_settings_generate_new_keys$8 = "Generate New Key Pair (Overwrite above)";
var oidc_provider_settings_crypto_note$8 = "(Requires HTTPS or localhost enabled)";
var oidc_provider_settings_cancel_changes$8 = "Cancel Changes";
var oidc_provider_settings_saving$8 = "Saving";
var oidc_provider_settings_save_changes$8 = "Save Changes";
var oidc_provider_settings_config_endpoint_title$8 = "OIDC Configuration Endpoint";
var oidc_provider_settings_copy_button$8 = "Copy";
var oidc_provider_settings_jwks_endpoint_title$8 = "JWKS Endpoint";
var oidc_provider_settings_load_failed$8 = "Failed to load settings, restored to default values";
var oidc_provider_settings_load_failed_prefix$8 = "Failed to load settings:";
var oidc_provider_settings_issuer_invalid_format$8 = "Invalid Issuer format";
var oidc_provider_settings_validation_issuer_expiry$8 = "Please check inputs, ensure Issuer is filled and expiry times are positive!";
var oidc_provider_settings_validation_key_check$8 = "Please check the entered keys:\n";
var oidc_provider_settings_validation_public_key_invalid$8 = "- Public key does not seem to be valid PEM format\n";
var oidc_provider_settings_validation_private_key_invalid$8 = "- Private key does not seem to be valid PEM format\n";
var oidc_provider_settings_validation_key_pair_required$8 = "Please provide both Public and Private keys, or leave both empty";
var oidc_provider_settings_save_success$8 = "Settings saved successfully!";
var oidc_provider_settings_save_failed_prefix$8 = "Failed to save settings:";
var oidc_provider_settings_changes_cancelled$8 = "Changes cancelled";
var oidc_provider_settings_crypto_warning_https$8 = "Warning: Current page is not accessed via HTTPS, browser restricts key auto-generation";
var oidc_provider_settings_crypto_warning_browser$8 = "Warning: Current browser does not support key auto-generation";
var oidc_provider_settings_crypto_api_unavailable$8 = "Web Crypto API unavailable";
var oidc_provider_settings_generate_confirm$8 = "Are you sure you want to generate a new key pair? This will overwrite the current keys.";
var oidc_provider_settings_generate_success$8 = "New key pair generated successfully";
var oidc_provider_settings_generate_failed_prefix$8 = "Key generation failed:";
var oidc_provider_settings_generate_failed$8 = "Key generation failed";
var oidc_provider_settings_copied$8 = "Copied to clipboard";
var oidc_provider_settings_copy_failed_prefix$8 = "Copy failed:";
var oidc_provider_settings_copy_manual_prompt$8 = "Please copy manually:";
var oidc_logs_search_placeholder$8 = "Search by ID, Client ID, or User ID...";
var oidc_logs_columns_client_name$8 = "Client Name";
var oidc_logs_columns_client_uri$8 = "Client URI";
var oidc_logs_columns_client_id$8 = "Client ID";
var oidc_logs_columns_username$8 = "Username";
var oidc_logs_columns_date_created$8 = "Call Time";
var oidc_logs_no_items_loading$8 = "Loading...";
var oidc_logs_no_items_search_empty$8 = "No matching tokens found.";
var oidc_logs_no_items_empty$8 = "No tokens to display.";
var oidc_logs_total_count$8 = "Total {totalLogs} logs";
var oidc_logs_get_error$6 = "Failed to retrieve the log list:";
var en = {
	client_management: client_management$8,
	provider_settings: provider_settings$8,
	user_logs: user_logs$8,
	oidc_empty_key_error_tips: oidc_empty_key_error_tips$8,
	oidc_clients_add_client: oidc_clients_add_client$8,
	oidc_clients_search_placeholder: oidc_clients_search_placeholder$8,
	oidc_clients_status_active: oidc_clients_status_active$8,
	oidc_clients_status_disabled: oidc_clients_status_disabled$8,
	oidc_clients_no_items_message: oidc_clients_no_items_message$8,
	oidc_clients_search_message: oidc_clients_search_message$8,
	oidc_clients_total_count: oidc_clients_total_count$8,
	oidc_clients_edit_title: oidc_clients_edit_title$8,
	oidc_clients_add_title: oidc_clients_add_title$8,
	oidc_clients_confirm_delete_title: oidc_clients_confirm_delete_title$8,
	oidc_clients_confirm_delete_message_part1: oidc_clients_confirm_delete_message_part1$8,
	oidc_clients_confirm_delete_message_part2: oidc_clients_confirm_delete_message_part2$8,
	oidc_clients_cancel: oidc_clients_cancel$8,
	oidc_clients_confirm_delete_button: oidc_clients_confirm_delete_button$8,
	oidc_clients_delete_client_action: oidc_clients_delete_client_action$8,
	oidc_clients_columns_name: oidc_clients_columns_name$8,
	oidc_clients_columns_client_id: oidc_clients_columns_client_id$8,
	oidc_clients_columns_status: oidc_clients_columns_status$8,
	oidc_clients_columns_redirect_uri: oidc_clients_columns_redirect_uri$8,
	oidc_clients_columns_date_created: oidc_clients_columns_date_created$8,
	oidc_clients_columns_actions: oidc_clients_columns_actions$8,
	oidc_clients_get_lists_failed: oidc_clients_get_lists_failed$8,
	oidc_clients_get_deatil_failed: oidc_clients_get_deatil_failed$8,
	oidc_clients_save_client_failed: oidc_clients_save_client_failed$8,
	oidc_clients_delete_client_failed: oidc_clients_delete_client_failed$8,
	oidc_clients_form_client_name_label: oidc_clients_form_client_name_label$8,
	oidc_clients_form_client_name_placeholder: oidc_clients_form_client_name_placeholder$8,
	oidc_clients_form_client_site_label: oidc_clients_form_client_site_label$8,
	oidc_clients_form_client_site_placeholder: oidc_clients_form_client_site_placeholder$8,
	oidc_clients_form_client_id_label: oidc_clients_form_client_id_label$8,
	oidc_clients_form_client_id_placeholder: oidc_clients_form_client_id_placeholder$8,
	oidc_clients_form_client_secret_label: oidc_clients_form_client_secret_label$8,
	oidc_clients_form_client_secret_placeholder: oidc_clients_form_client_secret_placeholder$8,
	oidc_clients_form_redirect_uri_label: oidc_clients_form_redirect_uri_label$8,
	oidc_clients_form_redirect_uri_placeholder: oidc_clients_form_redirect_uri_placeholder$8,
	oidc_clients_form_status_label: oidc_clients_form_status_label$8,
	oidc_clients_form_status_active: oidc_clients_form_status_active$8,
	oidc_clients_form_status_disabled: oidc_clients_form_status_disabled$8,
	oidc_clients_form_cancel_button: oidc_clients_form_cancel_button$8,
	oidc_clients_form_update_button: oidc_clients_form_update_button$8,
	oidc_clients_form_save_button: oidc_clients_form_save_button$8,
	oidc_clients_form_required_validator: oidc_clients_form_required_validator$8,
	oidc_clients_form_valid_url_validator: oidc_clients_form_valid_url_validator$8,
	oidc_provider_settings_title: oidc_provider_settings_title$8,
	oidc_provider_settings_issuer_label: oidc_provider_settings_issuer_label$8,
	oidc_provider_settings_token_expiry_label: oidc_provider_settings_token_expiry_label$8,
	oidc_provider_settings_refresh_token_expiry_label: oidc_provider_settings_refresh_token_expiry_label$8,
	oidc_provider_settings_code_expiry_label: oidc_provider_settings_code_expiry_label$8,
	oidc_provider_settings_allow_refresh_tokens_label: oidc_provider_settings_allow_refresh_tokens_label$8,
	oidc_provider_settings_key_pair_title: oidc_provider_settings_key_pair_title$8,
	oidc_provider_settings_key_instructions_part1: oidc_provider_settings_key_instructions_part1$8,
	oidc_provider_settings_key_instructions_part2: oidc_provider_settings_key_instructions_part2$8,
	oidc_provider_settings_public_key_label: oidc_provider_settings_public_key_label$8,
	oidc_provider_settings_private_key_label: oidc_provider_settings_private_key_label$8,
	oidc_provider_settings_private_key_warning: oidc_provider_settings_private_key_warning$8,
	oidc_provider_settings_generating_keys: oidc_provider_settings_generating_keys$8,
	oidc_provider_settings_generate_new_keys: oidc_provider_settings_generate_new_keys$8,
	oidc_provider_settings_crypto_note: oidc_provider_settings_crypto_note$8,
	oidc_provider_settings_cancel_changes: oidc_provider_settings_cancel_changes$8,
	oidc_provider_settings_saving: oidc_provider_settings_saving$8,
	oidc_provider_settings_save_changes: oidc_provider_settings_save_changes$8,
	oidc_provider_settings_config_endpoint_title: oidc_provider_settings_config_endpoint_title$8,
	oidc_provider_settings_copy_button: oidc_provider_settings_copy_button$8,
	oidc_provider_settings_jwks_endpoint_title: oidc_provider_settings_jwks_endpoint_title$8,
	oidc_provider_settings_load_failed: oidc_provider_settings_load_failed$8,
	oidc_provider_settings_load_failed_prefix: oidc_provider_settings_load_failed_prefix$8,
	oidc_provider_settings_issuer_invalid_format: oidc_provider_settings_issuer_invalid_format$8,
	oidc_provider_settings_validation_issuer_expiry: oidc_provider_settings_validation_issuer_expiry$8,
	oidc_provider_settings_validation_key_check: oidc_provider_settings_validation_key_check$8,
	oidc_provider_settings_validation_public_key_invalid: oidc_provider_settings_validation_public_key_invalid$8,
	oidc_provider_settings_validation_private_key_invalid: oidc_provider_settings_validation_private_key_invalid$8,
	oidc_provider_settings_validation_key_pair_required: oidc_provider_settings_validation_key_pair_required$8,
	oidc_provider_settings_save_success: oidc_provider_settings_save_success$8,
	oidc_provider_settings_save_failed_prefix: oidc_provider_settings_save_failed_prefix$8,
	oidc_provider_settings_changes_cancelled: oidc_provider_settings_changes_cancelled$8,
	oidc_provider_settings_crypto_warning_https: oidc_provider_settings_crypto_warning_https$8,
	oidc_provider_settings_crypto_warning_browser: oidc_provider_settings_crypto_warning_browser$8,
	oidc_provider_settings_crypto_api_unavailable: oidc_provider_settings_crypto_api_unavailable$8,
	oidc_provider_settings_generate_confirm: oidc_provider_settings_generate_confirm$8,
	oidc_provider_settings_generate_success: oidc_provider_settings_generate_success$8,
	oidc_provider_settings_generate_failed_prefix: oidc_provider_settings_generate_failed_prefix$8,
	oidc_provider_settings_generate_failed: oidc_provider_settings_generate_failed$8,
	oidc_provider_settings_copied: oidc_provider_settings_copied$8,
	oidc_provider_settings_copy_failed_prefix: oidc_provider_settings_copy_failed_prefix$8,
	oidc_provider_settings_copy_manual_prompt: oidc_provider_settings_copy_manual_prompt$8,
	oidc_logs_search_placeholder: oidc_logs_search_placeholder$8,
	oidc_logs_columns_client_name: oidc_logs_columns_client_name$8,
	oidc_logs_columns_client_uri: oidc_logs_columns_client_uri$8,
	oidc_logs_columns_client_id: oidc_logs_columns_client_id$8,
	oidc_logs_columns_username: oidc_logs_columns_username$8,
	oidc_logs_columns_date_created: oidc_logs_columns_date_created$8,
	oidc_logs_no_items_loading: oidc_logs_no_items_loading$8,
	oidc_logs_no_items_search_empty: oidc_logs_no_items_search_empty$8,
	oidc_logs_no_items_empty: oidc_logs_no_items_empty$8,
	oidc_logs_total_count: oidc_logs_total_count$8,
	oidc_logs_get_error: oidc_logs_get_error$6
};

var client_management$7 = "客户端管理";
var provider_settings$7 = "服务设置";
var user_logs$7 = "用户日志";
var oidc_empty_key_error_tips$7 = "PrivateKey与PublicKey为空，请到 \"服务设置\" 生成PrivateKey与PublicKey。";
var oidc_clients_add_client$7 = "添加客户端";
var oidc_clients_search_placeholder$7 = "搜索客户端名称或ID...";
var oidc_clients_status_active$7 = "活动";
var oidc_clients_status_disabled$7 = "禁用";
var oidc_clients_no_items_message$7 = "没有找到匹配的客户端";
var oidc_clients_search_message$7 = "正在搜索...";
var oidc_clients_total_count$7 = "共 {totalClients} 个客户端";
var oidc_clients_edit_title$7 = "编辑客户端";
var oidc_clients_add_title$7 = "添加新客户端";
var oidc_clients_confirm_delete_title$7 = "确认删除";
var oidc_clients_confirm_delete_message_part1$7 = "您确定要删除客户端 ";
var oidc_clients_confirm_delete_message_part2$7 = " 吗？此操作不可恢复。";
var oidc_clients_cancel$7 = "取消";
var oidc_clients_confirm_delete_button$7 = "确认删除";
var oidc_clients_delete_client_action$7 = "删除客户端";
var oidc_clients_columns_name$7 = "名称";
var oidc_clients_columns_client_id$7 = "客户端ID";
var oidc_clients_columns_status$7 = "状态";
var oidc_clients_columns_redirect_uri$7 = "重定向URI";
var oidc_clients_columns_date_created$7 = "创建时间";
var oidc_clients_columns_actions$7 = "操作";
var oidc_clients_get_lists_failed$7 = "获取客户端列表失败:";
var oidc_clients_get_deatil_failed$7 = "获取客户端详情失败:";
var oidc_clients_save_client_failed$7 = "保存客户端失败:";
var oidc_clients_delete_client_failed$7 = "删除客户端失败:";
var oidc_clients_form_client_name_label$7 = "客户端名称";
var oidc_clients_form_client_name_placeholder$7 = "例如：我的Web应用";
var oidc_clients_form_client_site_label$7 = "客户端地址";
var oidc_clients_form_client_site_placeholder$7 = "例如：http://example.com";
var oidc_clients_form_client_id_label$7 = "客户端ID";
var oidc_clients_form_client_id_placeholder$7 = "系统生成的唯一标识符";
var oidc_clients_form_client_secret_label$7 = "客户端密钥";
var oidc_clients_form_client_secret_placeholder$7 = "输入强密钥";
var oidc_clients_form_redirect_uri_label$7 = "重定向URI";
var oidc_clients_form_redirect_uri_placeholder$7 = "例如：http://localhost:8080/callback";
var oidc_clients_form_status_label$7 = "客户端状态";
var oidc_clients_form_status_active$7 = "活动";
var oidc_clients_form_status_disabled$7 = "禁用";
var oidc_clients_form_cancel_button$7 = "取消";
var oidc_clients_form_update_button$7 = "更新";
var oidc_clients_form_save_button$7 = "保存";
var oidc_clients_form_required_validator$7 = "此字段为必填项";
var oidc_clients_form_valid_url_validator$7 = "请输入有效的 URL (例如：http://example.com 或 myapp://callback)";
var oidc_provider_settings_title$7 = "OIDC 提供方配置";
var oidc_provider_settings_issuer_label$7 = "Issuer (发行者)";
var oidc_provider_settings_token_expiry_label$7 = "访问令牌有效期(秒)";
var oidc_provider_settings_refresh_token_expiry_label$7 = "刷新令牌有效期(秒)";
var oidc_provider_settings_code_expiry_label$7 = "CODE令牌有效期(秒)";
var oidc_provider_settings_allow_refresh_tokens_label$7 = "允许刷新令牌";
var oidc_provider_settings_key_pair_title$7 = "RS256 签名密钥对 (公钥/私钥)";
var oidc_provider_settings_key_instructions_part1$7 = "您可以手动粘贴 PEM 格式的公钥和私钥，或使用下方的按钮生成新的密钥对 (如果浏览器支持)。";
var oidc_provider_settings_key_instructions_part2$7 = "(当前环境不支持自动生成)";
var oidc_provider_settings_public_key_label$7 = "公钥 (PEM 格式):";
var oidc_provider_settings_private_key_label$7 = "私钥 (PEM 格式):";
var oidc_provider_settings_private_key_warning$7 = "⚠️安全警告: 请谨慎处理私钥。确保在安全的环境下粘贴，避免被他人窥视或通过不安全的网络传输。在生产环境中，通常不建议直接在前端输入私钥。";
var oidc_provider_settings_generating_keys$7 = "生成中...";
var oidc_provider_settings_generate_new_keys$7 = "生成新的密钥对 (覆盖上方内容)";
var oidc_provider_settings_crypto_note$7 = "(需要 HTTPS 或 localhost 启用)";
var oidc_provider_settings_cancel_changes$7 = "取消更改";
var oidc_provider_settings_saving$7 = "保存中";
var oidc_provider_settings_save_changes$7 = "保存更改";
var oidc_provider_settings_config_endpoint_title$7 = "OIDC 配置端点";
var oidc_provider_settings_copy_button$7 = "复制";
var oidc_provider_settings_jwks_endpoint_title$7 = "JWKS 端点";
var oidc_provider_settings_load_failed$7 = "加载设置失败，已恢复默认值";
var oidc_provider_settings_load_failed_prefix$7 = "加载设置失败:";
var oidc_provider_settings_issuer_invalid_format$7 = "Issuer格式无效";
var oidc_provider_settings_validation_issuer_expiry$7 = "请检查输入，确保Issuer已填写且有效期为正数！";
var oidc_provider_settings_validation_key_check$7 = "请检查输入的密钥：\n";
var oidc_provider_settings_validation_public_key_invalid$7 = "- 公钥似乎不是有效的PEM格式\n";
var oidc_provider_settings_validation_private_key_invalid$7 = "- 私钥似乎不是有效的PEM格式\n";
var oidc_provider_settings_validation_key_pair_required$7 = "请同时提供公钥和私钥，或将两者都留空";
var oidc_provider_settings_save_success$7 = "设置已成功保存！";
var oidc_provider_settings_save_failed_prefix$7 = "保存设置失败:";
var oidc_provider_settings_changes_cancelled$7 = "更改已取消";
var oidc_provider_settings_crypto_warning_https$7 = "警告：当前页面非HTTPS访问，浏览器限制了密钥自动生成功能";
var oidc_provider_settings_crypto_warning_browser$7 = "警告：当前浏览器不支持密钥自动生成";
var oidc_provider_settings_crypto_api_unavailable$7 = "Web Crypto API不可用";
var oidc_provider_settings_generate_confirm$7 = "确定要生成新的密钥对吗？这将覆盖当前密钥";
var oidc_provider_settings_generate_success$7 = "新的密钥对已生成";
var oidc_provider_settings_generate_failed_prefix$7 = "密钥生成失败:";
var oidc_provider_settings_generate_failed$7 = "密钥生成失败";
var oidc_provider_settings_copied$7 = "已复制到剪贴板";
var oidc_provider_settings_copy_failed_prefix$7 = "复制失败:";
var oidc_provider_settings_copy_manual_prompt$7 = "请手动复制:";
var oidc_logs_search_placeholder$7 = "通过 ID、客户端ID 或 用户ID 搜索...";
var oidc_logs_columns_client_name$7 = "客户端名称";
var oidc_logs_columns_client_uri$7 = "客户端地址";
var oidc_logs_columns_client_id$7 = "客户端ID";
var oidc_logs_columns_username$7 = "用户名";
var oidc_logs_columns_date_created$7 = "调用时间";
var oidc_logs_no_items_loading$7 = "正在加载...";
var oidc_logs_no_items_search_empty$7 = "没有找到匹配的令牌。";
var oidc_logs_no_items_empty$7 = "没有可显示的令牌。";
var oidc_logs_total_count$7 = "总共 {totalLogs} 条日志";
var oidc_logs_get_failed$1 = "获取日志列表失败:";
var zh_Hans = {
	client_management: client_management$7,
	provider_settings: provider_settings$7,
	user_logs: user_logs$7,
	oidc_empty_key_error_tips: oidc_empty_key_error_tips$7,
	oidc_clients_add_client: oidc_clients_add_client$7,
	oidc_clients_search_placeholder: oidc_clients_search_placeholder$7,
	oidc_clients_status_active: oidc_clients_status_active$7,
	oidc_clients_status_disabled: oidc_clients_status_disabled$7,
	oidc_clients_no_items_message: oidc_clients_no_items_message$7,
	oidc_clients_search_message: oidc_clients_search_message$7,
	oidc_clients_total_count: oidc_clients_total_count$7,
	oidc_clients_edit_title: oidc_clients_edit_title$7,
	oidc_clients_add_title: oidc_clients_add_title$7,
	oidc_clients_confirm_delete_title: oidc_clients_confirm_delete_title$7,
	oidc_clients_confirm_delete_message_part1: oidc_clients_confirm_delete_message_part1$7,
	oidc_clients_confirm_delete_message_part2: oidc_clients_confirm_delete_message_part2$7,
	oidc_clients_cancel: oidc_clients_cancel$7,
	oidc_clients_confirm_delete_button: oidc_clients_confirm_delete_button$7,
	oidc_clients_delete_client_action: oidc_clients_delete_client_action$7,
	oidc_clients_columns_name: oidc_clients_columns_name$7,
	oidc_clients_columns_client_id: oidc_clients_columns_client_id$7,
	oidc_clients_columns_status: oidc_clients_columns_status$7,
	oidc_clients_columns_redirect_uri: oidc_clients_columns_redirect_uri$7,
	oidc_clients_columns_date_created: oidc_clients_columns_date_created$7,
	oidc_clients_columns_actions: oidc_clients_columns_actions$7,
	oidc_clients_get_lists_failed: oidc_clients_get_lists_failed$7,
	oidc_clients_get_deatil_failed: oidc_clients_get_deatil_failed$7,
	oidc_clients_save_client_failed: oidc_clients_save_client_failed$7,
	oidc_clients_delete_client_failed: oidc_clients_delete_client_failed$7,
	oidc_clients_form_client_name_label: oidc_clients_form_client_name_label$7,
	oidc_clients_form_client_name_placeholder: oidc_clients_form_client_name_placeholder$7,
	oidc_clients_form_client_site_label: oidc_clients_form_client_site_label$7,
	oidc_clients_form_client_site_placeholder: oidc_clients_form_client_site_placeholder$7,
	oidc_clients_form_client_id_label: oidc_clients_form_client_id_label$7,
	oidc_clients_form_client_id_placeholder: oidc_clients_form_client_id_placeholder$7,
	oidc_clients_form_client_secret_label: oidc_clients_form_client_secret_label$7,
	oidc_clients_form_client_secret_placeholder: oidc_clients_form_client_secret_placeholder$7,
	oidc_clients_form_redirect_uri_label: oidc_clients_form_redirect_uri_label$7,
	oidc_clients_form_redirect_uri_placeholder: oidc_clients_form_redirect_uri_placeholder$7,
	oidc_clients_form_status_label: oidc_clients_form_status_label$7,
	oidc_clients_form_status_active: oidc_clients_form_status_active$7,
	oidc_clients_form_status_disabled: oidc_clients_form_status_disabled$7,
	oidc_clients_form_cancel_button: oidc_clients_form_cancel_button$7,
	oidc_clients_form_update_button: oidc_clients_form_update_button$7,
	oidc_clients_form_save_button: oidc_clients_form_save_button$7,
	oidc_clients_form_required_validator: oidc_clients_form_required_validator$7,
	oidc_clients_form_valid_url_validator: oidc_clients_form_valid_url_validator$7,
	oidc_provider_settings_title: oidc_provider_settings_title$7,
	oidc_provider_settings_issuer_label: oidc_provider_settings_issuer_label$7,
	oidc_provider_settings_token_expiry_label: oidc_provider_settings_token_expiry_label$7,
	oidc_provider_settings_refresh_token_expiry_label: oidc_provider_settings_refresh_token_expiry_label$7,
	oidc_provider_settings_code_expiry_label: oidc_provider_settings_code_expiry_label$7,
	oidc_provider_settings_allow_refresh_tokens_label: oidc_provider_settings_allow_refresh_tokens_label$7,
	oidc_provider_settings_key_pair_title: oidc_provider_settings_key_pair_title$7,
	oidc_provider_settings_key_instructions_part1: oidc_provider_settings_key_instructions_part1$7,
	oidc_provider_settings_key_instructions_part2: oidc_provider_settings_key_instructions_part2$7,
	oidc_provider_settings_public_key_label: oidc_provider_settings_public_key_label$7,
	oidc_provider_settings_private_key_label: oidc_provider_settings_private_key_label$7,
	oidc_provider_settings_private_key_warning: oidc_provider_settings_private_key_warning$7,
	oidc_provider_settings_generating_keys: oidc_provider_settings_generating_keys$7,
	oidc_provider_settings_generate_new_keys: oidc_provider_settings_generate_new_keys$7,
	oidc_provider_settings_crypto_note: oidc_provider_settings_crypto_note$7,
	oidc_provider_settings_cancel_changes: oidc_provider_settings_cancel_changes$7,
	oidc_provider_settings_saving: oidc_provider_settings_saving$7,
	oidc_provider_settings_save_changes: oidc_provider_settings_save_changes$7,
	oidc_provider_settings_config_endpoint_title: oidc_provider_settings_config_endpoint_title$7,
	oidc_provider_settings_copy_button: oidc_provider_settings_copy_button$7,
	oidc_provider_settings_jwks_endpoint_title: oidc_provider_settings_jwks_endpoint_title$7,
	oidc_provider_settings_load_failed: oidc_provider_settings_load_failed$7,
	oidc_provider_settings_load_failed_prefix: oidc_provider_settings_load_failed_prefix$7,
	oidc_provider_settings_issuer_invalid_format: oidc_provider_settings_issuer_invalid_format$7,
	oidc_provider_settings_validation_issuer_expiry: oidc_provider_settings_validation_issuer_expiry$7,
	oidc_provider_settings_validation_key_check: oidc_provider_settings_validation_key_check$7,
	oidc_provider_settings_validation_public_key_invalid: oidc_provider_settings_validation_public_key_invalid$7,
	oidc_provider_settings_validation_private_key_invalid: oidc_provider_settings_validation_private_key_invalid$7,
	oidc_provider_settings_validation_key_pair_required: oidc_provider_settings_validation_key_pair_required$7,
	oidc_provider_settings_save_success: oidc_provider_settings_save_success$7,
	oidc_provider_settings_save_failed_prefix: oidc_provider_settings_save_failed_prefix$7,
	oidc_provider_settings_changes_cancelled: oidc_provider_settings_changes_cancelled$7,
	oidc_provider_settings_crypto_warning_https: oidc_provider_settings_crypto_warning_https$7,
	oidc_provider_settings_crypto_warning_browser: oidc_provider_settings_crypto_warning_browser$7,
	oidc_provider_settings_crypto_api_unavailable: oidc_provider_settings_crypto_api_unavailable$7,
	oidc_provider_settings_generate_confirm: oidc_provider_settings_generate_confirm$7,
	oidc_provider_settings_generate_success: oidc_provider_settings_generate_success$7,
	oidc_provider_settings_generate_failed_prefix: oidc_provider_settings_generate_failed_prefix$7,
	oidc_provider_settings_generate_failed: oidc_provider_settings_generate_failed$7,
	oidc_provider_settings_copied: oidc_provider_settings_copied$7,
	oidc_provider_settings_copy_failed_prefix: oidc_provider_settings_copy_failed_prefix$7,
	oidc_provider_settings_copy_manual_prompt: oidc_provider_settings_copy_manual_prompt$7,
	oidc_logs_search_placeholder: oidc_logs_search_placeholder$7,
	oidc_logs_columns_client_name: oidc_logs_columns_client_name$7,
	oidc_logs_columns_client_uri: oidc_logs_columns_client_uri$7,
	oidc_logs_columns_client_id: oidc_logs_columns_client_id$7,
	oidc_logs_columns_username: oidc_logs_columns_username$7,
	oidc_logs_columns_date_created: oidc_logs_columns_date_created$7,
	oidc_logs_no_items_loading: oidc_logs_no_items_loading$7,
	oidc_logs_no_items_search_empty: oidc_logs_no_items_search_empty$7,
	oidc_logs_no_items_empty: oidc_logs_no_items_empty$7,
	oidc_logs_total_count: oidc_logs_total_count$7,
	oidc_logs_get_failed: oidc_logs_get_failed$1
};

var client_management$6 = "客戶端管理";
var provider_settings$6 = "服務設置";
var user_logs$6 = "用戶日誌";
var oidc_empty_key_error_tips$6 = "PrivateKey與PublicKey為空，請到 \"服務設置\" 生成PrivateKey與PublicKey。";
var oidc_clients_add_client$6 = "新增客戶端";
var oidc_clients_search_placeholder$6 = "搜尋客戶端名稱或ID...";
var oidc_clients_status_active$6 = "活動中";
var oidc_clients_status_disabled$6 = "已禁用";
var oidc_clients_no_items_message$6 = "未找到匹配的客戶端";
var oidc_clients_search_message$6 = "正在搜尋...";
var oidc_clients_total_count$6 = "共 {totalClients} 個客戶端";
var oidc_clients_edit_title$6 = "編輯客戶端";
var oidc_clients_add_title$6 = "新增客戶端";
var oidc_clients_confirm_delete_title$6 = "確認刪除";
var oidc_clients_confirm_delete_message_part1$6 = "您確定要刪除客戶端 ";
var oidc_clients_confirm_delete_message_part2$6 = " 嗎？此操作不可復原。";
var oidc_clients_cancel$6 = "取消";
var oidc_clients_confirm_delete_button$6 = "確認刪除";
var oidc_clients_delete_client_action$6 = "刪除客戶端";
var oidc_clients_columns_name$6 = "名稱";
var oidc_clients_columns_client_id$6 = "客戶端ID";
var oidc_clients_columns_status$6 = "狀態";
var oidc_clients_columns_redirect_uri$6 = "重定向URI";
var oidc_clients_columns_date_created$6 = "創建時間";
var oidc_clients_columns_actions$6 = "操作";
var oidc_clients_get_lists_failed$6 = "獲取客戶端列表失敗:";
var oidc_clients_get_deatil_failed$6 = "獲取客戶端詳細資訊失敗:";
var oidc_clients_save_client_failed$6 = "儲存客戶端失敗:";
var oidc_clients_delete_client_failed$6 = "刪除客戶端失敗:";
var oidc_clients_form_client_name_label$6 = "客戶端名稱";
var oidc_clients_form_client_name_placeholder$6 = "例如：我的Web應用程式";
var oidc_clients_form_client_site_label$6 = "客戶端地址";
var oidc_clients_form_client_site_placeholder$6 = "例如：http://example.com";
var oidc_clients_form_client_id_label$6 = "客戶端ID";
var oidc_clients_form_client_id_placeholder$6 = "系統生成的唯一識別碼";
var oidc_clients_form_client_secret_label$6 = "客戶端密鑰";
var oidc_clients_form_client_secret_placeholder$6 = "輸入強密鑰";
var oidc_clients_form_redirect_uri_label$6 = "重定向URI";
var oidc_clients_form_redirect_uri_placeholder$6 = "例如：http://localhost:8080/callback";
var oidc_clients_form_status_label$6 = "客戶端狀態";
var oidc_clients_form_status_active$6 = "活動中";
var oidc_clients_form_status_disabled$6 = "已禁用";
var oidc_clients_form_cancel_button$6 = "取消";
var oidc_clients_form_update_button$6 = "更新";
var oidc_clients_form_save_button$6 = "儲存";
var oidc_clients_form_required_validator$6 = "此欄位為必填項";
var oidc_clients_form_valid_url_validator$6 = "請輸入有效的 URL (例如：http://example.com 或 myapp://callback)";
var oidc_provider_settings_title$6 = "OIDC 提供者配置";
var oidc_provider_settings_issuer_label$6 = "Issuer (簽發者)";
var oidc_provider_settings_token_expiry_label$6 = "存取令牌有效期(秒)";
var oidc_provider_settings_refresh_token_expiry_label$6 = "刷新令牌有效期(秒)";
var oidc_provider_settings_code_expiry_label$6 = "CODE令牌有效期(秒)";
var oidc_provider_settings_allow_refresh_tokens_label$6 = "允許刷新令牌";
var oidc_provider_settings_key_pair_title$6 = "RS256 簽名金鑰對 (公鑰/私鑰)";
var oidc_provider_settings_key_instructions_part1$6 = "您可以手動貼上 PEM 格式的公鑰和私鑰，或使用下方的按鈕產生新的金鑰對 (如果瀏覽器支援)。";
var oidc_provider_settings_key_instructions_part2$6 = "(目前環境不支援自動產生)";
var oidc_provider_settings_public_key_label$6 = "公鑰 (PEM 格式):";
var oidc_provider_settings_private_key_label$6 = "私鑰 (PEM 格式):";
var oidc_provider_settings_private_key_warning$6 = "⚠️安全警告: 請謹慎處理私鑰。確保在安全的環境下貼上，避免被他人窺視或透過不安全的網路傳輸。在生產環境中，通常不建議直接在前端輸入私鑰。";
var oidc_provider_settings_generating_keys$6 = "產生中...";
var oidc_provider_settings_generate_new_keys$6 = "產生新的金鑰對 (覆蓋上方內容)";
var oidc_provider_settings_crypto_note$6 = "(需要 HTTPS 或 localhost 啟用)";
var oidc_provider_settings_cancel_changes$6 = "取消變更";
var oidc_provider_settings_saving$6 = "儲存中";
var oidc_provider_settings_save_changes$6 = "儲存變更";
var oidc_provider_settings_config_endpoint_title$6 = "OIDC 配置端點";
var oidc_provider_settings_copy_button$6 = "複製";
var oidc_provider_settings_jwks_endpoint_title$6 = "JWKS 端點";
var oidc_provider_settings_load_failed$6 = "載入設定失敗，已恢復預設值";
var oidc_provider_settings_load_failed_prefix$6 = "載入設定失敗:";
var oidc_provider_settings_issuer_invalid_format$6 = "Issuer格式無效";
var oidc_provider_settings_validation_issuer_expiry$6 = "請檢查輸入，確保Issuer已填寫且有效期為正數！";
var oidc_provider_settings_validation_key_check$6 = "請檢查輸入的金鑰：\n";
var oidc_provider_settings_validation_public_key_invalid$6 = "- 公鑰似乎不是有效的PEM格式\n";
var oidc_provider_settings_validation_private_key_invalid$6 = "- 私鑰似乎不是有效的PEM格式\n";
var oidc_provider_settings_validation_key_pair_required$6 = "請同時提供公鑰和私鑰，或將兩者都留空";
var oidc_provider_settings_save_success$6 = "設定已成功儲存！";
var oidc_provider_settings_save_failed_prefix$6 = "儲存設定失敗:";
var oidc_provider_settings_changes_cancelled$6 = "變更已取消";
var oidc_provider_settings_crypto_warning_https$6 = "警告：目前頁面非HTTPS存取，瀏覽器限制了金鑰自動產生功能";
var oidc_provider_settings_crypto_warning_browser$6 = "警告：目前瀏覽器不支援金鑰自動產生";
var oidc_provider_settings_crypto_api_unavailable$6 = "Web Crypto API不可用";
var oidc_provider_settings_generate_confirm$6 = "確定要產生新的金鑰對嗎？這將覆蓋目前金鑰";
var oidc_provider_settings_generate_success$6 = "新的金鑰對已產生";
var oidc_provider_settings_generate_failed_prefix$6 = "金鑰產生失敗:";
var oidc_provider_settings_generate_failed$6 = "金鑰產生失敗";
var oidc_provider_settings_copied$6 = "已複製到剪貼簿";
var oidc_provider_settings_copy_failed_prefix$6 = "複製失敗:";
var oidc_provider_settings_copy_manual_prompt$6 = "請手動複製:";
var oidc_logs_search_placeholder$6 = "透過 ID、客戶端ID 或 用戶ID 搜尋...";
var oidc_logs_columns_client_name$6 = "客戶端名稱";
var oidc_logs_columns_client_uri$6 = "客戶端地址";
var oidc_logs_columns_client_id$6 = "客戶端ID";
var oidc_logs_columns_username$6 = "用戶名";
var oidc_logs_columns_date_created$6 = "呼叫時間";
var oidc_logs_no_items_loading$6 = "正在載入...";
var oidc_logs_no_items_search_empty$6 = "未找到匹配的令牌。";
var oidc_logs_no_items_empty$6 = "沒有可顯示的令牌。";
var oidc_logs_total_count$6 = "總共 {totalLogs} 條日誌";
var oidc_logs_get_failed = "獲取日誌列表失敗:";
var zh_Hant = {
	client_management: client_management$6,
	provider_settings: provider_settings$6,
	user_logs: user_logs$6,
	oidc_empty_key_error_tips: oidc_empty_key_error_tips$6,
	oidc_clients_add_client: oidc_clients_add_client$6,
	oidc_clients_search_placeholder: oidc_clients_search_placeholder$6,
	oidc_clients_status_active: oidc_clients_status_active$6,
	oidc_clients_status_disabled: oidc_clients_status_disabled$6,
	oidc_clients_no_items_message: oidc_clients_no_items_message$6,
	oidc_clients_search_message: oidc_clients_search_message$6,
	oidc_clients_total_count: oidc_clients_total_count$6,
	oidc_clients_edit_title: oidc_clients_edit_title$6,
	oidc_clients_add_title: oidc_clients_add_title$6,
	oidc_clients_confirm_delete_title: oidc_clients_confirm_delete_title$6,
	oidc_clients_confirm_delete_message_part1: oidc_clients_confirm_delete_message_part1$6,
	oidc_clients_confirm_delete_message_part2: oidc_clients_confirm_delete_message_part2$6,
	oidc_clients_cancel: oidc_clients_cancel$6,
	oidc_clients_confirm_delete_button: oidc_clients_confirm_delete_button$6,
	oidc_clients_delete_client_action: oidc_clients_delete_client_action$6,
	oidc_clients_columns_name: oidc_clients_columns_name$6,
	oidc_clients_columns_client_id: oidc_clients_columns_client_id$6,
	oidc_clients_columns_status: oidc_clients_columns_status$6,
	oidc_clients_columns_redirect_uri: oidc_clients_columns_redirect_uri$6,
	oidc_clients_columns_date_created: oidc_clients_columns_date_created$6,
	oidc_clients_columns_actions: oidc_clients_columns_actions$6,
	oidc_clients_get_lists_failed: oidc_clients_get_lists_failed$6,
	oidc_clients_get_deatil_failed: oidc_clients_get_deatil_failed$6,
	oidc_clients_save_client_failed: oidc_clients_save_client_failed$6,
	oidc_clients_delete_client_failed: oidc_clients_delete_client_failed$6,
	oidc_clients_form_client_name_label: oidc_clients_form_client_name_label$6,
	oidc_clients_form_client_name_placeholder: oidc_clients_form_client_name_placeholder$6,
	oidc_clients_form_client_site_label: oidc_clients_form_client_site_label$6,
	oidc_clients_form_client_site_placeholder: oidc_clients_form_client_site_placeholder$6,
	oidc_clients_form_client_id_label: oidc_clients_form_client_id_label$6,
	oidc_clients_form_client_id_placeholder: oidc_clients_form_client_id_placeholder$6,
	oidc_clients_form_client_secret_label: oidc_clients_form_client_secret_label$6,
	oidc_clients_form_client_secret_placeholder: oidc_clients_form_client_secret_placeholder$6,
	oidc_clients_form_redirect_uri_label: oidc_clients_form_redirect_uri_label$6,
	oidc_clients_form_redirect_uri_placeholder: oidc_clients_form_redirect_uri_placeholder$6,
	oidc_clients_form_status_label: oidc_clients_form_status_label$6,
	oidc_clients_form_status_active: oidc_clients_form_status_active$6,
	oidc_clients_form_status_disabled: oidc_clients_form_status_disabled$6,
	oidc_clients_form_cancel_button: oidc_clients_form_cancel_button$6,
	oidc_clients_form_update_button: oidc_clients_form_update_button$6,
	oidc_clients_form_save_button: oidc_clients_form_save_button$6,
	oidc_clients_form_required_validator: oidc_clients_form_required_validator$6,
	oidc_clients_form_valid_url_validator: oidc_clients_form_valid_url_validator$6,
	oidc_provider_settings_title: oidc_provider_settings_title$6,
	oidc_provider_settings_issuer_label: oidc_provider_settings_issuer_label$6,
	oidc_provider_settings_token_expiry_label: oidc_provider_settings_token_expiry_label$6,
	oidc_provider_settings_refresh_token_expiry_label: oidc_provider_settings_refresh_token_expiry_label$6,
	oidc_provider_settings_code_expiry_label: oidc_provider_settings_code_expiry_label$6,
	oidc_provider_settings_allow_refresh_tokens_label: oidc_provider_settings_allow_refresh_tokens_label$6,
	oidc_provider_settings_key_pair_title: oidc_provider_settings_key_pair_title$6,
	oidc_provider_settings_key_instructions_part1: oidc_provider_settings_key_instructions_part1$6,
	oidc_provider_settings_key_instructions_part2: oidc_provider_settings_key_instructions_part2$6,
	oidc_provider_settings_public_key_label: oidc_provider_settings_public_key_label$6,
	oidc_provider_settings_private_key_label: oidc_provider_settings_private_key_label$6,
	oidc_provider_settings_private_key_warning: oidc_provider_settings_private_key_warning$6,
	oidc_provider_settings_generating_keys: oidc_provider_settings_generating_keys$6,
	oidc_provider_settings_generate_new_keys: oidc_provider_settings_generate_new_keys$6,
	oidc_provider_settings_crypto_note: oidc_provider_settings_crypto_note$6,
	oidc_provider_settings_cancel_changes: oidc_provider_settings_cancel_changes$6,
	oidc_provider_settings_saving: oidc_provider_settings_saving$6,
	oidc_provider_settings_save_changes: oidc_provider_settings_save_changes$6,
	oidc_provider_settings_config_endpoint_title: oidc_provider_settings_config_endpoint_title$6,
	oidc_provider_settings_copy_button: oidc_provider_settings_copy_button$6,
	oidc_provider_settings_jwks_endpoint_title: oidc_provider_settings_jwks_endpoint_title$6,
	oidc_provider_settings_load_failed: oidc_provider_settings_load_failed$6,
	oidc_provider_settings_load_failed_prefix: oidc_provider_settings_load_failed_prefix$6,
	oidc_provider_settings_issuer_invalid_format: oidc_provider_settings_issuer_invalid_format$6,
	oidc_provider_settings_validation_issuer_expiry: oidc_provider_settings_validation_issuer_expiry$6,
	oidc_provider_settings_validation_key_check: oidc_provider_settings_validation_key_check$6,
	oidc_provider_settings_validation_public_key_invalid: oidc_provider_settings_validation_public_key_invalid$6,
	oidc_provider_settings_validation_private_key_invalid: oidc_provider_settings_validation_private_key_invalid$6,
	oidc_provider_settings_validation_key_pair_required: oidc_provider_settings_validation_key_pair_required$6,
	oidc_provider_settings_save_success: oidc_provider_settings_save_success$6,
	oidc_provider_settings_save_failed_prefix: oidc_provider_settings_save_failed_prefix$6,
	oidc_provider_settings_changes_cancelled: oidc_provider_settings_changes_cancelled$6,
	oidc_provider_settings_crypto_warning_https: oidc_provider_settings_crypto_warning_https$6,
	oidc_provider_settings_crypto_warning_browser: oidc_provider_settings_crypto_warning_browser$6,
	oidc_provider_settings_crypto_api_unavailable: oidc_provider_settings_crypto_api_unavailable$6,
	oidc_provider_settings_generate_confirm: oidc_provider_settings_generate_confirm$6,
	oidc_provider_settings_generate_success: oidc_provider_settings_generate_success$6,
	oidc_provider_settings_generate_failed_prefix: oidc_provider_settings_generate_failed_prefix$6,
	oidc_provider_settings_generate_failed: oidc_provider_settings_generate_failed$6,
	oidc_provider_settings_copied: oidc_provider_settings_copied$6,
	oidc_provider_settings_copy_failed_prefix: oidc_provider_settings_copy_failed_prefix$6,
	oidc_provider_settings_copy_manual_prompt: oidc_provider_settings_copy_manual_prompt$6,
	oidc_logs_search_placeholder: oidc_logs_search_placeholder$6,
	oidc_logs_columns_client_name: oidc_logs_columns_client_name$6,
	oidc_logs_columns_client_uri: oidc_logs_columns_client_uri$6,
	oidc_logs_columns_client_id: oidc_logs_columns_client_id$6,
	oidc_logs_columns_username: oidc_logs_columns_username$6,
	oidc_logs_columns_date_created: oidc_logs_columns_date_created$6,
	oidc_logs_no_items_loading: oidc_logs_no_items_loading$6,
	oidc_logs_no_items_search_empty: oidc_logs_no_items_search_empty$6,
	oidc_logs_no_items_empty: oidc_logs_no_items_empty$6,
	oidc_logs_total_count: oidc_logs_total_count$6,
	oidc_logs_get_failed: oidc_logs_get_failed
};

var client_management$5 = "クライアント管理";
var provider_settings$5 = "サービス設定";
var user_logs$5 = "ユーザーログ";
var oidc_empty_key_error_tips$5 = "PrivateKeyとPublicKeyが空です，\"サービス設定\"でPrivateKeyとPublicKeyを生成してください。";
var oidc_clients_add_client$5 = "クライアントを追加";
var oidc_clients_search_placeholder$5 = "クライアント名またはIDを検索...";
var oidc_clients_status_active$5 = "アクティブ";
var oidc_clients_status_disabled$5 = "無効";
var oidc_clients_no_items_message$5 = "一致するクライアントは見つかりませんでした";
var oidc_clients_search_message$5 = "検索中...";
var oidc_clients_total_count$5 = "合計 {totalClients} クライアント";
var oidc_clients_edit_title$5 = "クライアントを編集";
var oidc_clients_add_title$5 = "新規クライアントを追加";
var oidc_clients_confirm_delete_title$5 = "削除の確認";
var oidc_clients_confirm_delete_message_part1$5 = "クライアント ";
var oidc_clients_confirm_delete_message_part2$5 = " を削除してもよろしいですか？この操作は元に戻せません。";
var oidc_clients_cancel$5 = "キャンセル";
var oidc_clients_confirm_delete_button$5 = "削除を確定";
var oidc_clients_delete_client_action$5 = "クライアントを削除";
var oidc_clients_columns_name$5 = "名前";
var oidc_clients_columns_client_id$5 = "クライアントID";
var oidc_clients_columns_status$5 = "ステータス";
var oidc_clients_columns_redirect_uri$5 = "リダイレクトURI";
var oidc_clients_columns_date_created$5 = "作成時間";
var oidc_clients_columns_actions$5 = "アクション";
var oidc_clients_get_lists_failed$5 = "クライアントリストの取得に失敗しました:";
var oidc_clients_get_deatil_failed$5 = "クライアント詳細の取得に失敗しました:";
var oidc_clients_save_client_failed$5 = "クライアントの保存に失敗しました:";
var oidc_clients_delete_client_failed$5 = "クライアントの削除に失敗しました:";
var oidc_clients_form_client_name_label$5 = "クライアント名";
var oidc_clients_form_client_name_placeholder$5 = "例：My Web Application";
var oidc_clients_form_client_site_label$5 = "クライアントサイトURL";
var oidc_clients_form_client_site_placeholder$5 = "例：http://example.com";
var oidc_clients_form_client_id_label$5 = "クライアントID";
var oidc_clients_form_client_id_placeholder$5 = "システムによって生成された一意の識別子";
var oidc_clients_form_client_secret_label$5 = "クライアントシークレット";
var oidc_clients_form_client_secret_placeholder$5 = "強力なシークレットを入力してください";
var oidc_clients_form_redirect_uri_label$5 = "リダイレクトURI";
var oidc_clients_form_redirect_uri_placeholder$5 = "例：http://localhost:8080/callback";
var oidc_clients_form_status_label$5 = "クライアントステータス";
var oidc_clients_form_status_active$5 = "アクティブ";
var oidc_clients_form_status_disabled$5 = "無効";
var oidc_clients_form_cancel_button$5 = "キャンセル";
var oidc_clients_form_update_button$5 = "更新";
var oidc_clients_form_save_button$5 = "保存";
var oidc_clients_form_required_validator$5 = "このフィールドは必須です";
var oidc_clients_form_valid_url_validator$5 = "有効なURL（例：http://example.com または myapp://callback）を入力してください";
var oidc_provider_settings_title$5 = "OIDCプロバイダー設定";
var oidc_provider_settings_issuer_label$5 = "発行者 (Issuer)";
var oidc_provider_settings_token_expiry_label$5 = "アクセストークンの有効期限（秒）";
var oidc_provider_settings_refresh_token_expiry_label$5 = "リフレッシュトークンの有効期限（秒）";
var oidc_provider_settings_code_expiry_label$5 = "CODEトークンの有効期限（秒）";
var oidc_provider_settings_allow_refresh_tokens_label$5 = "リフレッシュトークンを許可する";
var oidc_provider_settings_key_pair_title$5 = "RS256署名キーペア（公開鍵/秘密鍵）";
var oidc_provider_settings_key_instructions_part1$5 = "PEM形式で公開鍵と秘密鍵を手動で貼り付けるか、以下のボタンを使用して新しいキーペアを生成できます（ブラウザがサポートしている場合）。";
var oidc_provider_settings_key_instructions_part2$5 = "（この環境では自動生成はサポートされていません）";
var oidc_provider_settings_public_key_label$5 = "公開鍵（PEM形式）:";
var oidc_provider_settings_private_key_label$5 = "秘密鍵（PEM形式）:";
var oidc_provider_settings_private_key_warning$5 = "⚠️セキュリティ警告: 秘密鍵は細心の注意を払って取り扱ってください。安全な環境での貼り付けを確認し、盗み見や安全でないネットワーク経由での送信を避けてください。本番環境では、秘密鍵をフロントエンドで直接入力することは一般的に推奨されません。";
var oidc_provider_settings_generating_keys$5 = "生成中...";
var oidc_provider_settings_generate_new_keys$5 = "新しいキーペアを生成（上記を上書きします）";
var oidc_provider_settings_crypto_note$5 = "（HTTPSまたはlocalhostが必要です）";
var oidc_provider_settings_cancel_changes$5 = "変更をキャンセル";
var oidc_provider_settings_saving$5 = "保存中";
var oidc_provider_settings_save_changes$5 = "変更を保存";
var oidc_provider_settings_config_endpoint_title$5 = "OIDC設定エンドポイント";
var oidc_provider_settings_copy_button$5 = "コピー";
var oidc_provider_settings_jwks_endpoint_title$5 = "JWKSエンドポイント";
var oidc_provider_settings_load_failed$5 = "設定の読み込みに失敗しました。デフォルト値に戻されました。";
var oidc_provider_settings_load_failed_prefix$5 = "設定の読み込みに失敗しました:";
var oidc_provider_settings_issuer_invalid_format$5 = "発行者 (Issuer) の形式が無効です";
var oidc_provider_settings_validation_issuer_expiry$5 = "入力を確認してください。発行者が入力されており、有効期限が正の値であることを確認してください！";
var oidc_provider_settings_validation_key_check$5 = "入力された鍵を確認してください:\n";
var oidc_provider_settings_validation_public_key_invalid$5 = "- 公開鍵が有効なPEM形式ではないようです。\n";
var oidc_provider_settings_validation_private_key_invalid$5 = "- 秘密鍵が有効なPEM形式ではないようです。\n";
var oidc_provider_settings_validation_key_pair_required$5 = "公開鍵と秘密鍵の両方を提供するか、両方を空にしてください";
var oidc_provider_settings_save_success$5 = "設定が正常に保存されました！";
var oidc_provider_settings_save_failed_prefix$5 = "設定の保存に失敗しました:";
var oidc_provider_settings_changes_cancelled$5 = "変更はキャンセルされました";
var oidc_provider_settings_crypto_warning_https$5 = "警告: 現在のページはHTTPS経由でアクセスされていません。ブラウザが鍵の自動生成を制限しています。";
var oidc_provider_settings_crypto_warning_browser$5 = "警告: 現在のブラウザは鍵の自動生成をサポートしていません。";
var oidc_provider_settings_crypto_api_unavailable$5 = "Web Crypto APIは利用できません";
var oidc_provider_settings_generate_confirm$5 = "新しいキーペアを生成してもよろしいですか？これにより現在の鍵が上書きされます。";
var oidc_provider_settings_generate_success$5 = "新しいキーペアが正常に生成されました";
var oidc_provider_settings_generate_failed_prefix$5 = "鍵の生成に失敗しました:";
var oidc_provider_settings_generate_failed$5 = "鍵の生成に失敗しました";
var oidc_provider_settings_copied$5 = "クリップボードにコピーされました";
var oidc_provider_settings_copy_failed_prefix$5 = "コピーに失敗しました:";
var oidc_provider_settings_copy_manual_prompt$5 = "手動でコピーしてください:";
var oidc_logs_search_placeholder$5 = "ID、クライアントID、またはユーザーIDで検索...";
var oidc_logs_columns_client_name$5 = "クライアント名";
var oidc_logs_columns_client_uri$5 = "クライアントURI";
var oidc_logs_columns_client_id$5 = "クライアントID";
var oidc_logs_columns_username$5 = "ユーザー名";
var oidc_logs_columns_date_created$5 = "呼び出し時間";
var oidc_logs_no_items_loading$5 = "読み込み中...";
var oidc_logs_no_items_search_empty$5 = "一致するトークンは見つかりませんでした。";
var oidc_logs_no_items_empty$5 = "表示するトークンがありません。";
var oidc_logs_total_count$5 = "合計 {totalLogs} ログ";
var oidc_logs_get_error$5 = "ログリストの取得に失敗しました:";
var ja = {
	client_management: client_management$5,
	provider_settings: provider_settings$5,
	user_logs: user_logs$5,
	oidc_empty_key_error_tips: oidc_empty_key_error_tips$5,
	oidc_clients_add_client: oidc_clients_add_client$5,
	oidc_clients_search_placeholder: oidc_clients_search_placeholder$5,
	oidc_clients_status_active: oidc_clients_status_active$5,
	oidc_clients_status_disabled: oidc_clients_status_disabled$5,
	oidc_clients_no_items_message: oidc_clients_no_items_message$5,
	oidc_clients_search_message: oidc_clients_search_message$5,
	oidc_clients_total_count: oidc_clients_total_count$5,
	oidc_clients_edit_title: oidc_clients_edit_title$5,
	oidc_clients_add_title: oidc_clients_add_title$5,
	oidc_clients_confirm_delete_title: oidc_clients_confirm_delete_title$5,
	oidc_clients_confirm_delete_message_part1: oidc_clients_confirm_delete_message_part1$5,
	oidc_clients_confirm_delete_message_part2: oidc_clients_confirm_delete_message_part2$5,
	oidc_clients_cancel: oidc_clients_cancel$5,
	oidc_clients_confirm_delete_button: oidc_clients_confirm_delete_button$5,
	oidc_clients_delete_client_action: oidc_clients_delete_client_action$5,
	oidc_clients_columns_name: oidc_clients_columns_name$5,
	oidc_clients_columns_client_id: oidc_clients_columns_client_id$5,
	oidc_clients_columns_status: oidc_clients_columns_status$5,
	oidc_clients_columns_redirect_uri: oidc_clients_columns_redirect_uri$5,
	oidc_clients_columns_date_created: oidc_clients_columns_date_created$5,
	oidc_clients_columns_actions: oidc_clients_columns_actions$5,
	oidc_clients_get_lists_failed: oidc_clients_get_lists_failed$5,
	oidc_clients_get_deatil_failed: oidc_clients_get_deatil_failed$5,
	oidc_clients_save_client_failed: oidc_clients_save_client_failed$5,
	oidc_clients_delete_client_failed: oidc_clients_delete_client_failed$5,
	oidc_clients_form_client_name_label: oidc_clients_form_client_name_label$5,
	oidc_clients_form_client_name_placeholder: oidc_clients_form_client_name_placeholder$5,
	oidc_clients_form_client_site_label: oidc_clients_form_client_site_label$5,
	oidc_clients_form_client_site_placeholder: oidc_clients_form_client_site_placeholder$5,
	oidc_clients_form_client_id_label: oidc_clients_form_client_id_label$5,
	oidc_clients_form_client_id_placeholder: oidc_clients_form_client_id_placeholder$5,
	oidc_clients_form_client_secret_label: oidc_clients_form_client_secret_label$5,
	oidc_clients_form_client_secret_placeholder: oidc_clients_form_client_secret_placeholder$5,
	oidc_clients_form_redirect_uri_label: oidc_clients_form_redirect_uri_label$5,
	oidc_clients_form_redirect_uri_placeholder: oidc_clients_form_redirect_uri_placeholder$5,
	oidc_clients_form_status_label: oidc_clients_form_status_label$5,
	oidc_clients_form_status_active: oidc_clients_form_status_active$5,
	oidc_clients_form_status_disabled: oidc_clients_form_status_disabled$5,
	oidc_clients_form_cancel_button: oidc_clients_form_cancel_button$5,
	oidc_clients_form_update_button: oidc_clients_form_update_button$5,
	oidc_clients_form_save_button: oidc_clients_form_save_button$5,
	oidc_clients_form_required_validator: oidc_clients_form_required_validator$5,
	oidc_clients_form_valid_url_validator: oidc_clients_form_valid_url_validator$5,
	oidc_provider_settings_title: oidc_provider_settings_title$5,
	oidc_provider_settings_issuer_label: oidc_provider_settings_issuer_label$5,
	oidc_provider_settings_token_expiry_label: oidc_provider_settings_token_expiry_label$5,
	oidc_provider_settings_refresh_token_expiry_label: oidc_provider_settings_refresh_token_expiry_label$5,
	oidc_provider_settings_code_expiry_label: oidc_provider_settings_code_expiry_label$5,
	oidc_provider_settings_allow_refresh_tokens_label: oidc_provider_settings_allow_refresh_tokens_label$5,
	oidc_provider_settings_key_pair_title: oidc_provider_settings_key_pair_title$5,
	oidc_provider_settings_key_instructions_part1: oidc_provider_settings_key_instructions_part1$5,
	oidc_provider_settings_key_instructions_part2: oidc_provider_settings_key_instructions_part2$5,
	oidc_provider_settings_public_key_label: oidc_provider_settings_public_key_label$5,
	oidc_provider_settings_private_key_label: oidc_provider_settings_private_key_label$5,
	oidc_provider_settings_private_key_warning: oidc_provider_settings_private_key_warning$5,
	oidc_provider_settings_generating_keys: oidc_provider_settings_generating_keys$5,
	oidc_provider_settings_generate_new_keys: oidc_provider_settings_generate_new_keys$5,
	oidc_provider_settings_crypto_note: oidc_provider_settings_crypto_note$5,
	oidc_provider_settings_cancel_changes: oidc_provider_settings_cancel_changes$5,
	oidc_provider_settings_saving: oidc_provider_settings_saving$5,
	oidc_provider_settings_save_changes: oidc_provider_settings_save_changes$5,
	oidc_provider_settings_config_endpoint_title: oidc_provider_settings_config_endpoint_title$5,
	oidc_provider_settings_copy_button: oidc_provider_settings_copy_button$5,
	oidc_provider_settings_jwks_endpoint_title: oidc_provider_settings_jwks_endpoint_title$5,
	oidc_provider_settings_load_failed: oidc_provider_settings_load_failed$5,
	oidc_provider_settings_load_failed_prefix: oidc_provider_settings_load_failed_prefix$5,
	oidc_provider_settings_issuer_invalid_format: oidc_provider_settings_issuer_invalid_format$5,
	oidc_provider_settings_validation_issuer_expiry: oidc_provider_settings_validation_issuer_expiry$5,
	oidc_provider_settings_validation_key_check: oidc_provider_settings_validation_key_check$5,
	oidc_provider_settings_validation_public_key_invalid: oidc_provider_settings_validation_public_key_invalid$5,
	oidc_provider_settings_validation_private_key_invalid: oidc_provider_settings_validation_private_key_invalid$5,
	oidc_provider_settings_validation_key_pair_required: oidc_provider_settings_validation_key_pair_required$5,
	oidc_provider_settings_save_success: oidc_provider_settings_save_success$5,
	oidc_provider_settings_save_failed_prefix: oidc_provider_settings_save_failed_prefix$5,
	oidc_provider_settings_changes_cancelled: oidc_provider_settings_changes_cancelled$5,
	oidc_provider_settings_crypto_warning_https: oidc_provider_settings_crypto_warning_https$5,
	oidc_provider_settings_crypto_warning_browser: oidc_provider_settings_crypto_warning_browser$5,
	oidc_provider_settings_crypto_api_unavailable: oidc_provider_settings_crypto_api_unavailable$5,
	oidc_provider_settings_generate_confirm: oidc_provider_settings_generate_confirm$5,
	oidc_provider_settings_generate_success: oidc_provider_settings_generate_success$5,
	oidc_provider_settings_generate_failed_prefix: oidc_provider_settings_generate_failed_prefix$5,
	oidc_provider_settings_generate_failed: oidc_provider_settings_generate_failed$5,
	oidc_provider_settings_copied: oidc_provider_settings_copied$5,
	oidc_provider_settings_copy_failed_prefix: oidc_provider_settings_copy_failed_prefix$5,
	oidc_provider_settings_copy_manual_prompt: oidc_provider_settings_copy_manual_prompt$5,
	oidc_logs_search_placeholder: oidc_logs_search_placeholder$5,
	oidc_logs_columns_client_name: oidc_logs_columns_client_name$5,
	oidc_logs_columns_client_uri: oidc_logs_columns_client_uri$5,
	oidc_logs_columns_client_id: oidc_logs_columns_client_id$5,
	oidc_logs_columns_username: oidc_logs_columns_username$5,
	oidc_logs_columns_date_created: oidc_logs_columns_date_created$5,
	oidc_logs_no_items_loading: oidc_logs_no_items_loading$5,
	oidc_logs_no_items_search_empty: oidc_logs_no_items_search_empty$5,
	oidc_logs_no_items_empty: oidc_logs_no_items_empty$5,
	oidc_logs_total_count: oidc_logs_total_count$5,
	oidc_logs_get_error: oidc_logs_get_error$5
};

var client_management$4 = "클라이언트 관리";
var provider_settings$4 = "서비스 설정";
var user_logs$4 = "사용자 로그";
var oidc_empty_key_error_tips$4 = "PrivateKey과 PublicKey이 비어 있습니다, \"서비스 설정\"에서 PrivateKey과 PublicKey을 생성해 주세요.";
var oidc_clients_add_client$4 = "클라이언트 추가";
var oidc_clients_search_placeholder$4 = "클라이언트 이름 또는 ID 검색...";
var oidc_clients_status_active$4 = "활성";
var oidc_clients_status_disabled$4 = "비활성";
var oidc_clients_no_items_message$4 = "일치하는 클라이언트를 찾을 수 없습니다";
var oidc_clients_search_message$4 = "검색 중...";
var oidc_clients_total_count$4 = "총 {totalClients}개 클라이언트";
var oidc_clients_edit_title$4 = "클라이언트 편집";
var oidc_clients_add_title$4 = "새 클라이언트 추가";
var oidc_clients_confirm_delete_title$4 = "삭제 확인";
var oidc_clients_confirm_delete_message_part1$4 = "클라이언트 ";
var oidc_clients_confirm_delete_message_part2$4 = "를 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.";
var oidc_clients_cancel$4 = "취소";
var oidc_clients_confirm_delete_button$4 = "삭제 확인";
var oidc_clients_delete_client_action$4 = "클라이언트 삭제";
var oidc_clients_columns_name$4 = "이름";
var oidc_clients_columns_client_id$4 = "클라이언트 ID";
var oidc_clients_columns_status$4 = "상태";
var oidc_clients_columns_redirect_uri$4 = "리디렉션 URI";
var oidc_clients_columns_date_created$4 = "생성 시간";
var oidc_clients_columns_actions$4 = "작업";
var oidc_clients_get_lists_failed$4 = "클라이언트 목록 가져오기 실패:";
var oidc_clients_get_deatil_failed$4 = "클라이언트 세부 정보 가져오기 실패:";
var oidc_clients_save_client_failed$4 = "클라이언트 저장 실패:";
var oidc_clients_delete_client_failed$4 = "클라이언트 삭제 실패:";
var oidc_clients_form_client_name_label$4 = "클라이언트 이름";
var oidc_clients_form_client_name_placeholder$4 = "예: 내 웹 애플리케이션";
var oidc_clients_form_client_site_label$4 = "클라이언트 사이트 URL";
var oidc_clients_form_client_site_placeholder$4 = "예: http://example.com";
var oidc_clients_form_client_id_label$4 = "클라이언트 ID";
var oidc_clients_form_client_id_placeholder$4 = "시스템 생성 고유 식별자";
var oidc_clients_form_client_secret_label$4 = "클라이언트 시크릿";
var oidc_clients_form_client_secret_placeholder$4 = "강력한 시크릿 입력";
var oidc_clients_form_redirect_uri_label$4 = "리디렉션 URI";
var oidc_clients_form_redirect_uri_placeholder$4 = "예: http://localhost:8080/callback";
var oidc_clients_form_status_label$4 = "클라이언트 상태";
var oidc_clients_form_status_active$4 = "활성";
var oidc_clients_form_status_disabled$4 = "비활성";
var oidc_clients_form_cancel_button$4 = "취소";
var oidc_clients_form_update_button$4 = "업데이트";
var oidc_clients_form_save_button$4 = "저장";
var oidc_clients_form_required_validator$4 = "필수 필드입니다";
var oidc_clients_form_valid_url_validator$4 = "유효한 URL을 입력하세요 (예: http://example.com 또는 myapp://callback)";
var oidc_provider_settings_title$4 = "OIDC 제공자 설정";
var oidc_provider_settings_issuer_label$4 = "발급자 (Issuer)";
var oidc_provider_settings_token_expiry_label$4 = "액세스 토큰 만료 (초)";
var oidc_provider_settings_refresh_token_expiry_label$4 = "갱신 토큰 만료 (초)";
var oidc_provider_settings_code_expiry_label$4 = "CODE 토큰 만료 (초)";
var oidc_provider_settings_allow_refresh_tokens_label$4 = "갱신 토큰 허용";
var oidc_provider_settings_key_pair_title$4 = "RS256 서명 키 쌍 (공개/개인)";
var oidc_provider_settings_key_instructions_part1$4 = "PEM 형식으로 공개 및 개인 키를 수동으로 붙여넣거나, 아래 버튼을 사용하여 새 키 쌍을 생성할 수 있습니다 (브라우저가 지원하는 경우).";
var oidc_provider_settings_key_instructions_part2$4 = "(이 환경에서는 자동 생성 지원하지 않음)";
var oidc_provider_settings_public_key_label$4 = "공개 키 (PEM 형식):";
var oidc_provider_settings_private_key_label$4 = "개인 키 (PEM 형식):";
var oidc_provider_settings_private_key_warning$4 = "⚠️보안 경고: 개인 키는 극도로 주의하여 다루십시오. 안전한 환경에서 붙여넣고, 관찰이나 불안전한 네트워크를 통한 전송을 피하십시오. 프로덕션 환경에서는 프런트엔드에 직접 개인 키를 입력하는 것은 일반적으로 권장되지 않습니다.";
var oidc_provider_settings_generating_keys$4 = "생성 중...";
var oidc_provider_settings_generate_new_keys$4 = "새 키 쌍 생성 (위의 내용 덮어쓰기)";
var oidc_provider_settings_crypto_note$4 = "(HTTPS 또는 localhost 활성화 필요)";
var oidc_provider_settings_cancel_changes$4 = "변경 사항 취소";
var oidc_provider_settings_saving$4 = "저장 중";
var oidc_provider_settings_save_changes$4 = "변경 사항 저장";
var oidc_provider_settings_config_endpoint_title$4 = "OIDC 구성 엔드포인트";
var oidc_provider_settings_copy_button$4 = "복사";
var oidc_provider_settings_jwks_endpoint_title$4 = "JWKS 엔드포인트";
var oidc_provider_settings_load_failed$4 = "설정 로드 실패, 기본 값으로 복원됨";
var oidc_provider_settings_load_failed_prefix$4 = "설정 로드 실패:";
var oidc_provider_settings_issuer_invalid_format$4 = "유효하지 않은 발급자 형식";
var oidc_provider_settings_validation_issuer_expiry$4 = "입력을 확인하고, 발급자가 채워져 있고 만료 시간이 양수인지 확인하십시오!";
var oidc_provider_settings_validation_key_check$4 = "입력된 키를 확인하십시오:\n";
var oidc_provider_settings_validation_public_key_invalid$4 = "- 공개 키가 유효한 PEM 형식이 아닌 것 같습니다\n";
var oidc_provider_settings_validation_private_key_invalid$4 = "- 개인 키가 유효한 PEM 형식이 아닌 것 같습니다\n";
var oidc_provider_settings_validation_key_pair_required$4 = "공개 키와 개인 키를 모두 제공하거나 둘 다 비워두십시오";
var oidc_provider_settings_save_success$4 = "설정 저장 성공!";
var oidc_provider_settings_save_failed_prefix$4 = "설정 저장 실패:";
var oidc_provider_settings_changes_cancelled$4 = "변경 사항 취소됨";
var oidc_provider_settings_crypto_warning_https$4 = "경고: 현재 페이지가 HTTPS를 통해 액세스되지 않습니다. 브라우저가 키 자동 생성을 제한합니다";
var oidc_provider_settings_crypto_warning_browser$4 = "경고: 현재 브라우저가 키 자동 생성을 지원하지 않습니다";
var oidc_provider_settings_crypto_api_unavailable$4 = "Web 암호화 API를 사용할 수 없습니다";
var oidc_provider_settings_generate_confirm$4 = "정말로 새 키 쌍을 생성하시겠습니까? 현재 키를 덮어씁니다.";
var oidc_provider_settings_generate_success$4 = "새 키 쌍 생성 성공";
var oidc_provider_settings_generate_failed_prefix$4 = "키 생성 실패:";
var oidc_provider_settings_generate_failed$4 = "키 생성 실패";
var oidc_provider_settings_copied$4 = "클립보드에 복사됨";
var oidc_provider_settings_copy_failed_prefix$4 = "복사 실패:";
var oidc_provider_settings_copy_manual_prompt$4 = "수동으로 복사하십시오:";
var oidc_logs_search_placeholder$4 = "ID, 클라이언트 ID 또는 사용자 ID로 검색...";
var oidc_logs_columns_client_name$4 = "클라이언트 이름";
var oidc_logs_columns_client_uri$4 = "클라이언트 URI";
var oidc_logs_columns_client_id$4 = "클라이언트 ID";
var oidc_logs_columns_username$4 = "사용자 이름";
var oidc_logs_columns_date_created$4 = "호출 시간";
var oidc_logs_no_items_loading$4 = "로드 중...";
var oidc_logs_no_items_search_empty$4 = "일치하는 토큰을 찾을 수 없습니다.";
var oidc_logs_no_items_empty$4 = "표시할 토큰이 없습니다.";
var oidc_logs_total_count$4 = "총 {totalLogs}개 로그";
var oidc_logs_get_error$4 = "로그 목록 검색 실패:";
var ko = {
	client_management: client_management$4,
	provider_settings: provider_settings$4,
	user_logs: user_logs$4,
	oidc_empty_key_error_tips: oidc_empty_key_error_tips$4,
	oidc_clients_add_client: oidc_clients_add_client$4,
	oidc_clients_search_placeholder: oidc_clients_search_placeholder$4,
	oidc_clients_status_active: oidc_clients_status_active$4,
	oidc_clients_status_disabled: oidc_clients_status_disabled$4,
	oidc_clients_no_items_message: oidc_clients_no_items_message$4,
	oidc_clients_search_message: oidc_clients_search_message$4,
	oidc_clients_total_count: oidc_clients_total_count$4,
	oidc_clients_edit_title: oidc_clients_edit_title$4,
	oidc_clients_add_title: oidc_clients_add_title$4,
	oidc_clients_confirm_delete_title: oidc_clients_confirm_delete_title$4,
	oidc_clients_confirm_delete_message_part1: oidc_clients_confirm_delete_message_part1$4,
	oidc_clients_confirm_delete_message_part2: oidc_clients_confirm_delete_message_part2$4,
	oidc_clients_cancel: oidc_clients_cancel$4,
	oidc_clients_confirm_delete_button: oidc_clients_confirm_delete_button$4,
	oidc_clients_delete_client_action: oidc_clients_delete_client_action$4,
	oidc_clients_columns_name: oidc_clients_columns_name$4,
	oidc_clients_columns_client_id: oidc_clients_columns_client_id$4,
	oidc_clients_columns_status: oidc_clients_columns_status$4,
	oidc_clients_columns_redirect_uri: oidc_clients_columns_redirect_uri$4,
	oidc_clients_columns_date_created: oidc_clients_columns_date_created$4,
	oidc_clients_columns_actions: oidc_clients_columns_actions$4,
	oidc_clients_get_lists_failed: oidc_clients_get_lists_failed$4,
	oidc_clients_get_deatil_failed: oidc_clients_get_deatil_failed$4,
	oidc_clients_save_client_failed: oidc_clients_save_client_failed$4,
	oidc_clients_delete_client_failed: oidc_clients_delete_client_failed$4,
	oidc_clients_form_client_name_label: oidc_clients_form_client_name_label$4,
	oidc_clients_form_client_name_placeholder: oidc_clients_form_client_name_placeholder$4,
	oidc_clients_form_client_site_label: oidc_clients_form_client_site_label$4,
	oidc_clients_form_client_site_placeholder: oidc_clients_form_client_site_placeholder$4,
	oidc_clients_form_client_id_label: oidc_clients_form_client_id_label$4,
	oidc_clients_form_client_id_placeholder: oidc_clients_form_client_id_placeholder$4,
	oidc_clients_form_client_secret_label: oidc_clients_form_client_secret_label$4,
	oidc_clients_form_client_secret_placeholder: oidc_clients_form_client_secret_placeholder$4,
	oidc_clients_form_redirect_uri_label: oidc_clients_form_redirect_uri_label$4,
	oidc_clients_form_redirect_uri_placeholder: oidc_clients_form_redirect_uri_placeholder$4,
	oidc_clients_form_status_label: oidc_clients_form_status_label$4,
	oidc_clients_form_status_active: oidc_clients_form_status_active$4,
	oidc_clients_form_status_disabled: oidc_clients_form_status_disabled$4,
	oidc_clients_form_cancel_button: oidc_clients_form_cancel_button$4,
	oidc_clients_form_update_button: oidc_clients_form_update_button$4,
	oidc_clients_form_save_button: oidc_clients_form_save_button$4,
	oidc_clients_form_required_validator: oidc_clients_form_required_validator$4,
	oidc_clients_form_valid_url_validator: oidc_clients_form_valid_url_validator$4,
	oidc_provider_settings_title: oidc_provider_settings_title$4,
	oidc_provider_settings_issuer_label: oidc_provider_settings_issuer_label$4,
	oidc_provider_settings_token_expiry_label: oidc_provider_settings_token_expiry_label$4,
	oidc_provider_settings_refresh_token_expiry_label: oidc_provider_settings_refresh_token_expiry_label$4,
	oidc_provider_settings_code_expiry_label: oidc_provider_settings_code_expiry_label$4,
	oidc_provider_settings_allow_refresh_tokens_label: oidc_provider_settings_allow_refresh_tokens_label$4,
	oidc_provider_settings_key_pair_title: oidc_provider_settings_key_pair_title$4,
	oidc_provider_settings_key_instructions_part1: oidc_provider_settings_key_instructions_part1$4,
	oidc_provider_settings_key_instructions_part2: oidc_provider_settings_key_instructions_part2$4,
	oidc_provider_settings_public_key_label: oidc_provider_settings_public_key_label$4,
	oidc_provider_settings_private_key_label: oidc_provider_settings_private_key_label$4,
	oidc_provider_settings_private_key_warning: oidc_provider_settings_private_key_warning$4,
	oidc_provider_settings_generating_keys: oidc_provider_settings_generating_keys$4,
	oidc_provider_settings_generate_new_keys: oidc_provider_settings_generate_new_keys$4,
	oidc_provider_settings_crypto_note: oidc_provider_settings_crypto_note$4,
	oidc_provider_settings_cancel_changes: oidc_provider_settings_cancel_changes$4,
	oidc_provider_settings_saving: oidc_provider_settings_saving$4,
	oidc_provider_settings_save_changes: oidc_provider_settings_save_changes$4,
	oidc_provider_settings_config_endpoint_title: oidc_provider_settings_config_endpoint_title$4,
	oidc_provider_settings_copy_button: oidc_provider_settings_copy_button$4,
	oidc_provider_settings_jwks_endpoint_title: oidc_provider_settings_jwks_endpoint_title$4,
	oidc_provider_settings_load_failed: oidc_provider_settings_load_failed$4,
	oidc_provider_settings_load_failed_prefix: oidc_provider_settings_load_failed_prefix$4,
	oidc_provider_settings_issuer_invalid_format: oidc_provider_settings_issuer_invalid_format$4,
	oidc_provider_settings_validation_issuer_expiry: oidc_provider_settings_validation_issuer_expiry$4,
	oidc_provider_settings_validation_key_check: oidc_provider_settings_validation_key_check$4,
	oidc_provider_settings_validation_public_key_invalid: oidc_provider_settings_validation_public_key_invalid$4,
	oidc_provider_settings_validation_private_key_invalid: oidc_provider_settings_validation_private_key_invalid$4,
	oidc_provider_settings_validation_key_pair_required: oidc_provider_settings_validation_key_pair_required$4,
	oidc_provider_settings_save_success: oidc_provider_settings_save_success$4,
	oidc_provider_settings_save_failed_prefix: oidc_provider_settings_save_failed_prefix$4,
	oidc_provider_settings_changes_cancelled: oidc_provider_settings_changes_cancelled$4,
	oidc_provider_settings_crypto_warning_https: oidc_provider_settings_crypto_warning_https$4,
	oidc_provider_settings_crypto_warning_browser: oidc_provider_settings_crypto_warning_browser$4,
	oidc_provider_settings_crypto_api_unavailable: oidc_provider_settings_crypto_api_unavailable$4,
	oidc_provider_settings_generate_confirm: oidc_provider_settings_generate_confirm$4,
	oidc_provider_settings_generate_success: oidc_provider_settings_generate_success$4,
	oidc_provider_settings_generate_failed_prefix: oidc_provider_settings_generate_failed_prefix$4,
	oidc_provider_settings_generate_failed: oidc_provider_settings_generate_failed$4,
	oidc_provider_settings_copied: oidc_provider_settings_copied$4,
	oidc_provider_settings_copy_failed_prefix: oidc_provider_settings_copy_failed_prefix$4,
	oidc_provider_settings_copy_manual_prompt: oidc_provider_settings_copy_manual_prompt$4,
	oidc_logs_search_placeholder: oidc_logs_search_placeholder$4,
	oidc_logs_columns_client_name: oidc_logs_columns_client_name$4,
	oidc_logs_columns_client_uri: oidc_logs_columns_client_uri$4,
	oidc_logs_columns_client_id: oidc_logs_columns_client_id$4,
	oidc_logs_columns_username: oidc_logs_columns_username$4,
	oidc_logs_columns_date_created: oidc_logs_columns_date_created$4,
	oidc_logs_no_items_loading: oidc_logs_no_items_loading$4,
	oidc_logs_no_items_search_empty: oidc_logs_no_items_search_empty$4,
	oidc_logs_no_items_empty: oidc_logs_no_items_empty$4,
	oidc_logs_total_count: oidc_logs_total_count$4,
	oidc_logs_get_error: oidc_logs_get_error$4
};

var client_management$3 = "Kundenverwaltung";
var provider_settings$3 = "Anbietereinstellungen";
var user_logs$3 = "Benutzerprotokolle";
var oidc_empty_key_error_tips$3 = "PrivateKey und PublicKey sind leer, bitte gehen Sie zu \"Anbietereinstellungen\", um PrivateKey und PublicKey zu generieren.";
var oidc_clients_add_client$3 = "Client hinzufügen";
var oidc_clients_search_placeholder$3 = "Clientname oder ID suchen...";
var oidc_clients_status_active$3 = "Aktiv";
var oidc_clients_status_disabled$3 = "Deaktiviert";
var oidc_clients_no_items_message$3 = "Keine passenden Clients gefunden";
var oidc_clients_search_message$3 = "Suchen...";
var oidc_clients_total_count$3 = "Gesamt {totalClients} Clients";
var oidc_clients_edit_title$3 = "Client bearbeiten";
var oidc_clients_add_title$3 = "Neuen Client hinzufügen";
var oidc_clients_confirm_delete_title$3 = "Löschung bestätigen";
var oidc_clients_confirm_delete_message_part1$3 = "Sind Sie sicher, dass Sie den Client ";
var oidc_clients_confirm_delete_message_part2$3 = "löschen möchten? Diese Aktion kann nicht rückgängig gemacht werden.";
var oidc_clients_cancel$3 = "Abbrechen";
var oidc_clients_confirm_delete_button$3 = "Löschung bestätigen";
var oidc_clients_delete_client_action$3 = "Client löschen";
var oidc_clients_columns_name$3 = "Name";
var oidc_clients_columns_client_id$3 = "Client ID";
var oidc_clients_columns_status$3 = "Status";
var oidc_clients_columns_redirect_uri$3 = "Weiterleitungs-URI";
var oidc_clients_columns_date_created$3 = "Erstellungszeit";
var oidc_clients_columns_actions$3 = "Aktionen";
var oidc_clients_get_lists_failed$3 = "Fehler beim Abrufen der Clientliste:";
var oidc_clients_get_deatil_failed$3 = "Fehler beim Abrufen der Clientdetails:";
var oidc_clients_save_client_failed$3 = "Fehler beim Speichern des Clients:";
var oidc_clients_delete_client_failed$3 = "Fehler beim Löschen des Clients:";
var oidc_clients_form_client_name_label$3 = "Clientname";
var oidc_clients_form_client_name_placeholder$3 = "z.B. Meine Webanwendung";
var oidc_clients_form_client_site_label$3 = "Client Website URL";
var oidc_clients_form_client_site_placeholder$3 = "z.B. http://example.com";
var oidc_clients_form_client_id_label$3 = "Client ID";
var oidc_clients_form_client_id_placeholder$3 = "Vom System generierte eindeutige Kennung";
var oidc_clients_form_client_secret_label$3 = "Client Secret";
var oidc_clients_form_client_secret_placeholder$3 = "Geben Sie ein starkes Secret ein";
var oidc_clients_form_redirect_uri_label$3 = "Weiterleitungs-URI";
var oidc_clients_form_redirect_uri_placeholder$3 = "z.B. http://localhost:8080/callback";
var oidc_clients_form_status_label$3 = "Clientstatus";
var oidc_clients_form_status_active$3 = "Aktiv";
var oidc_clients_form_status_disabled$3 = "Deaktiviert";
var oidc_clients_form_cancel_button$3 = "Abbrechen";
var oidc_clients_form_update_button$3 = "Aktualisieren";
var oidc_clients_form_save_button$3 = "Speichern";
var oidc_clients_form_required_validator$3 = "Dieses Feld ist erforderlich";
var oidc_clients_form_valid_url_validator$3 = "Bitte geben Sie eine gültige URL ein (z.B. http://example.com oder myapp://callback)";
var oidc_provider_settings_title$3 = "OIDC-Anbietereinstellungen";
var oidc_provider_settings_issuer_label$3 = "Aussteller";
var oidc_provider_settings_token_expiry_label$3 = "Zugriffstoken-Ablauf (Sekunden)";
var oidc_provider_settings_refresh_token_expiry_label$3 = "Refresh Token-Ablauf (Sekunden)";
var oidc_provider_settings_code_expiry_label$3 = "CODE Token-Ablauf (Sekunden)";
var oidc_provider_settings_allow_refresh_tokens_label$3 = "Refresh Tokens zulassen";
var oidc_provider_settings_key_pair_title$3 = "RS256 Signaturschlüsselpaar (Public/Private)";
var oidc_provider_settings_key_instructions_part1$3 = "Sie können die öffentlichen und privaten Schlüssel manuell im PEM-Format einfügen oder den Button unten verwenden, um ein neues Schlüsselpaar zu generieren (falls Ihr Browser dies unterstützt).";
var oidc_provider_settings_key_instructions_part2$3 = "(Automatische Generierung in dieser Umgebung nicht unterstützt)";
var oidc_provider_settings_public_key_label$3 = "Öffentlicher Schlüssel (PEM-Format):";
var oidc_provider_settings_private_key_label$3 = "Privater Schlüssel (PEM-Format):";
var oidc_provider_settings_private_key_warning$3 = "⚠️ Sicherheitshinweis: Gehen Sie mit dem privaten Schlüssel äußerst vorsichtig um. Stellen Sie sicher, dass Sie ihn in einer sicheren Umgebung einfügen und vermeiden Sie die Beobachtung oder Übertragung über unsichere Netzwerke. In Produktionsumgebungen wird die direkte Eingabe des privaten Schlüssels im Frontend im Allgemeinen nicht empfohlen.";
var oidc_provider_settings_generating_keys$3 = "Wird generiert...";
var oidc_provider_settings_generate_new_keys$3 = "Neues Schlüsselpaar generieren (überschreibt oben)";
var oidc_provider_settings_crypto_note$3 = "(Erfordert HTTPS oder localhost)";
var oidc_provider_settings_cancel_changes$3 = "Änderungen abbrechen";
var oidc_provider_settings_saving$3 = "Wird gespeichert";
var oidc_provider_settings_save_changes$3 = "Änderungen speichern";
var oidc_provider_settings_config_endpoint_title$3 = "OIDC Konfigurationsendpunkt";
var oidc_provider_settings_copy_button$3 = "Kopieren";
var oidc_provider_settings_jwks_endpoint_title$3 = "JWKS Endpunkt";
var oidc_provider_settings_load_failed$3 = "Fehler beim Laden der Einstellungen, auf Standardwerte zurückgesetzt";
var oidc_provider_settings_load_failed_prefix$3 = "Fehler beim Laden der Einstellungen:";
var oidc_provider_settings_issuer_invalid_format$3 = "Ungültiges Ausstellerformat";
var oidc_provider_settings_validation_issuer_expiry$3 = "Bitte überprüfen Sie die Eingaben, stellen Sie sicher, dass der Aussteller ausgefüllt ist und die Ablaufzeiten positiv sind!";
var oidc_provider_settings_validation_key_check$3 = "Bitte überprüfen Sie die eingegebenen Schlüssel:\n";
var oidc_provider_settings_validation_public_key_invalid$3 = "- Öffentlicher Schlüssel scheint kein gültiges PEM-Format zu sein\n";
var oidc_provider_settings_validation_private_key_invalid$3 = "- Privater Schlüssel scheint kein gültiges PEM-Format zu sein\n";
var oidc_provider_settings_validation_key_pair_required$3 = "Bitte geben Sie sowohl den öffentlichen als auch den privaten Schlüssel an oder lassen Sie beide leer.";
var oidc_provider_settings_save_success$3 = "Einstellungen erfolgreich gespeichert!";
var oidc_provider_settings_save_failed_prefix$3 = "Fehler beim Speichern der Einstellungen:";
var oidc_provider_settings_changes_cancelled$3 = "Änderungen abgebrochen";
var oidc_provider_settings_crypto_warning_https$3 = "Warnung: Die aktuelle Seite wird nicht über HTTPS aufgerufen, der Browser schränkt die automatische Schlüsselgenerierung ein.";
var oidc_provider_settings_crypto_warning_browser$3 = "Warnung: Der aktuelle Browser unterstützt die automatische Schlüsselgenerierung nicht.";
var oidc_provider_settings_crypto_api_unavailable$3 = "Web Crypto API nicht verfügbar";
var oidc_provider_settings_generate_confirm$3 = "Sind Sie sicher, dass Sie ein neues Schlüsselpaar generieren möchten? Dies überschreibt die aktuellen Schlüssel.";
var oidc_provider_settings_generate_success$3 = "Neues Schlüsselpaar erfolgreich generiert";
var oidc_provider_settings_generate_failed_prefix$3 = "Schlüsselgenerierung fehlgeschlagen:";
var oidc_provider_settings_generate_failed$3 = "Schlüsselgenerierung fehlgeschlagen";
var oidc_provider_settings_copied$3 = "In die Zwischenablage kopiert";
var oidc_provider_settings_copy_failed_prefix$3 = "Kopieren fehlgeschlagen:";
var oidc_provider_settings_copy_manual_prompt$3 = "Bitte manuell kopieren:";
var oidc_logs_search_placeholder$3 = "Nach ID, Client ID oder Benutzer-ID suchen...";
var oidc_logs_columns_client_name$3 = "Clientname";
var oidc_logs_columns_client_uri$3 = "Client URI";
var oidc_logs_columns_client_id$3 = "Client ID";
var oidc_logs_columns_username$3 = "Benutzername";
var oidc_logs_columns_date_created$3 = "Aufrufzeit";
var oidc_logs_no_items_loading$3 = "Wird geladen...";
var oidc_logs_no_items_search_empty$3 = "Keine passenden Token gefunden.";
var oidc_logs_no_items_empty$3 = "Keine Token anzuzeigen.";
var oidc_logs_total_count$3 = "Gesamt {totalLogs} Logs";
var oidc_logs_get_error$3 = "Fehler beim Abrufen der Log-Liste:";
var de = {
	client_management: client_management$3,
	provider_settings: provider_settings$3,
	user_logs: user_logs$3,
	oidc_empty_key_error_tips: oidc_empty_key_error_tips$3,
	oidc_clients_add_client: oidc_clients_add_client$3,
	oidc_clients_search_placeholder: oidc_clients_search_placeholder$3,
	oidc_clients_status_active: oidc_clients_status_active$3,
	oidc_clients_status_disabled: oidc_clients_status_disabled$3,
	oidc_clients_no_items_message: oidc_clients_no_items_message$3,
	oidc_clients_search_message: oidc_clients_search_message$3,
	oidc_clients_total_count: oidc_clients_total_count$3,
	oidc_clients_edit_title: oidc_clients_edit_title$3,
	oidc_clients_add_title: oidc_clients_add_title$3,
	oidc_clients_confirm_delete_title: oidc_clients_confirm_delete_title$3,
	oidc_clients_confirm_delete_message_part1: oidc_clients_confirm_delete_message_part1$3,
	oidc_clients_confirm_delete_message_part2: oidc_clients_confirm_delete_message_part2$3,
	oidc_clients_cancel: oidc_clients_cancel$3,
	oidc_clients_confirm_delete_button: oidc_clients_confirm_delete_button$3,
	oidc_clients_delete_client_action: oidc_clients_delete_client_action$3,
	oidc_clients_columns_name: oidc_clients_columns_name$3,
	oidc_clients_columns_client_id: oidc_clients_columns_client_id$3,
	oidc_clients_columns_status: oidc_clients_columns_status$3,
	oidc_clients_columns_redirect_uri: oidc_clients_columns_redirect_uri$3,
	oidc_clients_columns_date_created: oidc_clients_columns_date_created$3,
	oidc_clients_columns_actions: oidc_clients_columns_actions$3,
	oidc_clients_get_lists_failed: oidc_clients_get_lists_failed$3,
	oidc_clients_get_deatil_failed: oidc_clients_get_deatil_failed$3,
	oidc_clients_save_client_failed: oidc_clients_save_client_failed$3,
	oidc_clients_delete_client_failed: oidc_clients_delete_client_failed$3,
	oidc_clients_form_client_name_label: oidc_clients_form_client_name_label$3,
	oidc_clients_form_client_name_placeholder: oidc_clients_form_client_name_placeholder$3,
	oidc_clients_form_client_site_label: oidc_clients_form_client_site_label$3,
	oidc_clients_form_client_site_placeholder: oidc_clients_form_client_site_placeholder$3,
	oidc_clients_form_client_id_label: oidc_clients_form_client_id_label$3,
	oidc_clients_form_client_id_placeholder: oidc_clients_form_client_id_placeholder$3,
	oidc_clients_form_client_secret_label: oidc_clients_form_client_secret_label$3,
	oidc_clients_form_client_secret_placeholder: oidc_clients_form_client_secret_placeholder$3,
	oidc_clients_form_redirect_uri_label: oidc_clients_form_redirect_uri_label$3,
	oidc_clients_form_redirect_uri_placeholder: oidc_clients_form_redirect_uri_placeholder$3,
	oidc_clients_form_status_label: oidc_clients_form_status_label$3,
	oidc_clients_form_status_active: oidc_clients_form_status_active$3,
	oidc_clients_form_status_disabled: oidc_clients_form_status_disabled$3,
	oidc_clients_form_cancel_button: oidc_clients_form_cancel_button$3,
	oidc_clients_form_update_button: oidc_clients_form_update_button$3,
	oidc_clients_form_save_button: oidc_clients_form_save_button$3,
	oidc_clients_form_required_validator: oidc_clients_form_required_validator$3,
	oidc_clients_form_valid_url_validator: oidc_clients_form_valid_url_validator$3,
	oidc_provider_settings_title: oidc_provider_settings_title$3,
	oidc_provider_settings_issuer_label: oidc_provider_settings_issuer_label$3,
	oidc_provider_settings_token_expiry_label: oidc_provider_settings_token_expiry_label$3,
	oidc_provider_settings_refresh_token_expiry_label: oidc_provider_settings_refresh_token_expiry_label$3,
	oidc_provider_settings_code_expiry_label: oidc_provider_settings_code_expiry_label$3,
	oidc_provider_settings_allow_refresh_tokens_label: oidc_provider_settings_allow_refresh_tokens_label$3,
	oidc_provider_settings_key_pair_title: oidc_provider_settings_key_pair_title$3,
	oidc_provider_settings_key_instructions_part1: oidc_provider_settings_key_instructions_part1$3,
	oidc_provider_settings_key_instructions_part2: oidc_provider_settings_key_instructions_part2$3,
	oidc_provider_settings_public_key_label: oidc_provider_settings_public_key_label$3,
	oidc_provider_settings_private_key_label: oidc_provider_settings_private_key_label$3,
	oidc_provider_settings_private_key_warning: oidc_provider_settings_private_key_warning$3,
	oidc_provider_settings_generating_keys: oidc_provider_settings_generating_keys$3,
	oidc_provider_settings_generate_new_keys: oidc_provider_settings_generate_new_keys$3,
	oidc_provider_settings_crypto_note: oidc_provider_settings_crypto_note$3,
	oidc_provider_settings_cancel_changes: oidc_provider_settings_cancel_changes$3,
	oidc_provider_settings_saving: oidc_provider_settings_saving$3,
	oidc_provider_settings_save_changes: oidc_provider_settings_save_changes$3,
	oidc_provider_settings_config_endpoint_title: oidc_provider_settings_config_endpoint_title$3,
	oidc_provider_settings_copy_button: oidc_provider_settings_copy_button$3,
	oidc_provider_settings_jwks_endpoint_title: oidc_provider_settings_jwks_endpoint_title$3,
	oidc_provider_settings_load_failed: oidc_provider_settings_load_failed$3,
	oidc_provider_settings_load_failed_prefix: oidc_provider_settings_load_failed_prefix$3,
	oidc_provider_settings_issuer_invalid_format: oidc_provider_settings_issuer_invalid_format$3,
	oidc_provider_settings_validation_issuer_expiry: oidc_provider_settings_validation_issuer_expiry$3,
	oidc_provider_settings_validation_key_check: oidc_provider_settings_validation_key_check$3,
	oidc_provider_settings_validation_public_key_invalid: oidc_provider_settings_validation_public_key_invalid$3,
	oidc_provider_settings_validation_private_key_invalid: oidc_provider_settings_validation_private_key_invalid$3,
	oidc_provider_settings_validation_key_pair_required: oidc_provider_settings_validation_key_pair_required$3,
	oidc_provider_settings_save_success: oidc_provider_settings_save_success$3,
	oidc_provider_settings_save_failed_prefix: oidc_provider_settings_save_failed_prefix$3,
	oidc_provider_settings_changes_cancelled: oidc_provider_settings_changes_cancelled$3,
	oidc_provider_settings_crypto_warning_https: oidc_provider_settings_crypto_warning_https$3,
	oidc_provider_settings_crypto_warning_browser: oidc_provider_settings_crypto_warning_browser$3,
	oidc_provider_settings_crypto_api_unavailable: oidc_provider_settings_crypto_api_unavailable$3,
	oidc_provider_settings_generate_confirm: oidc_provider_settings_generate_confirm$3,
	oidc_provider_settings_generate_success: oidc_provider_settings_generate_success$3,
	oidc_provider_settings_generate_failed_prefix: oidc_provider_settings_generate_failed_prefix$3,
	oidc_provider_settings_generate_failed: oidc_provider_settings_generate_failed$3,
	oidc_provider_settings_copied: oidc_provider_settings_copied$3,
	oidc_provider_settings_copy_failed_prefix: oidc_provider_settings_copy_failed_prefix$3,
	oidc_provider_settings_copy_manual_prompt: oidc_provider_settings_copy_manual_prompt$3,
	oidc_logs_search_placeholder: oidc_logs_search_placeholder$3,
	oidc_logs_columns_client_name: oidc_logs_columns_client_name$3,
	oidc_logs_columns_client_uri: oidc_logs_columns_client_uri$3,
	oidc_logs_columns_client_id: oidc_logs_columns_client_id$3,
	oidc_logs_columns_username: oidc_logs_columns_username$3,
	oidc_logs_columns_date_created: oidc_logs_columns_date_created$3,
	oidc_logs_no_items_loading: oidc_logs_no_items_loading$3,
	oidc_logs_no_items_search_empty: oidc_logs_no_items_search_empty$3,
	oidc_logs_no_items_empty: oidc_logs_no_items_empty$3,
	oidc_logs_total_count: oidc_logs_total_count$3,
	oidc_logs_get_error: oidc_logs_get_error$3
};

var client_management$2 = "Gestion des clients";
var provider_settings$2 = "Paramètres du fournisseur";
var user_logs$2 = "Journaux d'utilisateurs";
var oidc_empty_key_error_tips$2 = "PrivateKey et PublicKey sont vides, veuillez aller dans \"Paramètres du fournisseur\" pour générer PrivateKey et PublicKey.";
var oidc_clients_add_client$2 = "Ajouter un client";
var oidc_clients_search_placeholder$2 = "Rechercher par nom ou ID client...";
var oidc_clients_status_active$2 = "Actif";
var oidc_clients_status_disabled$2 = "Désactivé";
var oidc_clients_no_items_message$2 = "Aucun client correspondant trouvé";
var oidc_clients_search_message$2 = "Recherche...";
var oidc_clients_total_count$2 = "Total {totalClients} clients";
var oidc_clients_edit_title$2 = "Modifier le client";
var oidc_clients_add_title$2 = "Ajouter un nouveau client";
var oidc_clients_confirm_delete_title$2 = "Confirmer la suppression";
var oidc_clients_confirm_delete_message_part1$2 = "Êtes-vous sûr de vouloir supprimer le client ";
var oidc_clients_confirm_delete_message_part2$2 = "? Cette action est irréversible.";
var oidc_clients_cancel$2 = "Annuler";
var oidc_clients_confirm_delete_button$2 = "Confirmer la suppression";
var oidc_clients_delete_client_action$2 = "Supprimer le client";
var oidc_clients_columns_name$2 = "Nom";
var oidc_clients_columns_client_id$2 = "ID Client";
var oidc_clients_columns_status$2 = "Statut";
var oidc_clients_columns_redirect_uri$2 = "URI de redirection";
var oidc_clients_columns_date_created$2 = "Date de création";
var oidc_clients_columns_actions$2 = "Actions";
var oidc_clients_get_lists_failed$2 = "Impossible d'obtenir la liste des clients :";
var oidc_clients_get_deatil_failed$2 = "Impossible d'obtenir les détails du client :";
var oidc_clients_save_client_failed$2 = "Impossible d'enregistrer le client :";
var oidc_clients_delete_client_failed$2 = "Impossible de supprimer le client :";
var oidc_clients_form_client_name_label$2 = "Nom du client";
var oidc_clients_form_client_name_placeholder$2 = "par ex., Mon application Web";
var oidc_clients_form_client_site_label$2 = "URL du site client";
var oidc_clients_form_client_site_placeholder$2 = "par ex., http://example.com";
var oidc_clients_form_client_id_label$2 = "ID Client";
var oidc_clients_form_client_id_placeholder$2 = "Identifiant unique généré par le système";
var oidc_clients_form_client_secret_label$2 = "Secret Client";
var oidc_clients_form_client_secret_placeholder$2 = "Entrez un secret fort";
var oidc_clients_form_redirect_uri_label$2 = "URI de redirection";
var oidc_clients_form_redirect_uri_placeholder$2 = "par ex., http://localhost:8080/callback";
var oidc_clients_form_status_label$2 = "Statut du client";
var oidc_clients_form_status_active$2 = "Actif";
var oidc_clients_form_status_disabled$2 = "Désactivé";
var oidc_clients_form_cancel_button$2 = "Annuler";
var oidc_clients_form_update_button$2 = "Mettre à jour";
var oidc_clients_form_save_button$2 = "Enregistrer";
var oidc_clients_form_required_validator$2 = "Ce champ est obligatoire";
var oidc_clients_form_valid_url_validator$2 = "Veuillez entrer une URL valide (par ex., http://example.com ou myapp://callback)";
var oidc_provider_settings_title$2 = "Paramètres du fournisseur OIDC";
var oidc_provider_settings_issuer_label$2 = "Émetteur";
var oidc_provider_settings_token_expiry_label$2 = "Expiration du jeton d'accès (secondes)";
var oidc_provider_settings_refresh_token_expiry_label$2 = "Expiration du jeton de rafraîchissement (secondes)";
var oidc_provider_settings_code_expiry_label$2 = "Expiration du jeton CODE (secondes)";
var oidc_provider_settings_allow_refresh_tokens_label$2 = "Autoriser les jetons de rafraîchissement";
var oidc_provider_settings_key_pair_title$2 = "Paire de clés de signature RS256 (publique/privée)";
var oidc_provider_settings_key_instructions_part1$2 = "Vous pouvez coller manuellement les clés publique et privée au format PEM, ou utiliser le bouton ci-dessous pour générer une nouvelle paire de clés (si votre navigateur le supporte).";
var oidc_provider_settings_key_instructions_part2$2 = "(Génération automatique non supportée dans cet environnement)";
var oidc_provider_settings_public_key_label$2 = "Clé publique (format PEM) :";
var oidc_provider_settings_private_key_label$2 = "Clé privée (format PEM) :";
var oidc_provider_settings_private_key_warning$2 = "⚠️Avertissement de sécurité : Manipulez la clé privée avec une extrême prudence. Assurez-vous de la coller dans un environnement sécurisé, en évitant l'observation ou la transmission sur des réseaux non sécurisés. Dans les environnements de production, il n'est généralement pas recommandé de saisir directement la clé privée dans le frontend.";
var oidc_provider_settings_generating_keys$2 = "Génération...";
var oidc_provider_settings_generate_new_keys$2 = "Générer une nouvelle paire de clés (écraser celles ci-dessus)";
var oidc_provider_settings_crypto_note$2 = "(Nécessite HTTPS ou localhost activé)";
var oidc_provider_settings_cancel_changes$2 = "Annuler les modifications";
var oidc_provider_settings_saving$2 = "Enregistrement";
var oidc_provider_settings_save_changes$2 = "Enregistrer les modifications";
var oidc_provider_settings_config_endpoint_title$2 = "Point de terminaison de configuration OIDC";
var oidc_provider_settings_copy_button$2 = "Copier";
var oidc_provider_settings_jwks_endpoint_title$2 = "Point de terminaison JWKS";
var oidc_provider_settings_load_failed$2 = "Échec du chargement des paramètres, valeurs par défaut restaurées";
var oidc_provider_settings_load_failed_prefix$2 = "Échec du chargement des paramètres :";
var oidc_provider_settings_issuer_invalid_format$2 = "Format d'émetteur invalide";
var oidc_provider_settings_validation_issuer_expiry$2 = "Veuillez vérifier les entrées, assurez-vous que l'émetteur est rempli et que les temps d'expiration sont positifs !";
var oidc_provider_settings_validation_key_check$2 = "Veuillez vérifier les clés saisies :\n";
var oidc_provider_settings_validation_public_key_invalid$2 = "- La clé publique ne semble pas être au format PEM valide\n";
var oidc_provider_settings_validation_private_key_invalid$2 = "- La clé privée ne semble pas être au format PEM valide\n";
var oidc_provider_settings_validation_key_pair_required$2 = "Veuillez fournir les clés publique et privée, ou laisser les deux vides";
var oidc_provider_settings_save_success$2 = "Paramètres enregistrés avec succès !";
var oidc_provider_settings_save_failed_prefix$2 = "Échec de l'enregistrement des paramètres :";
var oidc_provider_settings_changes_cancelled$2 = "Modifications annulées";
var oidc_provider_settings_crypto_warning_https$2 = "Avertissement : Cette page n'est pas accessible via HTTPS, le navigateur restreint l'auto-génération de clés";
var oidc_provider_settings_crypto_warning_browser$2 = "Avertissement : Le navigateur actuel ne supporte pas l'auto-génération de clés";
var oidc_provider_settings_crypto_api_unavailable$2 = "API Web Crypto indisponible";
var oidc_provider_settings_generate_confirm$2 = "Êtes-vous sûr de vouloir générer une nouvelle paire de clés ? Cela écrasera les clés actuelles.";
var oidc_provider_settings_generate_success$2 = "Nouvelle paire de clés générée avec succès";
var oidc_provider_settings_generate_failed_prefix$2 = "Échec de la génération de la clé :";
var oidc_provider_settings_generate_failed$2 = "Échec de la génération de la clé";
var oidc_provider_settings_copied$2 = "Copié dans le presse-papiers";
var oidc_provider_settings_copy_failed_prefix$2 = "Échec de la copie :";
var oidc_provider_settings_copy_manual_prompt$2 = "Veuillez copier manuellement :";
var oidc_logs_search_placeholder$2 = "Rechercher par ID, ID client ou ID utilisateur...";
var oidc_logs_columns_client_name$2 = "Nom du client";
var oidc_logs_columns_client_uri$2 = "URI du client";
var oidc_logs_columns_client_id$2 = "ID Client";
var oidc_logs_columns_username$2 = "Nom d'utilisateur";
var oidc_logs_columns_date_created$2 = "Heure d'appel";
var oidc_logs_no_items_loading$2 = "Chargement...";
var oidc_logs_no_items_search_empty$2 = "Aucun jeton correspondant trouvé.";
var oidc_logs_no_items_empty$2 = "Aucun jeton à afficher.";
var oidc_logs_total_count$2 = "Total {totalLogs} journaux";
var oidc_logs_get_error$2 = "Impossible de récupérer la liste des journaux :";
var fr = {
	client_management: client_management$2,
	provider_settings: provider_settings$2,
	user_logs: user_logs$2,
	oidc_empty_key_error_tips: oidc_empty_key_error_tips$2,
	oidc_clients_add_client: oidc_clients_add_client$2,
	oidc_clients_search_placeholder: oidc_clients_search_placeholder$2,
	oidc_clients_status_active: oidc_clients_status_active$2,
	oidc_clients_status_disabled: oidc_clients_status_disabled$2,
	oidc_clients_no_items_message: oidc_clients_no_items_message$2,
	oidc_clients_search_message: oidc_clients_search_message$2,
	oidc_clients_total_count: oidc_clients_total_count$2,
	oidc_clients_edit_title: oidc_clients_edit_title$2,
	oidc_clients_add_title: oidc_clients_add_title$2,
	oidc_clients_confirm_delete_title: oidc_clients_confirm_delete_title$2,
	oidc_clients_confirm_delete_message_part1: oidc_clients_confirm_delete_message_part1$2,
	oidc_clients_confirm_delete_message_part2: oidc_clients_confirm_delete_message_part2$2,
	oidc_clients_cancel: oidc_clients_cancel$2,
	oidc_clients_confirm_delete_button: oidc_clients_confirm_delete_button$2,
	oidc_clients_delete_client_action: oidc_clients_delete_client_action$2,
	oidc_clients_columns_name: oidc_clients_columns_name$2,
	oidc_clients_columns_client_id: oidc_clients_columns_client_id$2,
	oidc_clients_columns_status: oidc_clients_columns_status$2,
	oidc_clients_columns_redirect_uri: oidc_clients_columns_redirect_uri$2,
	oidc_clients_columns_date_created: oidc_clients_columns_date_created$2,
	oidc_clients_columns_actions: oidc_clients_columns_actions$2,
	oidc_clients_get_lists_failed: oidc_clients_get_lists_failed$2,
	oidc_clients_get_deatil_failed: oidc_clients_get_deatil_failed$2,
	oidc_clients_save_client_failed: oidc_clients_save_client_failed$2,
	oidc_clients_delete_client_failed: oidc_clients_delete_client_failed$2,
	oidc_clients_form_client_name_label: oidc_clients_form_client_name_label$2,
	oidc_clients_form_client_name_placeholder: oidc_clients_form_client_name_placeholder$2,
	oidc_clients_form_client_site_label: oidc_clients_form_client_site_label$2,
	oidc_clients_form_client_site_placeholder: oidc_clients_form_client_site_placeholder$2,
	oidc_clients_form_client_id_label: oidc_clients_form_client_id_label$2,
	oidc_clients_form_client_id_placeholder: oidc_clients_form_client_id_placeholder$2,
	oidc_clients_form_client_secret_label: oidc_clients_form_client_secret_label$2,
	oidc_clients_form_client_secret_placeholder: oidc_clients_form_client_secret_placeholder$2,
	oidc_clients_form_redirect_uri_label: oidc_clients_form_redirect_uri_label$2,
	oidc_clients_form_redirect_uri_placeholder: oidc_clients_form_redirect_uri_placeholder$2,
	oidc_clients_form_status_label: oidc_clients_form_status_label$2,
	oidc_clients_form_status_active: oidc_clients_form_status_active$2,
	oidc_clients_form_status_disabled: oidc_clients_form_status_disabled$2,
	oidc_clients_form_cancel_button: oidc_clients_form_cancel_button$2,
	oidc_clients_form_update_button: oidc_clients_form_update_button$2,
	oidc_clients_form_save_button: oidc_clients_form_save_button$2,
	oidc_clients_form_required_validator: oidc_clients_form_required_validator$2,
	oidc_clients_form_valid_url_validator: oidc_clients_form_valid_url_validator$2,
	oidc_provider_settings_title: oidc_provider_settings_title$2,
	oidc_provider_settings_issuer_label: oidc_provider_settings_issuer_label$2,
	oidc_provider_settings_token_expiry_label: oidc_provider_settings_token_expiry_label$2,
	oidc_provider_settings_refresh_token_expiry_label: oidc_provider_settings_refresh_token_expiry_label$2,
	oidc_provider_settings_code_expiry_label: oidc_provider_settings_code_expiry_label$2,
	oidc_provider_settings_allow_refresh_tokens_label: oidc_provider_settings_allow_refresh_tokens_label$2,
	oidc_provider_settings_key_pair_title: oidc_provider_settings_key_pair_title$2,
	oidc_provider_settings_key_instructions_part1: oidc_provider_settings_key_instructions_part1$2,
	oidc_provider_settings_key_instructions_part2: oidc_provider_settings_key_instructions_part2$2,
	oidc_provider_settings_public_key_label: oidc_provider_settings_public_key_label$2,
	oidc_provider_settings_private_key_label: oidc_provider_settings_private_key_label$2,
	oidc_provider_settings_private_key_warning: oidc_provider_settings_private_key_warning$2,
	oidc_provider_settings_generating_keys: oidc_provider_settings_generating_keys$2,
	oidc_provider_settings_generate_new_keys: oidc_provider_settings_generate_new_keys$2,
	oidc_provider_settings_crypto_note: oidc_provider_settings_crypto_note$2,
	oidc_provider_settings_cancel_changes: oidc_provider_settings_cancel_changes$2,
	oidc_provider_settings_saving: oidc_provider_settings_saving$2,
	oidc_provider_settings_save_changes: oidc_provider_settings_save_changes$2,
	oidc_provider_settings_config_endpoint_title: oidc_provider_settings_config_endpoint_title$2,
	oidc_provider_settings_copy_button: oidc_provider_settings_copy_button$2,
	oidc_provider_settings_jwks_endpoint_title: oidc_provider_settings_jwks_endpoint_title$2,
	oidc_provider_settings_load_failed: oidc_provider_settings_load_failed$2,
	oidc_provider_settings_load_failed_prefix: oidc_provider_settings_load_failed_prefix$2,
	oidc_provider_settings_issuer_invalid_format: oidc_provider_settings_issuer_invalid_format$2,
	oidc_provider_settings_validation_issuer_expiry: oidc_provider_settings_validation_issuer_expiry$2,
	oidc_provider_settings_validation_key_check: oidc_provider_settings_validation_key_check$2,
	oidc_provider_settings_validation_public_key_invalid: oidc_provider_settings_validation_public_key_invalid$2,
	oidc_provider_settings_validation_private_key_invalid: oidc_provider_settings_validation_private_key_invalid$2,
	oidc_provider_settings_validation_key_pair_required: oidc_provider_settings_validation_key_pair_required$2,
	oidc_provider_settings_save_success: oidc_provider_settings_save_success$2,
	oidc_provider_settings_save_failed_prefix: oidc_provider_settings_save_failed_prefix$2,
	oidc_provider_settings_changes_cancelled: oidc_provider_settings_changes_cancelled$2,
	oidc_provider_settings_crypto_warning_https: oidc_provider_settings_crypto_warning_https$2,
	oidc_provider_settings_crypto_warning_browser: oidc_provider_settings_crypto_warning_browser$2,
	oidc_provider_settings_crypto_api_unavailable: oidc_provider_settings_crypto_api_unavailable$2,
	oidc_provider_settings_generate_confirm: oidc_provider_settings_generate_confirm$2,
	oidc_provider_settings_generate_success: oidc_provider_settings_generate_success$2,
	oidc_provider_settings_generate_failed_prefix: oidc_provider_settings_generate_failed_prefix$2,
	oidc_provider_settings_generate_failed: oidc_provider_settings_generate_failed$2,
	oidc_provider_settings_copied: oidc_provider_settings_copied$2,
	oidc_provider_settings_copy_failed_prefix: oidc_provider_settings_copy_failed_prefix$2,
	oidc_provider_settings_copy_manual_prompt: oidc_provider_settings_copy_manual_prompt$2,
	oidc_logs_search_placeholder: oidc_logs_search_placeholder$2,
	oidc_logs_columns_client_name: oidc_logs_columns_client_name$2,
	oidc_logs_columns_client_uri: oidc_logs_columns_client_uri$2,
	oidc_logs_columns_client_id: oidc_logs_columns_client_id$2,
	oidc_logs_columns_username: oidc_logs_columns_username$2,
	oidc_logs_columns_date_created: oidc_logs_columns_date_created$2,
	oidc_logs_no_items_loading: oidc_logs_no_items_loading$2,
	oidc_logs_no_items_search_empty: oidc_logs_no_items_search_empty$2,
	oidc_logs_no_items_empty: oidc_logs_no_items_empty$2,
	oidc_logs_total_count: oidc_logs_total_count$2,
	oidc_logs_get_error: oidc_logs_get_error$2
};

var client_management$1 = "Gestione clienti";
var provider_settings$1 = "Impostazioni fornitore";
var user_logs$1 = "Registri utente";
var oidc_empty_key_error_tips$1 = "PrivateKey e PublicKey sono vuoti, vai su \"Impostazioni Provider\" per generare PrivateKey e PublicKey.";
var oidc_clients_add_client$1 = "Aggiungi client";
var oidc_clients_search_placeholder$1 = "Cerca nome o ID client...";
var oidc_clients_status_active$1 = "Attivo";
var oidc_clients_status_disabled$1 = "Disabilitato";
var oidc_clients_no_items_message$1 = "Nessun client corrispondente trovato";
var oidc_clients_search_message$1 = "Ricerca in corso...";
var oidc_clients_total_count$1 = "Totale {totalClients} client";
var oidc_clients_edit_title$1 = "Modifica client";
var oidc_clients_add_title$1 = "Aggiungi nuovo client";
var oidc_clients_confirm_delete_title$1 = "Conferma eliminazione";
var oidc_clients_confirm_delete_message_part1$1 = "Sei sicuro di voler eliminare il client ";
var oidc_clients_confirm_delete_message_part2$1 = "? Questa azione non può essere annullata.";
var oidc_clients_cancel$1 = "Annulla";
var oidc_clients_confirm_delete_button$1 = "Conferma eliminazione";
var oidc_clients_delete_client_action$1 = "Elimina client";
var oidc_clients_columns_name$1 = "Nome";
var oidc_clients_columns_client_id$1 = "ID client";
var oidc_clients_columns_status$1 = "Stato";
var oidc_clients_columns_redirect_uri$1 = "URI di reindirizzamento";
var oidc_clients_columns_date_created$1 = "Ora di creazione";
var oidc_clients_columns_actions$1 = "Azioni";
var oidc_clients_get_lists_failed$1 = "Impossibile ottenere l'elenco client:";
var oidc_clients_get_deatil_failed$1 = "Impossibile ottenere i dettagli del client:";
var oidc_clients_save_client_failed$1 = "Impossibile salvare il client:";
var oidc_clients_delete_client_failed$1 = "Impossibile eliminare il client:";
var oidc_clients_form_client_name_label$1 = "Nome client";
var oidc_clients_form_client_name_placeholder$1 = "es. La mia applicazione web";
var oidc_clients_form_client_site_label$1 = "URL sito client";
var oidc_clients_form_client_site_placeholder$1 = "es. http://example.com";
var oidc_clients_form_client_id_label$1 = "ID client";
var oidc_clients_form_client_id_placeholder$1 = "Identificatore univoco generato dal sistema";
var oidc_clients_form_client_secret_label$1 = "Segreto client";
var oidc_clients_form_client_secret_placeholder$1 = "Inserisci un segreto forte";
var oidc_clients_form_redirect_uri_label$1 = "URI di reindirizzamento";
var oidc_clients_form_redirect_uri_placeholder$1 = "es. http://localhost:8080/callback";
var oidc_clients_form_status_label$1 = "Stato client";
var oidc_clients_form_status_active$1 = "Attivo";
var oidc_clients_form_status_disabled$1 = "Disabilitato";
var oidc_clients_form_cancel_button$1 = "Annulla";
var oidc_clients_form_update_button$1 = "Aggiorna";
var oidc_clients_form_save_button$1 = "Salva";
var oidc_clients_form_required_validator$1 = "Questo campo è obbligatorio";
var oidc_clients_form_valid_url_validator$1 = "Inserisci un URL valido (es. http://example.com o myapp://callback)";
var oidc_provider_settings_title$1 = "Impostazioni provider OIDC";
var oidc_provider_settings_issuer_label$1 = "Emittente";
var oidc_provider_settings_token_expiry_label$1 = "Scadenza token di accesso (secondi)";
var oidc_provider_settings_refresh_token_expiry_label$1 = "Scadenza token di aggiornamento (secondi)";
var oidc_provider_settings_code_expiry_label$1 = "Scadenza token CODE (secondi)";
var oidc_provider_settings_allow_refresh_tokens_label$1 = "Consenti token di aggiornamento";
var oidc_provider_settings_key_pair_title$1 = "Coppia di chiavi di firma RS256 (pubblica/privata)";
var oidc_provider_settings_key_instructions_part1$1 = "Puoi incollare manualmente le chiavi pubblica e privata in formato PEM, oppure utilizzare il pulsante sottostante per generare una nuova coppia di chiavi (se il tuo browser lo supporta).";
var oidc_provider_settings_key_instructions_part2$1 = "(Generazione automatica non supportata in questo ambiente)";
var oidc_provider_settings_public_key_label$1 = "Chiave pubblica (formato PEM):";
var oidc_provider_settings_private_key_label$1 = "Chiave privata (formato PEM):";
var oidc_provider_settings_private_key_warning$1 = "⚠️Avviso di sicurezza: Maneggia la chiave privata con estrema cautela. Assicurati di incollarla in un ambiente sicuro, evitando l'osservazione o la trasmissione su reti non sicure. Negli ambienti di produzione, in genere non è consigliato inserire direttamente la chiave privata nel frontend.";
var oidc_provider_settings_generating_keys$1 = "Generazione in corso...";
var oidc_provider_settings_generate_new_keys$1 = "Genera nuova coppia di chiavi (Sovrascrivi quelle sopra)";
var oidc_provider_settings_crypto_note$1 = "(Richiede HTTPS o localhost abilitato)";
var oidc_provider_settings_cancel_changes$1 = "Annulla modifiche";
var oidc_provider_settings_saving$1 = "Salvataggio in corso";
var oidc_provider_settings_save_changes$1 = "Salva modifiche";
var oidc_provider_settings_config_endpoint_title$1 = "Endpoint di configurazione OIDC";
var oidc_provider_settings_copy_button$1 = "Copia";
var oidc_provider_settings_jwks_endpoint_title$1 = "Endpoint JWKS";
var oidc_provider_settings_load_failed$1 = "Impossibile caricare le impostazioni, ripristinate ai valori predefiniti";
var oidc_provider_settings_load_failed_prefix$1 = "Impossibile caricare le impostazioni:";
var oidc_provider_settings_issuer_invalid_format$1 = "Formato emittente non valido";
var oidc_provider_settings_validation_issuer_expiry$1 = "Controlla gli input, assicurati che l'emittente sia compilato e che i tempi di scadenza siano positivi!";
var oidc_provider_settings_validation_key_check$1 = "Controlla le chiavi inserite:\n";
var oidc_provider_settings_validation_public_key_invalid$1 = "- La chiave pubblica non sembra essere in formato PEM valido\n";
var oidc_provider_settings_validation_private_key_invalid$1 = "- La chiave privata non sembra essere in formato PEM valido\n";
var oidc_provider_settings_validation_key_pair_required$1 = "Fornire entrambe le chiavi pubblica e privata, o lasciare entrambi i campi vuoti";
var oidc_provider_settings_save_success$1 = "Impostazioni salvate con successo!";
var oidc_provider_settings_save_failed_prefix$1 = "Impossibile salvare le impostazioni:";
var oidc_provider_settings_changes_cancelled$1 = "Modifiche annullate";
var oidc_provider_settings_crypto_warning_https$1 = "Avviso: la pagina corrente non è accessibile tramite HTTPS, il browser limita la generazione automatica delle chiavi";
var oidc_provider_settings_crypto_warning_browser$1 = "Avviso: il browser corrente non supporta la generazione automatica delle chiavi";
var oidc_provider_settings_crypto_api_unavailable$1 = "Web Crypto API non disponibile";
var oidc_provider_settings_generate_confirm$1 = "Sei sicuro di voler generare una nuova coppia di chiavi? Questa operazione sovrascriverà le chiavi correnti.";
var oidc_provider_settings_generate_success$1 = "Coppia di chiavi generata con successo";
var oidc_provider_settings_generate_failed_prefix$1 = "Generazione chiave fallita:";
var oidc_provider_settings_generate_failed$1 = "Generazione chiave fallita";
var oidc_provider_settings_copied$1 = "Copiato negli appunti";
var oidc_provider_settings_copy_failed_prefix$1 = "Copia fallita:";
var oidc_provider_settings_copy_manual_prompt$1 = "Copia manualmente:";
var oidc_logs_search_placeholder$1 = "Cerca per ID, ID client o ID utente...";
var oidc_logs_columns_client_name$1 = "Nome client";
var oidc_logs_columns_client_uri$1 = "URI client";
var oidc_logs_columns_client_id$1 = "ID client";
var oidc_logs_columns_username$1 = "Nome utente";
var oidc_logs_columns_date_created$1 = "Ora chiamata";
var oidc_logs_no_items_loading$1 = "Caricamento in corso...";
var oidc_logs_no_items_search_empty$1 = "Nessun token corrispondente trovato.";
var oidc_logs_no_items_empty$1 = "Nessun token da visualizzare.";
var oidc_logs_total_count$1 = "Totale {totalLogs} log";
var oidc_logs_get_error$1 = "Impossibile recuperare l'elenco dei log:";
var it = {
	client_management: client_management$1,
	provider_settings: provider_settings$1,
	user_logs: user_logs$1,
	oidc_empty_key_error_tips: oidc_empty_key_error_tips$1,
	oidc_clients_add_client: oidc_clients_add_client$1,
	oidc_clients_search_placeholder: oidc_clients_search_placeholder$1,
	oidc_clients_status_active: oidc_clients_status_active$1,
	oidc_clients_status_disabled: oidc_clients_status_disabled$1,
	oidc_clients_no_items_message: oidc_clients_no_items_message$1,
	oidc_clients_search_message: oidc_clients_search_message$1,
	oidc_clients_total_count: oidc_clients_total_count$1,
	oidc_clients_edit_title: oidc_clients_edit_title$1,
	oidc_clients_add_title: oidc_clients_add_title$1,
	oidc_clients_confirm_delete_title: oidc_clients_confirm_delete_title$1,
	oidc_clients_confirm_delete_message_part1: oidc_clients_confirm_delete_message_part1$1,
	oidc_clients_confirm_delete_message_part2: oidc_clients_confirm_delete_message_part2$1,
	oidc_clients_cancel: oidc_clients_cancel$1,
	oidc_clients_confirm_delete_button: oidc_clients_confirm_delete_button$1,
	oidc_clients_delete_client_action: oidc_clients_delete_client_action$1,
	oidc_clients_columns_name: oidc_clients_columns_name$1,
	oidc_clients_columns_client_id: oidc_clients_columns_client_id$1,
	oidc_clients_columns_status: oidc_clients_columns_status$1,
	oidc_clients_columns_redirect_uri: oidc_clients_columns_redirect_uri$1,
	oidc_clients_columns_date_created: oidc_clients_columns_date_created$1,
	oidc_clients_columns_actions: oidc_clients_columns_actions$1,
	oidc_clients_get_lists_failed: oidc_clients_get_lists_failed$1,
	oidc_clients_get_deatil_failed: oidc_clients_get_deatil_failed$1,
	oidc_clients_save_client_failed: oidc_clients_save_client_failed$1,
	oidc_clients_delete_client_failed: oidc_clients_delete_client_failed$1,
	oidc_clients_form_client_name_label: oidc_clients_form_client_name_label$1,
	oidc_clients_form_client_name_placeholder: oidc_clients_form_client_name_placeholder$1,
	oidc_clients_form_client_site_label: oidc_clients_form_client_site_label$1,
	oidc_clients_form_client_site_placeholder: oidc_clients_form_client_site_placeholder$1,
	oidc_clients_form_client_id_label: oidc_clients_form_client_id_label$1,
	oidc_clients_form_client_id_placeholder: oidc_clients_form_client_id_placeholder$1,
	oidc_clients_form_client_secret_label: oidc_clients_form_client_secret_label$1,
	oidc_clients_form_client_secret_placeholder: oidc_clients_form_client_secret_placeholder$1,
	oidc_clients_form_redirect_uri_label: oidc_clients_form_redirect_uri_label$1,
	oidc_clients_form_redirect_uri_placeholder: oidc_clients_form_redirect_uri_placeholder$1,
	oidc_clients_form_status_label: oidc_clients_form_status_label$1,
	oidc_clients_form_status_active: oidc_clients_form_status_active$1,
	oidc_clients_form_status_disabled: oidc_clients_form_status_disabled$1,
	oidc_clients_form_cancel_button: oidc_clients_form_cancel_button$1,
	oidc_clients_form_update_button: oidc_clients_form_update_button$1,
	oidc_clients_form_save_button: oidc_clients_form_save_button$1,
	oidc_clients_form_required_validator: oidc_clients_form_required_validator$1,
	oidc_clients_form_valid_url_validator: oidc_clients_form_valid_url_validator$1,
	oidc_provider_settings_title: oidc_provider_settings_title$1,
	oidc_provider_settings_issuer_label: oidc_provider_settings_issuer_label$1,
	oidc_provider_settings_token_expiry_label: oidc_provider_settings_token_expiry_label$1,
	oidc_provider_settings_refresh_token_expiry_label: oidc_provider_settings_refresh_token_expiry_label$1,
	oidc_provider_settings_code_expiry_label: oidc_provider_settings_code_expiry_label$1,
	oidc_provider_settings_allow_refresh_tokens_label: oidc_provider_settings_allow_refresh_tokens_label$1,
	oidc_provider_settings_key_pair_title: oidc_provider_settings_key_pair_title$1,
	oidc_provider_settings_key_instructions_part1: oidc_provider_settings_key_instructions_part1$1,
	oidc_provider_settings_key_instructions_part2: oidc_provider_settings_key_instructions_part2$1,
	oidc_provider_settings_public_key_label: oidc_provider_settings_public_key_label$1,
	oidc_provider_settings_private_key_label: oidc_provider_settings_private_key_label$1,
	oidc_provider_settings_private_key_warning: oidc_provider_settings_private_key_warning$1,
	oidc_provider_settings_generating_keys: oidc_provider_settings_generating_keys$1,
	oidc_provider_settings_generate_new_keys: oidc_provider_settings_generate_new_keys$1,
	oidc_provider_settings_crypto_note: oidc_provider_settings_crypto_note$1,
	oidc_provider_settings_cancel_changes: oidc_provider_settings_cancel_changes$1,
	oidc_provider_settings_saving: oidc_provider_settings_saving$1,
	oidc_provider_settings_save_changes: oidc_provider_settings_save_changes$1,
	oidc_provider_settings_config_endpoint_title: oidc_provider_settings_config_endpoint_title$1,
	oidc_provider_settings_copy_button: oidc_provider_settings_copy_button$1,
	oidc_provider_settings_jwks_endpoint_title: oidc_provider_settings_jwks_endpoint_title$1,
	oidc_provider_settings_load_failed: oidc_provider_settings_load_failed$1,
	oidc_provider_settings_load_failed_prefix: oidc_provider_settings_load_failed_prefix$1,
	oidc_provider_settings_issuer_invalid_format: oidc_provider_settings_issuer_invalid_format$1,
	oidc_provider_settings_validation_issuer_expiry: oidc_provider_settings_validation_issuer_expiry$1,
	oidc_provider_settings_validation_key_check: oidc_provider_settings_validation_key_check$1,
	oidc_provider_settings_validation_public_key_invalid: oidc_provider_settings_validation_public_key_invalid$1,
	oidc_provider_settings_validation_private_key_invalid: oidc_provider_settings_validation_private_key_invalid$1,
	oidc_provider_settings_validation_key_pair_required: oidc_provider_settings_validation_key_pair_required$1,
	oidc_provider_settings_save_success: oidc_provider_settings_save_success$1,
	oidc_provider_settings_save_failed_prefix: oidc_provider_settings_save_failed_prefix$1,
	oidc_provider_settings_changes_cancelled: oidc_provider_settings_changes_cancelled$1,
	oidc_provider_settings_crypto_warning_https: oidc_provider_settings_crypto_warning_https$1,
	oidc_provider_settings_crypto_warning_browser: oidc_provider_settings_crypto_warning_browser$1,
	oidc_provider_settings_crypto_api_unavailable: oidc_provider_settings_crypto_api_unavailable$1,
	oidc_provider_settings_generate_confirm: oidc_provider_settings_generate_confirm$1,
	oidc_provider_settings_generate_success: oidc_provider_settings_generate_success$1,
	oidc_provider_settings_generate_failed_prefix: oidc_provider_settings_generate_failed_prefix$1,
	oidc_provider_settings_generate_failed: oidc_provider_settings_generate_failed$1,
	oidc_provider_settings_copied: oidc_provider_settings_copied$1,
	oidc_provider_settings_copy_failed_prefix: oidc_provider_settings_copy_failed_prefix$1,
	oidc_provider_settings_copy_manual_prompt: oidc_provider_settings_copy_manual_prompt$1,
	oidc_logs_search_placeholder: oidc_logs_search_placeholder$1,
	oidc_logs_columns_client_name: oidc_logs_columns_client_name$1,
	oidc_logs_columns_client_uri: oidc_logs_columns_client_uri$1,
	oidc_logs_columns_client_id: oidc_logs_columns_client_id$1,
	oidc_logs_columns_username: oidc_logs_columns_username$1,
	oidc_logs_columns_date_created: oidc_logs_columns_date_created$1,
	oidc_logs_no_items_loading: oidc_logs_no_items_loading$1,
	oidc_logs_no_items_search_empty: oidc_logs_no_items_search_empty$1,
	oidc_logs_no_items_empty: oidc_logs_no_items_empty$1,
	oidc_logs_total_count: oidc_logs_total_count$1,
	oidc_logs_get_error: oidc_logs_get_error$1
};

var client_management = "Quản lý khách hàng";
var provider_settings = "Cài đặt dịch vụ";
var user_logs = "Nhật ký người dùng";
var oidc_empty_key_error_tips = "PrivateKey và PublicKey trống, vui lòng đến \"Cài đặt dịch vụ\" để tạo PrivateKey và PublicKey.";
var oidc_clients_add_client = "Thêm Client";
var oidc_clients_search_placeholder = "Tìm kiếm theo tên hoặc ID client...";
var oidc_clients_status_active = "Hoạt động";
var oidc_clients_status_disabled = "Đã tắt";
var oidc_clients_no_items_message = "Không tìm thấy client phù hợp";
var oidc_clients_search_message = "Đang tìm kiếm...";
var oidc_clients_total_count = "Tổng cộng {totalClients} client";
var oidc_clients_edit_title = "Chỉnh sửa Client";
var oidc_clients_add_title = "Thêm Client mới";
var oidc_clients_confirm_delete_title = "Xác nhận xóa";
var oidc_clients_confirm_delete_message_part1 = "Bạn có chắc chắn muốn xóa client ";
var oidc_clients_confirm_delete_message_part2 = " không? Hành động này không thể hoàn tác.";
var oidc_clients_cancel = "Hủy";
var oidc_clients_confirm_delete_button = "Xác nhận xóa";
var oidc_clients_delete_client_action = "Xóa Client";
var oidc_clients_columns_name = "Tên";
var oidc_clients_columns_client_id = "Client ID";
var oidc_clients_columns_status = "Trạng thái";
var oidc_clients_columns_redirect_uri = "Redirect URI";
var oidc_clients_columns_date_created = "Thời gian tạo";
var oidc_clients_columns_actions = "Hành động";
var oidc_clients_get_lists_failed = "Không lấy được danh sách client:";
var oidc_clients_get_deatil_failed = "Không lấy được chi tiết client:";
var oidc_clients_save_client_failed = "Không lưu được client:";
var oidc_clients_delete_client_failed = "Không xóa được client:";
var oidc_clients_form_client_name_label = "Tên Client";
var oidc_clients_form_client_name_placeholder = "Ví dụ: Ứng dụng web của tôi";
var oidc_clients_form_client_site_label = "URL trang web Client";
var oidc_clients_form_client_site_placeholder = "Ví dụ: http://example.com";
var oidc_clients_form_client_id_label = "Client ID";
var oidc_clients_form_client_id_placeholder = "Mã định danh duy nhất được hệ thống tạo ra";
var oidc_clients_form_client_secret_label = "Client Secret";
var oidc_clients_form_client_secret_placeholder = "Nhập một mã secret mạnh";
var oidc_clients_form_redirect_uri_label = "Redirect URI";
var oidc_clients_form_redirect_uri_placeholder = "Ví dụ: http://localhost:8080/callback";
var oidc_clients_form_status_label = "Trạng thái Client";
var oidc_clients_form_status_active = "Hoạt động";
var oidc_clients_form_status_disabled = "Đã tắt";
var oidc_clients_form_cancel_button = "Hủy";
var oidc_clients_form_update_button = "Cập nhật";
var oidc_clients_form_save_button = "Lưu";
var oidc_clients_form_required_validator = "Trường này là bắt buộc";
var oidc_clients_form_valid_url_validator = "Vui lòng nhập một URL hợp lệ (ví dụ: http://example.com hoặc myapp://callback)";
var oidc_provider_settings_title = "Cài đặt nhà cung cấp OIDC";
var oidc_provider_settings_issuer_label = "Issuer";
var oidc_provider_settings_token_expiry_label = "Thời gian hết hạn Access Token (giây)";
var oidc_provider_settings_refresh_token_expiry_label = "Thời gian hết hạn Refresh Token (giây)";
var oidc_provider_settings_code_expiry_label = "Thời gian hết hạn CODE Token (giây)";
var oidc_provider_settings_allow_refresh_tokens_label = "Cho phép Refresh Token";
var oidc_provider_settings_key_pair_title = "Cặp khóa ký RS256 (Công khai/Riêng tư)";
var oidc_provider_settings_key_instructions_part1 = "Bạn có thể dán thủ công Khóa Công khai và Khóa Riêng tư ở định dạng PEM, hoặc sử dụng nút bên dưới để tạo một cặp khóa mới (nếu trình duyệt của bạn hỗ trợ).";
var oidc_provider_settings_key_instructions_part2 = "(Tự động tạo không được hỗ trợ trong môi trường này)";
var oidc_provider_settings_public_key_label = "Khóa Công khai (Định dạng PEM):";
var oidc_provider_settings_private_key_label = "Khóa Riêng tư (Định dạng PEM):";
var oidc_provider_settings_private_key_warning = "⚠️Cảnh báo bảo mật: Xử lý Khóa Riêng tư hết sức cẩn thận. Đảm bảo dán trong môi trường an toàn, tránh bị quan sát hoặc truyền qua mạng không an toàn. Trong môi trường sản xuất, việc nhập trực tiếp Khóa Riêng tư vào giao diện người dùng thường không được khuyến nghị.";
var oidc_provider_settings_generating_keys = "Đang tạo...";
var oidc_provider_settings_generate_new_keys = "Tạo cặp khóa mới (Ghi đè khóa hiện tại)";
var oidc_provider_settings_crypto_note = "(Yêu cầu bật HTTPS hoặc localhost)";
var oidc_provider_settings_cancel_changes = "Hủy thay đổi";
var oidc_provider_settings_saving = "Đang lưu";
var oidc_provider_settings_save_changes = "Lưu thay đổi";
var oidc_provider_settings_config_endpoint_title = "Endpoint cấu hình OIDC";
var oidc_provider_settings_copy_button = "Sao chép";
var oidc_provider_settings_jwks_endpoint_title = "Endpoint JWKS";
var oidc_provider_settings_load_failed = "Không tải được cài đặt, đã khôi phục về giá trị mặc định";
var oidc_provider_settings_load_failed_prefix = "Không tải được cài đặt:";
var oidc_provider_settings_issuer_invalid_format = "Định dạng Issuer không hợp lệ";
var oidc_provider_settings_validation_issuer_expiry = "Vui lòng kiểm tra các trường nhập, đảm bảo đã điền Issuer và thời gian hết hạn là số dương!";
var oidc_provider_settings_validation_key_check = "Vui lòng kiểm tra các khóa đã nhập:\n";
var oidc_provider_settings_validation_public_key_invalid = "- Khóa công khai dường như không ở định dạng PEM hợp lệ\n";
var oidc_provider_settings_validation_private_key_invalid = "- Khóa riêng tư dường như không ở định dạng PEM hợp lệ\n";
var oidc_provider_settings_validation_key_pair_required = "Vui lòng cung cấp cả Khóa Công khai và Khóa Riêng tư, hoặc để trống cả hai";
var oidc_provider_settings_save_success = "Đã lưu cài đặt thành công!";
var oidc_provider_settings_save_failed_prefix = "Không lưu được cài đặt:";
var oidc_provider_settings_changes_cancelled = "Đã hủy thay đổi";
var oidc_provider_settings_crypto_warning_https = "Cảnh báo: Trang hiện tại không được truy cập qua HTTPS, trình duyệt hạn chế tự động tạo khóa";
var oidc_provider_settings_crypto_warning_browser = "Cảnh báo: Trình duyệt hiện tại không hỗ trợ tự động tạo khóa";
var oidc_provider_settings_crypto_api_unavailable = "Web Crypto API không khả dụng";
var oidc_provider_settings_generate_confirm = "Bạn có chắc chắn muốn tạo một cặp khóa mới? Điều này sẽ ghi đè các khóa hiện tại.";
var oidc_provider_settings_generate_success = "Đã tạo cặp khóa mới thành công";
var oidc_provider_settings_generate_failed_prefix = "Không tạo được khóa:";
var oidc_provider_settings_generate_failed = "Không tạo được khóa";
var oidc_provider_settings_copied = "Đã sao chép vào bảng nhớ tạm";
var oidc_provider_settings_copy_failed_prefix = "Sao chép thất bại:";
var oidc_provider_settings_copy_manual_prompt = "Vui lòng sao chép thủ công:";
var oidc_logs_search_placeholder = "Tìm kiếm theo ID, Client ID, hoặc User ID...";
var oidc_logs_columns_client_name = "Tên Client";
var oidc_logs_columns_client_uri = "Client URI";
var oidc_logs_columns_client_id = "Client ID";
var oidc_logs_columns_username = "Tên người dùng";
var oidc_logs_columns_date_created = "Thời gian gọi";
var oidc_logs_no_items_loading = "Đang tải...";
var oidc_logs_no_items_search_empty = "Không tìm thấy token phù hợp.";
var oidc_logs_no_items_empty = "Không có token để hiển thị.";
var oidc_logs_total_count = "Tổng cộng {totalLogs} log";
var oidc_logs_get_error = "Không lấy được danh sách log:";
var vi = {
	client_management: client_management,
	provider_settings: provider_settings,
	user_logs: user_logs,
	oidc_empty_key_error_tips: oidc_empty_key_error_tips,
	oidc_clients_add_client: oidc_clients_add_client,
	oidc_clients_search_placeholder: oidc_clients_search_placeholder,
	oidc_clients_status_active: oidc_clients_status_active,
	oidc_clients_status_disabled: oidc_clients_status_disabled,
	oidc_clients_no_items_message: oidc_clients_no_items_message,
	oidc_clients_search_message: oidc_clients_search_message,
	oidc_clients_total_count: oidc_clients_total_count,
	oidc_clients_edit_title: oidc_clients_edit_title,
	oidc_clients_add_title: oidc_clients_add_title,
	oidc_clients_confirm_delete_title: oidc_clients_confirm_delete_title,
	oidc_clients_confirm_delete_message_part1: oidc_clients_confirm_delete_message_part1,
	oidc_clients_confirm_delete_message_part2: oidc_clients_confirm_delete_message_part2,
	oidc_clients_cancel: oidc_clients_cancel,
	oidc_clients_confirm_delete_button: oidc_clients_confirm_delete_button,
	oidc_clients_delete_client_action: oidc_clients_delete_client_action,
	oidc_clients_columns_name: oidc_clients_columns_name,
	oidc_clients_columns_client_id: oidc_clients_columns_client_id,
	oidc_clients_columns_status: oidc_clients_columns_status,
	oidc_clients_columns_redirect_uri: oidc_clients_columns_redirect_uri,
	oidc_clients_columns_date_created: oidc_clients_columns_date_created,
	oidc_clients_columns_actions: oidc_clients_columns_actions,
	oidc_clients_get_lists_failed: oidc_clients_get_lists_failed,
	oidc_clients_get_deatil_failed: oidc_clients_get_deatil_failed,
	oidc_clients_save_client_failed: oidc_clients_save_client_failed,
	oidc_clients_delete_client_failed: oidc_clients_delete_client_failed,
	oidc_clients_form_client_name_label: oidc_clients_form_client_name_label,
	oidc_clients_form_client_name_placeholder: oidc_clients_form_client_name_placeholder,
	oidc_clients_form_client_site_label: oidc_clients_form_client_site_label,
	oidc_clients_form_client_site_placeholder: oidc_clients_form_client_site_placeholder,
	oidc_clients_form_client_id_label: oidc_clients_form_client_id_label,
	oidc_clients_form_client_id_placeholder: oidc_clients_form_client_id_placeholder,
	oidc_clients_form_client_secret_label: oidc_clients_form_client_secret_label,
	oidc_clients_form_client_secret_placeholder: oidc_clients_form_client_secret_placeholder,
	oidc_clients_form_redirect_uri_label: oidc_clients_form_redirect_uri_label,
	oidc_clients_form_redirect_uri_placeholder: oidc_clients_form_redirect_uri_placeholder,
	oidc_clients_form_status_label: oidc_clients_form_status_label,
	oidc_clients_form_status_active: oidc_clients_form_status_active,
	oidc_clients_form_status_disabled: oidc_clients_form_status_disabled,
	oidc_clients_form_cancel_button: oidc_clients_form_cancel_button,
	oidc_clients_form_update_button: oidc_clients_form_update_button,
	oidc_clients_form_save_button: oidc_clients_form_save_button,
	oidc_clients_form_required_validator: oidc_clients_form_required_validator,
	oidc_clients_form_valid_url_validator: oidc_clients_form_valid_url_validator,
	oidc_provider_settings_title: oidc_provider_settings_title,
	oidc_provider_settings_issuer_label: oidc_provider_settings_issuer_label,
	oidc_provider_settings_token_expiry_label: oidc_provider_settings_token_expiry_label,
	oidc_provider_settings_refresh_token_expiry_label: oidc_provider_settings_refresh_token_expiry_label,
	oidc_provider_settings_code_expiry_label: oidc_provider_settings_code_expiry_label,
	oidc_provider_settings_allow_refresh_tokens_label: oidc_provider_settings_allow_refresh_tokens_label,
	oidc_provider_settings_key_pair_title: oidc_provider_settings_key_pair_title,
	oidc_provider_settings_key_instructions_part1: oidc_provider_settings_key_instructions_part1,
	oidc_provider_settings_key_instructions_part2: oidc_provider_settings_key_instructions_part2,
	oidc_provider_settings_public_key_label: oidc_provider_settings_public_key_label,
	oidc_provider_settings_private_key_label: oidc_provider_settings_private_key_label,
	oidc_provider_settings_private_key_warning: oidc_provider_settings_private_key_warning,
	oidc_provider_settings_generating_keys: oidc_provider_settings_generating_keys,
	oidc_provider_settings_generate_new_keys: oidc_provider_settings_generate_new_keys,
	oidc_provider_settings_crypto_note: oidc_provider_settings_crypto_note,
	oidc_provider_settings_cancel_changes: oidc_provider_settings_cancel_changes,
	oidc_provider_settings_saving: oidc_provider_settings_saving,
	oidc_provider_settings_save_changes: oidc_provider_settings_save_changes,
	oidc_provider_settings_config_endpoint_title: oidc_provider_settings_config_endpoint_title,
	oidc_provider_settings_copy_button: oidc_provider_settings_copy_button,
	oidc_provider_settings_jwks_endpoint_title: oidc_provider_settings_jwks_endpoint_title,
	oidc_provider_settings_load_failed: oidc_provider_settings_load_failed,
	oidc_provider_settings_load_failed_prefix: oidc_provider_settings_load_failed_prefix,
	oidc_provider_settings_issuer_invalid_format: oidc_provider_settings_issuer_invalid_format,
	oidc_provider_settings_validation_issuer_expiry: oidc_provider_settings_validation_issuer_expiry,
	oidc_provider_settings_validation_key_check: oidc_provider_settings_validation_key_check,
	oidc_provider_settings_validation_public_key_invalid: oidc_provider_settings_validation_public_key_invalid,
	oidc_provider_settings_validation_private_key_invalid: oidc_provider_settings_validation_private_key_invalid,
	oidc_provider_settings_validation_key_pair_required: oidc_provider_settings_validation_key_pair_required,
	oidc_provider_settings_save_success: oidc_provider_settings_save_success,
	oidc_provider_settings_save_failed_prefix: oidc_provider_settings_save_failed_prefix,
	oidc_provider_settings_changes_cancelled: oidc_provider_settings_changes_cancelled,
	oidc_provider_settings_crypto_warning_https: oidc_provider_settings_crypto_warning_https,
	oidc_provider_settings_crypto_warning_browser: oidc_provider_settings_crypto_warning_browser,
	oidc_provider_settings_crypto_api_unavailable: oidc_provider_settings_crypto_api_unavailable,
	oidc_provider_settings_generate_confirm: oidc_provider_settings_generate_confirm,
	oidc_provider_settings_generate_success: oidc_provider_settings_generate_success,
	oidc_provider_settings_generate_failed_prefix: oidc_provider_settings_generate_failed_prefix,
	oidc_provider_settings_generate_failed: oidc_provider_settings_generate_failed,
	oidc_provider_settings_copied: oidc_provider_settings_copied,
	oidc_provider_settings_copy_failed_prefix: oidc_provider_settings_copy_failed_prefix,
	oidc_provider_settings_copy_manual_prompt: oidc_provider_settings_copy_manual_prompt,
	oidc_logs_search_placeholder: oidc_logs_search_placeholder,
	oidc_logs_columns_client_name: oidc_logs_columns_client_name,
	oidc_logs_columns_client_uri: oidc_logs_columns_client_uri,
	oidc_logs_columns_client_id: oidc_logs_columns_client_id,
	oidc_logs_columns_username: oidc_logs_columns_username,
	oidc_logs_columns_date_created: oidc_logs_columns_date_created,
	oidc_logs_no_items_loading: oidc_logs_no_items_loading,
	oidc_logs_no_items_search_empty: oidc_logs_no_items_search_empty,
	oidc_logs_no_items_empty: oidc_logs_no_items_empty,
	oidc_logs_total_count: oidc_logs_total_count,
	oidc_logs_get_error: oidc_logs_get_error
};

const messages = {
  en,
  ja,
  ko,
  de,
  fr,
  it,
  vi,
  "zh-CN": zh_Hans,
  "zh-TW": zh_Hant,
  "zh-Hans": zh_Hans,
  "zh-Hant": zh_Hant,
  "zh-Hans-HK": zh_Hans,
  "zh-Hant-HK": zh_Hant
};
const globalLocales = [
  "en",
  "ja",
  "ko",
  "de",
  "fr",
  "it",
  "vi",
  "zh-Hans",
  "zh-Hant",
  "zh-CN",
  "zh-TW",
  "zh-Hans-HK",
  "zh-Hant-HK"
];
const i18n = createI18n({
  locale: "en",
  fallbackLocale: globalLocales,
  messages
});
const globalI18n = i18n.global;
const getTranslate = () => {
  const languages = navigator.languages || [navigator.language];
  const preferred = acceptLanguageParser.pick(globalLocales, languages.join(","));
  globalI18n.locale.value = preferred || "en";
  return globalI18n.t;
};

var css$5 = "\n.oidc-client-form[data-v-48a584e9] {\n  padding: 0.5rem 0;\n}\n.form-field[data-v-48a584e9] {\n  margin-bottom: 1.25rem;\n}\n.form-field[data-v-48a584e9]:last-of-type {\n  margin-bottom: 0;\n}\n.secret-group[data-v-48a584e9] {\n  position: relative;\n  width: 100%;\n}\n.generate-button[data-v-48a584e9] {\n  position: absolute;\n  right: 0.5rem;\n  top: 25%;\n  height: 100%;\n  cursor: pointer;\n}\nlabel[data-v-48a584e9] {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  font-size: 0.9rem;\n  color: var(--text-color-secondary, #555);\n}\n.radio-group-label[data-v-48a584e9] {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  font-size: 0.9rem;\n  color: var(--text-color-secondary, #555);\n}\n.radio-options[data-v-48a584e9] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  margin-top: 0.25rem;\n}\n.dialog-actions[data-v-48a584e9] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  margin-top: 2rem;\n  padding-top: 1rem;\n  border-top: 1px solid var(--border-color-light, #eee);\n}\n";
n(css$5,{});

const _hoisted_1$5 = { class: "oidc-client-form" };
const _hoisted_2$4 = { for: "client-name-input" };
const _hoisted_3$4 = { for: "client-site-input" };
const _hoisted_4$3 = { for: "client-id-input" };
const _hoisted_5$3 = { for: "client-secret-input" };
const _hoisted_6$3 = { class: "form-field" };
const _hoisted_7$3 = { class: "secret-group" };
const _hoisted_8$3 = { for: "redirect-uri-input" };
const _hoisted_9$2 = {
  key: 0,
  class: "form-field radio-group-field"
};
const _hoisted_10$2 = { class: "radio-group-label" };
const _hoisted_11$2 = { class: "radio-options" };
const _hoisted_12$2 = { class: "dialog-actions" };

const _sfc_main$5 = {
  __name: 'oidcClientForm',
  props: {
  modelValue: {
    type: Object,
    required: true,
  },
  isEditing: {
    type: Boolean,
    default: false,
  },
},
  emits: ['update:modelValue', 'save', 'cancel'],
  setup(__props, { emit: __emit }) {

const translate = getTranslate();
const props = __props;
const emit = __emit;
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

return (_ctx, _cache) => {
  const _component_v_input = resolveComponent("v-input");
  const _component_v_icon = resolveComponent("v-icon");
  const _component_v_radio = resolveComponent("v-radio");
  const _component_v_button = resolveComponent("v-button");

  return (openBlock(), createElementBlock("div", _hoisted_1$5, [
    createCommentVNode(" Client Name "),
    createElementVNode("label", _hoisted_2$4, toDisplayString(unref(translate)('oidc_clients_form_client_name_label')), 1 /* TEXT */),
    createVNode(_component_v_input, {
      id: "client-name-input",
      modelValue: editableClient.value.client_name,
      "onUpdate:modelValue": [
        _cache[0] || (_cache[0] = $event => ((editableClient.value.client_name) = $event)),
        updateModelValue
      ],
      label: unref(translate)('oidc_clients_form_client_name_label'),
      placeholder: unref(translate)('oidc_clients_form_client_name_placeholder'),
      required: "",
      rules: [validators.required],
      disabled: __props.isEditing,
      autofocus: !__props.isEditing,
      class: "form-field"
    }, null, 8 /* PROPS */, ["modelValue", "label", "placeholder", "rules", "disabled", "autofocus"]),
    createCommentVNode(" Client Site "),
    createElementVNode("label", _hoisted_3$4, toDisplayString(unref(translate)('oidc_clients_form_client_site_label')), 1 /* TEXT */),
    createVNode(_component_v_input, {
      id: "client-site-input",
      modelValue: editableClient.value.client_site,
      "onUpdate:modelValue": [
        _cache[1] || (_cache[1] = $event => ((editableClient.value.client_site) = $event)),
        updateModelValue
      ],
      label: unref(translate)('oidc_clients_form_client_site_label'),
      placeholder: unref(translate)('oidc_clients_form_client_site_placeholder'),
      class: "form-field"
    }, null, 8 /* PROPS */, ["modelValue", "label", "placeholder"]),
    createCommentVNode(" Client ID "),
    createElementVNode("label", _hoisted_4$3, toDisplayString(unref(translate)('oidc_clients_form_client_id_label')), 1 /* TEXT */),
    createVNode(_component_v_input, {
      id: "client-id-input",
      modelValue: editableClient.value.client_id,
      "onUpdate:modelValue": [
        _cache[2] || (_cache[2] = $event => ((editableClient.value.client_id) = $event)),
        updateModelValue
      ],
      label: unref(translate)('oidc_clients_form_client_id_label'),
      placeholder: unref(translate)('oidc_clients_form_client_id_placeholder'),
      required: "",
      rules: [validators.required],
      disabled: __props.isEditing,
      class: "form-field"
    }, null, 8 /* PROPS */, ["modelValue", "label", "placeholder", "rules", "disabled"]),
    createCommentVNode(" Client Secret "),
    createElementVNode("label", _hoisted_5$3, toDisplayString(unref(translate)('oidc_clients_form_client_secret_label')), 1 /* TEXT */),
    createElementVNode("div", _hoisted_6$3, [
      createElementVNode("div", _hoisted_7$3, [
        createVNode(_component_v_input, {
          id: "client-secret-input",
          modelValue: editableClient.value.client_secret,
          "onUpdate:modelValue": [
            _cache[3] || (_cache[3] = $event => ((editableClient.value.client_secret) = $event)),
            updateModelValue
          ],
          label: unref(translate)('oidc_clients_form_client_secret_label'),
          type: showPassword.value ? 'text' : 'password',
          placeholder: unref(translate)('oidc_clients_form_client_secret_placeholder'),
          required: "",
          rules: [validators.required]
        }, null, 8 /* PROPS */, ["modelValue", "label", "type", "placeholder", "rules"]),
        createElementVNode("div", {
          class: "generate-button",
          onClick: togglePasswordVisibility
        }, [
          createVNode(_component_v_icon, {
            name: showPassword.value ? 'visibility_off' : 'visibility'
          }, null, 8 /* PROPS */, ["name"])
        ])
      ])
    ]),
    createCommentVNode(" Redirect URI "),
    createElementVNode("label", _hoisted_8$3, toDisplayString(unref(translate)('oidc_clients_form_redirect_uri_label')), 1 /* TEXT */),
    createVNode(_component_v_input, {
      id: "redirect-uri-input",
      modelValue: editableClient.value.redirect_uri,
      "onUpdate:modelValue": [
        _cache[4] || (_cache[4] = $event => ((editableClient.value.redirect_uri) = $event)),
        updateModelValue
      ],
      label: unref(translate)('oidc_clients_form_redirect_uri_label'),
      placeholder: unref(translate)('oidc_clients_form_redirect_uri_placeholder'),
      required: "",
      rules: [validators.required, validators.validUrl],
      class: "form-field"
    }, null, 8 /* PROPS */, ["modelValue", "label", "placeholder", "rules"]),
    createCommentVNode(" Client Status "),
    (__props.isEditing)
      ? (openBlock(), createElementBlock("div", _hoisted_9$2, [
          createElementVNode("label", _hoisted_10$2, toDisplayString(unref(translate)('oidc_clients_form_status_label')), 1 /* TEXT */),
          createElementVNode("div", _hoisted_11$2, [
            createVNode(_component_v_radio, {
              modelValue: editableClient.value.status,
              "onUpdate:modelValue": [
                _cache[5] || (_cache[5] = $event => ((editableClient.value.status) = $event)),
                updateModelValue
              ],
              value: true,
              label: unref(translate)('oidc_clients_form_status_active'),
              name: "client-status"
            }, null, 8 /* PROPS */, ["modelValue", "label"]),
            createVNode(_component_v_radio, {
              modelValue: editableClient.value.status,
              "onUpdate:modelValue": [
                _cache[6] || (_cache[6] = $event => ((editableClient.value.status) = $event)),
                updateModelValue
              ],
              value: false,
              label: unref(translate)('oidc_clients_form_status_disabled'),
              name: "client-status"
            }, null, 8 /* PROPS */, ["modelValue", "label"])
          ])
        ]))
      : createCommentVNode("v-if", true),
    createElementVNode("div", _hoisted_12$2, [
      createVNode(_component_v_button, {
        secondary: "",
        onClick: _cache[7] || (_cache[7] = $event => (_ctx.$emit('cancel')))
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(unref(translate)('oidc_clients_form_cancel_button')), 1 /* TEXT */)
        ]),
        _: 1 /* STABLE */
      }),
      createVNode(_component_v_button, {
        onClick: _cache[8] || (_cache[8] = $event => (_ctx.$emit('save'))),
        disabled: isFormInvalid.value
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(__props.isEditing ? unref(translate)('oidc_clients_form_update_button') : unref(translate)('oidc_clients_form_save_button')), 1 /* TEXT */)
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["disabled"])
    ])
  ]))
}
}

};
var OidcClientForm = /*#__PURE__*/_export_sfc(_sfc_main$5, [['__scopeId',"data-v-48a584e9"],['__file',"oidcClientForm.vue"]]);

var css$4 = "\n.action-button[data-v-853b3588] {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  color: #0066cc;\n  width: 100%;\n  height: 100%;\n}\n.action-button[data-v-853b3588]:hover {\n  color: #0066ff;\n}\n.oidc-clients[data-v-853b3588] {\n  display: flex;\n  flex-direction: column;\n}\n.oidc-header[data-v-853b3588] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n  border-radius: var(--border-radius, 8px);\n}\n.oidc-header .v-input[data-v-853b3588] {\n  max-width: 350px;\n  flex-grow: 1;\n}\n.client-table[data-v-853b3588] {\n  width: 100%;\n}\n.uri-cell[data-v-853b3588] {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 350px;\n}\n.pagination[data-v-853b3588] {\n  margin-top: 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n.overlay[data-v-853b3588] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.8);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n  z-index: 10;\n}\n.overlay-text[data-v-853b3588] {\n  font-size: 18px;\n  color: #333;\n  text-align: center;\n  padding: 20px;\n  background-color: rgba(255, 255, 255, 0.9);\n  border-radius: 5px;\n}\n@media (max-width: 768px) {\n.oidc-header[data-v-853b3588] {\n    flex-direction: column;\n    align-items: stretch;\n}\n.oidc-header .v-input[data-v-853b3588] {\n    max-width: none;\n}\n.oidc-body[data-v-853b3588] {\n    overflow-x: auto;\n}\n}\n";
n(css$4,{});

const _hoisted_1$4 = { class: "oidc-clients" };
const _hoisted_2$3 = { class: "oidc-header" };
const _hoisted_3$3 = { class: "oidc-body" };
const _hoisted_4$2 = ["title"];
const _hoisted_5$2 = ["title"];
const _hoisted_6$2 = ["onClick"];
const _hoisted_7$2 = {
  small: "",
  icon: ""
};
const _hoisted_8$2 = { class: "pagination" };
const _hoisted_9$1 = {
  class: "total-clients",
  style: {"color":"#94a1b5"}
};
const _hoisted_10$1 = { style: { display: 'flex', gap: '1.0rem' } };
const _hoisted_11$1 = {
  key: 0,
  class: "overlay"
};
const _hoisted_12$1 = { class: "overlay-text" };


const _sfc_main$4 = {
  __name: 'client-management',
  setup(__props) {

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

const OIDCConfig = async () => (await getOIDCProviderConfig(api));

watch(searchQuery, async (newValue, oldValue) => {
  if (newValue !== oldValue) {
    fetchClients();
  }
});

onMounted(async () => {
  const config = await OIDCConfig();
  if (config.privateKeyPem && config.publicKeyPem) {
    fetchClients();
  }else {
    pageVisit.value = false;
  }
});

return (_ctx, _cache) => {
  const _component_v_icon = resolveComponent("v-icon");
  const _component_v_button = resolveComponent("v-button");
  const _component_v_input = resolveComponent("v-input");
  const _component_v_pagination = resolveComponent("v-pagination");
  const _component_v_card_title = resolveComponent("v-card-title");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_v_card = resolveComponent("v-card");
  const _component_v_dialog = resolveComponent("v-dialog");
  const _component_v_card_actions = resolveComponent("v-card-actions");

  return (openBlock(), createElementBlock("div", _hoisted_1$4, [
    createElementVNode("div", _hoisted_2$3, [
      createVNode(_component_v_button, { onClick: openAddDialog }, {
        default: withCtx(() => [
          createVNode(_component_v_icon, { name: "add" }),
          createTextVNode(" " + toDisplayString(unref(translate)("oidc_clients_add_client")), 1 /* TEXT */)
        ]),
        _: 1 /* STABLE */
      }),
      createVNode(_component_v_input, {
        modelValue: searchQuery.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((searchQuery).value = $event)),
        placeholder: unref(translate)('oidc_clients_search_placeholder'),
        clearable: ""
      }, {
        prepend: withCtx(() => [
          createVNode(_component_v_icon, { name: "search" })
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["modelValue", "placeholder"])
    ]),
    createElementVNode("div", _hoisted_3$3, [
      createVNode(Table, {
        items: clients.value,
        columns: columns,
        selectable: false,
        sortable: true,
        "row-clickable": true,
        onRowClick: openEditDialog,
        class: "client-table",
        "fixed-header": true,
        "no-items-message": unref(translate)('oidc_clients_no_items_message'),
        "search-message": unref(translate)('oidc_clients_search_message'),
        loading: loading.value
      }, {
        "item.status": withCtx(({ item }) => [
          createVNode(Tag, {
            text: item.status
              ? unref(translate)('oidc_clients_status_active')
              : unref(translate)('oidc_clients_status_disabled')
            ,
            color: item.status ? 'var(--green)' : 'var(--danger)'
          }, null, 8 /* PROPS */, ["text", "color"])
        ]),
        "item.redirect_uri": withCtx(({ item }) => [
          createElementVNode("span", {
            class: "uri-cell",
            title: item.redirect_uri
          }, toDisplayString(item.redirect_uri), 9 /* TEXT, PROPS */, _hoisted_4$2)
        ]),
        "item.date_created": withCtx(({ item }) => [
          createElementVNode("span", {
            class: "date-cell",
            title: item.date_created
          }, toDisplayString(item.date_created), 9 /* TEXT, PROPS */, _hoisted_5$2)
        ]),
        "item.actions": withCtx(({ item }) => [
          createElementVNode("div", {
            class: "action-button",
            onClick: withModifiers($event => (confirmRemoveClient(item)), ["stop"])
          }, [
            createElementVNode("span", _hoisted_7$2, toDisplayString(unref(translate)("oidc_clients_delete_client_action")), 1 /* TEXT */)
          ], 8 /* PROPS */, _hoisted_6$2)
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["items", "no-items-message", "search-message", "loading"]),
      createElementVNode("div", _hoisted_8$2, [
        createElementVNode("div", null, [
          createElementVNode("span", _hoisted_9$1, toDisplayString(unref(translate)("oidc_clients_total_count", {
                totalClients: totalClients.value,
              })), 1 /* TEXT */)
        ]),
        createElementVNode("div", null, [
          createVNode(_component_v_pagination, {
            modelValue: page.value,
            "onUpdate:modelValue": [
              _cache[1] || (_cache[1] = $event => ((page).value = $event)),
              fetchClients
            ],
            length: pageLength.value,
            totalVisible: 10
          }, null, 8 /* PROPS */, ["modelValue", "length"])
        ])
      ])
    ]),
    createVNode(_component_v_dialog, {
      modelValue: showDialog.value,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => ((showDialog).value = $event)),
      onEsc: closeDialog
    }, {
      default: withCtx(() => [
        createVNode(_component_v_card, null, {
          default: withCtx(() => [
            createVNode(_component_v_card_title, null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(isEditing.value
            ? unref(translate)("oidc_clients_edit_title")
            : unref(translate)("oidc_clients_add_title")), 1 /* TEXT */)
              ]),
              _: 1 /* STABLE */
            }),
            createVNode(_component_v_card_text, null, {
              default: withCtx(() => [
                (showDialog.value)
                  ? (openBlock(), createBlock(OidcClientForm, {
                      key: 0,
                      modelValue: currentClient.value,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ((currentClient).value = $event)),
                      "is-editing": isEditing.value,
                      onSave: saveClient,
                      onCancel: closeDialog
                    }, null, 8 /* PROPS */, ["modelValue", "is-editing"]))
                  : createCommentVNode("v-if", true)
              ]),
              _: 1 /* STABLE */
            })
          ]),
          _: 1 /* STABLE */
        })
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["modelValue"]),
    createVNode(_component_v_dialog, {
      modelValue: showRevokeConfirmDialog.value,
      "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => ((showRevokeConfirmDialog).value = $event)),
      onEsc: closeDialog,
      "max-width": "400px"
    }, {
      default: withCtx(() => [
        createVNode(_component_v_card, null, {
          default: withCtx(() => [
            createVNode(_component_v_card_title, { class: "headline" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(translate)("oidc_clients_confirm_delete_title")), 1 /* TEXT */)
              ]),
              _: 1 /* STABLE */
            }),
            createVNode(_component_v_card_text, null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(translate)("oidc_clients_confirm_delete_message_part1")) + " ", 1 /* TEXT */),
                createElementVNode("strong", null, toDisplayString(clientToRemove.value?.client_name), 1 /* TEXT */),
                createTextVNode(" " + toDisplayString(unref(translate)("oidc_clients_confirm_delete_message_part2")), 1 /* TEXT */)
              ]),
              _: 1 /* STABLE */
            }),
            createVNode(_component_v_card_actions, null, {
              default: withCtx(() => [
                createElementVNode("div", _hoisted_10$1, [
                  createVNode(_component_v_button, {
                    text: "",
                    onClick: _cache[4] || (_cache[4] = $event => (showRevokeConfirmDialog.value = false)),
                    disabled: _ctx.deleting
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(translate)("oidc_clients_cancel")), 1 /* TEXT */)
                    ]),
                    _: 1 /* STABLE */
                  }, 8 /* PROPS */, ["disabled"]),
                  createVNode(_component_v_button, {
                    color: "error",
                    onClick: executeDeleteClient,
                    loading: _ctx.deleting
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(translate)("oidc_clients_confirm_delete_button")), 1 /* TEXT */)
                    ]),
                    _: 1 /* STABLE */
                  }, 8 /* PROPS */, ["loading"])
                ])
              ]),
              _: 1 /* STABLE */
            })
          ]),
          _: 1 /* STABLE */
        })
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["modelValue"]),
    (!pageVisit.value)
      ? (openBlock(), createElementBlock("div", _hoisted_11$1, [
          createElementVNode("div", _hoisted_12$1, toDisplayString(unref(translate)("oidc_empty_key_error_tips")), 1 /* TEXT */)
        ]))
      : createCommentVNode("v-if", true)
  ]))
}
}

};
var ClientManagement = /*#__PURE__*/_export_sfc(_sfc_main$4, [['__scopeId',"data-v-853b3588"],['__file',"client-management.vue"]]);

var css$3 = "\n.base-card[data-v-c75a8561] {\n  border-radius: 8px;\n  border: 1px solid var(--border-subdued, #e0e0e0);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  background-color: var(--background-card, white);\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.base-card-header[data-v-c75a8561] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--border-subdued, #e0e0e0);\n  color: var(--foreground-normal);\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.base-card-header.no-border[data-v-c75a8561] {\n  border-bottom: none;\n}\n.default-title[data-v-c75a8561] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.actions[data-v-c75a8561] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.base-card-content[data-v-c75a8561] {\n  padding: 16px;\n  flex-grow: 1;\n}\n.base-card-content.no-padding[data-v-c75a8561] {\n  padding: 0;\n}\n";
n(css$3,{});

const _sfc_main$3 = {
  name: 'BaseCard',
  props: {
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: null
    },
    iconColor: {
      type: String,
      default: 'var(--primary)'
    },
    hideHeader: {
      type: Boolean,
      default: false
    },
    noBorder: {
      type: Boolean,
      default: false
    },
    noPadding: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    // Minimal logic component
    return {};
  }
};

const _hoisted_1$3 = { class: "base-card" };
const _hoisted_2$2 = { class: "default-title" };
const _hoisted_3$2 = { class: "actions" };

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_icon = resolveComponent("v-icon");

  return (openBlock(), createElementBlock("div", _hoisted_1$3, [
    (!$props.hideHeader)
      ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["base-card-header", { 'no-border': $props.noBorder }])
        }, [
          createCommentVNode(" Slot for custom title area "),
          renderSlot(_ctx.$slots, "title", {}, () => [
            createElementVNode("div", _hoisted_2$2, [
              ($props.icon)
                ? (openBlock(), createBlock(_component_v_icon, {
                    key: 0,
                    name: $props.icon,
                    left: "",
                    style: normalizeStyle({ color: $props.iconColor })
                  }, null, 8 /* PROPS */, ["name", "style"]))
                : createCommentVNode("v-if", true),
              createElementVNode("span", null, toDisplayString($props.title), 1 /* TEXT */)
            ])
          ], true),
          createCommentVNode(" Slot for actions on the right side of the header "),
          createElementVNode("div", _hoisted_3$2, [
            renderSlot(_ctx.$slots, "actions", {}, undefined, true)
          ])
        ], 2 /* CLASS */))
      : createCommentVNode("v-if", true),
    createElementVNode("div", {
      class: normalizeClass(["base-card-content", { 'no-padding': $props.noPadding }])
    }, [
      createCommentVNode(" Default slot for card main content "),
      renderSlot(_ctx.$slots, "default", {}, undefined, true)
    ], 2 /* CLASS */)
  ]))
}
var BaseCard = /*#__PURE__*/_export_sfc(_sfc_main$3, [['render',_sfc_render],['__scopeId',"data-v-c75a8561"],['__file',"basecard.vue"]]);

var css$2 = "\n.oidc-settings-container[data-v-03500379] {\n  font-family: var(--font-family-sans, sans-serif);\n}\n.warning-message[data-v-03500379] {\n  padding: 10px 15px;\n  border-radius: var(--border-radius, 4px);\n  text-align: center;\n  background-color: var(--warning-10, #fff3cd);\n  color: var(--warning-dark, #856404);\n  border: 1px solid var(--warning-border, #ffeeba);\n  margin-bottom: 20px;\n}\n.layout-grid[data-v-03500379] {\n  display: grid;\n  grid-template-columns: 5fr 5fr;\n  gap: 20px;\n}\n.column-sidebar[data-v-03500379] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.column-main[data-v-03500379] {\n  min-width: 0;\n}\n.column-sidebar[data-v-03500379] {\n  min-width: 0;\n}\n@media (max-width: 992px) {\n.layout-grid[data-v-03500379] {\n    grid-template-columns: 1fr;\n}\n}\n.private-key-warning[data-v-03500379] {\n  padding: 8px 12px;\n  margin-bottom: 8px;\n  border-radius: var(--border-radius, 4px);\n  background-color: var(--danger-10, #f8d7da);\n  color: var(--danger-dark, #721c24);\n  border: 1px solid var(--danger-border, #f5c6cb);\n  font-size: 0.85rem;\n}\n.key-instructions[data-v-03500379] {\n  font-size: 0.9rem;\n  color: var(--text-subdued, #666);\n  margin-bottom: 15px;\n}\n.crypto-unavailable[data-v-03500379] {\n  color: var(--danger, #dc3545);\n  font-weight: bold;\n}\n.crypto-note[data-v-03500379] {\n  font-size: 0.8rem;\n  color: var(--text-muted, #888);\n  margin-left: 5px;\n  vertical-align: middle;\n}\n.key-management>label[data-v-03500379] {\n  font-weight: var(--font-weight-bold, bold);\n  display: block;\n  margin-bottom: 10px;\n}\n.key-input-group[data-v-03500379] {\n  margin-bottom: 15px;\n  position: relative;\n}\n.key-input-group label[data-v-03500379] {\n  font-weight: var(--font-weight-normal, normal);\n  font-size: var(--font-size-extra-small, 0.8rem);\n  color: var(--text-subdued, #666);\n  display: block;\n  margin-bottom: 4px;\n}\n.key-input-group textarea[data-v-03500379] {\n  width: 100%;\n  font-family: var(--font-family-mono, monospace);\n  font-size: 0.85rem;\n  line-height: 1.4;\n  border: 1px solid var(--border-color-normal, #ccc);\n  border-radius: var(--border-radius-input, 4px);\n  padding: 8px 12px;\n  box-sizing: border-box;\n  background-color: var(--input-background, #fff);\n  color: var(--input-text-color, #333);\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.key-input-group textarea[data-v-03500379]:focus {\n  border-color: var(--primary, #007bff);\n  box-shadow: 0 0 0 2px var(--primary-a10, rgba(0, 123, 255, 0.1));\n  outline: none;\n}\n.key-input-group textarea[data-v-03500379]:disabled {\n  background-color: var(--background-subdued, #f5f5f5);\n  cursor: not-allowed;\n  color: var(--text-muted-light, #999);\n  border-color: var(--border-color-subtle, #e0e0e0);\n}\n.generate-button-container[data-v-03500379] {\n  width: 100%;\n  margin-top: 15px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.form-group[data-v-03500379] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--input-label-margin-bottom, 5px);\n  margin-bottom: var(--input-spacing-vertical, 15px);\n}\n.form-group[data-v-03500379]:last-of-type {\n  margin-bottom: 0;\n}\n.form-group-checkbox[data-v-03500379] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: var(--content-padding-quarter, 8px);\n  margin-bottom: var(--input-spacing-vertical, 15px);\n}\n.form-group-checkbox label[data-v-03500379] {\n  margin-bottom: 0;\n  cursor: pointer;\n  color: var(--text-normal, #555);\n  font-weight: var(--font-weight-normal, normal);\n}\n.form-group>label[data-v-03500379]:not(.key-management > label) {\n  font-weight: var(--font-weight-medium, 500);\n  color: var(--text-normal, #333);\n  font-size: var(--font-size-small, 0.9rem);\n  margin-bottom: 0;\n}\n.form-group input[type=\"text\"][data-v-03500379],\n.form-group input[type=\"number\"][data-v-03500379] {\n  padding: var(--input-padding-vertical, 8px) var(--input-padding-horizontal, 12px);\n  border: 1px solid var(--border-color-normal, #ccc);\n  border-radius: var(--border-radius-input, 4px);\n  font-size: var(--font-size-normal, 1rem);\n  background-color: var(--input-background, #fff);\n  color: var(--input-text-color, #333);\n  box-sizing: border-box;\n  width: 100%;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.form-group input[type=\"text\"][data-v-03500379]:focus,\n.form-group input[type=\"number\"][data-v-03500379]:focus {\n  border-color: var(--primary, #007bff);\n  box-shadow: 0 0 0 2px var(--primary-a10, rgba(0, 123, 255, 0.1));\n  outline: none;\n}\n.form-group input[type=\"checkbox\"][data-v-03500379] {\n  accent-color: var(--primary, #007bff);\n  cursor: pointer;\n  width: var(--input-height-small, 18px);\n  height: var(--input-height-small, 18px);\n  padding: 0;\n  vertical-align: middle;\n  margin: 0;\n}\n.form-group input[data-v-03500379]:disabled {\n  background-color: var(--background-subdued, #f5f5f5);\n  cursor: not-allowed;\n  color: var(--text-muted-light, #999);\n  border-color: var(--border-color-subtle, #e0e0e0);\n}\n.divider[data-v-03500379] {\n  border: none;\n  border-top: 1px solid var(--border-color-subtle, #e0e0e0);\n  margin: var(--input-spacing-vertical, 20px) 0;\n}\n.card-actions[data-v-03500379] {\n  padding-top: var(--content-padding, 16px);\n  margin-top: var(--content-padding, 16px);\n  border-top: 1px solid var(--border-color-subtle, #e0e0e0);\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--content-padding-half, 10px);\n}\n.button[data-v-03500379] {\n  padding: var(--button-padding-vertical, 8px) var(--button-padding-horizontal, 16px);\n  border: none;\n  border-radius: var(--border-radius-button, 4px);\n  cursor: pointer;\n  font-size: var(--font-size-small, 0.9rem);\n  font-weight: var(--font-weight-medium, 500);\n  transition: background-color 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;\n  line-height: 1.5;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.button[data-v-03500379]:disabled {\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n.button[data-v-03500379]:hover:not(:disabled) {\n  opacity: 0.85;\n}\n.button[data-v-03500379]:active:not(:disabled) {\n  transform: translateY(1px);\n}\n.button-primary[data-v-03500379] {\n  background-color: var(--primary, #007bff);\n  color: var(--text-on-primary, white);\n}\n.button-primary[data-v-03500379]:hover:not(:disabled) {\n  background-color: var(--primary-hover, #0056b3);\n  box-shadow: var(--card-shadow-hover, 0 2px 5px rgba(0, 123, 255, 0.2));\n  opacity: 1;\n}\n.button-secondary[data-v-03500379] {\n  background-color: var(--secondary, #6c757d);\n  color: var(--text-on-secondary, white);\n}\n.button-secondary[data-v-03500379]:hover:not(:disabled) {\n  background-color: var(--secondary-hover, #5a6268);\n  box-shadow: var(--card-shadow-hover, 0 2px 5px rgba(108, 117, 125, 0.2));\n  opacity: 1;\n}\n.button-outline[data-v-03500379] {\n  background-color: transparent;\n  border: 1px solid var(--primary, #007bff);\n  color: var(--primary, #007bff);\n}\n.button-outline[data-v-03500379]:hover:not(:disabled) {\n  background-color: var(--primary-10, rgba(0, 123, 255, 0.1));\n  opacity: 1;\n}\n.button-small[data-v-03500379] {\n  padding: 4px 10px;\n  font-size: 0.8rem;\n}\n.endpoint-display[data-v-03500379] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.endpoint-input[data-v-03500379] {\n  flex-grow: 1;\n  padding: 8px 12px;\n  border: 1px solid var(--border-color-normal, #ccc);\n  border-radius: var(--border-radius-input, 4px);\n  background-color: var(--background-subdued, #f5f5f5);\n  cursor: text;\n  font-family: var(--font-family-mono, monospace);\n  font-size: 0.9rem;\n  box-sizing: border-box;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n";
n(css$2,{});

const _hoisted_1$2 = { class: "oidc-settings-container" };
const _hoisted_2$1 = {
  key: 0,
  class: "warning-message"
};
const _hoisted_3$1 = { class: "layout-grid" };
const _hoisted_4$1 = { class: "column-main" };
const _hoisted_5$1 = { class: "form-group" };
const _hoisted_6$1 = { for: "issuer" };
const _hoisted_7$1 = { class: "form-group" };
const _hoisted_8$1 = { for: "token_expires_in" };
const _hoisted_9 = { class: "form-group" };
const _hoisted_10 = { for: "refresh_token_expires_in" };
const _hoisted_11 = { class: "form-group" };
const _hoisted_12 = { for: "code_expires_in" };
const _hoisted_13 = { class: "form-group form-group-checkbox" };
const _hoisted_14 = { for: "allow_refresh_tokens" };
const _hoisted_15 = { class: "form-group key-management" };
const _hoisted_16 = { class: "key-instructions" };
const _hoisted_17 = {
  key: 0,
  class: "crypto-unavailable"
};
const _hoisted_18 = { class: "form-group key-input-group" };
const _hoisted_19 = { for: "publicKeyPemInput" };
const _hoisted_20 = ["disabled"];
const _hoisted_21 = { class: "form-group key-input-group" };
const _hoisted_22 = { for: "privateKeyPemInput" };
const _hoisted_23 = { class: "private-key-warning" };
const _hoisted_24 = ["innerHTML"];
const _hoisted_25 = ["disabled"];
const _hoisted_26 = { class: "generate-button-container" };
const _hoisted_27 = ["disabled"];
const _hoisted_28 = { key: 0 };
const _hoisted_29 = { key: 1 };
const _hoisted_30 = {
  key: 0,
  class: "crypto-note"
};
const _hoisted_31 = { class: "card-actions" };
const _hoisted_32 = ["disabled"];
const _hoisted_33 = ["disabled"];
const _hoisted_34 = { class: "column-sidebar" };
const _hoisted_35 = { class: "endpoint-display" };
const _hoisted_36 = ["value"];
const _hoisted_37 = { class: "endpoint-display" };
const _hoisted_38 = ["value"];

const _sfc_main$2 = {
  __name: 'provider-settings',
  setup(__props) {

const translate = getTranslate();
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
    showNotification(errorMsg, 'error');
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

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1$2, [
    (cryptoWarning.value)
      ? (openBlock(), createElementBlock("div", _hoisted_2$1, toDisplayString(cryptoWarning.value), 1 /* TEXT */))
      : createCommentVNode("v-if", true),
    createElementVNode("div", _hoisted_3$1, [
      createElementVNode("div", _hoisted_4$1, [
        createVNode(BaseCard, {
          title: unref(translate)('oidc_provider_settings_title'),
          icon: "settings"
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_5$1, [
              createElementVNode("label", _hoisted_6$1, toDisplayString(unref(translate)('oidc_provider_settings_issuer_label')), 1 /* TEXT */),
              withDirectives(createElementVNode("input", {
                type: "text",
                id: "issuer",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((settings.value.issuer) = $event)),
                required: ""
              }, null, 512 /* NEED_PATCH */), [
                [vModelText, settings.value.issuer]
              ])
            ]),
            createElementVNode("div", _hoisted_7$1, [
              createElementVNode("label", _hoisted_8$1, toDisplayString(unref(translate)('oidc_provider_settings_token_expiry_label')), 1 /* TEXT */),
              withDirectives(createElementVNode("input", {
                type: "number",
                id: "token_expires_in",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((settings.value.token_expires_in) = $event)),
                required: "",
                min: "1"
              }, null, 512 /* NEED_PATCH */), [
                [
                  vModelText,
                  settings.value.token_expires_in,
                  void 0,
                  { number: true }
                ]
              ])
            ]),
            createElementVNode("div", _hoisted_9, [
              createElementVNode("label", _hoisted_10, toDisplayString(unref(translate)('oidc_provider_settings_refresh_token_expiry_label')), 1 /* TEXT */),
              withDirectives(createElementVNode("input", {
                type: "number",
                id: "refresh_token_expires_in",
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ((settings.value.refresh_token_expires_in) = $event)),
                required: "",
                min: "1"
              }, null, 512 /* NEED_PATCH */), [
                [
                  vModelText,
                  settings.value.refresh_token_expires_in,
                  void 0,
                  { number: true }
                ]
              ])
            ]),
            createElementVNode("div", _hoisted_11, [
              createElementVNode("label", _hoisted_12, toDisplayString(unref(translate)('oidc_provider_settings_code_expiry_label')), 1 /* TEXT */),
              withDirectives(createElementVNode("input", {
                type: "number",
                id: "code_expires_in",
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => ((settings.value.code_expires_in) = $event)),
                required: "",
                min: "1"
              }, null, 512 /* NEED_PATCH */), [
                [
                  vModelText,
                  settings.value.code_expires_in,
                  void 0,
                  { number: true }
                ]
              ])
            ]),
            createElementVNode("div", _hoisted_13, [
              withDirectives(createElementVNode("input", {
                type: "checkbox",
                id: "allow_refresh_tokens",
                "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => ((settings.value.allow_refresh_tokens) = $event))
              }, null, 512 /* NEED_PATCH */), [
                [vModelCheckbox, settings.value.allow_refresh_tokens]
              ]),
              createElementVNode("label", _hoisted_14, toDisplayString(unref(translate)('oidc_provider_settings_allow_refresh_tokens_label')), 1 /* TEXT */)
            ]),
            _cache[10] || (_cache[10] = createElementVNode("hr", { class: "divider" }, null, -1 /* HOISTED */)),
            createElementVNode("div", _hoisted_15, [
              createElementVNode("label", null, toDisplayString(unref(translate)('oidc_provider_settings_key_pair_title')), 1 /* TEXT */),
              createElementVNode("p", _hoisted_16, [
                createTextVNode(toDisplayString(unref(translate)('oidc_provider_settings_key_instructions_part1')) + " ", 1 /* TEXT */),
                (!isCryptoAvailable.value)
                  ? (openBlock(), createElementBlock("strong", _hoisted_17, toDisplayString(unref(translate)('oidc_provider_settings_key_instructions_part2')), 1 /* TEXT */))
                  : createCommentVNode("v-if", true)
              ]),
              createElementVNode("div", _hoisted_18, [
                createElementVNode("label", _hoisted_19, toDisplayString(unref(translate)('oidc_provider_settings_public_key_label')), 1 /* TEXT */),
                withDirectives(createElementVNode("textarea", {
                  id: "publicKeyPemInput",
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => ((settings.value.publicKeyPem) = $event)),
                  style: {"resize":"none"},
                  rows: "8",
                  placeholder: "-----BEGIN PUBLIC KEY-----\\n...\\n-----END PUBLIC KEY-----",
                  disabled: saving.value || generatingKeys.value
                }, null, 8 /* PROPS */, _hoisted_20), [
                  [
                    vModelText,
                    settings.value.publicKeyPem,
                    void 0,
                    { trim: true }
                  ]
                ])
              ]),
              createElementVNode("div", _hoisted_21, [
                createElementVNode("label", _hoisted_22, toDisplayString(unref(translate)('oidc_provider_settings_private_key_label')), 1 /* TEXT */),
                createElementVNode("div", _hoisted_23, [
                  _cache[9] || (_cache[9] = createTextVNode(" ⚠️ ")),
                  createElementVNode("span", {
                    innerHTML: unref(translate)('oidc_provider_settings_private_key_warning')
                  }, null, 8 /* PROPS */, _hoisted_24)
                ]),
                withDirectives(createElementVNode("textarea", {
                  id: "privateKeyPemInput",
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => ((settings.value.privateKeyPem) = $event)),
                  style: {"resize":"none"},
                  rows: "8",
                  placeholder: "-----BEGIN PRIVATE KEY-----\\n...\\n-----END PRIVATE KEY-----",
                  disabled: saving.value || generatingKeys.value,
                  class: "private-key-textarea"
                }, null, 8 /* PROPS */, _hoisted_25), [
                  [
                    vModelText,
                    settings.value.privateKeyPem,
                    void 0,
                    { trim: true }
                  ]
                ])
              ]),
              createElementVNode("div", _hoisted_26, [
                createElementVNode("button", {
                  type: "button",
                  onClick: generateKeyPair,
                  disabled: generatingKeys.value || !isCryptoAvailable.value || saving.value,
                  style: {"width":"100%"},
                  class: "button button-primary generate-button"
                }, [
                  (generatingKeys.value)
                    ? (openBlock(), createElementBlock("span", _hoisted_28, toDisplayString(unref(translate)('oidc_provider_settings_generating_keys')), 1 /* TEXT */))
                    : (openBlock(), createElementBlock("span", _hoisted_29, toDisplayString(unref(translate)('oidc_provider_settings_generate_new_keys')), 1 /* TEXT */))
                ], 8 /* PROPS */, _hoisted_27),
                (!isCryptoAvailable.value)
                  ? (openBlock(), createElementBlock("span", _hoisted_30, toDisplayString(unref(translate)('oidc_provider_settings_crypto_note')), 1 /* TEXT */))
                  : createCommentVNode("v-if", true)
              ])
            ]),
            createElementVNode("div", _hoisted_31, [
              createElementVNode("button", {
                type: "button",
                onClick: cancelEdit,
                disabled: saving.value || !hasChanges.value,
                class: "button button-outline"
              }, toDisplayString(unref(translate)('oidc_provider_settings_cancel_changes')), 9 /* TEXT, PROPS */, _hoisted_32),
              (hasChanges.value)
                ? (openBlock(), createElementBlock("button", {
                    key: 0,
                    type: "submit",
                    disabled: saving.value,
                    onClick: saveSettings,
                    class: "button button-primary"
                  }, toDisplayString(saving.value ? unref(translate)('oidc_provider_settings_saving') : unref(translate)('oidc_provider_settings_save_changes')), 9 /* TEXT, PROPS */, _hoisted_33))
                : createCommentVNode("v-if", true)
            ])
          ]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["title"])
      ]),
      createElementVNode("div", _hoisted_34, [
        createVNode(BaseCard, {
          title: unref(translate)('oidc_provider_settings_config_endpoint_title')
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_35, [
              createElementVNode("input", {
                disabled: "",
                value: configEndpoint.value,
                class: "endpoint-input"
              }, null, 8 /* PROPS */, _hoisted_36),
              createElementVNode("button", {
                type: "button",
                onClick: _cache[7] || (_cache[7] = $event => (copyToClipboard(configEndpoint.value))),
                class: "button button-outline button-small"
              }, toDisplayString(unref(translate)('oidc_provider_settings_copy_button')), 1 /* TEXT */)
            ])
          ]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["title"]),
        createVNode(BaseCard, {
          title: unref(translate)('oidc_provider_settings_jwks_endpoint_title')
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_37, [
              createElementVNode("input", {
                disabled: "",
                value: jwksEndpoint.value,
                class: "endpoint-input"
              }, null, 8 /* PROPS */, _hoisted_38),
              createElementVNode("button", {
                type: "button",
                onClick: _cache[8] || (_cache[8] = $event => (copyToClipboard(jwksEndpoint.value))),
                class: "button button-outline button-small"
              }, toDisplayString(unref(translate)('oidc_provider_settings_copy_button')), 1 /* TEXT */)
            ])
          ]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["title"])
      ])
    ])
  ]))
}
}

};
var ProviderSettings = /*#__PURE__*/_export_sfc(_sfc_main$2, [['__scopeId',"data-v-03500379"],['__file',"provider-settings.vue"]]);

var css$1 = "\n.action-button[data-v-d6ce8781] {\n  cursor: pointer;\n  color: #0066cc;\n}\n.action-button[data-v-d6ce8781]:hover {\n  color: #0066ff;\n}\n.oidc-tokens-management[data-v-d6ce8781] {\n  display: flex;\n  flex-direction: column;\n}\n.search-input[data-v-d6ce8781] {\n  max-width: 400px;\n}\n.token-table[data-v-d6ce8781] {\n  border: 1px solid var(--theme--border-color, #e0e0e0);\n  border-radius: var(--theme--border-radius, 4px);\n  overflow: hidden;\n}\n[data-v-d6ce8781] .v-text-overflow[title] {\n  cursor: help;\n}\n.revoke-button[data-v-d6ce8781]:hover:not(:disabled) {\n  background-color: rgba(var(--theme--danger-rgb), 0.1) !important;\n  color: var(--theme--danger);\n}\n.no-items-message[data-v-d6ce8781] {\n  padding: 2rem;\n  text-align: center;\n  color: var(--theme--foreground-subdued, #666);\n}\n.v-chip[non-interactive][data-v-d6ce8781] {\n  cursor: default;\n}\n.v-text-overflow[data-v-d6ce8781] {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.pagination[data-v-d6ce8781] {\n  margin-top: 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n.overlay[data-v-d6ce8781] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.8);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n  z-index: 10;\n}\n.overlay-text[data-v-d6ce8781] {\n  font-size: 18px;\n  color: #333;\n  text-align: center;\n  padding: 20px;\n  background-color: rgba(255, 255, 255, 0.9);\n  border-radius: 5px;\n}\n@media (max-width: 768px) {\n.oidc-header[data-v-d6ce8781] {\n    flex-direction: column;\n    align-items: stretch;\n}\n.oidc-header .v-input[data-v-d6ce8781] {\n    max-width: none;\n}\n.oidc-body[data-v-d6ce8781] {\n    overflow-x: auto;\n}\n}\n";
n(css$1,{});

const _hoisted_1$1 = { class: "oidc-tokens-management" };
const _hoisted_2 = { div: "oidc-header" };
const _hoisted_3 = { class: "oidc-body" };
const _hoisted_4 = { class: "no-items-message" };
const _hoisted_5 = { class: "pagination" };
const _hoisted_6 = {
  class: "total-clients",
  style: {"color":"#94a1b5"}
};
const _hoisted_7 = {
  key: 0,
  class: "overlay"
};
const _hoisted_8 = { class: "overlay-text" };

const _sfc_main$1 = {
  __name: 'user-logs',
  setup(__props) {

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
const OIDCConfig = async () => (await getOIDCProviderConfig(api));

watch(searchQuery, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    fetchLogs();
  }
});

onMounted(async () => {
  const config = await OIDCConfig();
  if (config.privateKeyPem && config.publicKeyPem) {
    fetchLogs();
  } else {
    pageVisit.value = false;
  }
});

return (_ctx, _cache) => {
  const _component_v_icon = resolveComponent("v-icon");
  const _component_v_input = resolveComponent("v-input");
  const _component_v_text_overflow = resolveComponent("v-text-overflow");
  const _component_v_pagination = resolveComponent("v-pagination");

  return (openBlock(), createElementBlock("div", _hoisted_1$1, [
    createElementVNode("div", _hoisted_2, [
      createVNode(_component_v_input, {
        modelValue: searchQuery.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((searchQuery).value = $event)),
        placeholder: unref(translate)('oidc_logs_search_placeholder'),
        clearable: "",
        class: "search-input"
      }, {
        prepend: withCtx(() => [
          createVNode(_component_v_icon, { name: "search" })
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["modelValue", "placeholder"])
    ]),
    createElementVNode("div", _hoisted_3, [
      createVNode(Table, {
        columns: tableHeaders,
        items: logs.value,
        "item-key": 'id',
        "fixed-header": true,
        sortable: false,
        maxHeight: '768px',
        class: "token-table"
      }, {
        "item.client_name": withCtx(({ item }) => [
          createVNode(_component_v_text_overflow, {
            text: item.client_name,
            tooltip: item.client_name
          }, null, 8 /* PROPS */, ["text", "tooltip"])
        ]),
        "item.client_uri": withCtx(({ item }) => [
          createVNode(_component_v_text_overflow, {
            text: item.client_uri,
            tooltip: item.client_uri || ''
          }, null, 8 /* PROPS */, ["text", "tooltip"])
        ]),
        "item.client_id": withCtx(({ item }) => [
          createVNode(_component_v_text_overflow, {
            text: item.client_id,
            tooltip: item.client_id
          }, null, 8 /* PROPS */, ["text", "tooltip"])
        ]),
        "item.user_id": withCtx(({ item }) => [
          createVNode(_component_v_text_overflow, {
            text: item.user_id || '-',
            tooltip: item.user_id || ''
          }, null, 8 /* PROPS */, ["text", "tooltip"])
        ]),
        "no-items": withCtx(() => [
          createElementVNode("div", _hoisted_4, toDisplayString(loading.value
              ? unref(translate)("oidc_logs_no_items_loading")
              : searchQuery.value
                ? unref(translate)("oidc_logs_no_items_search_empty")
                : unref(translate)("oidc_logs_no_items_empty")), 1 /* TEXT */)
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["items"]),
      createElementVNode("div", _hoisted_5, [
        createElementVNode("div", null, [
          createElementVNode("span", _hoisted_6, toDisplayString(unref(translate)("oidc_logs_total_count", {
            totalLogs: totalLogs.value,
          })), 1 /* TEXT */)
        ]),
        createElementVNode("div", null, [
          createVNode(_component_v_pagination, {
            modelValue: page.value,
            "onUpdate:modelValue": [
              _cache[1] || (_cache[1] = $event => ((page).value = $event)),
              fetchLogs
            ],
            length: pageLength.value,
            totalVisible: 10
          }, null, 8 /* PROPS */, ["modelValue", "length"])
        ])
      ])
    ]),
    (!pageVisit.value)
      ? (openBlock(), createElementBlock("div", _hoisted_7, [
          createElementVNode("div", _hoisted_8, toDisplayString(unref(translate)("oidc_empty_key_error_tips")), 1 /* TEXT */)
        ]))
      : createCommentVNode("v-if", true)
  ]))
}
}

};
var UserLogs = /*#__PURE__*/_export_sfc(_sfc_main$1, [['__scopeId',"data-v-d6ce8781"],['__file',"user-logs.vue"]]);

var css = ".lp-container {\n  padding: var(--content-padding);\n  padding-top: 0;\n  width: 100%;\n  height: calc(100% - 100px); }\n  .lp-container > div {\n    margin-bottom: var(--content-padding); }\n\n.lp-cards {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  column-gap: var(--input-padding);\n  row-gap: var(--input-padding); }\n  .lp-cards .lp-card {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    border-radius: var(--border-radius);\n    padding: var(--input-padding);\n    color: white;\n    cursor: pointer;\n    transition: transform 0.2s; }\n    .lp-cards .lp-card:hover {\n      transform: translateY(-5px); }\n    .lp-cards .lp-card .v-icon {\n      width: 100%;\n      height: 50px;\n      margin-bottom: 6px; }\n      .lp-cards .lp-card .v-icon i {\n        font-size: 50px;\n        color: white; }\n    .lp-cards .lp-card .lp-card-title {\n      display: block;\n      font-weight: bold;\n      font-size: 1.4em;\n      line-height: 1.2; }\n\n@media (max-width: 1200px) {\n  .lp-cards {\n    grid-template-columns: repeat(2, 1fr); } }\n\n@media (max-width: 600px) {\n  .lp-cards {\n    grid-template-columns: 1fr; } }\n";
n(css,{});

const _hoisted_1 = { class: "lp-container" };

const _sfc_main = {
  __name: 'module',
  props: {
    page: {
        type: String,
        default: 'home',
    },
},
  setup(__props) {

const translate = getTranslate();
const props = __props;

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

return (_ctx, _cache) => {
  const _component_v_breadcrumb = resolveComponent("v-breadcrumb");
  const _component_private_view = resolveComponent("private-view");

  return (openBlock(), createBlock(_component_private_view, { title: page_title.value }, createSlots({
    navigation: withCtx(() => [
      createVNode(PageNavigation, {
        current: __props.page,
        pages: all_pages.value
      }, null, 8 /* PROPS */, ["current", "pages"])
    ]),
    default: withCtx(() => [
      createElementVNode("div", _hoisted_1, [
        (currentComponent.value)
          ? (openBlock(), createBlock(resolveDynamicComponent(currentComponent.value), { key: 0 }))
          : createCommentVNode("v-if", true)
      ])
    ]),
    _: 2 /* DYNAMIC */
  }, [
    (breadcrumb.value)
      ? {
          name: "headline",
          fn: withCtx(() => [
            createVNode(_component_v_breadcrumb, { items: breadcrumb.value }, null, 8 /* PROPS */, ["items"])
          ]),
          key: "0"
        }
      : undefined
  ]), 1032 /* PROPS, DYNAMIC_SLOTS */, ["title"]))
}
}

};
var ModuleComponent = /*#__PURE__*/_export_sfc(_sfc_main, [['__file',"module.vue"]]);

var e0 = {
  id: "ext-oidc-provider",
  name: "OIDC Provider",
  icon: "fingerprint",
  routes: [
    {
      path: "",
      redirect: "/ext-oidc-provider/client-management"
      // Add this redirect
    },
    {
      path: ":page",
      component: ModuleComponent,
      props: (route) => ({
        page: route.params.page || "client-management"
      })
    }
  ]
};

const interfaces = [];const displays = [];const layouts = [];const modules = [e0];const panels = [];const themes = [];const operations = [];

export { displays, interfaces, layouts, modules, operations, panels, themes };
