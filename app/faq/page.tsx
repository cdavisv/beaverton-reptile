import Link from "next/link";

import { CTASection } from "@/components/sections/CTASection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { PageHero } from "@/components/sections/PageHero";
import { faqItems } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("faq");

export default function FaqPage() {
  return (
    <>
      <PageHero
        variant="utility"
        hero={{
          eyebrow: "FAQ",
          title: "Answers about pricing, setup, alternatives, and support.",
          description:
            "Use this page to resolve the most common pre-visit questions. If you still need help, we route you to the fastest contact path.",
          primaryCta: { href: "/contact", label: "Contact the Team" },
          secondaryCta: { href: "/get-started", label: "Get Advice" },
        }}
      />

      <section className="section">
        <div className="container stack">
          <FAQAccordion items={faqItems} />
          <div className="comparison-grid">
            <article className="surface content-card stack">
              <h2>Pricing and packaging guide</h2>
              <p>
                See the range-based pricing model and what changes setup costs
                most.
              </p>
              <Link className="inline-link" href="/pricing">
                Go to pricing
              </Link>
            </article>
            <article className="surface content-card stack">
              <h2>Support and warranty guide</h2>
              <p>
                Understand what store guidance covers and when veterinary
                support is the right next step.
              </p>
              <Link className="inline-link" href="/contact">
                Contact support
              </Link>
            </article>
          </div>
        </div>
      </section>

      <CTASection
        title="Still deciding between options?"
        description="Use the guided inquiry flow if you want help comparing species, setup sizes, or what makes sense for a first reptile household."
      />
    </>
  );
}
