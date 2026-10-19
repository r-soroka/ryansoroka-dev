/**
 * Content collections: the "rules" for the Markdown files in src/content/.
 *
 * Each collection says where its files live and which fields they must have.
 * If a file is missing a required field (or has a broken URL), the build stops
 * with an error naming the file — so mistakes never reach the live site.
 *
 * Docs: https://docs.astro.build/en/guides/content-collections/
 */
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/** One Markdown file per project in src/content/projects/. */
const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: z.object({
        name: z.string(),
        summary: z.string(), // One line, shown in the projects list.
        stack: z.array(z.string()), // e.g. ["Astro", "TypeScript"]
        year: z.number().int().optional(), // Shows "—" when left out.
        order: z.number().int(), // Lower numbers are listed first.
        github: z.url().optional(), // Link to the code on GitHub, if public.
        demo: z.url().optional(), // Link to a live demo, if any.
        demoLabel: z.string().optional(), // Button text for the demo link, e.g. "LIVE". Defaults to "DEMO".
    }),
});

/** One Markdown file per role, school or program in src/content/experience/. */
const experience = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
    schema: z.object({
        role: z.string(),
        organization: z.string(),
        start: z.string(), // Free text, e.g. "2025" or "Aug 2025".
        end: z.string().optional(), // Leave out for something ongoing (shows "Now").
        summary: z.string(),
        order: z.number().int(), // Lower numbers are listed first.
    }),
});

/** One Markdown file per research project in src/content/research/. */
const research = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/research" }),
    // Written as a function so it can use image(), which checks the poster
    // file exists and lets Astro optimize it.
    schema: ({ image }) => z.object({
        title: z.string(), // The project or paper title.
        role: z.string().optional(), // e.g. "Undergraduate Researcher".
        organization: z.string().optional(), // Lab, department or institution.
        advisor: z.string().optional(), // Faculty mentor, if any.
        stack: z.array(z.string()).optional(), // Tools/languages used, shown as tags.
        start: z.string().optional(), // Dates are hidden when there's no start.
        end: z.string().optional(), // Leave out for ongoing work (shows "Now").
        summary: z.string(),
        github: z.url().optional(), // Link to the code on GitHub, if public.
        demo: z.url().optional(), // Link to a live demo, if any.
        demoLabel: z.string().optional(), // Button text for the demo link, e.g. "LIVE". Defaults to "DEMO".
        link: z.url().optional(), // Paper, poster or project page.
        linkLabel: z.string().optional(), // Button text for the link, e.g. "PAPER".
        poster: image().optional(), // Poster image next to the .md file, e.g. "./poster.png". Shown in Details.
        posterAlt: z.string().optional(), // Describes the poster for screen readers.
        order: z.number().int(), // Lower numbers are listed first.
    }),
});

/** One Markdown file per school or program in src/content/education/. */
const education = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/education" }),
    schema: z.object({
        degree: z.string(), // e.g. "B.S. Computer Science".
        school: z.string(),
        location: z.string().optional(),
        start: z.string().optional(), // Leave out to show only the end date.
        end: z.string().optional(), // e.g. "Expected 2028"; leave out to show "Now".
        details: z.string().optional(), // GPA, honors, minor, clubs…
        coursework: z.array(z.string()).optional(), // Relevant classes, shown as tags.
        order: z.number().int(), // Lower numbers are listed first.
    }),
});

/** One Markdown file per license or certification in src/content/certifications/. */
const certifications = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/certifications" }),
    schema: ({ image }) => z.object({
        name: z.string(),
        issuer: z.string(),
        issued: z.string().optional(), // e.g. "Jul 2026".
        expires: z.string().optional(), // Leave out if it never expires.
        credentialId: z.string().optional(),
        url: z.url().optional(), // Verification link. Adds a VERIFY button.
        badge: image().optional(), // Badge image next to the .md file, e.g. "./solarwinds.png".
        order: z.number().int(), // Lower numbers are listed first.
    }),
});

export const collections = { projects, experience, research, education, certifications };
