'use client'

import { Blocks, Gauge, Palette, TestTube } from 'lucide-react'
import { useTranslations } from '@/lib/i18n/language-context'
import { SectionHeading } from './section-heading'

const ICONS = [Blocks, Palette, Gauge, TestTube]

export function Stack() {
  const { t } = useTranslations()

  return (
    <section id="stack" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading index="02" label={t.stack.headingLabel} title={t.stack.headingTitle} />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.stack.groups.map(({ title, items }, index) => {
            const Icon = ICONS[index]
            return (
              <div
                key={title}
                className="glass group relative rounded-2xl p-6 transition-transform hover:-translate-y-1"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-3 font-semibold">{title}</h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
