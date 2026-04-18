# Beaverton Reptiles Sitemap

## Working Assumptions

- Site type: expanded multi-page business marketing website with inventory-aware product discovery
- Implementation default: Next.js App Router on Vercel
- Primary conversion goals: store visits, phone calls, contact form submissions, availability inquiries
- Secondary goals: establish humane-care credibility, help beginners choose the right setup, clarify categories and pricing expectations

## Primary Navigation

- Home
- Product
- Features
- Use Cases
- Pricing
- About
- FAQ
- Contact
- Get Started

## Footer Navigation

- About
- Contact
- FAQ
- Pricing
- Get Started
- Privacy Policy
- Terms of Service
- Store hours and address block
- Social links

## Page Hierarchy

```text
/
|- /product
|- /features
|- /use-cases
|- /pricing
|- /about
|- /faq
|- /contact
|- /get-started
|- /privacy-policy
|- /terms-of-service
```

## Navigation Intent

- `Home`: fast orientation, brand trust, category discovery, route users to visit/call/inquire
- `Product`: explain what the shop carries and how inventory discovery works without promising live ecommerce in v1
- `Features`: highlight expertise, humane care standards, local service strengths, and beginner support
- `Use Cases`: segment journeys for first-time buyers, experienced keepers, feeder shoppers, and family visits
- `Pricing`: set expectations using ranges and buying guidance instead of rigid catalog pricing
- `About`: reinforce local trust, care philosophy, and store story
- `FAQ`: remove common purchase, setup, and support friction
- `Contact`: direct local conversion page for phone, directions, hours, and inquiry form
- `Get Started`: guided lead capture for shoppers who want recommendations before visiting

## Reusable Page Templates

## Template A: Conversion Landing

Use for `Home`, `Product`, `Pricing`, `Get Started`.

- Hero with primary CTA and trust support
- Quick proof strip
- Problem-to-solution content
- Offer/category cards
- Local trust and education section
- CTA band

## Template B: Authority Detail

Use for `Features`, `About`, `Use Cases`.

- Intent-specific hero
- Value pillars or audience segments
- Supporting detail grid
- Process or expectations section
- Testimonials or proof placeholders
- Conversion footer CTA

## Template C: Support Utility

Use for `FAQ`, `Contact`, legal pages.

- Simple page header
- Core utility content
- Contact reinforcement or legal body
- Secondary CTA where appropriate

## Page Priority Order

1. Home
2. Contact
3. Product
4. About
5. FAQ
6. Features
7. Use Cases
8. Pricing
9. Get Started
10. Privacy Policy
11. Terms of Service

## Internal Linking Rules

- Every primary page links to `Contact` and `Get Started`
- `Product` links to `Pricing`, `FAQ`, and `Contact`
- `Use Cases` links to `Product` and `Get Started`
- `Features` links to `About` and `Contact`
- Legal pages should include footer-level conversion only, not aggressive inline CTAs
