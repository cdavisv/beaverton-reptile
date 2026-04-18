import { InquiryForm } from "@/components/forms/InquiryForm";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { PageHero } from "@/components/sections/PageHero";
import { siteConfig, faqItems } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("contact");

export default function ContactPage() {
  return (
    <>
      <PageHero
        variant="utility"
        hero={{
          eyebrow: "Contact and visit",
          title: "Call, visit, or send a quick message before you come by.",
          description:
            "Use this page for the fastest local conversion path: hours, location, contact options, and a simple inquiry form.",
          primaryCta: {
            href: `tel:${siteConfig.phoneHref}`,
            label: "Call Now",
          },
          secondaryCta: { href: "#contact-form", label: "Send an Inquiry" },
        }}
      />

      <section className="section">
        <div className="container contact-grid">
          <div className="stack">
            <div className="surface contact-card stack">
              <h2>Store details</h2>
              <a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phone}</a>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer">
                {siteConfig.address}
              </a>
              <div className="stack">
                {siteConfig.hours.map((entry) => (
                  <p key={entry.days}>
                    <strong>{entry.days}</strong>
                    <br />
                    {entry.value}
                  </p>
                ))}
              </div>
            </div>
            <iframe
              className="map-frame surface"
              title="Beaverton Reptiles location map"
              loading="lazy"
              src="https://www.google.com/maps?q=12675%20SW%20Center%20Street%20Beaverton%20OR%2097005&output=embed"
            />
          </div>
          <div className="stack" id="contact-form">
            <InquiryForm mode="contact" />
            <div className="surface content-card stack">
              <h2>FAQ teaser</h2>
              <FAQAccordion items={faqItems.slice(0, 3)} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
