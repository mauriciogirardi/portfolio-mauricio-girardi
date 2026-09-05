import { Lock } from 'lucide-react'
import { SectionHeading } from './section-heading'

const PROJECTS = [
  {
    title: 'Design System — Sistema Bancário',
    company: 'ITSector',
    description:
      'Criação e evolução do design system de uma aplicação bancária, garantindo consistência visual e escalabilidade. Desenvolvi o formulário de questionário de investimentos, com foco em usabilidade e validação de dados.',
    tags: ['React', 'Next.js', 'TypeScript', 'Design System'],
  },
  {
    title: 'E-commerce de Luxo',
    company: 'Bliss Applications',
    description:
      'Novas funcionalidades a partir do design, testes unitários, code review e correção de bugs para uma plataforma de e-commerce de alto padrão.',
    tags: ['React', 'Testes Unitários', 'Code Review', 'QA'],
  },
  {
    title: 'Software de Análise Investigativa',
    company: 'Cognyte',
    description:
      'Novas funcionalidades para um software utilizado por organizações governamentais, com foco em qualidade, code review e mentoria de novos desenvolvedores no time.',
    tags: ['React', 'Code Review', 'Mentoria'],
  },
  {
    title: 'Sistema de Gestão de Frotas',
    company: 'Maxtrack',
    description:
      'Funcionalidades para monitoramento de frota em tempo real, telemetria e visão computacional, com foco em qualidade e performance.',
    tags: ['React', 'Real-time', 'Performance'],
  },
]

export function Projects() {
  return (
    <section id="projetos" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading index="03" label="Portfólio" title="Projetos selecionados" />

        <div className="grid gap-5 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="glass group relative flex flex-col rounded-2xl p-6 transition-transform hover:-translate-y-1"
            >
              <div className="mb-1 flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <span
                  title="Projeto corporativo — código sob confidencialidade"
                  className="flex shrink-0 items-center gap-1 rounded-full border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-muted-foreground"
                >
                  <Lock className="h-3 w-3" />
                  NDA
                </span>
              </div>

              <p className="mb-4 font-mono text-xs text-primary">{project.company}</p>

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
