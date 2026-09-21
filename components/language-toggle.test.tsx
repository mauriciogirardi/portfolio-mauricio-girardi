import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { LanguageToggle } from './language-toggle'

const refresh = vi.fn()
vi.mock('next/navigation', () => ({
  useRouter: () => ({ refresh }),
}))

describe('LanguageToggle', () => {
  beforeEach(() => {
    // biome-ignore lint/suspicious/noDocumentCookie: resetting cookie state between tests
    document.cookie = 'lang=; expires=Thu, 01 Jan 1970 00:00:00 UTC'
    refresh.mockClear()
  })

  it('highlights the active language', () => {
    render(<LanguageToggle label="Alternar idioma" language="pt" />)
    expect(screen.getByText('PT')).toHaveClass('text-primary')
    expect(screen.getByText('EN')).toHaveClass('text-muted-foreground')
  })

  it('toggles the language, persists the cookie and refreshes the route on click', () => {
    render(<LanguageToggle label="Alternar idioma" language="pt" />)

    fireEvent.click(screen.getByRole('button', { name: 'Alternar idioma' }))

    expect(screen.getByText('EN')).toHaveClass('text-primary')
    expect(document.cookie).toContain('lang=en')
    expect(document.documentElement.lang).toBe('en')
    expect(refresh).toHaveBeenCalledTimes(1)
  })
})
