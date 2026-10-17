// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Astro configuration: https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
    // The live URL. Astro uses it to build absolute links (canonical URLs,
    // social preview images, sitemaps).
    site: "https://ryansoroka.dev",

    vite: {
        // Tailwind CSS v4 runs as a Vite plugin — this is what makes the
        // utility classes in every .astro file work.
        plugins: [tailwindcss()],
    },
});
