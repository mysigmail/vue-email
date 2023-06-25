<script setup lang="ts">
import { convert } from 'html-to-text'
import { renderInIframe, renderToString } from '@/utils'

const route = useRoute()
const refMount = ref<HTMLDivElement>()

const slug = route.params.slug
const view = computed(() => route.query.view)
const source = ref('')
const text = ref('')

onMounted(async () => {
  const Email = defineAsyncComponent(() => import(`../../emails/${slug}.vue`))

  renderInIframe(refMount.value!, Email)

  source.value = await renderToString(Email)
  text.value = convert(source.value)
})
</script>

<template>
  <div v-show="view === 'desktop'" class="desktop">
    <div class="relative h-[calc(100vh_-_3rem)] overflow-auto">
      <div ref="refMount" class="w-full h-[calc(100vh_-_3rem)] " />
    </div>
  </div>
  <div v-show="view === 'source'" class="source flex justify-center">
    <div class="source__inner mt-4 w-[800px]">
      <ElTabs>
        <ElTabPane label="HTML" class="h-[calc(100vh_-_10rem)] overflow-auto rounded">
          <ClientOnly>
            <CodePreview :code="source" />
          </ClientOnly>
        </ElTabPane>
        <ElTabPane label="Text" class="h-[calc(100vh_-_10rem)] overflow-auto rounded">
          <ClientOnly>
            <CodePreview :code="text" />
          </ClientOnly>
        </ElTabPane>
      </ElTabs>
    </div>
  </div>
</template>
