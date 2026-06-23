import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/monportfolio/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});