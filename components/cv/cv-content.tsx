'use client'

import { ArrowLeftIcon, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import { LanguageToggle } from '@/components/language-toggle'
import { ThemeToggle } from '@/components/theme-toggle'
import { useTranslations } from '@/lib/i18n/language-context'
import { CvHeading } from './cv-heading'
import { PrintButton } from './print-button'

const EXPERIENCE_COMPANIES = [
  'ItSector',
  'Tagcodes',
  'Bliss Applications',
  'Cognyte',
  'Denox / Maxtrack',
  'Bom',
]

export function CvContent() {
  const { t } = useTranslations()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="no-print sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="font-mono flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeftIcon aria-label={t.cv.backToPortfolio} />
            <span className="hidden md:flex">{t.cv.backToPortfolio}</span>
          </Link>
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />
            <PrintButton />
          </div>
        </div>
      </div>

      <main className="cv-page mx-auto max-w-3xl px-6 py-14">
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Mauricio Girardi</h1>
          <p className="mt-1 text-lg text-muted-foreground">{t.cv.role}</p>

          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              {t.cv.location}
            </span>
            <a
              href="mailto:devmauriciogirardi@gmail.com"
              className="flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <Mail className="h-3.5 w-3.5" />
              devmauriciogirardi@gmail.com
            </a>
            <a
              href="tel:+351910789181"
              className="flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <Phone className="h-3.5 w-3.5" />
              +351 910 789 181
            </a>
            <a
              href="https://www.linkedin.com/in/mauricio-girardi/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <LinkedinIcon className="h-3.5 w-3.5" />
              linkedin.com/in/mauricio-girardi
            </a>
            <a
              href="https://github.com/mauriciogirardi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              github.com/mauriciogirardi
            </a>
          </div>
        </header>

        <section className="mb-10">
          <CvHeading>{t.cv.sections.profile}</CvHeading>
          <p className="text-sm leading-7 text-muted-foreground">{t.cv.profileText}</p>
        </section>

        <section className="mb-10">
          <CvHeading>{t.cv.sections.experience}</CvHeading>
          <div className="space-y-7">
            {t.cv.experience.map((job, index) => (
              <div key={`${EXPERIENCE_COMPANIES[index]}-${job.period}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-semibold">{job.role}</h3>
                  <span className="font-mono text-xs text-muted-foreground">{job.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {EXPERIENCE_COMPANIES[index]} — {job.location}
                </p>
                <ul className="mt-2 space-y-1.5">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2 text-sm leading-6 text-muted-foreground">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <CvHeading>{t.cv.sections.education}</CvHeading>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-semibold">{t.cv.education.degree}</h3>
            <span className="font-mono text-xs text-muted-foreground">{t.cv.education.period}</span>
          </div>
          <p className="text-sm text-muted-foreground">{t.cv.education.institution}</p>
        </section>

        <section className="mb-10">
          <CvHeading>{t.cv.sections.skills}</CvHeading>
          <dl className="grid gap-4 sm:grid-cols-2">
            {t.cv.skills.map((group) => (
              <div key={group.title}>
                <dt className="text-sm font-semibold">{group.title}</dt>
                <dd className="mt-1 text-sm leading-6 text-muted-foreground">{group.items}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section>
          <CvHeading>{t.cv.sections.languages}</CvHeading>
          <p className="text-sm text-muted-foreground">{t.cv.languagesText}</p>
        </section>
      </main>
    </div>
  )
}
