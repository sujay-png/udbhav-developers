## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Deployment & Git Workflow

Before pushing to GitHub, the agent MUST ALWAYS:
1. Run `npm run check` (TypeScript and Astro syntax validation).
2. Run `npm run build` (Static site compilation check).
3. If any step fails, do NOT push. Fix the errors first.

## Frontend SEO Metadata Architecture Rule

From now on, treat SEO metadata as a **content concern that must be separated from page/component implementation**.

This rule applies to the current project and to **all future frontend projects** unless explicitly overridden.

### 1. Inspect the existing project first
Before creating any new SEO-related file, component, utility, or architecture:
* Inspect the existing project structure.
* Identify where site-wide content, page data, configuration, metadata, titles, descriptions, routes, or similar information already lives.
* If the project already has a suitable centralized source of truth such as `site-data`, `page-data`, `content`, `config`, `metadata`, or a similar file/module, **reuse and extend that existing structure instead of creating a duplicate SEO file**.
* Do not create competing sources of truth for the same SEO information.
* Preserve the existing project's naming conventions and architecture where reasonable.

For example, if a project already has a `site-data` file containing page titles and descriptions, add the missing SEO-specific fields there rather than creating a separate `seo` file.

### 2. Centralize SEO content
SEO-editable content must be centralized and easy to discover.
SEO-related values such as:
* `seoTitle`
* `seoDescription`
* canonical URL
* robots directives
* Open Graph title
* Open Graph description
* Open Graph image
* Twitter/social metadata
* structured-data-related configuration where appropriate

should have a clear, centralized source of truth whenever practical.
Do not scatter hard-coded SEO titles and descriptions across individual pages, layouts, components, or templates unless the value genuinely needs to be generated dynamically from page-specific data.

### 3. Use explicit and understandable naming
SEO fields must have names that are immediately understandable to both developers and non-developer SEO/content team members.

Prefer explicit names such as:
```text
seoTitle
seoDescription
seoCanonical
seoRobots
seoOgTitle
seoOgDescription
seoOgImage
```

Avoid ambiguous names such as:
```text
title
desc
meta
data
info
text
header
```
when the field specifically represents SEO metadata.
If the existing project already uses understandable naming conventions, preserve them where appropriate. Do not unnecessarily rename working fields simply for the sake of renaming.

### 4. Ensure required SEO fields exist
When modifying an existing centralized content/data structure, inspect the current implementation and ensure that all SEO fields required by the project's architecture are available.
Do not assume that because a title or description already exists, it automatically serves as the SEO title or SEO description.

For example, a project may already contain:
```text
pageTitle
pageDescription
heading
description
```
These may represent visible UI content rather than SEO metadata.
In such cases, determine whether dedicated fields such as:
```text
seoTitle
seoDescription
```
are necessary and add them where appropriate.
The goal is to make the distinction between **visible page content** and **SEO metadata** clear.

### 5. Keep SEO implementation separate from SEO content
The actual mechanism responsible for injecting metadata into the document `<head>` should be reusable and centralized.
Pages/components should consume the centralized SEO data rather than repeatedly implementing metadata logic themselves.

Conceptually:
```text
SEO CONTENT
    ↓
Centralized data/configuration
    ↓
Reusable metadata implementation
    ↓
Page/Layout
    ↓
Document <head>
```
The exact implementation must follow the framework and architecture of the project.
Do not assume a specific framework, routing system, or metadata API.
The solution must work appropriately whether the project uses Astro, Next.js, or another frontend framework.

### 6. Do not over-engineer
Do not introduce a CMS, database, API, external SEO service, or unnecessary abstraction solely to achieve this architecture.
If the project is code-managed, a centralized source file/module is perfectly acceptable.

Prefer the simplest architecture that provides:
* one clear source of truth
* easy discoverability
* understandable naming
* reusable metadata implementation
* minimal duplication
* easy maintenance by SEO/content team members

