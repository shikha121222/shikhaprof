
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/shikhaprof/',
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: ['runner-absently-waltz.ngrok-free.dev'],
  },
})
