import { defineConfig } from 'astro/config';

import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: '',
    dataset: 'production',
    apiVersion: '2023-02-08',
    useCdn: false,
  })]
});