import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '127.0.0.1',
    port: 5174,
    strictPort: true,
    proxy: {
      '/api': {
        target: process.env.API_TARGET || 'http://127.0.0.1:8084',
        changeOrigin: true,
      },
    },
  },
  preview: {
    host: '127.0.0.1',
    port: 5274,
    strictPort: true,
    proxy: { '/api': process.env.API_TARGET || 'http://127.0.0.1:8084' },
  },
  test: { environment: 'jsdom' },
});
