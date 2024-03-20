import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
build: {
    rollupOptions: {
      external: ['react-icons/fa'], // Add react-icons/fa to external dependencies
    },
  },
  plugins: [react()],
  base:"/"
})
