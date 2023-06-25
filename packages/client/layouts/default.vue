<script setup lang="ts">
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
  <div class="default-layout pb-12 h-screen text-slate-900 bg-[#f6f9fc]">
    <nav
      class="pl-60 h-12 sticky left-0 top-0 z-50 w-full bg-slate-100 flex gap-10 items-center justify-center"
    >
      <TheHeader />
    </nav>
    <nav class="sidebar fixed flex flex-col justify-between-b left-0 top-0 z-[1036] h-screen w-60 bg-slate-100 pl-4">
      <div class="sidebar__header">
        <div class="logo flex h-12 items-center font-bold">
          Vue Email Client
        </div>
      </div>
      <div class="sidebar__body grow">
        <p class="text-xs text-slate-400">
          List of emails
        </p>
        <nav class="flex flex-col mt-3">
          <NuxtLink
            v-for="i in nav"
            :key="i.name"
            :to="`/preview/${i.name}?view=desktop`"
            class="py-2 text-sm"
          >
            {{ i.name }}
          </NuxtLink>
        </nav>
      </div>
      <div class="sidebar__footer flex items-center h-12">
        <a href="https://mysigmail.com?ref=vue-email" target="_blank">
          <img src="/logo-black.svg" alt="">
        </a>
      </div>
    </nav>
    <main class="container pl-60 m-auto h-[calc(100vh_-_3rem)]">
      <slot />
    </main>
  </div>
</template>

<style lang="scss">
.default-layout {
  .router-link-active {
    color: #409eff;
  }
}
</style>
