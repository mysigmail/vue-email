<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  level?: 1 | 2 | 3 | 4 | 5 | 6
}>(), {
  level: 1,
})

const level = computed(() => `h${props.level}`)
</script>

<template>
  <component :is="level">
    <slot />
  </component>
</template>
