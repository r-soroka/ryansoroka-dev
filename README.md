# ryansoroka.dev

My personal portfolio: a fast, static site built with **Astro**, **TypeScript** and **Tailwind CSS**. Content lives in Markdown files and one config file, so updating the site rarely means touching code.

**Live:** [ryansoroka.dev](https://ryansoroka.dev)

## Tech stack

| Tool | Why |
| :--- | :--- |
| [Astro](https://astro.build) | Builds plain static HTML and ships almost no JavaScript. |
| [TypeScript](https://www.typescriptlang.org) | Type-checks components and content, so bad data fails the build instead of the live page. |
| [Tailwind CSS v4](https://tailwindcss.com) | Utility classes driven by a few design tokens in `global.css`. |
| [astro-icon](https://www.astroicon.dev) + [Iconify](https://icon-sets.iconify.design) | Logos and icons from Devicon, Simple Icons and Material Design Icons, with no image files to manage. |
| [Inter](https://rsms.me/inter/) | The site font, loaded from Google Fonts. |
| [Cloudflare](https://www.cloudflare.com) | Hosting. |

## Getting started

Requires **Node.js 22.22 or newer**.

```sh
npm install      # install dependencies (run again after pulling changes to package.json)
npm run dev      # start the dev server at http://localhost:4321
```

| Command | What it does |
| :--- | :--- |
| `npm run dev` | Starts the local dev server with live reload |
| `npm run build` | Builds the production site into `dist/` |
| `npm run preview` | Serves the built site locally to check it |
| `npx astro sync` | Regenerates content types if new content or fields don't show up |

## Project structure

```text
ryansoroka-dev/
├── public/                        Files served as-is from the site root
│   ├── favicon.svg / favicon.ico  "RS" tab icon
│   ├── og.jpg                     Link-preview image (1200×630) for LinkedIn, iMessage, Slack…
│   ├── contours.svg               Repeating topographic background
│   └── soroka_resume.pdf
├── src/
│   ├── site.config.ts             ← Name, email, résumé, socials, hero, About text, skills, nav order
│   ├── content/                   ← One Markdown file per entry
│   │   ├── projects/
│   │   ├── research/              (poster images live next to their .md file)
│   │   ├── experience/
│   │   ├── education/
│   │   └── certifications/        (badge images live next to their .md file)
│   ├── content.config.ts          The fields each content type allows or requires
│   ├── components/                One component per page section
│   │   ├── Header.astro           Brand, section links, résumé link, MENU on smaller screens
│   │   ├── Hero.astro             Name, role, school, location, buttons, photo
│   │   ├── SocialRail.astro       GitHub/LinkedIn icons beside the hero
│   │   ├── SkillsBar.astro        Scrolling logo bar under the hero
│   │   ├── About.astro            Quick facts, bio and skills grid
│   │   ├── Projects.astro         Project list (ProjectRow + ProjectDialog per project)
│   │   ├── Research.astro         Research entries (ResearchDialog for details + poster)
│   │   ├── Experience.astro       Experience cards + résumé download
│   │   ├── Education.astro        Schools, details and coursework
│   │   ├── Certifications.astro   Certification cards with badges
│   │   ├── Contact.astro          Email and links (ContactDialog: copy-email popout)
│   │   ├── SectionHeading.astro   The shared "01 TITLE" heading
│   │   └── Footer.astro
│   ├── layouts/BaseLayout.astro   <head> (fonts, favicon, link-preview tags), background, page width
│   ├── pages/
│   │   ├── index.astro            Homepage: puts the sections in order
│   │   └── 404.astro
│   ├── styles/global.css          Tailwind setup and design tokens (colors, fonts, animation)
│   └── assets/                    Images Astro optimizes (hero photo)
└── astro.config.mjs
```

## Updating the site

### Your details, hero and About section

Everything that isn't a list of entries is in `src/site.config.ts`:

- **`SITE`**: name, initials, domain, email, résumé path and social links. A social link left as `""` is hidden.
- **`HERO`**: role, school and location under your name.
- **`ABOUT`**: headline, bio, the quick facts beside it (`facts`; `dot: true` adds the orange status dot) and the skills grid.
- **`NAV_SECTIONS`**: the order of sections. The header links and the "01, 02…" heading numbers are generated from it, so they always match. If you reorder it, reorder the components in `src/pages/index.astro` too.

### Skills and logos

In `ABOUT.skills`, a skill is either plain text or a name with an icon:

```ts
"Server Management",
{ name: "Python", icon: "devicon:python" },
```

Icons can come from three sets. Search them at the links below and copy the icon's name:

| Prefix | What it is |
| :--- | :--- |
| [`devicon:`](https://icon-sets.iconify.design/devicon/) | Full-color tech logos. These also appear in the scrolling bar under the hero. |
| [`simple-icons:`](https://icon-sets.iconify.design/simple-icons/) | One-color brand logos (shown gray). |
| [`mdi:`](https://icon-sets.iconify.design/mdi/) | General symbols for skills without a logo (shown gray). |

### Add a project

Create a file in `src/content/projects/`, e.g. `weather-app.md`:

```md
---
name: "Weather App"
summary: "One line on what it does."
stack: ["TypeScript", "Astro"]
year: 2026                          # optional; shows "—" without it
order: 2                            # lower numbers appear first
github: "https://github.com/..."    # optional: adds a GITHUB button
demo: "https://example.com"         # optional: adds a DEMO button
demoLabel: "LIVE"                   # optional: changes the DEMO button text
---

The longer story goes here. It appears in the project's **Details** popout.
```

### Add research

Create a file in `src/content/research/`:

```md
---
title: "Project or paper title"
summary: "The question and your part in it."
order: 1
role: "Undergraduate Researcher"    # optional
organization: "Lab, University"     # optional
advisor: "Dr. Name"                 # optional
stack: ["Python", "OpenSSL"]        # optional, shown as tags
start: "2025"                       # optional; dates are hidden without it
end: "2026"                         # leave out if ongoing; shows "Now"
github: "https://github.com/..."    # optional
demo: "https://..."                 # optional (demoLabel works here too)
link: "https://..."                 # optional: paper or project page
linkLabel: "PAPER"                  # optional: button text for link
poster: "./my-poster.png"           # optional: image next to this file
posterAlt: "What the poster shows"  # optional
---

Write-up for the **Details** popout. The poster appears below it.
```

A **DETAILS** button appears when the file has a write-up or a poster. Posters must be images (PNG, JPG or WebP), not PDFs.

### Add a certification

Create a file in `src/content/certifications/`:

```md
---
name: "Certification name"
issuer: "Issuing organization"
order: 1
issued: "Jul 2026"                  # optional
expires: "Jul 2029"                 # optional; leave out if it never expires
credentialId: "..."                 # optional
url: "https://..."                  # optional: adds a VERIFY button
badge: "./my-badge.png"             # optional: image next to this file
---
```

Crop badge images close to the edges so they fill their space.

### Add experience or education

Create a file in `src/content/experience/` or `src/content/education/`. The fields are listed in `src/content.config.ts`. Leave out `end` for anything ongoing and it shows "Now".

### Change colors, fonts or the background

- **Colors and fonts:** the `@theme` block in `src/styles/global.css`. Every `--color-*` token becomes a Tailwind class (`--color-accent` → `text-accent`, `bg-accent`…).
- **Background lines:** change `stroke` near the top of `public/contours.svg`. Closer to the background color (`#1c1c1c`) is fainter.
- **Link-preview image:** replace `public/og.jpg` with another 1200×630 image.

### If something breaks

- **Content errors:** the build checks every content file. If a field is missing, a URL is malformed or an image path is wrong, the error names the file and field.
- **Image paths:** they're relative to the `.md` file and case-sensitive. `Badge.png` and `badge.png` are different files on the live server, even though Windows treats them the same.
- **"Could not find" or stale errors after adding files:** restart the dev server. If that doesn't help, run `npx astro sync`.
- **Icon errors:** run `npm install`.

## Deployment

The site is fully static, so any static host works. It's set up for Cloudflare, connected to this GitHub repo: every push to `master` runs the build and publishes the `dist/` folder.

| Setting | Value |
| :--- | :--- |
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | 22.22 or newer |

Link previews only work once the site is live, because LinkedIn and others fetch `og.jpg` from ryansoroka.dev.
