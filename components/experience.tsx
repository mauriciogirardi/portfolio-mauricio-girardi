'use client'

import { useTranslations } from '@/lib/i18n/language-context'
import { SectionHeading } from './section-heading'

const COMPANIES = [
  'ITSector',
  'EVOKE IT — Innovation Studio',
  'Tagcoders — Software Development Company',
  'Bliss Applications',
  'Cognyte',
  'Maxtrack',
  'BOM',
]

export function Experience() {
  const { t } = useTranslations()

  return (
    <section id="experiencia" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          index="04"
          label={t.experience.headingLabel}
          title={t.experience.headingTitle}
        />

        <div className="relative ml-3 space-y-10 border-l border-border pl-8">
          {t.experience.roles.map((item, index) => (
            <div key={`${COMPANIES[index]}-${item.period}`} className="relative">
              <span className="absolute -left-9.25 top-1.5 h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_0_4px_var(--glow-a)]" />
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <p className="font-mono text-xs uppercase tracking-widest text-primary">
                  {item.period}
                </p>
                <span className="font-mono text-xs text-muted-foreground">· {item.duration}</span>
              </div>
              <h3 className="mt-1 text-lg font-semibold">{item.role}</h3>
              <p className="text-sm text-muted-foreground">{COMPANIES[index]}</p>
              <p className="mt-0.5 font-mono text-xs text-muted-foreground">{item.meta}</p>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
