import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  build: {
    sourcemap: false,
  },
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
  plugins: [
    react(),
    tsconfigPaths(),
  ],
})