### 7. Existing projects take priority
When applying this rule to an existing project:
1. Inspect first.
2. Identify existing related structures.
3. Reuse them if suitable.
4. Add missing SEO fields to the existing structure.
5. Refactor only when necessary to avoid duplication or architectural problems.
6. Do not create a parallel SEO system when an appropriate one already exists.

For example, if `site-data.ts` already contains page-specific titles and descriptions, do **not** automatically create `seo.ts`.
Instead, evaluate whether `site-data.ts` should become the centralized source of truth and add clearly named SEO fields such as:
```text
seoTitle
seoDescription
```
where required.

### 8. New projects
For a new project where no suitable content/data structure exists, establish a dedicated centralized SEO/content structure from the beginning.
Make it obvious where an SEO/content editor should go to modify metadata.
The structure should be self-documenting and use clear naming.
Include a short comment/documentation near the source of truth explaining that SEO titles and descriptions should be maintained there.

### 9. Dynamic pages
For dynamic routes such as products, categories, blogs, articles, or other generated pages:
* Do not manually duplicate metadata for every page when it can be derived safely from structured data.
* Use centralized SEO overrides where SEO needs custom control.
* Use sensible dynamic fallbacks when an explicit SEO value is not provided.
* Never allow missing SEO content to produce broken or misleading metadata.
* Keep the distinction between manually controlled SEO content and automatically generated fallback content clear.

A useful conceptual priority is:
```text
Explicit SEO value
        ↓
Page/content-specific fallback
        ↓
Global site fallback
```
Adapt this to the actual project's requirements.

### 10. Preserve framework best practices
Do not fight the framework's native metadata/SEO capabilities.
Use the framework's recommended mechanism for generating:
* title
* description
* canonical
* robots
* Open Graph
* social metadata
* other relevant `<head>` metadata

The centralized SEO data should feed into that mechanism rather than replacing it with a custom implementation unnecessarily.

### 11. Developer responsibility
Developers are responsible for:
* SEO architecture
* metadata generation
 
 ## Folder and File Structure Standardization Rule

From now on, all file and folder creation, organization, and refactoring across this project and all future frontend projects must strictly adhere to this **Industrial Standardization Rule**.

### 1. Architectural Directory Layout
The repository must maintain a predictable, separation-of-concerns hierarchy:

```text
├── public/                 # Static assets served untouched at root (favicons, robots.txt, sitemaps, raw downloads)
└── src/
    ├── assets/             # Optimized images, vector graphics, and media processed by Astro/bundler
    ├── components/         # Reusable UI components
    │   ├── ui/             # Atomic, headless, or primitive design-system components (buttons, inputs, dialogs)
    │   ├── layout/         # Shell chrome components (Header, Footer, Nav, Skyline)
    │   ├── sections/       # Cross-page composite landing sections (Hero, FAQ, ContactSection, CtaBanner)
    │   └── [feature]/      # Domain/feature-specific components (e.g., about/, careers/, news-media/, testimonials/)
    ├── layouts/            # Astro layout shells and document head wrappers (BaseLayout.astro)
    ├── lib/                # Centralized content, single sources of truth, data constants, CMS clients (site-data.ts)
    ├── pages/              # File-based routing (pages, dynamic routes [slug].astro, and API endpoints api/)
    ├── styles/             # Global CSS stylesheets, design tokens, font definitions (global.css)
    ├── types/              # TypeScript declarations, data contracts, and schema interfaces (*.ts)
    └── utils/              # Pure stateless utility functions, formatters, and validators (validation.ts, utils.ts)
```

### 2. Standardized Naming Conventions

#### A. Directory / Folder Names: Strictly `kebab-case`
- All folders must be written in **lowercase letters with hyphens separating words** (`kebab-case`).
- **Never** use `PascalCase`, `camelCase`, `snake_case`, or uppercase letters for directory names.
- **Never** introduce typos or misspellings (e.g. use `careers/` never `Carrer/`; `news-media/` never `NewsMedia/`; `testimonials/` never `Testimonials/`).
- **Examples**:
  - `src/components/ui/`
  - `src/components/layout/`
  - `src/components/sections/`
  - `src/components/news-media/`
  - `src/components/careers/`
  - `src/components/about/`
  - `src/pages/buyers-guide/`

