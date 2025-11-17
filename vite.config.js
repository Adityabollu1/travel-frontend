import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // if your project uses react; keep whatever plugins you have

export default defineConfig({
  base: '/travel-frontend/',   // <-- IMPORTANT: GitHub Pages repo path
  plugins: [react()],          // keep your existing plugins
})
