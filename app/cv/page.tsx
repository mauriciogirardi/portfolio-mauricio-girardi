import type { Metadata } from 'next'
import { CvContent } from '@/components/cv/cv-content'

export const metadata: Metadata = {
  title: 'Currículo',
  description: 'Currículo de Mauricio Girardi, Desenvolvedor Front-End Sênior.',
  alternates: {
    canonical: '/cv',
  },
}

export default function CvPage() {
  return <CvContent />
}
