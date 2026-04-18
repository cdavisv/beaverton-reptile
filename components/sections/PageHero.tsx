import Link from "next/link";

import type { HeroContent } from "@/content/site";

export function PageHero({
  hero,
  variant = "split",
}: {
  hero: HeroContent;
  variant?: "editorial" | "split" | "utility";
}) {
  return (
    <section className={`section hero hero-${variant}`}>
      <div className="container hero-grid">
        <div className="stack hero-copy">
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1>{hero.title}</h1>
          <p className="hero-description">{hero.description}</p>
          <div className="cluster">
            <HeroLink className="button" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </HeroLink>
            {hero.secondaryCta ? (
              <HeroLink
                className="button button-secondary"
                href={hero.secondaryCta.href}
              >
                {hero.secondaryCta.label}
              </HeroLink>
            ) : null}
          </div>
          {hero.trustNote ? (
            <p className="hero-note">{hero.trustNote}</p>
          ) : null}
        </div>
        {variant !== "utility" ? (
          <div className="hero-art surface">
            <div className="terrarium-orb" aria-hidden="true" />
            <p className="hero-art-copy">
              Quiet habitats, dependable feeders, and realistic guidance for
              local reptile households.
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function HeroLink({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className: string;
  href: string;
}) {
  if (href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
