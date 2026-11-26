import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Using './' base ensures assets resolve properly on GitHub Pages
// regardless of whether it's deployed to a custom domain or /<repo-name>/
export default defineConfig({
  plugins: [react()],
  base: './',
});
