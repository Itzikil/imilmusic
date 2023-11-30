import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
// import { createVuePlugin } from 'vite';
// export default {
//   plugins: [createVuePlugin()],
// };
export default defineConfig({
  base: '/imilmusic',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // build:{
  //  outDir: '../gigerr-back/public' ,
  //  emptyOutDir: true,
  // }
})
