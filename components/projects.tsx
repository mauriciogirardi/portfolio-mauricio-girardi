'use client'

import { Lock } from 'lucide-react'
import { useTranslations } from '@/lib/i18n/language-context'
import { SectionHeading } from './section-heading'

const COMPANIES = ['ITSector', 'Bliss Applications', 'Cognyte', 'Maxtrack']

export function Projects() {
  const { t } = useTranslations()

  return (
    <section id="projetos" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          index="03"
          label={t.projects.headingLabel}
          title={t.projects.headingTitle}
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {t.projects.items.map((project, index) => (
            <article
              key={project.title}
              className="glass group relative flex flex-col rounded-2xl p-6 transition-transform hover:-translate-y-1"
            >
              <div className="mb-1 flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <span
                  title={t.projects.ndaTitle}
                  className="flex shrink-0 items-center gap-1 rounded-full border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-muted-foreground"
                >
                  <Lock className="h-3 w-3" />
                  {t.projects.ndaLabel}
                </span>
              </div>

              <p className="mb-4 font-mono text-xs text-primary">{COMPANIES[index]}</p>

              <p className="mb-5 flex-1 text-sm leading-6 text-muted-foreground">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
