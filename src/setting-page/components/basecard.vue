<template>
  <div class="base-card">
    <div v-if="!hideHeader" class="base-card-header" :class="{ 'no-border': noBorder }">
      <!-- Slot for custom title area -->
      <slot name="title">
        <div class="default-title">
          <v-icon v-if="icon" :name="icon" left :style="{ color: iconColor }" />
          <span>{{ title }}</span>
        </div>
      </slot>
      <!-- Slot for actions on the right side of the header -->
      <div class="actions">
        <slot name="actions"></slot>
      </div>
    </div>

    <div class="base-card-content" :class="{ 'no-padding': noPadding }">
      <!-- Default slot for card main content -->
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
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
</script>

<style scoped>
.base-card {
  border-radius: 8px;
  border: 1px solid var(--border-subdued, #e0e0e0);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  background-color: var(--background-card, white);
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.base-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid var(--border-subdued, #e0e0e0);
  color: var(--foreground-normal);
  font-size: 1.1rem;
  font-weight: 600;
}

.base-card-header.no-border {
  border-bottom: none;
}

.default-title {
  display: flex;
  align-items: center;
  gap: 8px;
}

.actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.base-card-content {
  padding: 16px;
  flex-grow: 1;
}

.base-card-content.no-padding {
  padding: 0;
}
</style>
