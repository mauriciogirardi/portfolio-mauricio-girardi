import { describe, expect, it, vi } from 'vitest'

const { cookies } = vi.hoisted(() => ({ cookies: vi.fn() }))
vi.mock('next/headers', () => ({ cookies }))

const { getLanguage } = await import('./get-language')

describe('getLanguage', () => {
  it('returns "en" when the lang cookie is set to en', async () => {
    cookies.mockResolvedValueOnce({ get: () => ({ value: 'en' }) })
    expect(await getLanguage()).toBe('en')
  })

  it('defaults to "pt" when the lang cookie is anything else', async () => {
    cookies.mockResolvedValueOnce({ get: () => ({ value: 'fr' }) })
    expect(await getLanguage()).toBe('pt')
  })

  it('defaults to "pt" when there is no lang cookie', async () => {
    cookies.mockResolvedValueOnce({ get: () => undefined })
    expect(await getLanguage()).toBe('pt')
  })
})
