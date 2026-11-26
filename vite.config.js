import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Set base to your GitHub repo name for GitHub Pages deployment.
// Change '/Letter/' if your repo has a different name.
export default defineConfig({
  plugins: [react()],
  base: '/Letter/',
});
