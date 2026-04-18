export function ProofStrip({ items }: { items: string[] }) {
  return (
    <section className="section">
      <div className="container proof-strip">
        {items.map((item) => (
          <article key={item} className="surface proof-card">
            <p>{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
