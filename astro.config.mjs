// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://aulasemcasa.web.app',
  output: 'static',
  build: {
    // Gera URLs tipo /aula/12/ (opcional, mas ajuda SEO)
    format: 'directory'
  },
  server: {
    port: 4321
  }
});