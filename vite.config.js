import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import envCompatible from 'vite-plugin-env-compatible'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    
    envCompatible({
      loadDir: './'
    }),
    tailwindcss(),
    
  ],
  server: {
    allowedHosts: ['7c6670a256e1.ngrok-free.app', 'localhost'], // Add ngrok domain here
  },
})
