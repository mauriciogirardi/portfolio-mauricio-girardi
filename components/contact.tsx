import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'
import { SectionHeading } from './section-heading'

const CHANNELS = [
  {
    icon: Mail,
    label: 'E-mail',
    value: 'devmauriciogirardi@gmail.com',
    href: 'mailto:devmauriciogirardi@gmail.com',
  },
  {
    icon: Phone,
    label: 'Telefone',
    value: '+351 910 789 181',
    href: 'tel:+351910789181',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/mauricio-girardi',
    href: 'https://www.linkedin.com/in/mauricio-girardi/',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/mauriciogirardi',
    href: 'https://github.com/mauriciogirardi',
  },
]

export function Contact() {
  return (
    <section id="contato" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading index="05" label="Próximo passo" title="Vamos construir algo juntos?" />

        <div className="glass relative overflow-hidden rounded-3xl p-10 sm:p-14">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-[100px]"
            style={{ background: 'var(--glow-a)' }}
          />
          <div className="relative">
            <h3 className="max-w-xl text-2xl font-semibold leading-tight sm:text-3xl">
              Disponível para novos projetos, posições full-time e consultorias técnicas.
            </h3>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Me chame diretamente por e-mail ou pelas redes abaixo — normalmente respondo em até 1
              dia útil.
            </p>

            <a
              href="mailto:devmauriciogirardi@gmail.com"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Enviar um e-mail
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <div className="mt-10 grid gap-4 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-4">
              {CHANNELS.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 rounded-xl border border-transparent p-2 transition-colors hover:border-card-border"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      {label}
                    </span>
                    <span className="block truncate text-sm">{value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