#### B. Component File Names: Strictly `PascalCase`
- All UI component files (`.astro`, `.tsx`, `.jsx`, `.vue`, `.svelte`) must be named in **`PascalCase`**.
- Do not use lowercase or camelCase for component files (e.g. `Hero.astro` not `hero.astro`; `AboutUs.astro` not `aboutus.astro`; `JobDescription.astro` not `jobdedcription.astro`).
- When a component is specific to a feature, its name must clearly reflect its role (e.g. `CareerHero.astro`, `TestimonialsGrid.astro`).
- **Examples**:
  - `src/components/sections/ContactSection.astro`
  - `src/components/sections/ContactSectionForm.astro`
  - `src/components/ui/Button.tsx`
  - `src/components/layout/Header.astro`
  - `src/layouts/BaseLayout.astro`

#### C. Page and Route Files: Strictly `kebab-case`
- In Astro/Next.js, URLs map directly to file paths. All route files inside `src/pages/` must be **strictly `kebab-case`** or valid bracketed dynamic route parameters.
- **Never** use uppercase or mixed-case for pages.
- **Examples**:
  - `src/pages/index.astro`
  - `src/pages/about-us/index.astro`
  - `src/pages/projects/[slug].astro`
  - `src/pages/projects/udbhav-chinmaya/3-bhk-for-sale-kadri-mangalore.astro`
  - `src/pages/api/contact.ts`

#### D. Non-Component Code Files: Strictly `kebab-case` or `camelCase`
- Configuration, utilities, types, and library files (`.ts`, `.js`, `.mjs`, `.css`) must use lowercase naming (`kebab-case` preferred):
  - `site-data.ts`
  - `validation.ts`
  - `global.css`
  - `astro.config.mjs`

#### E. Static Asset Files: Strictly `kebab-case`
- Asset file names (images, videos, PDFs) must be lowercase, hyphen-separated, and descriptive:
  - `udbhav-chinmaya-hero.webp`
  - `udbhav-developers-logo.png`
  - `chinmaya-brochure.pdf`
- Avoid raw spaces, special symbols, or raw unescaped camera names (e.g. `WhatsApp Image 2026...`).

### 3. Architectural Rules & Boundaries

1. **One Responsibility Per Folder**:
   - `src/components/ui/` contains only generic primitive UI blocks with zero domain knowledge (no hardcoded project titles, company names, or specific API URLs).
   - `src/components/layout/` contains only top-level shell chrome (navbars, headers, footers).
   - `src/components/sections/` contains page-level section compositions.
   - `src/lib/` contains application state, static datasets, CMS clients, and centralized configuration.
2. **Zero Inconsistent Casing**:
   - Never mix casing styles within the same directory.
   - Never allow adjacent directories with varying conventions (e.g., `about/` next to `Carrer/`).
3. **Typo Prevention**:
   - Every file and folder name must be verified for correct spelling before creation.
4. **Refactoring Safety**:
   - When correcting existing legacy directories or file paths:
     1. Update all relative and absolute path imports across the project.
     2. Run `npm run check` (type validation) and `npm run build` (bundler validation).
     3. Ensure static site compilation passes with 0 errors before considering the refactor complete.
5. **No Clutter & Flat Structure Limit**:
   - Do not nest directories deeper than 4 levels without architectural justification.
   - Do not dump unrelated files into the root of `src/` or `src/components/`.

## URL Trailing Slash Consistency & Routing Architecture Rule

This project operates with `trailingSlash: 'always'` configured in `astro.config.mjs`. In this mode, Astro treats URLs without a trailing slash as an entirely different route or an invalid path.

All frontend agents and developers must strictly adhere to this rule:

