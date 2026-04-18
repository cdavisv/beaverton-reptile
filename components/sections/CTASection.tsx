import Link from "next/link";

import { siteConfig } from "@/content/site";

export function CTASection({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="section">
      <div className="container">
        <div className="surface cta-banner">
          <div className="stack">
            <span className="eyebrow">Next step</span>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className="cluster">
            <Link className="button" href="/get-started">
              Get Started
            </Link>
            <a
              className="button button-secondary"
              href={`tel:${siteConfig.phoneHref}`}
            >
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
