import { defineConfig } from 'vite';
export default defineConfig({
  server: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: true,
    proxy: {
      '/api': {
        target: process.env.API_TARGET || 'http://127.0.0.1:8083',
        changeOrigin: true,
      },
    },
  },
  preview: {
    host: '127.0.0.1',
    port: 5273,
    strictPort: true,
    proxy: { '/api': process.env.API_TARGET || 'http://127.0.0.1:8083' },
  },
  test: { environment: 'node' },
});
