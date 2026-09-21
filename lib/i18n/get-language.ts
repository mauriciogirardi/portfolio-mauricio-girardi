import { cookies } from 'next/headers'
import { LANGUAGE_COOKIE } from './language-cookie'
import type { Language } from './translations'

export async function getLanguage(): Promise<Language> {
  const store = await cookies()
  return store.get(LANGUAGE_COOKIE)?.value === 'en' ? 'en' : 'pt'
}
