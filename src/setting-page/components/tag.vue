<template>
  <span class="custom-tag" :style="tagStyle">
    {{ text }}
  </span>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
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
});

const tagStyle = computed(() => {
  return {
    backgroundColor: props.color,
    color: props.textColor
  };
});
</script>

<style scoped>
.custom-tag {
  display: inline-block; 
  padding: 4px 8px; 
  border-radius: 4px; 
  font-size: 0.85em; 
  font-weight: 500;
  line-height: 1.2; 
  text-align: center;
  white-space: nowrap; 
  vertical-align: middle; 
}
</style>
