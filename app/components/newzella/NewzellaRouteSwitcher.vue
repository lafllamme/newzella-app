<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const routes = [
  { label: '01', title: 'Laib & Leben', note: 'Startseite', to: '/' },
  { label: '02', title: 'Die Backstube', note: 'Dunkles Poster', to: '/variant-2' },
  { label: '03', title: 'Gebäck mit Anlass', note: 'Runde Editorial', to: '/variant-3' },
  { label: '04', title: 'Geschmack beginnt', note: 'Espresso Poster', to: '/variant-4' },
] as const

const route = useRoute()
const isOpen = ref(false)
const activePath = computed(() => route.path === '/variant-1' ? '/' : route.path)

function isActive(path: string) {
  return activePath.value === path
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') isOpen.value = false
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', handleKeydown))
</script>

<template>
  <aside class="newzella-route-switcher" :class="{ 'is-open': isOpen }">
    <button
      class="newzella-route-switcher__toggle"
      type="button"
      :aria-expanded="isOpen"
      aria-controls="newzella-variant-switcher-panel"
      :aria-label="isOpen ? 'Varianten schließen' : 'Varianten öffnen'"
      @click="isOpen = !isOpen"
    >
      <svg class="newzella-route-switcher__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="7" cy="7" r="2.3" fill="currentColor" />
        <circle cx="17" cy="7" r="2.3" fill="currentColor" />
        <circle cx="7" cy="17" r="2.3" fill="currentColor" />
        <circle cx="17" cy="17" r="2.3" fill="currentColor" />
      </svg>
      <span class="newzella-route-switcher__word">Varianten</span>
      <svg class="newzella-route-switcher__chevron" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="m4 6 4 4 4-4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>

    <Transition name="newzella-switcher">
      <nav v-if="isOpen" id="newzella-variant-switcher-panel" class="newzella-route-switcher__panel" aria-label="Newzella Designvarianten">
        <div class="newzella-route-switcher__panel-head">
          <span>Ansicht wählen</span>
          <span>04</span>
        </div>
        <NuxtLink
          v-for="item in routes"
          :key="item.to"
          class="newzella-route-switcher__link"
          :class="{ 'is-active': isActive(item.to) }"
          :to="item.to"
          :aria-current="isActive(item.to) ? 'page' : undefined"
          @click="isOpen = false"
        >
          <span class="newzella-route-switcher__number">{{ item.label }}</span>
          <span class="newzella-route-switcher__copy">
            <strong>{{ item.title }}</strong>
            <small>{{ item.note }}</small>
          </span>
          <svg class="newzella-route-switcher__arrow" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 10h11M10 4l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </NuxtLink>
      </nav>
    </Transition>
  </aside>
</template>
