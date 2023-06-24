<script setup lang="ts">
withDefaults(defineProps<{
  lang?: string
  dir?: string
}>(), {
  lang: 'en',
  dir: 'ltr',
})
</script>

<template>
  <html>
    <slot />
  </html>
</template>
