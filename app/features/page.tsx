import { CTASection } from "@/components/sections/CTASection";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { PageHero } from "@/components/sections/PageHero";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { featureItems, proofItems } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("features");

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        variant="editorial"
        hero={{
          eyebrow: "Why us",
          title:
            "A local reptile shop that treats care standards as part of the product.",
          description:
            "These are the practical reasons Portland-area reptile owners choose a specialty shop over a generic pet aisle.",
          primaryCta: { href: "/contact", label: "Visit Us" },
          secondaryCta: { href: "/about", label: "Meet the Store" },
          trustNote:
            "Humane care, useful guidance, and species-appropriate setup advice are the baseline.",
        }}
      />
      <section className="section">
        <div className="container stack">
          <SectionIntro
            eyebrow="Feature grid"
            title="What makes the in-store experience different"
            description="Our strengths are designed to reduce hesitation for new keepers and improve reliability for experienced ones."
          />
          <FeatureGrid items={featureItems} />
        </div>
      </section>
      <ProofStrip items={proofItems} />
      <CTASection
        title="See what a more useful reptile shop visit looks like."
        description="Come in with a question, a setup problem, or a feeder list and we will help you move forward without the generic-pet-store guesswork."
      />
    </>
  );
}
