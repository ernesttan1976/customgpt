import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    minify: false,  // Changed from 'terser' to false
    sourcemap: false,
  },
});