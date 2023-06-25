import VueEmail from '@mysigmail/vue-email-components'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueEmail)
})
