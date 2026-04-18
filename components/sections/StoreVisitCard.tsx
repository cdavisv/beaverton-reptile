import { siteConfig } from "@/content/site";

export function StoreVisitCard() {
  return (
    <aside className="surface visit-card">
      <div className="stack">
        <span className="eyebrow">Visit essentials</span>
        <h2>Plan a smooth store visit.</h2>
        <p>{siteConfig.serviceArea}</p>
        <div className="stack">
          {siteConfig.hours.map((entry) => (
            <p key={entry.days}>
              <strong>{entry.days}</strong>
              <br />
              {entry.value}
            </p>
          ))}
        </div>
        <a
          className="inline-link"
          href={siteConfig.mapsUrl}
          target="_blank"
          rel="noreferrer"
        >
          Open directions in Google Maps
        </a>
      </div>
    </aside>
  );
}
