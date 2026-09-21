'use client'

import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { Language, Translations } from '@/lib/i18n/translations'
import { LanguageToggle } from './language-toggle'
import { ThemeToggle } from './theme-toggle'

export function Navbar({
  nav,
  languageToggleLabel,
  themeToggleLabel,
  language,
}: {
  nav: Translations['nav']
  languageToggleLabel: string
  themeToggleLabel: string
  language: Language
}) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label={nav.ariaLabel}
        className={`mx-auto mt-4 flex max-w-5xl items-center justify-between rounded-full border px-5 py-3 backdrop-blur-xl transition-colors duration-300 sm:px-6 ${
          scrolled
            ? 'border-card-border bg-background/40 shadow-lg shadow-black/10'
            : 'border-card-border bg-card'
        }`}
      >
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight">
          <span className="text-primary">{'<'}</span>
          Mauricio
          <span className="text-secondary">{' />'}</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#contato"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 md:inline-block"
          >
            {nav.cta}
          </a>
          <LanguageToggle label={languageToggleLabel} language={language} />
          <ThemeToggle label={themeToggleLabel} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? nav.closeMenu : nav.openMenu}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-card-border md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-nav"
          className="mx-4 mt-2 flex flex-col gap-1 rounded-2xl border border-card-border bg-background/95 p-3 shadow-xl backdrop-blur-xl md:hidden"
        >
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
