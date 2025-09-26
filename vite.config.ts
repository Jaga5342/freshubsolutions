import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // 👇 ADD THIS LINE — VERY IMPORTANT FOR GITHUB PAGES
  base: '/freshubsolutions/' // replace with your repo name exactly
})
