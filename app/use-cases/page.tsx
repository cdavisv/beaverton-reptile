import Link from "next/link";

import { CTASection } from "@/components/sections/CTASection";
import { CategoryGrid } from "@/components/sections/CategoryGrid";
import { PageHero } from "@/components/sections/PageHero";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { useCases } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("useCases");

export default function UseCasesPage() {
  return (
    <>
      <PageHero
        variant="editorial"
        hero={{
          eyebrow: "Use cases",
          title: "Different shoppers need different paths into the store.",
          description:
            "Whether you are brand new, refilling feeders, buying for a family, or upgrading an established habitat, the next step should be obvious.",
          primaryCta: { href: "/get-started", label: "Find Your Best Fit" },
          secondaryCta: { href: "/product", label: "Browse Categories" },
        }}
      />
      <section className="section">
        <div className="container stack">
          <SectionIntro
            eyebrow="Audience pathways"
            title="Choose the path that sounds most like you."
            description="Each route is designed to lower friction for a specific customer type instead of forcing everyone through the same generic sales flow."
          />
          <CategoryGrid items={useCases} />
        </div>
      </section>
      <section className="section">
        <div className="container stack">
          <SectionIntro
            eyebrow="Need answers first?"
            title="Common decision points"
            description="Compare pricing expectations, setup readiness, and support questions before you visit."
          />
          <div className="comparison-grid">
            <article className="surface content-card stack">
              <h3>Pricing and packaging guide</h3>
              <p>
                See realistic ranges for feeders, habitat gear, and starter
                bundles.
              </p>
              <Link className="inline-link" href="/pricing">
                Go to pricing
              </Link>
            </article>
            <article className="surface content-card stack">
              <h3>Setup and onboarding guide</h3>
              <p>
                Understand what to buy first, what can wait, and how we help you
                get ready.
              </p>
              <Link className="inline-link" href="/get-started">
                See onboarding
              </Link>
            </article>
            <article className="surface content-card stack">
              <h3>Comparisons and alternatives guide</h3>
              <p>
                Compare local specialty-shop value against generic pet-store
                buying paths.
              </p>
              <Link className="inline-link" href="/faq">
                Read FAQs
              </Link>
            </article>
          </div>
        </div>
      </section>
      <CTASection
        title="Want a recommendation tailored to your household or setup?"
        description="Send us a few details and we will point you toward the right species, feeder routine, or habitat upgrade before you visit."
      />
    </>
  );
}
