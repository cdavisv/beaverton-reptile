import { PageHero } from "@/components/sections/PageHero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("terms");

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero
        variant="utility"
        hero={{
          eyebrow: "Terms of service",
          title: "The basic terms for using the Beaverton Reptiles website.",
          description:
            "These terms explain acceptable site use, content ownership, and important pricing and availability disclaimers.",
          primaryCta: { href: "/contact", label: "Contact Us" },
        }}
      />

      <section className="section">
        <div className="container legal-grid">
          <div className="surface legal-copy">
            <section>
              <h2>Website use</h2>
              <p>
                You may use this site to learn about the store, explore products
                and services, and contact the team. Do not misuse the forms or
                attempt to interfere with site operation.
              </p>
            </section>
            <section>
              <h2>Availability and pricing disclaimer</h2>
              <p>
                Product availability, animal selection, and pricing ranges may
                change without notice. Website content is informational and does
                not guarantee current stock.
              </p>
            </section>
            <section>
              <h2>External links</h2>
              <p>
                The site may link to Google Maps, social profiles, and other
                third-party resources. We are not responsible for the content or
                policies of those external services.
              </p>
            </section>
            <section>
              <h2>Content ownership</h2>
              <p>
                Website copy, visual design, and brand materials belong to
                Beaverton Reptiles unless otherwise noted.
              </p>
            </section>
          </div>
          <section
            className="surface legal-callout stack"
            aria-labelledby="terms-questions-title"
          >
            <h2 id="terms-questions-title">Questions?</h2>
            <p>
              Use the contact page if you need clarification about site terms or
              store policies.
            </p>
          </section>
        </div>
      </section>
    </>
  );
}
