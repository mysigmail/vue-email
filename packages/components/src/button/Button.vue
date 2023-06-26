<script setup lang="ts">
import type { CSSProperties } from 'vue'
import { computed, useAttrs } from 'vue'
import { pxToPt } from '../utils'

const attrs = useAttrs()

const padding = (attrs.style as CSSProperties)?.padding?.toString().split(' ')

const pY = Number.parseInt(padding?.[0] || '0')
const pX = Number.parseInt(padding?.[1] || '0')
const textRaise = pxToPt(pY * 2)

const mso1 = computed(() => {
  return `<!--[if mso]><i style="letter-spacing: ${pX}px;mso-font-width:-100%;mso-text-raise:${textRaise}" hidden>&nbsp;</i><![endif]-->`
})

const mso2 = computed(() => {
  return `<!--[if mso]><i style="letter-spacing: ${pX}px;mso-font-width:-100%" hidden>&nbsp;</i><![endif]-->`
})
</script>

<template>
  <a
    target="_blank"
    style="display: inline-block; text-decoration: none; max-width: 100%"
  >
    <span v-html="mso1" />
    <span
      style="display: inline-block; max-width: 100%; line-height: 120%"
    >
      <slot />
    </span>
    <span v-html="mso2" />
  </a>
</template>
