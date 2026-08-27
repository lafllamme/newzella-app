<script setup lang="ts">
import { newzellaConcepts } from '~/data/newzella-content'

const concept = newzellaConcepts.variant2

useSeoMeta({
  title: concept.title,
  description: concept.description,
})
</script>

<template>
  <NewzellaVariant02 />
</template>
