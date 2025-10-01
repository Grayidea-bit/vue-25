import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  server: {
    port: 5176,
    host: '0.0.0.0',
  },
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@apis': path.resolve(__dirname, 'src/apis'),
      '@stores': path.resolve(__dirname, 'src/stores'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
    }
  }
})
