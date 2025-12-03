import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    // Optimisation pour la production
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Supprime les console.log en prod
        drop_debugger: true
      }
    },
    // Split chunks pour de meilleures performances
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion']
        }
      }
    },
    // Taille limite avant avertissement
    chunkSizeWarningLimit: 1000
  }
})
