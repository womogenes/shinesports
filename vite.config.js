import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    sveltekit({
      onwarn: (warning, handler) => {
        console.log(warning.code);
        if (warning.code === 'a11y-missing-attribute') return;

        // Handle all other warnings normally
        handler(warning);
      },
    }),
  ],
});
