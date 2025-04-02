// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: "https://mistahuman.github.io/portfolio-davidesigillo/",
  base: process.env.NODE_ENV === "production" ? "/portfolio-davidesigillo/" : "/portfolio-davidesigillo/",
  output: "static",
  integrations: [icon()]
});