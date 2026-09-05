'use client'

import { Download } from 'lucide-react'

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
    >
      <Download className="h-4 w-4" />
      Baixar / Imprimir PDF
    </button>
  )
}
