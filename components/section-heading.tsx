export function SectionHeading({
  index,
  label,
  title,
}: {
  index: string
  label: string
  title: string
}) {
  return (
    <div className="mb-12 flex items-end gap-4">
      <span className="font-mono text-sm text-primary">{index}</span>
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {label}
        </p>
        <h2 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      </div>
      <div className="ml-4 h-px flex-1 bg-border" />
    </div>
  )
}
