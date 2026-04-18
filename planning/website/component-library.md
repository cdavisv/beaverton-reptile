# Beaverton Reptiles Component Library

## System Principles

- Build from semantic tokens in `planning/website/design-tokens.json` and `planning/website/design-system.css`.
- Favor warm, credible retail cues over generic pet-store visuals: grounded neutrals, terrarium greens, clay highlights, and restrained motion.
- Keep layouts mobile-first and local-conversion focused.
- All interactive elements must maintain a 44px minimum touch target and visible keyboard focus.

## Responsive Layout Rules

| Token          | Value              | Usage                                         |
| -------------- | ------------------ | --------------------------------------------- |
| `container-sm` | `40rem`            | legal pages, FAQ, reading-heavy content       |
| `container-md` | `64rem`            | forms, use-case layouts, comparison blocks    |
| `container-lg` | `76rem`            | home hero, category grids, pricing pages      |
| `30rem`        | small breakpoint   | landscape phones, tighten clusters only       |
| `48rem`        | medium breakpoint  | introduce 2-column sections                   |
| `64rem`        | large breakpoint   | hero split, sidebar layouts, sticky utilities |
| `80rem`        | x-large breakpoint | widen proof grids and image-led sections      |

## Core Components

### Header/Nav

- Height: `80px` desktop, `72px` mobile compressed state.
- Layout: brand lockup left, primary nav center/right, CTA pair at desktop, menu button on mobile.
- States:
  - default: transparent over hero or surface background
  - scrolled: `surface-raised` background with `shadow-sm`
  - mobile open: full-height drawer with `overlay` scrim
  - focus: highlight ring with 3px outline plus soft halo
- Accessibility:
  - menu toggle uses `aria-expanded`
  - current page uses `aria-current="page"`
  - drawer traps focus until closed

### Hero

- Max width: text column `32rem`, media column flexible.
- Vertical rhythm: `space-2xl` mobile, `space-3xl` desktop.
- Required children: eyebrow, H1, supporting copy, primary CTA, secondary CTA, trust microcopy.
- Variants:
  - split hero for `home`, `product`, `pricing`
  - editorial hero for `about`, `features`, `use-cases`
  - utility hero for `contact`, `faq`, legal pages

### Buttons

| Variant   | Background  | Text              | Border   | Usage                                    |
| --------- | ----------- | ----------------- | -------- | ---------------------------------------- |
| Primary   | `accent`    | `accent-contrast` | none     | highest-intent actions                   |
| Secondary | transparent | `text`            | `border` | supporting actions                       |
| Quiet     | transparent | `accent`          | none     | inline links and lower-emphasis CTA rows |

- Padding: `12px 18px`
- Radius: full pill
- States:
  - hover: raise by `1px`, deepen background or border
  - active: remove lift, keep stronger fill
  - disabled: 55% opacity, no lift, no shadow
  - focus-visible: 3px highlight ring plus soft halo

### Cards

- Base padding: `24px`
- Radius: `24px`
- Border: `1px solid border`
- Variants:
  - category card: icon or photo, short explainer, CTA text
  - proof card: metric or promise with optional badge
  - pricing card: range headline, included items, note row
  - use-case card: audience title, pain point, recommended next step
- Interactive cards lift by `2px` on hover and deepen shadow to `shadow-md`.

### Form Fields

- Input height: `44px` minimum
- Textarea min height: `128px`
- Label size: `14px`, weight `700`
- Helper and error text size: `15px`
- States:
  - default: `surface-raised` background, standard border
  - hover: `border-strong`
  - focus: highlight ring plus no layout shift
  - error: danger border with error copy placed directly below field
  - disabled: reduced contrast background, cursor blocked
- Accessibility:
  - labels always visible
  - errors tied with `aria-describedby`
  - required fields indicated in text, not color alone

### FAQ Accordion

- Each item keeps 16px vertical padding and full-width hit area.
- Chevron rotation is optional and must be suppressed in reduced-motion mode.
- Question row must be a button element.
- Expanded content should preserve heading hierarchy and link to `contact` or `get-started` when users still need help.

### Proof Strip

- Use 3 to 4 short trust statements or micro-stats.
- Background: mixed surface/accent wash.
- Mobile: stacked cards.
- Desktop: inline grid with equal-height cells.

### CTA Banner

- Use near page end on commercial pages.
- Composition: short heading, one-sentence reassurance, primary button, optional phone link.
- Background can use elevated surface with radial accent wash, but text contrast must remain AA.

## Secondary Page Templates

### Product Template

- Hero
- Category grid
- Availability expectations panel
- Humane care standards
- Cross-sell block for pricing and beginner help
- CTA banner

### Features Template

- Authority hero
- 6-up feature grid
- Store experience section
- Proof strip
- CTA banner

### Use-Cases Template

- Hero
- Audience pathway cards
- Comparison or recommendation table
- FAQ teaser
- CTA banner

### Pricing Template

- Hero with pricing honesty statement
- Range cards
- What affects cost explainer
- Starter setup comparison
- Support note
- CTA banner

### Utility Template

- Simple hero
- Single-column or sidebar body
- Contact reinforcement block
- Footer conversion only for legal pages

## Visual QA Checklist

- Verify all text on actionable backgrounds is at least `4.5:1`.
- Verify all focus states remain visible against both light and dark surfaces.
- Verify all tap targets are `44px` minimum.
- Verify hero copy wraps cleanly at `320px` width without orphaned CTA rows.
- Verify cards align to the 8-point spacing system and do not mix arbitrary paddings.
- Verify accordions, menus, and theme toggles are operable by keyboard and announced clearly to assistive tech.
- Verify repeated sections reuse the same heading and spacing patterns across required pages.

## Handoff Notes

- Use these specs as the baseline for app-level components in `components/layout`, `components/sections`, `components/marketing`, and `components/forms`.
- Keep page composition decisions inside section templates so leaf components stay reusable.
- If brand photography is unavailable at launch, use textured gradients, silhouette illustrations, or close-up habitat detail crops instead of generic stock pet imagery.
