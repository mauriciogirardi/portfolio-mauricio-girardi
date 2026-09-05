'use client'

import { Download } from 'lucide-react'
import { useTranslations } from '@/lib/i18n/language-context'

export function PrintButton() {
  const { t } = useTranslations()

  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
    >
      <Download className="h-4 w-4" />
      {t.cv.printButton}
    </button>
  )
}
