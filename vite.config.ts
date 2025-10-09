import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/bogagod/' : '/',
  server: {
    port: 3000,
    open: true
  },
  publicDir: 'public',
  assetsInclude: ['**/*.webp', '**/*.png']
}))