### 1. The Strict Trailing Slash Mandate
Every internal URL, link, API fetch path, and redirect target in the repository **MUST ALWAYS** end with a trailing slash (`/`):
- **Page Links**: `<a href="/about-us/">`, `<a href="/contact/">`, `<a href="/projects/udbhav-chinmaya/">`
- **Client Redirects**: `window.location.href = "/chinmaya-thank-you/";`, `window.location.href = "/thank-you/";`
- **Server Redirects**: `Astro.redirect("/thank-you/")`, `Response.redirect(new URL("/thank-you/", request.url))`
- **API Fetch Endpoints**: `fetch("/api/contact/", ...)`
- **Canonical URLs**: Must resolve with a trailing slash (e.g. `https://www.udbhavdevelopers.com/about-us/`)

### 2. Forbidden Patterns
- **NEVER** write root or sub-page links without a closing slash (e.g., **NEVER** `/contact`, `/thank-you`, `/chinmaya-thank-you`, `/api/contact`).
- **NEVER** disable or change `trailingSlash: 'always'` in `astro.config.mjs` simply to circumvent link errors.

### 3. Why This Is Critical
1. **Development Environment**: With `trailingSlash: 'always'`, Astro's Vite dev server halts non-slashed requests and shows a 404 overlay prompt asking if the user meant to visit the slashed version.
2. **Production Performance**: Missing trailing slashes trigger unnecessary HTTP `301/308 Moved Permanently` round-trips from the edge CDN/Vercel server, degrading Core Web Vitals and user conversion rates.
3. **SEO Integrity**: Prevents canonical cannibalization where search engines index both `/example` and `/example/` as duplicate competing pages.

## Image Alt Text & Media SEO Architecture Rule

From now on, all media asset handling, alt text updates, and image accessibility across this project must strictly comply with this standard:

### 1. Minimal-Scope Image Modifications
When updating an image's `alt` text:
- **Change ONLY the `alt` attribute value**: Never accidentally modify the `src`, `width`, `height`, `loading`, `fetchpriority`, layout classes, inline styles, or surrounding DOM hierarchy.
- **Do not touch sibling or unrelated images**: Ensure targeted selector precision so other image assets remain completely untouched.

### 2. Centralized Source of Truth Inspection
- **Inspect `@/lib/` first**: Before altering a template file, check whether the image metadata (src, alt, title, dimensions) is defined inside a centralized data module (e.g. `src/lib/site-data.ts`, `src/lib/floorPlans.ts`, or content collections).
- **Update at the source**: If the image metadata is driven by a data structure, update the `alt` field in the data file so all consuming templates remain synchronized and unified.
- **Component inlining fallback**: If the image is hardcoded directly inside a standalone page or section component without a backing data structure, update the attribute directly in the component file.

### 3. Accessibility (a11y) & SEO Standards
- **Keyword & Intent Alignment**: Alt text should accurately describe what the image portrays, aligned with target search intent and user context (e.g., `"Luxury 3 bhk apartment in kadri"`).
- **No Redundant Phrasing**: Do not prefix alt text with redundant phrases like `"Image of..."` or `"Photo of..."` unless specifically required, as assistive screen readers already announce images.
- **Non-Decorative Requirement**: Every content image that conveys information to human users must provide descriptive alternative text for screen readers (WCAG 2.1 compliance) and search engine indexing bots.

## Pedagogical Explanation & Task Reporting Rule

From now on, all task completions, code walkthroughs, and status updates must strictly follow this reporting and explanation framework:

### 1. Mandatory Report Structure
After completing any task, provide a report adhering strictly to this sequential structure:

1. **What was wrong**: A concise 1-2 line description of the problem or defect.
2. **What I changed**: Exact file names and line numbers modified.
3. **Why this works, explained for beginners**: Conceptual breakdown defining every technical term upon first introduction.

### 2. "How to Explain" Teaching Persona & Communication Rules
Act like an ex-Google, top-MNC principal engineer who is now a professor teaching students with ADHD or dyslexia:
- **Short sentences**: Keep phrasing direct and readable. One primary idea per line or bullet.
- **Clear visual hierarchy**: Use distinct headings, bullet lists, and generous vertical whitespace. Avoid walls of text.
- **Deep but intuitive concepts**: Walk through foundational mechanics step-by-step without skipping context.
- **Explicit definitions**: Define every technical term (e.g., SSR, hydration, DOM, schema, alt text) the first time it is introduced.
- **Zero jargon overload**: Prioritize mental clarity and immediate comprehension.

