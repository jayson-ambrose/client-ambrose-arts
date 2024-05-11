import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        // Toggle target line to select development server or live server.
        target: 'https://server-ambrose-art.onrender.com', //live
        // target: 'http://127.0.0.1:5555', //development
        changeOrigin: true,
        rewrite: (path) => path.replace('/api/', ''),
        secure: false,}
    }
  },
  plugins: [react()],
})