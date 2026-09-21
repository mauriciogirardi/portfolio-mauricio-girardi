import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { ThemeToggle } from './theme-toggle'

describe('ThemeToggle', () => {
  beforeEach(() => {
    // biome-ignore lint/suspicious/noDocumentCookie: resetting cookie state between tests
    document.cookie = 'theme=; expires=Thu, 01 Jan 1970 00:00:00 UTC'
    document.documentElement.removeAttribute('data-theme')
  })

  it('reads the persisted theme on mount and applies it to the document', () => {
    // biome-ignore lint/suspicious/noDocumentCookie: seeding cookie state for the test
    document.cookie = 'theme=light'
    render(<ThemeToggle label="Alternar tema" />)
    expect(document.documentElement.getAttribute('data-theme')).toBe('light')
  })

  it('toggles the theme and persists the new value in a cookie on click', () => {
    // biome-ignore lint/suspicious/noDocumentCookie: seeding cookie state for the test
    document.cookie = 'theme=dark'
    render(<ThemeToggle label="Alternar tema" />)

    fireEvent.click(screen.getByRole('button', { name: 'Alternar tema' }))

    expect(document.documentElement.getAttribute('data-theme')).toBe('light')
    expect(document.cookie).toContain('theme=light')
  })
})
