import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SectionHeading } from './section-heading'

describe('SectionHeading', () => {
  it('renders the index, label and title', () => {
    render(<SectionHeading index="01" label="Quem sou eu" title="Sobre mim" />)

    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('Quem sou eu')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Sobre mim' })).toBeInTheDocument()
  })
})