## Standardized Task Report Format & Pedagogical Framework

Every future task response and status report MUST strictly use this exact heading hierarchy and structure:

```markdown
### Summary of Changes
File link with line numbers, then a table:
| Line | Card / Item | Before | After |

### Rationale & Rules Compliance
- Why this change was made (scope isolation)
- Which AGENTS.md rules were followed

### Validation
- npm run check: errors / warnings / hints
- npm run build: pass or fail
- git status: files changed

### Current System Status
Short bullets on check, build, and AGENTS.md.

### Explained Simply (for beginners)
Act like an ex-Google, top-MNC engineer who is now a professor teaching students with ADHD or dyslexia:
- Short sentences, one idea per line, lots of white space.
- Explain section by section, with deep but simple concepts.
- Define every technical word the first time you use it.
```

## Rapid Localhost Review & Minimal Scope Rules

1. **Do NOT create unnecessary files**: Never add scratch, dummy, or extra files unless explicitly requested.
2. **Do NOT run build, check, or git commands automatically**: Do NOT run `npm run build`, `npm run check`, or any git commands unless the user explicitly requests them in that specific message.
3. **Keep every change small and quick to review on localhost**: Minimize diff size and keep edits strictly isolated.
4. **Line number reporting**: After every task, state the exact file name and lines modified.
5. **Educational source**: After every task, provide where to learn the concept (website + specific page, e.g. docs.astro.build, developer.mozilla.org).

## After finishing: explain it to me
When you finish, write a simple explanation guide so I can learn from what you did. I am a beginner, so explain everything in an easy, friendly way.

Style:
- Use short sentences. One idea per sentence.
- Use bold text for the most important words.
- Use simple words. If you must use a technical word, explain it right away in plain language.
- Use real-world examples and analogies (for example: "the brain", "the skeleton", "the muscles", "the clothes" of a file).
- Use emojis for section headings to make the guide easy to scan.
- Explain the "why", not only the "what". Tell me the idea behind the change.

What to include, in this order:
1. **The Big Picture:** what problem you fixed and the idea behind the solution, in a few simple sentences.
2. **A diagram:** a visual map showing how it was before and how it is now (a flow diagram or a simple ASCII diagram).
3. **A comparison table:** old way vs. new way, so I can see why the change is better.
4. **Line-by-line code breakdown:** go through the code in small parts. For each part, show the code, then explain "What is happening here?" in simple bullet points.
5. **How it connects:** show how the new code is used or plugged into the page.
6. **Files changed:** list every file you edited and what you changed in each, in simple words.
7. **What to learn:** tell me which parts of the code are worth learning next.

Also:
- If you noticed other problems, SEO issues, or missing content, only mention them. Do not fix or add them.
- Do not skip this explanation, even for small changes. Keep it shorter for small changes.
## Audit fast (do not waste time)
- When I ask for an audit or check, be quick. Do not scan the whole project.
- Look only at the section, page, and files I named, plus the shared file they use.
- Search for the exact section name first. Open only the files that match.
- Do not read files that are not related to the task.
- Do not run any commands during an audit. Only read the code.
- Do not fix anything during an audit. Only report what you find.
- Give the audit result in a short list: what is there, where it is, and what is wrong.
- Keep it short. If something needs a deeper look, tell me and ask first. 
## No browser testing
- Do not open the browser, take screenshots, or resize the window.
- Do not visit other pages to check them.
- Do not use any browser tool or preview tool.
- Only change the code, then stop.
- I will check the result myself and tell you if something is wrong.
- If you think a visual check is really needed, ask me first.
- Do not re-check your own work again and again. Check once, then stop.
- Do not open the browser, take screenshots, or visit other pages.
## After finishing: teach me what you did

When you finish the task, write a learning guide. Act like a friendly teacher
who used to work at Google and now teaches students who have dyslexia and ADHD.
These students get tired fast, forget things easily, and need extra patience.
Never make them feel slow. Make learning feel like a fun story.

