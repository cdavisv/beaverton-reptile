export function PricingGrid({
  items,
}: {
  items: Array<{
    title: string;
    price: string;
    details: string[];
    note: string;
  }>;
}) {
  return (
    <div className="grid-auto">
      {items.map((item) => (
        <article className="surface pricing-card" key={item.title}>
          <div className="stack">
            <p className="eyebrow">{item.title}</p>
            <h3>{item.price}</h3>
            <ul className="stack bullet-list">
              {item.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            <p>{item.note}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
