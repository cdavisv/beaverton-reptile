# Beaverton Reptiles Website

This repository contains the planning and UX architecture foundation for the first version of the Beaverton Reptiles website. The site is intended for local reptile owners, first-time buyers, and families in Beaverton and the Portland metro area who need a trustworthy local shop for reptiles, feeder insects, habitats, and care guidance.

The current repo state is a foundation handoff, not a shipped app yet. It includes the sitemap, page briefs, SEO map, content schema, and a reusable CSS token system that the implementation team can build from for a responsive Node-based website deployed to Vercel.

## What Is In This Repo

- `planning/website/sitemap.md`: site map, navigation tree, page hierarchy, and reusable page-template plan
- `planning/website/page-briefs.md`: page-by-page UX, content, trust, and conversion requirements
- `planning/website/seo-map.md`: search intent, metadata direction, internal linking, and schema recommendations
- `planning/website/foundation.md`: design-system architecture, layout framework, responsive strategy, and repo topology guidance
- `planning/website/design-system.css`: implementation-ready CSS custom properties, theme tokens, and layout primitives
- `planning/website/design-tokens.json`: semantic design token catalog with light/dark values and accessibility notes
- `planning/website/component-library.md`: component specs, interaction states, secondary-page templates, and UI QA checklist
- `planning/contracts/site-content.schema.json`: JSON Schema for shared structured content across the marketing site

## Planned Stack Assumption

Until another agent introduces application code, the working assumption for implementation is:

- Runtime: Node.js 20+
- Framework: Next.js App Router
- Hosting: Vercel
- Styling: CSS custom properties with utility and component layers
- Data model: file-backed structured content for v1 plus form submission integration
- Integrations: Google Maps embed/link, email notifications for lead forms, lightweight analytics

These choices are documented only as implementation defaults. They are not yet scaffolded in code in this branch.

## Local Setup

There is no runnable application in the repository yet, so there are currently no install, build, or start commands to run.

To inspect the planning deliverables locally:

```bash
git clone https://github.com/cdavisv/beaverton-reptile.git
cd beaverton-reptile
find planning -maxdepth 3 -type f | sort
```

## Environment Variables

No environment variables are required for the current planning-only repository state.

When the site is implemented, expect a future `.env.local` to include values similar to:

```bash
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_GA_ID=
CONTACT_FORM_ENDPOINT=
STORE_MAPS_URL=
```

These are placeholders for the planned architecture only and are not consumed by code in this branch.

## Verification Checklist

Use this checklist to confirm the repo contains the expected foundation artifacts:

1. `planning/website/sitemap.md` exists and covers all required pages.
2. `planning/website/page-briefs.md` exists and includes page-specific calls to action.
3. `planning/website/seo-map.md` exists and maps metadata and schema by page intent.
4. `planning/website/design-system.css` exists and defines light, dark, and system theme tokens.
5. `planning/website/design-tokens.json` exists and mirrors the token semantics used in CSS.
6. `planning/website/component-library.md` exists and covers components plus required secondary-page templates.
7. `planning/contracts/site-content.schema.json` validates the planned structured content model.

## Next Implementation Priorities

1. Scaffold the Next.js site shell and route structure that matches `planning/website/sitemap.md`.
2. Adopt `planning/website/design-system.css` as the source of truth for tokens, themes, and primitives.
3. Implement the shared content contract from `planning/contracts/site-content.schema.json`.
4. Build page templates in this order: home, contact, product, about, FAQ, features, use-cases, pricing, get-started, legal pages.
