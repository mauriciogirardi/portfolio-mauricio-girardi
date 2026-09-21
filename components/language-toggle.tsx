'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { LANGUAGE_COOKIE } from '@/lib/i18n/language-cookie'
import type { Language } from '@/lib/i18n/translations'

export function LanguageToggle({ label, language }: { label: string; language: Language }) {
  const router = useRouter()
  const [current, setCurrent] = useState(language)

  function toggle() {
    const next: Language = current === 'pt' ? 'en' : 'pt'
    // biome-ignore lint/suspicious/noDocumentCookie: simple persisted preference, no need for the Cookie Store API
    document.cookie = `${LANGUAGE_COOKIE}=${next}; path=/; max-age=31536000; SameSite=Lax`
    document.documentElement.lang = next === 'en' ? 'en' : 'pt-BR'
    setCurrent(next)
    router.refresh()
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      className="flex h-9 items-center gap-1 rounded-full border border-card-border bg-card px-3 font-mono text-xs transition-colors hover:border-primary/50"
    >
      <span className={current === 'pt' ? 'text-primary' : 'text-muted-foreground'}>PT</span>
      <span className="text-muted-foreground">/</span>
      <span className={current === 'en' ? 'text-primary' : 'text-muted-foreground'}>EN</span>
    </button>
  )
}
