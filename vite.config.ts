import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {},
  server: {
    port: 3000,
    proxy: {
      '/ws': {
        target: 'https://api.indianfrog.com',
        ws: true,
      },
    },
  },
});
