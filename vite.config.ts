/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'setup.ts',
    coverage: {
      reporter: ['text', 'html'],
      all: true,
      include: ['src/**/*.tsx', '!**/main.tsx/**'],
    },
  },
  plugins: [react()],
});
