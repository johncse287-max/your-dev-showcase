export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-2 font-mono text-sm text-primary">{eyebrow}</p>
      <h2 id={id} className="text-3xl font-bold sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
