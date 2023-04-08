import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
    site: 'http://ocp-wiki.net',
    output: 'static',
    integrations: [mdx()]
});
