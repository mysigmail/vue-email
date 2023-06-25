<script setup lang="ts">
import { getHighlighter, setCDN } from 'shiki'
import pretty from 'pretty'

const props = defineProps<{
  code: string
}>()

setCDN('/shiki/')

const highlighter = await getHighlighter({
  theme: 'material-theme-palenight',
  langs: ['html'],
})

const source = computed(() => highlighter.codeToHtml(pretty(props.code), {
  lang: 'html',
}))
</script>

<template>
  <div class="code-preview">
    <div class="code-preview__source" v-html="source" />
  </div>
</template>

<style lang="scss" scoped>
.code-preview {
  :deep(pre) {
    word-wrap: break-word;
    overflow: scroll;
    padding: 8px;
    font-size: 14px;
  }
}
</style>
