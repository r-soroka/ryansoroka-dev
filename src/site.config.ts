/**
 * Site-wide details used by several components.
 *
 * Keeping these in one file means changing your email, resume or social
 * links is a one-line edit instead of a hunt through every component.
 */

export const SITE = {
    name: "Ryan Soroka",
    email: "me@ryansoroka.dev",

    /** Path to the resume inside public/ (files there are served from the site root). */
    resume: "/soroka_resume.pdf",

    /**
     * Social profiles. Leave a value as an empty string to hide that link —
     * components only render the ones that are filled in.
     */
    socials: {
        github: "", // e.g. "https://github.com/your-username"
        linkedin: "https://www.linkedin.com/in/ryan-soroka",
    },
} as const;
