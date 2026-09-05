'use client'

import { createContext, type ReactNode, useContext, useEffect, useState } from 'react'
import { translations } from './translations'

export type Language = 'pt' | 'en'

type LanguageContextValue = {
  language: Language
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function readLanguage(): Language {
  if (typeof document === 'undefined') return 'pt'
  const match = document.cookie.match(/(?:^|; )lang=([^;]*)/)
  return match && decodeURIComponent(match[1]) === 'en' ? 'en' : 'pt'
}

function persistLanguage(language: Language) {
  // biome-ignore lint/suspicious/noDocumentCookie: simple persisted preference, no need for the Cookie Store API
  document.cookie = `lang=${language}; path=/; max-age=31536000; SameSite=Lax`
  document.documentElement.lang = language === 'en' ? 'en' : 'pt-BR'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt')

  useEffect(() => {
    const current = readLanguage()
    persistLanguage(current)
    setLanguage(current)
  }, [])

  function toggleLanguage() {
    setLanguage((prev) => {
      const next = prev === 'pt' ? 'en' : 'pt'
      persistLanguage(next)
      return next
    })
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider')
  return context
}

export function useTranslations() {
  const { language, toggleLanguage } = useLanguage()
  return { t: translations[language], language, toggleLanguage }
}
