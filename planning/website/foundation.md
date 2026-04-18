# UX And Frontend Foundation

## Architecture Defaults

- Platform default: Next.js App Router on Vercel
- Styling model: layered CSS with tokens, primitives, components, and utilities
- Theme requirement: ship light, dark, and system modes from day one
- Content source: structured JSON or TypeScript-backed content files validated against shared schema
- Analytics and forms: low-ops integration only, no custom admin in v1

## Proposed Repo Topology

```text
app/
  (marketing)/
    page.tsx
    about/page.tsx
    contact/page.tsx
    faq/page.tsx
    product/page.tsx
    features/page.tsx
    use-cases/page.tsx
    pricing/page.tsx
    get-started/page.tsx
    privacy-policy/page.tsx
    terms-of-service/page.tsx
components/
  layout/
  sections/
  marketing/
  forms/
content/
  site/
  pages/
lib/
  schema/
  seo/
  analytics/
styles/
  tokens.css
  base.css
  utilities.css
  components.css
planning/
  website/
  contracts/
```

## CSS Architecture

- `tokens.css`: semantic colors, typography, spacing, radii, shadow, motion, z-index
- `base.css`: element resets, body defaults, typography defaults, focus styles
- `utilities.css`: layout helpers such as stack, cluster, grid, container, visually-hidden
- `components.css`: button, card, nav, form, section-shell, accordion, stat, badge

Prefer semantic tokens over raw scales in component code. Example: use `--color-surface-raised`, not `#f4ead7`.

## Theme Tokens

- Brand direction: warm terrarium palette with earthy greens, clay accents, sand neutrals, and high-legibility ink tones
- Semantic token groups:
  - `--color-bg`
  - `--color-surface`
  - `--color-surface-raised`
  - `--color-text`
  - `--color-text-muted`
  - `--color-border`
  - `--color-accent`
  - `--color-accent-strong`
  - `--color-success`
  - `--color-warning`
  - `--color-danger`

## Typography System

- Display: expressive serif for brand warmth
- Body/UI: readable sans-serif for dense content and forms
- Hierarchy:
  - `--font-size-display`
  - `--font-size-h1`
  - `--font-size-h2`
  - `--font-size-h3`
  - `--font-size-body-lg`
  - `--font-size-body`
  - `--font-size-body-sm`
  - `--font-size-label`
- Line-length target: 60 to 72 characters for body copy

## Spacing And Sizing Scale

- Base spacing sequence:
  - `--space-2xs: 0.25rem`
  - `--space-xs: 0.5rem`
  - `--space-sm: 0.75rem`
  - `--space-md: 1rem`
  - `--space-lg: 1.5rem`
  - `--space-xl: 2rem`
  - `--space-2xl: 3rem`
  - `--space-3xl: 4.5rem`
- Container widths:
  - `--container-sm: 40rem`
  - `--container-md: 64rem`
  - `--container-lg: 76rem`

## Layout Framework

- Use Grid for page sections, card collections, hero splits, pricing matrices, and two-column content layouts
- Use Flexbox for nav alignment, button groups, metadata rows, chips, and inline form controls
- Core primitives:
  - `.container`
  - `.section`
  - `.stack`
  - `.cluster`
  - `.grid-auto`
  - `.grid-feature`
  - `.sidebar-layout`

## Breakpoints

- Mobile-first breakpoints:
  - `30rem` small phones landscape
  - `48rem` tablet
  - `64rem` small desktop
  - `80rem` large desktop

## Component Boundary Rules

- Layout components own spacing and placement
- Section components own composition of content blocks
- Leaf UI components do not set page-level margins
- Form components consume schema-defined field config, not ad hoc labels
- SEO metadata is page-owned and generated from a shared config shape

## Shared Content Contracts

- Site settings: business name, phone, address, hours, social links, primary CTAs
- Page content: hero, sections, CTA blocks, FAQs, SEO fields
- Product category summaries: reptiles, feeders, habitats, supplies
- Inquiry form options: interest category, experience level, budget

See `planning/contracts/site-content.schema.json` for the machine-readable contract.

## Reusable Section Inventory

- Hero
- Proof strip
- Category cards
- Feature grid
- Audience/use-case cards
- Pricing range cards
- FAQ accordion
- Contact block
- Map and hours panel
- CTA banner

## Accessibility Requirements

- Visible keyboard focus on all interactive elements
- Minimum target size 44px for buttons and primary nav taps
- Color contrast at or above WCAG AA
- Accordion, nav toggle, and theme toggle must be screen-reader labeled
- Respect `prefers-reduced-motion`

## Implementation Priority

1. Adopt shared schema and route topology
2. Install token and theme layers from `design-system.css`
3. Build layout primitives and page shells
4. Implement reusable sections
5. Populate pages from structured content
6. Add metadata and schema markup
