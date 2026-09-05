import { Blocks, Gauge, Palette, TestTube } from 'lucide-react'
import { SectionHeading } from './section-heading'

const GROUPS = [
  {
    icon: Blocks,
    title: 'Front-End Core',
    items: ['React', 'Next.js', 'TypeScript', 'Redux / Zustand', 'React Query'],
  },
  {
    icon: Palette,
    title: 'UI & Design Systems',
    items: [
      'Tailwind CSS',
      'Storybook',
      'Design Tokens',
      'Componentização',
      'Acessibilidade (a11y)',
    ],
  },
  {
    icon: Gauge,
    title: 'Performance & Arquitetura',
    items: ['Core Web Vitals', 'SSR / SSG', 'Code Splitting', 'Arquitetura de componentes'],
  },
  {
    icon: TestTube,
    title: 'Qualidade & Ferramentas',
    items: ['Jest / Testing Library', 'Playwright', 'Git & Code Review', 'CI/CD', 'Docker'],
  },
]

export function Stack() {
  return (
    <section id="stack" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading index="02" label="Ecossistema" title="Tecnologias que eu domino" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {GROUPS.map(({ icon: Icon, title, items }) => (
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
          ))}
        </div>
      </div>
    </section>
  )
}
