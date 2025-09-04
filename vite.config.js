import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // If you prefer proxying instead of CORS/cookies, you could map /api to backend.
    }
  }
})
