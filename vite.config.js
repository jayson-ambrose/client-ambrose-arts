import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://server-ambrose-art.onrender.com',
        changeOrigin: true,
        rewrite: (path) => path.replace('/api/', ''),
        secure: false,}
    }
  },
  plugins: [react()],
})