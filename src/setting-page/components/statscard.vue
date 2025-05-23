<template>
  <v-card :class="['stats-card', colorTheme]">
    <v-icon class="card-icon" :name="icon"/>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>{{ value }}</v-card-text>
  </v-card>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  title: {
    type: String,
    required: true,
  },
  value: {
    type: [String, Number],
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  /**
   * @description Color theme identifier for the card. e.g., 'clients', 'tokens', 'activity'.
   */
  colorTheme: {
    type: String,
    required: true,
    validator: (value) => ['clients', 'tokens', 'activity'].includes(value),
  },
});
</script>

<style scoped>
.stats-card {
  position: relative;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  padding: 16px;
  color: white;
}

.stats-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.stats-card .card-icon {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 64px;
  height: 64px;
  color: inherit;
}

.stats-card .v-card-title {
  font-size: 1.1rem;
  font-weight: 600;
  padding-bottom: 8px;
  color: inherit;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
}

.stats-card .v-card-text {
  font-size: 2rem;
  font-weight: 700;
  color: inherit;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 0;
}

.clients {
  --card-color: hsl(204, 100%, 50%);
  background: linear-gradient(135deg, var(--card-color), hsl(204, 100%, 70%));
}

.tokens {
  --card-color: hsl(168, 62%, 50%);
  background: linear-gradient(135deg, var(--card-color), hsl(168, 62%, 70%));
}

.activity {
  --card-color: hsl(35, 100%, 50%);
  background: linear-gradient(135deg, var(--card-color), hsl(35, 100%, 70%));
}
</style>
