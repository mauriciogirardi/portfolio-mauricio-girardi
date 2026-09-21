import { ArrowRight, Mail } from 'lucide-react'
import type { Translations } from '@/lib/i18n/translations'
import { GithubIcon, LinkedinIcon } from './icons'

export function Hero({ t }: { t: Translations['hero'] }) {
  return (
    <section id="top" className="relative flex min-h-screen items-center pt-28">
      <div className="mx-auto grid w-full max-w-5xl gap-10 px-6">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {t.availability}
          </p>
        </div>

        <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          {t.titleLine1}
          <br />
          <span className="text-gradient">{t.titleLine2}</span>
        </h1>

        <p className="max-w-2xl text-lg leading-8 text-muted-foreground">{t.intro}</p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#projetos"
            className="group flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            {t.ctaPrimary}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contato"
            className="rounded-full border border-card-border px-6 py-3 text-sm font-medium transition-colors hover:border-primary/50"
          >
            {t.ctaSecondary}
          </a>

          <div className="ml-auto flex items-center gap-3 sm:ml-4">
            <a
              href="https://github.com/mauriciogirardi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.githubLabel}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-card-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/mauricio-girardi/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.linkedinLabel}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-card-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href="mailto:devmauriciogirardi@gmail.com"
              aria-label={t.emailLabel}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-card-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <dl className="mt-6 grid max-w-xl grid-cols-1 md:grid-cols-3 gap-6 border-t border-border pt-6">
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {t.stats.experienceLabel}
            </dt>
            <dd className="mt-1 text-2xl font-semibold">{t.stats.experienceValue}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {t.stats.projectsLabel}
            </dt>
            <dd className="mt-1 text-2xl font-semibold">{t.stats.projectsValue}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {t.stats.stackLabel}
            </dt>
            <dd className="mt-1 text-2xl font-semibold">{t.stats.stackValue}</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
