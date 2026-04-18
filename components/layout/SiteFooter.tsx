import Link from "next/link";

import { footerNav, siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="stack">
          <h2 className="footer-title">{siteConfig.name}</h2>
          <p>{siteConfig.summary}</p>
          <div className="stack footer-meta">
            <a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phone}</a>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer">
              {siteConfig.address}
            </a>
          </div>
        </div>
        <div className="stack">
          <h2 className="footer-title">Explore</h2>
          <nav className="stack footer-nav" aria-label="Footer">
            {footerNav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="stack">
          <h2 className="footer-title">Hours</h2>
          <div className="stack footer-hours">
            {siteConfig.hours.map((entry) => (
              <p key={entry.days}>
                <strong>{entry.days}</strong>
                <br />
                {entry.value}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
