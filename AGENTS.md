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
* reusable metadata logic
* framework integration
* validation
* fallbacks
* technical SEO implementation

SEO/content team members should primarily need to modify the centralized content/data values.
Do not require them to understand framework-specific metadata APIs merely to change an SEO title or description.

### 12. Before finishing any SEO-related work
Always verify:
* There is no unnecessary duplicate SEO source of truth.
* Existing centralized data structures were reused where appropriate.
* `seoTitle` and `seoDescription` or equivalent explicit fields exist where required.
* Naming is clear and understandable.
* Page-level metadata is not unnecessarily hard-coded.
* The metadata implementation is reusable.
* Appropriate fallbacks exist.
* The implementation follows the framework's recommended approach.
* Existing functionality and SEO data are preserved unless intentionally changed.

### 13. This is a persistent project/IDE rule
Treat everything above as a persistent engineering rule for this project and future frontend projects.
When working on any existing or newly created frontend project, automatically apply this SEO architecture unless I explicitly instruct you otherwise.
Do not wait for me to repeat this instruction in future prompts.
When starting a new project, establish this architecture as part of the initial project structure.
When joining an existing project, inspect and adapt the existing architecture rather than blindly creating new files.

The primary principle is:
> **SEO content should have one clear, centralized, human-readable source of truth, while SEO implementation should remain reusable and framework-appropriate.**
