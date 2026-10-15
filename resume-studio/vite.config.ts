import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { API_PORT, WEB_PORT, host } from "./config.ts";
export default defineConfig({
  plugins: [vue()],
  server: {
    host,
    port: WEB_PORT,
    strictPort: true,
    proxy: { "/api": `http://${host}:${API_PORT}` },
  },
});
