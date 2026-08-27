<script setup lang="ts">
const routes = [
  { label: '01', to: '/' },
  { label: '02', to: '/variant-2' },
  { label: '03', to: '/variant-3' },
  { label: '04', to: '/variant-4' },
] as const
</script>

<template>
  <nav class="newzella-route-switcher" aria-label="Newzella Konzepte">
    <NuxtLink v-for="route in routes" :key="route.to" :to="route.to">
      {{ route.label }}
    </NuxtLink>
  </nav>
</template>
