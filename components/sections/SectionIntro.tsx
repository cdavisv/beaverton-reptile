export function SectionIntro({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow?: string;
  description: string;
}) {
  return (
    <div className="section-intro stack">
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
