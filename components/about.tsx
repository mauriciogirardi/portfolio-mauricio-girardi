import Image from 'next/image'
import { SectionHeading } from './section-heading'

const HIGHLIGHTS = [
  'Arquitetura de aplicações React e Next.js escaláveis e de fácil manutenção',
  'Design systems consistentes e acessíveis, usados por múltiplos times de produto',
  'Cultura de testes automatizados, CI/CD e code review',
  'Liderança técnica e mentoria de desenvolvedores pleno/júnior',
]

export function About() {
  return (
    <section id="sobre" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading index="01" label="Quem sou eu" title="Sobre mim" />

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
            <p className="max-w-2xl text-base leading-7 text-muted-foreground">
              Sou desenvolvedor front-end sênior com mais de 6 anos de experiência construindo
              interfaces para sistemas bancários, e-commerce de luxo e software de análise usado por
              organizações governamentais. Trabalho principalmente com{' '}
              <span className="text-foreground">React</span>,{' '}
              <span className="text-foreground">Next.js</span> e{' '}
              <span className="text-foreground">TypeScript</span>, cobrindo desde a arquitetura de
              componentes até testes e deploy.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
              Recentemente liderei tecnicamente o front-end de um sistema bancário na ITSector, onde
              também fui responsável pelo design system do produto. Gosto de código limpo,
              acessibilidade e decisões orientadas por dados e experiência do usuário.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {HIGHLIGHTS.map((item) => (
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
