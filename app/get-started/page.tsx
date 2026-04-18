import { InquiryForm } from "@/components/forms/InquiryForm";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { StoreVisitCard } from "@/components/sections/StoreVisitCard";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("getStarted");

export default function GetStartedPage() {
  return (
    <>
      <PageHero
        hero={{
          eyebrow: "Get started",
          title:
            "Tell us what you need and we will help you narrow the right next step.",
          description:
            "Best for beginners, parents, and anyone who wants species or setup guidance before making the trip.",
          primaryCta: { href: "#inquiry-form", label: "Send My Request" },
          secondaryCta: { href: "/contact", label: "Call the Store" },
          trustNote:
            "No obligation. We use this form to make your visit more useful, not to pressure a sale.",
        }}
      />

      <section className="section" id="inquiry-form">
        <div className="container contact-grid">
          <div className="stack">
            <SectionIntro
              eyebrow="Guided inquiry"
              title="A short form that helps us recommend the right path"
              description="Share your interest category, experience level, and budget range. We use that context to point you toward the right animal, feeder plan, or setup bundle."
            />
            <InquiryForm mode="get-started" />
          </div>
          <StoreVisitCard />
        </div>
      </section>

      <section className="section">
        <div className="container comparison-grid">
          <article className="surface content-card stack">
            <h2>What happens after submission</h2>
            <p>
              We review the request, match it to current availability and care
              requirements, and reply with the best next step for your timeline.
            </p>
          </article>
          <article className="surface content-card stack">
            <h2>Visit vs inquire</h2>
            <p>
              Visit if you already know what you need and want to talk in
              person. Inquire first if you need setup direction, budget help, or
              want to confirm stock before driving in.
            </p>
          </article>
        </div>
      </section>

      <CTASection
        title="Prefer to talk through it by phone?"
        description="That works too. Call the store and we can usually help you confirm the right page, product area, or visit plan in a few minutes."
      />
    </>
  );
}
