<script setup lang="ts">
import { convert } from 'html-to-text'
import { useClipboard } from '@vueuse/core'
import { renderInIframe, renderToString } from '@/utils'
import { useState } from '@/composables'
import CopySvg from '@/assets/svg/copy.svg'

type Source = 'vue' | 'html' | 'text'

const route = useRoute()
const refMount = ref<HTMLDivElement>()

const slug = route.params.slug
const view = computed(() => route.query.view)
const tab = ref<Source>('vue')

const { html, text, vue } = useState()

function onCopy() {
  const source = {
    html,
    text,
    vue,
  }

  const { copy } = useClipboard({ source: source[tab.value] })
  copy()
}

onMounted(async () => {
  const Email = defineAsyncComponent(() => import(`../../emails/${slug}.vue`))
  const source = await import(`../../emails/${slug}.vue?raw`)

  renderInIframe(refMount.value!, Email)

  html.value = await renderToString(Email)
  vue.value = source.default
  text.value = convert(html.value)
})
</script>

<template>
  <div v-show="view === 'desktop'" class="desktop">
    <div class="relative h-[calc(100vh_-_5rem)] overflow-auto">
      <div ref="refMount" class="desktop__preview w-full h-[calc(100vh_-_5rem)] flex justify-center " />
    </div>
  </div>
  <div v-show="view === 'source'" class="source flex justify-center relative top-[8px]">
    <div class="source__inner w-[752px] rounded px-8 pb-8 pt-2 bg-white">
      <div class="actions absolute right-[50px] z-10">
        <ElButton _size="small" link _type="info" @click="onCopy">
          <CopySvg width="18" :font-controlled="false" />
        </ElButton>
      </div>
      <ElTabs v-model="tab">
        <ElTabPane label="Vue" name="vue" class="h-[calc(100vh_-_13rem)] overflow-auto rounded">
          <ClientOnly>
            <CodePreview :code="vue" />
          </ClientOnly>
        </ElTabPane>
        <ElTabPane label="HTML" name="html" class="h-[calc(100vh_-_13rem)] overflow-auto rounded">
          <ClientOnly>
            <CodePreview :code="html" />
          </ClientOnly>
        </ElTabPane>
        <ElTabPane label="Text" name="text" class="h-[calc(100vh_-_13rem)] overflow-auto rounded">
          <ClientOnly>
            <CodePreview :code="text" />
          </ClientOnly>
        </ElTabPane>
      </ElTabs>
    </div>
  </div>
</template>