### How to write (important)
- One idea per sentence. Maximum 12 words per sentence.
- Leave empty lines between small chunks. No big blocks of text.
- Use simple words. If you use a technical word, explain it right away.
- Use **bold** for the 1-2 most important words in each chunk.
- Use an emoji at the start of every heading.
- Use real-world examples: a house, a restaurant, a school bag, a shop shelf.
- Repeat the key idea in a different way at the end of each part.
- Use tables, diagrams, and arrows more than paragraphs.
- Explain the "why" before the "what".
- Be warm and encouraging. Short and clear beats long and smart.

### What to include, in this order

1. 🎯 **The Big Picture**
   - What the problem was, in 3 simple sentences.
   - A real-world story that explains the idea.
     Example: "The accordion is like a drawer. You open one, the others close."

2. 🗺️ **Visual Hierarchy (the family tree)**
   - Draw an ASCII tree of how the page is built, from page to section to parts.
   - Mark with ⭐ the exact parts you changed.

3. 🔀 **Before vs After**
   - A diagram of the layout before and after.
   - A table: What | Before | After | Why it is better.

4. 🧱 **The Code You Added or Changed (small parts)**
   For each part, in this order:
   - File name and line numbers, as a clickable link that opens that line.
   - The code (only that small part).
   - 🧠 What is happening here? (simple bullets)
   - ❓ Why did I add this line? (one sentence)
   - 🏠 Real-world analogy (one sentence)

5. 🔎 **Line Finder Table**
   | Line | File (clickable link) | What it does | Why it is there |

6. ⚙️ **How It Works Behind the Scenes**
   - Step by step, in numbers, from "the user opens the page" to "the user sees the result".
   - A flow diagram with arrows.

7. 🧩 **Core Concepts (deep but simple)**
   - Explain 2-3 big ideas behind the change (for example: grid layout,
     reusable components, responsive design).
   - For each idea: What is it? Why do developers use it? Real-world example.
     What would break without it?

8. 📊 **Summary Table**
   | Thing | What I did | Result |

9. 📁 **Files Changed**
   - Each file as a clickable link, with one simple sentence about what changed.

10. 💡 **New Ideas to Think About**
   - 2-3 ideas to make this better later. Only suggest them. Do not build them.

11. 🧪 **Questions for You (practice)**
   - 3 small questions to check my understanding. Start easy and get harder.
   - Put the answers at the very bottom, so I can try first.

12. ✅ **3-Line Memory Summary**
   - The whole lesson in 3 short lines, to help me remember it.

### Also
- If you notice other problems, only mention them. Do not fix them.
- Never skip the guide. For small changes, keep it short, but keep the order.
- Work on the task itself fast. Only the guide is detailed.
- Do not open the browser or take screenshots to write the guide. 

## Work Report (major things only)

After each task, write a short Development Work Report.
Write only the MAJOR work. Skip small things.

### What counts as major
- A new feature, section, or layout.
- A new file, or a file that was changed a lot.
- A bug fix that changed how something works.
- A change that affects many pages.
- A decision that shaped the work (for example: "used one shared file for all product pages").

### What to skip (minor)
- Small spacing, color, or text tweaks.
- Renaming, formatting, or tidying.
- Reading files, searching, or checking.

### Format
**📅 Date:** (today's date)
**🎯 Task:** (one simple sentence)

**🟢 Created & Added**
| File | What was added | Why |

**🟡 Updated & Modified**
| File | What changed | Why |

**🔴 Deleted & Removed**
| File | What was removed | Why |

**🧠 Behind the Process**
Write 3-5 short steps on how the work was done:
1. What I found (where the code was, what already existed).
2. What I decided (and why I chose that way).
3. What I built or changed.
4. What I reused instead of creating again.

**📊 Result**
| Before | After |

**⚠️ Noticed (not fixed)**
- Any problem I saw but did not touch.

### Rules
- Maximum 1 page. Short sentences. Simple words.
- Use the same format every time.
- Leave out any empty group (for example, no "Deleted" if nothing was deleted).
- Do not add anything I did not do.