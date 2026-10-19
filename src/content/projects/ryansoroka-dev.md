---
name: "ryansoroka.dev"
summary: "This portfolio: a fast, static site that updates from Markdown files."
stack: ["Astro", "TypeScript", "Tailwind CSS", "CloudFlare"]
year: 2026
order: 2
github: "https://github.com/r-soroka/ryansoroka-dev"
# demo: "https://..."
# demoLabel: "LIVE"
---

I wanted a portfolio that's fast, easy to keep current, and doesn't need a
database or a server. So I built it as a static site: every page is
generated ahead of time, and the content lives in plain files I can edit in
a minute.

## What I built

- **Content as data.** Projects, research, experience, education and
  certifications are each a folder of Markdown files with a checked schema,
  so a missing field or broken link stops the build instead of reaching
  the live site.
- **One source of truth.** Site details, the hero and the About section
  come from a single config file, and the section numbers in the header and
  headings are generated from the same list, so they can't drift apart.
- **Lightweight by default.** No front-end framework ships to the browser.
  Popups use the browser's built-in `<dialog>` element, and images are
  resized automatically so phones download small copies.

## What I learned

Keeping content separate from layout made the site much easier to change.
Adding a project or certification is a new file, not a code change.
