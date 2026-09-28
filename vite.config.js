import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Relative base: makes every built asset reference (JS, CSS, and the
  // CV/photo paths below) relative rather than root-absolute. This is
  // what makes the production build work correctly no matter where it's
  // deployed — domain root, a subfolder (e.g. GitHub Pages project
  // sites), or opened locally — instead of only working when served
  // from "/".
  base: './',
  plugins: [react(), tailwindcss()],
})
