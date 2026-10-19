import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '127.0.0.1',
    port: 5180,
    strictPort: true,
    proxy: {
      '/api': {
        target: process.env.API_TARGET || 'http://127.0.0.1:8090',
        changeOrigin: true,
      },
    },
  },
  preview: {
    host: '127.0.0.1',
    port: 5280,
    strictPort: true,
    proxy: { '/api': process.env.API_TARGET || 'http://127.0.0.1:8090' },
  },
  test: { environment: 'jsdom' },
});
