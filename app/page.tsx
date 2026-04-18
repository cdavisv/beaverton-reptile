import Link from "next/link";

import { CategoryGrid } from "@/components/sections/CategoryGrid";
import { CTASection } from "@/components/sections/CTASection";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { PageHero } from "@/components/sections/PageHero";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { StoreVisitCard } from "@/components/sections/StoreVisitCard";
import { categories, featureItems, homeHero, proofItems } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("home");

export default function HomePage() {
  return (
    <>
      <PageHero hero={homeHero} />
      <ProofStrip items={proofItems} />

      <section className="section">
        <div className="container stack">
          <SectionIntro
            eyebrow="Shop categories"
            title="Browse the store the way local reptile households actually shop."
            description="We group the business around the needs people show up with most often: healthy reptiles, dependable feeders, habitat gear, and ongoing care supplies."
          />
          <CategoryGrid items={categories} />
        </div>
      </section>

      <section className="section">
        <div className="container split-panel">
          <div className="stack">
            <SectionIntro
              eyebrow="Why locals trust us"
              title="Specialty-shop knowledge without the gatekeeping."
              description="We built the site and the store experience for people who want clear answers, realistic setup expectations, and a place that treats reptile care seriously."
            />
            <FeatureGrid items={featureItems.slice(0, 3)} />
          </div>
          <StoreVisitCard />
        </div>
      </section>

      <section className="section">
        <div className="container split-panel">
          <div className="surface content-card stack">
            <span className="eyebrow">Beginner guidance</span>
            <h2>Starting your first setup should feel calm, not chaotic.</h2>
            <p>
              We help new keepers understand habitat size, lighting, feeding
              rhythms, and realistic first purchases before they overbuy or
              choose the wrong animal.
            </p>
            <Link className="inline-link" href="/get-started">
              See the setup and onboarding path
            </Link>
          </div>
          <div className="surface content-card stack">
            <span className="eyebrow">Local visit cues</span>
            <h2>Know where to go, what to ask, and when to call ahead.</h2>
            <p>
              The site keeps store hours, contact paths, pricing guidance, and
              availability expectations in one place so a quick visit feels
              worthwhile.
            </p>
            <Link className="inline-link" href="/contact">
              View hours, map, and contact options
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Want help choosing the right reptile or setup?"
        description="Tell us what you are shopping for and we will point you toward the best next step before you make the drive."
      />
    </>
  );
}
