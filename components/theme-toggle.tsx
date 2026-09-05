'use client'

import { Moon, Sun } from 'lucide-react'
import { useLayoutEffect, useState } from 'react'

function readTheme() {
  if (typeof document === 'undefined') return 'dark'
  const match = document.cookie.match(/(?:^|; )theme=([^;]*)/)
  return match ? decodeURIComponent(match[1]) : document.documentElement.getAttribute('data-theme')
}

function applyTheme(theme: string) {
  document.documentElement.setAttribute('data-theme', theme)
  // biome-ignore lint/suspicious/noDocumentCookie: simple persisted preference, no need for the Cookie Store API
  document.cookie = `theme=${encodeURIComponent(theme)}; path=/; max-age=31536000; SameSite=Lax`
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<string | null>(null)

  useLayoutEffect(() => {
    const current = readTheme() ?? 'dark'
    applyTheme(current)
    setTheme(current)
  }, [])

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark'
    applyTheme(next)
    setTheme(next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Alternar tema claro e escuro"
      className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-card-border bg-card transition-colors hover:border-primary/50"
    >
      <Sun
        className="absolute h-4 w-4 text-primary transition-all duration-300"
        style={{
          opacity: theme === 'light' ? 1 : 0,
          transform: theme === 'light' ? 'scale(1) rotate(0deg)' : 'scale(0.5) rotate(-90deg)',
        }}
      />
      <Moon
        className="absolute h-4 w-4 text-secondary transition-all duration-300"
        style={{
          opacity: theme === 'dark' ? 1 : 0,
          transform: theme === 'dark' ? 'scale(1) rotate(0deg)' : 'scale(0.5) rotate(90deg)',
        }}
      />
    </button>
  )
}
