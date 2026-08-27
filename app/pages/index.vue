<script setup lang="ts">
import { newzellaConcepts } from '~/data/newzella-content'

const concept = newzellaConcepts.variant1

useSeoMeta({
  title: concept.title,
  description: concept.description,
})
</script>

<template>
  <NewzellaVariant01 />
</template>
