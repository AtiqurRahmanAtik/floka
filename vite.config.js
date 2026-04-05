import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // <--- Don't forget this import!
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
  ],
})