export function CvHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 border-b border-border pb-2 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-primary">
      {children}
    </h2>
  )
}
