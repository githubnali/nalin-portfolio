import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { apiContactDevPlugin } from './dev/apiContactDevPlugin';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  process.env.MONGODB_URI = process.env.MONGODB_URI || env.MONGODB_URI;

  return {
    plugins: [react(), apiContactDevPlugin()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});
