# Udbhav Developers — Website

Rebuilt in Astro with Tailwind v4 and hand-rolled shadcn/ui components. Blog
posts are pulled at build time from WordPress via the WPGraphQL plugin.

## Stack

- **Astro** (static output) — pages, layouts, routing
- **React** — only where interaction is needed (accordion, enquiry form); every
  other component is plain `.astro` and ships zero JS
- **Tailwind CSS v4** — theme tokens live in `src/styles/global.css` (`@theme`)
- **shadcn/ui-style primitives** — `src/components/ui/*`, built on Radix
  primitives (`button`, `card`, `input`, `textarea`, `label`, `badge`,
  `separator`, `accordion`) — same API as `npx shadcn add`, just vendored
  directly since this repo doesn't use the shadcn registry CLI
- **WPGraphQL** — blog content source, see below

## Getting started

```sh
npm install
npm run dev       # http://localhost:4321
npm run build      # outputs to ./dist
npm run preview
```

## Folder structure

```
src/
├── components/
│   ├── ui/                shadcn-style primitives (Button, Card, Input, ...)
│   ├── layout/             Header.astro, Footer.astro
│   ├── sections/           Homepage/page sections (Hero, CtaBanner, ...)
│   ├── ArtPanel.astro       Gradient + generative skyline artwork (stands in
│   │                        for photography — see "About the artwork" below)
│   ├── Skyline.astro        The generative line-art used inside ArtPanel
│   ├── ProjectCard.astro
│   ├── TestimonialCard.astro
│   ├── Faq.tsx              Accordion wrapper (kept as one React island)
│   ├── EnquiryForm.tsx       Contact form (React island)
│   └── Icon.tsx              Self-contained icon set (no external icon dep)
├── layouts/
│   └── BaseLayout.astro     <head>, Header, Footer, SEO tags
├── lib/
│   ├── site-data.ts         All static copy: projects, testimonials, services,
│   │                        process steps, nav links, company info
│   ├── wordpress.ts          WPGraphQL client + typed queries
│   └── utils.ts               cn() helper
├── pages/
│   ├── index.astro
│   ├── portfolio/
│   │   ├── index.astro
│   │   └── [slug].astro
│   ├── services.astro
│   ├── company.astro
│   ├── process.astro
│   ├── contact.astro
│   ├── media.astro
│   └── blog/
│       ├── index.astro
│       └── [slug].astro
└── styles/
    └── global.css            Tailwind theme tokens (colors, fonts, radii)
```

## Wiring up WordPress (WPGraphQL)

1. Install & activate the [WPGraphQL](https://www.wpgraphql.com/) plugin on
   your WordPress site.
2. Copy `.env.example` to `.env` and set:
   ```
   WORDPRESS_GRAPHQL_URL=https://your-wordpress-site.com/graphql
   ```
3. That's it — `src/lib/wordpress.ts` queries `posts` (list) and `post` (by
   slug) and normalizes the response for `src/pages/blog/index.astro` and
   `src/pages/blog/[slug].astro`.

If `WORDPRESS_GRAPHQL_URL` isn't set, the site falls back to five sample
posts baked into `wordpress.ts` (`FALLBACK_POSTS`), so `npm run build` always
succeeds — useful for local dev before your CMS is ready, or for previewing
the design.

Because the blog pages use `getStaticPaths`, posts are fetched **once at
build time**. Re-run `npm run build` (or your host's deploy hook) whenever
you publish a new post, or switch `output: 'server'` in `astro.config.mjs`
if you'd rather render blog pages on demand.

## About the artwork

Instead of stock photography (which the reference design used but this repo
has no license for), project/blog imagery is a generative line-art skyline
over a duotone gradient (`ArtPanel.astro` + `Skyline.astro`). It's
deterministic per "seed" so the same project always renders the same
artwork. Swap in real photography by dropping images into `public/` and
replacing the `<ArtPanel>` usage with an `<img>` — the project card, hero,
and blog components already have an `img` fallback path wherever a
`featuredImage` / photo URL is available (see `blog/index.astro` for the
pattern).

## Editing content

Everything that isn't a blog post lives in `src/lib/site-data.ts` — projects,
testimonials, services, process steps, stats, nav links, and contact/company
details. Edit that file to update copy across the whole site.
