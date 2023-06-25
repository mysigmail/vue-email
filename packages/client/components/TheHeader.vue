<script setup lang="ts">
const router = useRouter()
const route = useRoute()

const state = ref()

watch(state, () => {
  router.push({ query: { view: state.value } })
}, {
  immediate: true,
})

watch(route, (v) => {
  state.value = v.query.view
}, { immediate: true })
</script>

<template>
  <ElRadioGroup v-model="state">
    <ElRadioButton label="desktop">
      Desktop
    </ElRadioButton>
    <ElRadioButton label="source">
      Source
    </ElRadioButton>
  </ElRadioGroup>
</template>

<style lang="scss" scoped>
</style>
