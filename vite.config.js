import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Configuración de Vite: React + TailwindCSS (v4, mediante su plugin oficial)
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
