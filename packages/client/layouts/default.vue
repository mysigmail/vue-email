<script setup lang="ts">
import LogoSvg from '@/assets/svg/logo-black.svg'

const route = useRoute()

const isGridBd = computed(() => route.query.view === 'desktop' || route.path === '/')

const files = import.meta.glob('../emails/*.vue')
const re = /\/([^/]+)\.vue$/

const nav = Object.entries(files).map(([k, _]) => {
  const name = k.match(re)?.[1]
  return {
    name,
  }
})
</script>

<template>
  <div
    class="default-layout pb-12 h-screen text-slate-900 bg-[#f6f9fc]"
    :class="{ 'is-grid-bg': isGridBd }"
  >
    <nav class="pl-60 h-20 sticky left-0 top-0 z-50 flex gap-10 items-center justify-center">
      <TheHeader />
    </nav>
    <nav class="sidebar fixed flex flex-col justify-between-b left-0 top-0 z-[1036] h-screen w-60 bg-white pl-4">
      <div class="sidebar__header">
        <div class="logo flex h-20 items-center font-bold">
          Vue Email Client
        </div>
        <p class="text-xs text-slate-400">
          List of emails
        </p>
      </div>
      <div class="sidebar__body grow  overflow-auto">
        <nav class="flex flex-col mt-3  ">
          <NuxtLink v-for="i in nav" :key="i.name" :to="`/preview/${i.name}?view=desktop`" class="py-2 text-sm">
            {{ i.name }}
          </NuxtLink>
        </nav>
      </div>
      <div class="sidebar__footer flex flex-col shrink-0 gap-1 h-12 my-2">
        <a href="https://mysigmail.com?ref=vue-email" target="_blank">
          <LogoSvg class="w-[60px]" :font-controlled="false" />
        </a>
      </div>
    </nav>
    <main class="container pl-60 m-auto h-[calc(100vh_-_5rem)]">
      <slot />
    </main>
  </div>
</template>

<style lang="scss">
.default-layout {
  &.is-grid-bg {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cg fill='%23d1d5db' fill-opacity='.4' fill-rule='evenodd'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/svg%3E");
  }
  .router-link-active {
    color: #409eff;
  }
}
</style>
