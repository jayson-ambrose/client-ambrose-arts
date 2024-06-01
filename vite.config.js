import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'https://server-ambrose-art.onrender.com',
        // target: 'http://127.0.0.1:5555',
        changeOrigin: true,
        rewrite: (path) => path.replace('/api/', ''),
        secure: false,}
    }
  },
  plugins: [react()],
})