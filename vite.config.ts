https://github.com/divadoorstep/DoorstepDiva/blob/main/vite.config.ts// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // Add this line:
  base: '/',
});
