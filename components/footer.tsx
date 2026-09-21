import type { Translations } from '@/lib/i18n/translations'

export function Footer({ t }: { t: Translations['footer'] }) {
  return (
    <footer className="relative border-t border-border py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} Mauricio Girardi. {t.rights}
        </p>
        <p className="font-mono text-xs">{t.madeWith}</p>
      </div>
    </footer>
  )
}
