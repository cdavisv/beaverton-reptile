import { PageHero } from "@/components/sections/PageHero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("privacy");

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        variant="utility"
        hero={{
          eyebrow: "Privacy policy",
          title: "How Beaverton Reptiles handles website and inquiry data.",
          description:
            "This policy explains what information the site collects, how it is used, and how to contact us with privacy questions.",
          primaryCta: { href: "/contact", label: "Contact Us" },
        }}
      />

      <section className="section">
        <div className="container legal-grid">
          <div className="surface legal-copy">
            <section>
              <h2>Information we collect</h2>
              <p>
                We collect the information you choose to submit through contact
                and guided inquiry forms, including your name, email, phone
                number if provided, and the details you share about your needs.
              </p>
            </section>
            <section>
              <h2>How we use it</h2>
              <p>
                Inquiry data is used to respond to requests, guide store visits,
                and improve how we explain products and care support on the
                website.
              </p>
            </section>
            <section>
              <h2>Analytics and third parties</h2>
              <p>
                The site may use lightweight analytics to understand page
                performance and basic engagement. Map embeds and social links
                may send data to those platforms according to their own
                policies.
              </p>
            </section>
            <section>
              <h2>Privacy requests</h2>
              <p>
                If you need to update or remove information you have submitted,
                contact the store using the information on the contact page.
              </p>
            </section>
          </div>
          <section
            className="surface legal-callout stack"
            aria-labelledby="privacy-policy-scope-title"
          >
            <h2 id="privacy-policy-scope-title">Policy scope</h2>
            <p>
              This policy covers the website, inquiry forms, and related
              communications.
            </p>
          </section>
        </div>
      </section>
    </>
  );
}
