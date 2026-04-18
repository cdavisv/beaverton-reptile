import { CategoryGrid } from "@/components/sections/CategoryGrid";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { categories } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("product");

export default function ProductPage() {
  return (
    <>
      <PageHero
        hero={{
          eyebrow: "Product overview",
          title:
            "Reptiles, feeders, habitats, and supplies arranged around real care needs.",
          description:
            "Use this page to understand what the store carries, how we guide inventory conversations, and where to go next if you want current availability.",
          primaryCta: { href: "/contact", label: "Ask About Current Stock" },
          secondaryCta: { href: "/pricing", label: "See Pricing Guidance" },
          trustNote:
            "We do not promise live online inventory. We do help you narrow the right visit.",
        }}
      />

      <section className="section">
        <div className="container stack">
          <SectionIntro
            eyebrow="Browse categories"
            title="Core categories"
            description="Each category is merchandised with care-first recommendations and a clear sense of what beginner, family, and experienced shoppers usually need."
          />
          <CategoryGrid items={categories} />
        </div>
      </section>

      <section className="section">
        <div className="container split-panel">
          <article className="surface content-card stack">
            <span className="eyebrow">Availability flow</span>
            <h2>How inventory discovery works</h2>
            <p>
              For animals and feeders, the fastest path is a phone call,
              inquiry, or in-store visit. Inventory changes quickly, so we keep
              the site honest and route you to the right channel instead of
              publishing brittle lists.
            </p>
          </article>
          <article className="surface content-card stack">
            <span className="eyebrow">Care-first standards</span>
            <h2>Merchandising that protects the animal and the customer.</h2>
            <p>
              Our product guidance favors species-appropriate habitats,
              dependable feeding, and starter bundles that reduce common setup
              mistakes.
            </p>
          </article>
        </div>
      </section>

      <CTASection
        title="Need help choosing the right category before you visit?"
        description="Use the guided inquiry flow and we will help you focus the trip around the species, feeder, or habitat gear that fits your goals."
      />
    </>
  );
}
