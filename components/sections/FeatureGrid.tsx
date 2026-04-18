export function FeatureGrid({
  items,
}: {
  items: Array<{ title: string; description: string }>;
}) {
  return (
    <div className="grid-auto">
      {items.map((item) => (
        <article className="surface content-card" key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  );
}
