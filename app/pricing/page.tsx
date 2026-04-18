import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { PricingGrid } from "@/components/sections/PricingGrid";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { pricingCards } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("pricing");

export default function PricingPage() {
  return (
    <>
      <PageHero
        hero={{
          eyebrow: "Pricing guidance",
          title:
            "Straightforward pricing expectations without pretending the catalog is static.",
          description:
            "We use ranges, bundle guidance, and honest setup notes so local shoppers can budget confidently before they visit.",
          primaryCta: { href: "/contact", label: "Request Current Pricing" },
          secondaryCta: { href: "/get-started", label: "See Setup Guidance" },
        }}
      />

      <section className="section">
        <div className="container stack">
          <SectionIntro
            eyebrow="Pricing ranges"
            title="What most shoppers should plan around"
            description="Exact pricing varies by species, setup size, and availability, but these ranges help eliminate sticker shock and false expectations."
          />
          <PricingGrid items={pricingCards} />
        </div>
      </section>

      <section className="section">
        <div className="container split-panel">
          <article className="surface content-card stack">
            <span className="eyebrow">What affects cost</span>
            <h2>
              Setup size, heating, lighting, and species fit drive most
              variance.
            </h2>
            <p>
              Entry price is only one part of the decision. Durable enclosures,
              correct UVB and heat, and recurring feeder costs usually matter
              more than chasing the cheapest first purchase.
            </p>
          </article>
          <article className="surface content-card stack">
            <span className="eyebrow">Support and warranty guide</span>
            <h2>Guidance is included. Medical care is not replaced.</h2>
            <p>
              We help with setup, routine care, and troubleshooting questions.
              For veterinary issues, we refer customers to qualified exotic
              clinics instead of improvising medical advice.
            </p>
          </article>
        </div>
      </section>

      <CTASection
        title="Want a realistic setup estimate before you buy?"
        description="Share your budget, experience level, and the kind of reptile or feeder plan you have in mind. We will help you scope a practical starting point."
      />
    </>
  );
}
