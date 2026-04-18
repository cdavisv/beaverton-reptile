import Link from "next/link";

export function CategoryGrid({
  items,
}: {
  items: Array<{ title: string; description: string; href: string }>;
}) {
  return (
    <div className="grid-auto">
      {items.map((item) => (
        <article className="surface content-card" key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <Link className="inline-link" href={item.href}>
            Explore {item.title.toLowerCase()}
          </Link>
        </article>
      ))}
    </div>
  );
}
