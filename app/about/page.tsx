import { CTASection } from "@/components/sections/CTASection";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { PageHero } from "@/components/sections/PageHero";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { featureItems } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("about");

export default function AboutPage() {
  return (
    <>
      <PageHero
        variant="editorial"
        hero={{
          eyebrow: "About the store",
          title:
            "A Beaverton reptile business built for trust, patience, and better starts.",
          description:
            "The store exists to serve local reptile keepers with healthier buying habits, more realistic setup expectations, and a friendlier first experience.",
          primaryCta: { href: "/contact", label: "Contact Us" },
          secondaryCta: {
            href: "/features",
            label: "See What Makes Us Different",
          },
        }}
      />

      <section className="section">
        <div className="container split-panel">
          <article className="surface content-card stack">
            <span className="eyebrow">Store story</span>
            <h2>
              Local roots, practical education, and care-first merchandising.
            </h2>
            <p>
              Beaverton Reptiles is designed for the people who want a local
              shop that takes reptiles seriously and still knows how to explain
              husbandry in plain language.
            </p>
          </article>
          <article className="surface content-card stack">
            <span className="eyebrow">Community angle</span>
            <h2>Made for west-side metro households.</h2>
            <p>
              We emphasize approachable guidance, after-work convenience, and
              in-person trust for Beaverton, Hillsboro, Tigard, and
              Portland-area reptile owners.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container stack">
          <SectionIntro
            eyebrow="Care values"
            title="What we want every customer to feel"
            description="Respect for the animal, confidence in the setup, and clarity about what comes next."
          />
          <FeatureGrid items={featureItems.slice(0, 4)} />
        </div>
      </section>

      <CTASection
        title="Want to meet the shop before making a purchase?"
        description="Use the contact page for hours, directions, and quick questions, or send a guided request if you want product or setup advice first."
      />
    </>
  );
}
