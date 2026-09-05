'use client'

import { useTranslations } from '@/lib/i18n/language-context'

export function Footer() {
  const { t } = useTranslations()

  return (
    <footer className="relative border-t border-border py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} Mauricio Girardi. {t.footer.rights}
        </p>
        <p className="font-mono text-xs">{t.footer.madeWith}</p>
      </div>
    </footer>
  )
}
