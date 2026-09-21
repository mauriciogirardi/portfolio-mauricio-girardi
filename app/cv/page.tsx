import type { Metadata } from 'next'
import { CvContent } from '@/components/cv/cv-content'
import { getLanguage } from '@/lib/i18n/get-language'
import { translations } from '@/lib/i18n/translations'

export const metadata: Metadata = {
  title: 'Currículo',
  description: 'Currículo de Mauricio Girardi, Desenvolvedor Front-End Sênior.',
  alternates: {
    canonical: '/cv',
  },
}

export default async function CvPage() {
  const language = await getLanguage()
  return <CvContent t={translations[language]} language={language} />
}
