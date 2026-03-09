import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'url'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 5173,
    proxy: {
   
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
      },

      // ONLY proxy Django's built-in admin panel (exact /admin/ path)
      // React routes like /admin-login, /admin-dashboard are NOT proxied
      '^/admin/': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
      },

      '/static': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
        }
      }
    }
  }
})