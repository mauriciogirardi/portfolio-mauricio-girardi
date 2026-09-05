'use client'

import { useTranslations } from '@/lib/i18n/language-context'

export function LanguageToggle() {
  const { t, language, toggleLanguage } = useTranslations()

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={t.languageToggle}
      className="flex h-9 items-center gap-1 rounded-full border border-card-border bg-card px-3 font-mono text-xs transition-colors hover:border-primary/50"
    >
      <span className={language === 'pt' ? 'text-primary' : 'text-muted-foreground'}>PT</span>
      <span className="text-muted-foreground">/</span>
      <span className={language === 'en' ? 'text-primary' : 'text-muted-foreground'}>EN</span>
    </button>
  )
}
