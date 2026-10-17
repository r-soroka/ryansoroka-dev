# ryansoroka.dev

My personal portfolio site: a fast, static site built with **Astro**, **TypeScript** and **Tailwind CSS**, designed to be updated by editing Markdown files instead of code.

**Live:** [ryansoroka.dev](https://ryansoroka.dev)

## Tech stack

| Tool                                           | Why                                                                                    |
| :--------------------------------------------- | :------------------------------------------------------------------------------------- |
| [Astro](https://astro.build)                   | Builds plain static HTML; ships no JavaScript unless a component needs it.             |
| [TypeScript](https://www.typescriptlang.org)   | Type-checks components and content, so broken data fails the build instead of the page. |
| [Tailwind CSS v4](https://tailwindcss.com)     | Utility classes driven by a small set of design tokens in `global.css`.                |
| Archivo + IBM Plex Mono                        | Self-hosted via [Fontsource](https://fontsource.org), so there are no third-party font requests. |

## Getting started

Requires **Node.js 22.22 or newer**.

```sh
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:4321
```

| Command                   | What it does                                      |
| :------------------------ | :------------------------------------------------ |
| `npm run dev`             | Starts the local dev server with live reload      |
| `npm run build`           | Builds the production site into `dist/`           |
| `npm run preview`         | Serves the built site locally to check it         |
| `npm run astro -- check`  | Type-checks the project (needs `@astrojs/check`)  |

## Project structure

```text
ryansoroka-dev/
├── public/                      Files served as-is from the site root
│   ├── favicon.svg
│   └── soroka_resume.pdf
├── src/
│   ├── content/                 ← Site content: edit these to update the site
│   │   ├── projects/            One .md file per project
│   │   ├── research/            One .md file per research project
│   │   ├── experience/          One .md file per job or role
│   │   └── education/           One .md file per school or program
│   ├── components/              One component per page section
│   │   ├── Header.astro         Logo + navigation (collapses to a menu on phones)
│   │   ├── Hero.astro           Name, intro and quick facts
│   │   ├── About.astro          Bio and skills
│   │   ├── Projects.astro       Project index (renders a ProjectRow per file)
│   │   ├── ProjectRow.astro     One project + its Details button
│   │   ├── ProjectDialog.astro  The Details popout
│   │   ├── Research.astro       Research projects
│   │   ├── Experience.astro     Experience cards + resume download
│   │   ├── Education.astro      Schools, details and coursework
│   │   ├── Contact.astro        Email and links
│   │   ├── ContactDialog.astro  Contact popout with copy-email button
│   │   ├── SectionHeading.astro The shared "01 TITLE" heading
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── BaseLayout.astro     Shared <head>, background grid and page width
│   ├── pages/
│   │   ├── index.astro          Homepage: assembles the sections in order
│   │   └── 404.astro            Page-not-found
│   ├── styles/
│   │   └── global.css           Tailwind, fonts and design tokens (colors, fonts)
│   ├── content.config.ts        Schemas: the required fields for each content type
│   └── site.config.ts           Email, resume path and social links in one place
└── astro.config.mjs
```

## Updating the site

### Add a project

Create a Markdown file in `src/content/projects/`, e.g. `weather-app.md`:

```md
---
name: "Weather App"
summary: "One line on what it does."
stack: ["TypeScript", "Astro"]
year: 2026 # optional; shows "—" without it
order: 2 # lower numbers appear first
live: "https://example.com" # optional
source: "https://github.com/..." # optional
---

The longer story goes here. It appears in the project's **Details** popout.
```

The project shows up in the list automatically, numbered by its `order`.

### Add research

Create a Markdown file in `src/content/research/`:

```md
---
title: "Project or paper title"
role: "Undergraduate Researcher" # optional
organization: "Lab, University" # optional
advisor: "Dr. Name" # optional
stack: ["Python", "OpenSSL"] # optional, shown as tags
start: "2025" # optional; dates are hidden without it
end: "2026" # leave out if it's ongoing; it shows "Now"
summary: "The question you're investigating and your part in it."
link: "https://..." # optional: paper, poster or project page
linkLabel: "POSTER" # optional: button text for the link
order: 1
---
```

### Add education

Create a Markdown file in `src/content/education/`:

```md
---
degree: "B.S. Computer Science"
school: "University"
location: "City, ST" # optional
start: "2024" # optional
end: "Expected 2028" # leave out to show "Now"
details: "GPA, honors, minor…" # optional
coursework: ["Data Structures", "Algorithms"] # optional, shown as tags
order: 1
---
```

### Add experience

Create a Markdown file in `src/content/experience/`:

```md
---
role: "Role"
organization: "Organization"
start: "2025"
end: "2026" # leave out if it's ongoing; it shows "Now"
summary: "What you did, in one line."
order: 1
---
```

### Change your email, resume or social links

Edit `src/site.config.ts`. Social links left as empty strings are hidden. To replace the resume, overwrite `public/soroka_resume.pdf` (or change the `resume` path to match a new file name).

### Change colors or fonts

Edit the `@theme` block in `src/styles/global.css`. Every `--color-*` token becomes a Tailwind class (`--color-accent` → `text-accent`, `bg-accent`, …), so a change there updates the whole site.

### If something breaks

The build checks every content file against `src/content.config.ts`. If a field is missing or a URL is malformed, the error message names the file and the field. If new content doesn't appear, stop the dev server, run `npx astro sync`, and start it again.

## Deployment

The site is fully static, so any static host works. The plan is Cloudflare, connected to this GitHub repo: every push to `main` runs `npm run build` and publishes the `dist/` folder to [ryansoroka.dev](https://ryansoroka.dev).

| Setting          | Value           |
| :--------------- | :-------------- |
| Build command    | `npm run build` |
| Output directory | `dist`          |
