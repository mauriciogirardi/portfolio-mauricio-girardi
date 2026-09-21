import Image from 'next/image'
import type { Translations } from '@/lib/i18n/translations'
import { SectionHeading } from './section-heading'

export function About({ t }: { t: Translations['about'] }) {
  return (
    <section id="sobre" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading index="01" label={t.headingLabel} title={t.headingTitle} />

        <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:items-start">
          <div className="relative mx-auto h-44 w-44 lg:mx-0">
            <div className="animate-spin-slow absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,var(--primary),var(--secondary),var(--primary))] opacity-70 blur-md" />
            <div className="glass absolute inset-1 overflow-hidden rounded-full">
              <Image
                src="https://avatars.githubusercontent.com/u/51093343?s=400&u=b78f0963c1b7045559d46f7b11ec83904c7d4e31&v=4"
                alt="Mauricio Girardi"
                fill
                sizes="176px"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground">{t.paragraph1}</p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
              {t.paragraph2}
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {t.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
