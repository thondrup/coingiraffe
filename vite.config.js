import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: "Coingiraffe",
        short_name: "Coingiraffe",
        description: "Crypto currency list",
        theme_color: "#4a853b",
        background_color: "#4a853b",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "android-chrome-192x192.png?v=2",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "android-chrome-512x512.png?v=2",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "android-chrome-512x512.png?v=2",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    })
  ]
})