import { defineConfig } from "astro/config";

// https://astro.build/config
import react from "@astrojs/react";
import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true,
  },
  site: "https://bespokefitness.com/",
  integrations: [react(), image(), tailwind(), sitemap()],
});
