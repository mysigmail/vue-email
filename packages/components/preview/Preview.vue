<script setup lang="ts">
import { computed } from 'vue'
import { renderWhiteSpace } from '../utils'

const props = defineProps<{
  text: string
}>()

const MAX_LENGTH = 150

const computedText = computed(() => {
  return props.text.substring(0, MAX_LENGTH)
})
</script>

<template>
  <div
    style="
      display: none;
      overflow: hidden;
      line-height: 1px;
      opacity: 0;
      max-height: 0;
      max-width: 0;
    "
  >
    {{ computedText }}
    <div v-html="renderWhiteSpace(computedText, MAX_LENGTH)" />
  </div>
</template>
