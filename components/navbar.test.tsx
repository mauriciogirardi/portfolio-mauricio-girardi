import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Navbar } from './navbar'

vi.mock('next/navigation', () => ({
  useRouter: () => ({ refresh: vi.fn() }),
}))

const nav = {
  links: [
    { href: '#sobre', label: 'Sobre' },
    { href: '#contato', label: 'Contato' },
  ],
  cta: 'Vamos conversar',
  openMenu: 'Abrir menu',
  closeMenu: 'Fechar menu',
  ariaLabel: 'Navegação principal',
}

describe('Navbar', () => {
  it('starts with the mobile menu collapsed', () => {
    render(
      <Navbar
        nav={nav}
        languageToggleLabel="Alternar idioma"
        themeToggleLabel="Alternar tema"
        language="pt"
      />,
    )

    const toggle = screen.getByRole('button', { name: nav.openMenu })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(document.getElementById('mobile-nav')).not.toBeInTheDocument()
  })

  it('expands the mobile menu and updates aria-expanded/label on click', () => {
    render(
      <Navbar
        nav={nav}
        languageToggleLabel="Alternar idioma"
        themeToggleLabel="Alternar tema"
        language="pt"
      />,
    )

    fireEvent.click(screen.getByRole('button', { name: nav.openMenu }))

    const toggle = screen.getByRole('button', { name: nav.closeMenu })
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(document.getElementById('mobile-nav')).toBeInTheDocument()
  })
})
