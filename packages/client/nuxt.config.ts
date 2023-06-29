// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@element-plus/nuxt',
    'nuxt-svgo',
  ],
  vite: {
    define: {
      'process.env': {
        VSCODE_TEXTMATE_DEBUG: false,
      },
    },
  },
})
