import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/master-meter-web/',
  root: 'src',
  publicDir: 'public',
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
    host: '0.0.0.0',
    port: 5173,
    open: false,
    middlewareMode: false,
  },
})
