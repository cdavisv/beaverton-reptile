# Beaverton Reptiles Website

This repository contains the first shippable version of the Beaverton Reptiles website: a responsive multi-page Next.js marketing site for local reptile owners, first-time buyers, and families in Beaverton and the Portland metro area. The site is built to help customers discover the store, understand what it offers, trust its care standards, and contact or visit the shop.

The repo includes:

- A full App Router website covering `home`, `about`, `contact`, `faq`, `privacy-policy`, `terms-of-service`, `product`, `features`, `use-cases`, `pricing`, and `get-started`
- Shared layout, CTA, FAQ, pricing, and form components
- SEO metadata, sitemap, robots config, and local business structured data
- A low-ops in-repo inquiry handler that stores submissions locally during development
- Planning artifacts in `planning/website/*` that define the sitemap, copy direction, design system, and SEO map
- Jest and React Testing Library coverage for reusable UI and form logic
- Playwright browser coverage for the live inquiry submission flow

## Stack

- Node.js 20+
- npm 11+
- Next.js 15 App Router
- React 19
- TypeScript strict mode
- CSS custom properties and shared section components
- Jest + React Testing Library
- Playwright

## Project Structure

```text
app/                  Next.js routes, layout, metadata routes, and API handler
components/           Shared layout, section, and form components
content/              Shared site content and SEO data
data/submissions/     Local development inquiry storage
lib/                  SEO, validation, and submission helpers
planning/             Sitemap, page briefs, design system, and SEO planning docs
```

## Prerequisites

1. Install Node.js 20 or newer.
2. Make sure `npm` is available in your shell.

## Install

```bash
npm install
```

## Environment Variables

Create a `.env.local` file in the repo root if you need a custom canonical site URL.

```bash
NEXT_PUBLIC_SITE_URL=https://www.beavertonreptiles.com
```

No API keys or external services are required to run the site locally.

## Run Locally

Start the development server:

```bash
npm run dev
```

Then open `http://localhost:3000`.

## Inquiry Handling

- Contact and get-started forms submit to `POST /api/inquiries`
- Requests must use `Content-Type: application/json`
- The endpoint validates source, contact fields, enumerated select values, and message length before persisting
- Responses return `200` with `{ data: { id }, message }`, `400` with `{ error, message }` for invalid requests, and `429` with `Retry-After` when the same IP exceeds 5 submissions in 10 minutes
- In local development, submissions are appended to `data/submissions/inquiries.jsonl` with generated IDs, timestamps, source IP, and user agent metadata
- The machine-readable contract for frontend and downstream integrations lives at `planning/contracts/inquiries.openapi.yaml`
- This is a low-ops v1 implementation intended to keep the user-facing flow complete without adding external infrastructure

## Quality Checks

Run the full local verification set:

```bash
npm run lint
npm run typecheck
npm test -- --coverage
npm run test:e2e
npm run build
npm run format:check
```

## Verification Checklist

Use this checklist after the first run:

1. The homepage loads at `http://localhost:3000` with the Beaverton Reptiles hero, nav, and CTA sections.
2. All required routes are reachable from the primary nav or footer.
3. The contact page shows hours, address, map embed, and the inquiry form.
4. Submitting a local form creates or appends `data/submissions/inquiries.jsonl`.
5. Repeating more than 5 submissions from the same IP inside 10 minutes returns `429` from `POST /api/inquiries`.
6. `npm run test:e2e` submits the contact form in Chromium and verifies a persisted inquiry record.
7. `npm test -- --coverage` reports at least 80% total coverage for the measured shared code.
8. `npm run build` completes successfully.

## Assumptions To Replace Before Production

- Public contact details, hours, and the store address are currently implementation defaults because authoritative business data was not present in the repo brief.
- Social profile links are placeholders and should be replaced with the store’s real accounts.
- The in-repo file-based inquiry handler is suitable for local development and demos; production deployment should connect the same route to a durable notification or CRM destination.
- The current rate limiter is process-local memory, which is acceptable for single-instance development and demo deployments but should move to a shared store if the site later runs across multiple server instances.
