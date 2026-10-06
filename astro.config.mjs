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
      title: 'Photo Club',
      plugins: [lucode()],
      sidebar: [
        { label: 'Darkroom', items: [{ label: 'Chemistry', slug: 'chemistry' },{ label: 'Using the Enlarger', slug: 'enlarger' }] },
        { label: 'Equipment', items: [{ label: 'Inventory', slug: 'inventory' }] },
      ],
    }),
  ],
});