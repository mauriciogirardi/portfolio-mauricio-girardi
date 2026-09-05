export function Footer() {
  return (
    <footer className="relative border-t border-border py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Mauricio Girardi. Todos os direitos reservados.</p>
        <p className="font-mono text-xs">Feito com React, Next.js &amp; Tailwind CSS</p>
      </div>
    </footer>
  )
}
