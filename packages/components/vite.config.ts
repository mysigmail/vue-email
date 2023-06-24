import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: './index.ts',
      formats: ['es'],
      fileName: f => `index.${f}.js`,
    },
    rollupOptions: {
      external: ['vue', 'html-to-text', 'pretty'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    vue(),
    dts({
      rollupTypes: true,
      copyDtsFiles: true,
    }),
  ],
  resolve: {
    dedupe: ['vue'],
  },
})
