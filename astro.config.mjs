// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import lucode from 'lucode-starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://gasparzilla.github.io',
  base: '/photo-lab',
  integrations: [
    starlight({
      title: 'Photo Lab',
      plugins: [lucode()],
      customCss: [
        '@fontsource/instrument-serif/400.css',
        './src/styles/custom.css',
      ],
      sidebar: [
        { label: 'Darkroom Tutorials', items: [{ label: 'Chemistry', slug: 'chemistry' },{ label: 'Using the Enlarger', slug: 'enlarger' }] },
        { label: 'Equipment', items: [{ label: 'Inventory', slug: 'inventory' }] },
      ],
    }),
  ],
});