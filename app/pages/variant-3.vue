<script setup lang="ts">
import { newzellaConcepts } from '~/data/newzella-content'

const concept = newzellaConcepts.variant3

useSeoMeta({
  title: concept.title,
  description: concept.description,
})
</script>

<template>
  <NewzellaVariant03 />
</template>
