import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    VitePWA({
      registerType: "autoUpdate", // or 'prompt'
      devOptions: {
        enabled: true, // For testing PWA features in dev environment
      },
      manifest: {
        name: "Vuejs",
        short_name: "Vuejs Starter",
        description: "Starter Vuejs PWA, Sqlite3 Setup",
        theme_color: "#ffffff",
        icons: [
          {
            src: "img/icon_192x192.png", // Path to your 192x192 icon
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "img/icon_512x512.png", // Path to your 512x512 icon
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
        screenshots: [
          {
            src: "img/screenshot_320x320.png",
            sizes: "320x320",
            type: "image/png",
            form_factor: "wide",
            label: "Wonder Widgets",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  server: {
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Embedder-Policy": "require-corp",
    },
  },
  optimizeDeps: {
    exclude: ["@sqlite.org/sqlite-wasm"],
  },
});
