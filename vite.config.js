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
        name: "Vuejs Starter",
        short_name: "MyApp",
        description: "Example Starter Vuejs PWA",
        theme_color: "#ffffff",
        icons: [
          {
            src: "img/pwa-192x192.png", // Path to your 192x192 icon
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "img/pwa-512x512.png", // Path to your 512x512 icon
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
        screenshots: [
          {
            src: "img/screenshot.png",
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
});
