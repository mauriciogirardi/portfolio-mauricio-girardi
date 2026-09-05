import { SectionHeading } from './section-heading'

const ROLES = [
  {
    period: 'Mai 2024 — Set 2026',
    duration: '2 anos e 4 meses',
    role: 'Frontend Developer',
    company: 'ITSector',
    meta: 'Full-time · Aveiro, Portugal · Remoto',
    description:
      'Atuei no desenvolvimento de um sistema bancário, responsável pela criação do design system, garantindo consistência e escalabilidade na interface da aplicação. Desenvolvi o formulário de questionário de investimentos, com foco em usabilidade e validação de dados, além de colaborar na arquitetura e implementação de funcionalidades-chave do sistema. Também atuei como team leader, com foco em performance, acessibilidade e boas práticas de desenvolvimento.',
  },
  {
    period: 'Mar 2024 — Mai 2024',
    duration: '3 meses',
    role: 'Frontend Developer',
    company: 'EVOKE IT — Innovation Studio',
    meta: 'Full-time · Portugal · Presencial',
    description:
      'Desenvolvi jogos retrô e soluções interativas para eventos com a Play Machine, incluindo gamificação, cadastro de participantes e distribuição de prêmios. Também mantive sites em WordPress, personalizando interfaces de acordo com a identidade visual de cada cliente.',
  },
  {
    period: 'Dez 2023 — Set 2024',
    duration: 'Freelance',
    role: 'Frontend Developer',
    company: 'Tagcoders — Software Development Company',
    meta: 'Freelance · Portugal · Remoto',
    description:
      'Atuei em sistemas de eventos, corrigindo bugs e implementando melhorias de responsividade. Também trabalhei em uma plataforma de ensino, com correção de bugs, melhoria de performance, atualização de layout e implementação de novas funcionalidades.',
  },
  {
    period: 'Jun 2023 — Jan 2024',
    duration: '8 meses',
    role: 'Frontend Developer',
    company: 'Bliss Applications',
    meta: 'Full-time · Porto, Portugal · Remoto',
    description:
      'Desenvolvimento de um e-commerce para uma empresa de luxo: criação de novas funcionalidades a partir do design, apoio ao time de QA nos testes do sistema, escrita de testes unitários, code review e correção de bugs.',
  },
  {
    period: 'Nov 2021 — Mai 2023',
    duration: '1 ano e 7 meses',
    role: 'Frontend Developer',
    company: 'Cognyte',
    meta: 'Full-time · Florianópolis, SC, Brasil · Remoto',
    description:
      'Atuei em um software de análise investigativa utilizado por diversas organizações governamentais e outras instituições. Responsável por criar novas funcionalidades a partir de novos designs, apoiar o QA nos testes, revisar código, corrigir bugs e ajudar novos desenvolvedores a se familiarizarem com o código e as funcionalidades do sistema.',
  },
  {
    period: 'Mar 2021 — Out 2021',
    duration: '8 meses',
    role: 'Frontend Developer',
    company: 'Maxtrack',
    meta: 'Full-time · Remoto',
    description:
      'Sistema de gestão de frotas focado em linearidade de estoque considerando lead time e vendas em tempo real, melhor composição de frota e monitoramento de veículos com telemetria, câmeras de fadiga e visão computacional. Atuei no desenvolvimento de funcionalidades em vários dos principais produtos da empresa, do código à entrega, sempre com foco em qualidade e performance.',
  },
  {
    period: 'Jan 2020 — Jun 2020',
    duration: '6 meses',
    role: 'Frontend Developer',
    company: 'BOM',
    meta: 'Part-time · Jaraguá do Sul, SC, Brasil · Presencial',
    description:
      'Landing page institucional com simulador de empréstimos para clientes de microcrédito consultarem informações e simularem contratações. Responsável pelo desenvolvimento e manutenção de SPAs em React.js.',
  },
]

export function Experience() {
  return (
    <section id="experiencia" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading index="04" label="Trajetória" title="Experiência profissional" />

        <div className="relative ml-3 space-y-10 border-l border-border pl-8">
          {ROLES.map((item) => (
            <div key={`${item.company}-${item.period}`} className="relative">
              <span className="absolute -left-9.25 top-1.5 h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_0_4px_var(--glow-a)]" />
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <p className="font-mono text-xs uppercase tracking-widest text-primary">
                  {item.period}
                </p>
                <span className="font-mono text-xs text-muted-foreground">· {item.duration}</span>
              </div>
              <h3 className="mt-1 text-lg font-semibold">{item.role}</h3>
              <p className="text-sm text-muted-foreground">{item.company}</p>
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
