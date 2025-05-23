<template>
    <div class="v-table-container" :style="{ maxHeight: fixedHeader ? maxHeight : 'auto' }"
        :class="{ 'has-border': border }">
        <table class="v-table" :class="{ 'fixed-header': fixedHeader, 'bordered': border }">
            <thead>
                <tr>
                    <th v-if="selectable" :style="{ width: '24px'}">
                        <div>
                            <input
                            type="checkbox"
                            :checked="isAllSelected"
                            :indeterminate="isIndeterminate"
                            @change="handleSelectAllToggle"
                            :style="{
                                verticalAlign: 'text-top',
                                marginTop: '-3px'
                            }"
                         />
                        </div>
                    </th>
                    <th v-for="column in columns" :key="column.value" :style="{
                        width: column.width,
                        fontSize: headerFontSize,
                        height:'42px',
                        placeItems: column.align || 'left' // Align header content
                    }" @click="handleSort(column.value)">
                        <div class="header-content">
                            {{ column.text }}
                            <span v-if="sortable && sortColumn === column.value" class="sort-icon">
                                {{ sortDirection === 'asc' ? '↑' : '↓' }}
                            </span>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in sortedAndSelectedItems" :key="item._internalId ?? index" @click="handleRowClick(item)"
                    :class="{ 'clickable': rowClickable || selectable, 'selected': item.selected }">
                    <td v-if="selectable">
                        <div>
                            <input
                            type="checkbox"
                            :checked="item.selected"
                            @click.stop
                            @change="handleSingleSelectChange(item, $event.target.checked)"
                            :style="{
                                verticalAlign: 'text-top',
                                marginTop: '-5px'
                            }"
                        />
                        </div>
                    </td>
                    <td v-for="column in columns" :key="column.value" :style="{ textAlign: column.align || 'left' }">
                        <slot v-if="$slots[`item.${column.value}`]" :name="`item.${column.value}`" :item="item" />
                        <template v-else>
                            {{ item[column.value] }}
                        </template>
                    </td>
                </tr>
                <tr v-if="sortedAndSelectedItems.length === 0">
                    <td :colspan="columns.length + (selectable ? 1 : 0)" class="empty-state">
                        <slot name="empty">No Data</slot>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';

const props = defineProps({
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
});

const emit = defineEmits(['rowClick', 'sortChange', 'selectionChange']);

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
</script>

<style scoped>
.v-table-container {
    overflow-y: auto;
    border-radius: 8px;
    background-color: white;
}

.v-table-container.has-border {
    border: 1px solid #e0e0e0;
}

.v-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.9rem;
    border: none;
}

.v-table th {
    position: relative;
    padding-left: 12px;
    font-weight: 600;
    background-color: white;
    cursor: default;
    border-bottom: 1px solid #e0e0e0;

}

.v-table.fixed-header th {
    position: sticky;
    top: 0;
    z-index: 10;
    box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.1);
}

.v-table td {
    height: 34.5px;
    padding-left: 12px;
    border-top: 1px solid #e0e0e0;
    border-left: none;
    border-right: none;
}

.v-table tr:first-child td {
    border-top: none;
}

.v-table tr:hover {
    background-color: var(--background-highlight);
}

.v-table tr.clickable {
    cursor: pointer;
}

.v-table tr.selected {
    background-color: var(--background-highlight);
}

.header-content {
    display: flex;
    align-items: center;
    gap: 4px;
}

.sort-icon {
    font-size: 0.8em;
    opacity: 0.8;
}

.empty-state {
    text-align: center;
    padding: 24px;
    color: var(--foreground-subdued);
    border: none;
}

@media (max-width: 768px) {

    .v-table th,
    .v-table td {
        padding: 8px 12px;
    }
}
</style>
