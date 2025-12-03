import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    // Utilise esbuild (inclus par défaut) pour la minification
    minify: 'esbuild',
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
  },
  esbuild: {
    drop: ['console', 'debugger'] // Supprime console.log et debugger en prod
  }
})
