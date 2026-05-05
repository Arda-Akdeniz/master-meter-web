import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        urunler: resolve(__dirname, 'src/urunler.html'),
        hakkimizda: resolve(__dirname, 'src/hakkimizda.html'),
        iletisim: resolve(__dirname, 'src/iletisim.html'),
      }
    }
  },
  server: {
    port: 5173,
    open: false,
  },
})
