import { ArrowLeft, ArrowLeftIcon, Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { CvHeading } from "@/components/cv/cv-heading";
import { PrintButton } from "@/components/cv/print-button";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";

export const metadata: Metadata = {
  title: "Currículo",
  description: "Currículo de Mauricio Girardi, Desenvolvedor Front-End Sênior.",
  alternates: {
    canonical: "/cv",
  },
};

const EXPERIENCE = [
  {
    role: "Desenvolvedor Front-end",
    company: "ItSector",
    location: "Aveiro, Portugal",
    period: "Mai 2024 — Set 2026",
    bullets: [
      "Contribuiu para o desenvolvimento de um design system para uma plataforma bancária, focado em consistência e escalabilidade.",
      "Desenvolveu um formulário de questionário de investimentos com ênfase em usabilidade e validação de dados.",
      "Colaborou na arquitetura do sistema e implementou funcionalidades principais.",
      "Otimizou performance e acessibilidade seguindo as melhores práticas do mercado.",
      "Apoiou novos membros da equipe para acelerar o onboarding.",
      "Realizou revisões de código, escreveu testes unitários e corrigiu bugs.",
    ],
  },
  {
    role: "Desenvolvedor Front-end (Freelance)",
    company: "Tagcodes",
    location: "Remoto, Portugal",
    period: "Jan 2024 — Nov 2024",
    bullets: [
      "Melhorou a performance e responsividade de plataformas de gestão de eventos e e-learning.",
      "Corrigiu bugs e entregou novas funcionalidades com melhorias de UI.",
    ],
  },
  {
    role: "Desenvolvedor Front-end",
    company: "Bliss Applications",
    location: "Porto, Portugal",
    period: "Jun 2023 — Jan 2024",
    bullets: [
      "Desenvolveu uma plataforma de e-commerce de luxo.",
      "Implementou novas funcionalidades com base em especificações de design.",
      "Colaborou com a equipe de QA nos testes e garantiu a qualidade do código por meio de revisões e testes unitários.",
    ],
  },
  {
    role: "Desenvolvedor Front-end",
    company: "Cognyte",
    location: "Remoto",
    period: "Nov 2021 — Mai 2023",
    bullets: [
      "Contribuiu para um software de análise investigativa utilizado por agências governamentais.",
      "Desenvolveu novas funcionalidades, realizou revisões de código e apoiou testes de QA.",
      "Auxiliou no onboarding de novos desenvolvedores.",
    ],
  },
  {
    role: "Desenvolvedor Front-end Júnior",
    company: "Denox / Maxtrack",
    location: "Remoto",
    period: "Mar 2021 — Out 2021",
    bullets: [
      "Trabalhou em plataformas de gestão de frotas e logística com telemetria em tempo real, monitoramento de fadiga e visão computacional.",
      "Entregou funcionalidades de alta qualidade em múltiplos produtos com foco em performance.",
    ],
  },
  {
    role: "Desenvolvedor Front-end",
    company: "Bom",
    location: "Jaraguá do Sul, Brasil",
    period: "Jan 2020 — Jun 2020",
    bullets: [
      "Desenvolveu e manteve SPAs em React.js para landing pages e sistemas de simulação de empréstimos.",
    ],
  },
];

const SKILLS = [
  {
    title: "Front-end",
    items:
      "React.js, Next.js, React Native, TypeScript, TailwindCSS, CSS Modules, Styled-components, HTML, CSS, Vite, Shadcn/UI, Storybook",
  },
  {
    title: "Back-end & APIs",
    items: "Node.js, Express, Nest.js, Fastify, Knex.js, Prisma, PostgreSQL",
  },
  {
    title: "Testes",
    items: "Jest, Vitest, React Testing Library, Cypress",
  },
  {
    title: "DevOps & Ferramentas",
    items: "Docker, GitLab, Azure DevOps, CI/CD, pnpm, yarn, npm",
  },
  {
    title: "Gerenciamento de Estado",
    items: "Redux, Zustand, Easy-peasy",
  },
  {
    title: "Outros",
    items: "Three.js, Python, Spring Boot, Zod, React Hook Form, Scrum, Jira",
  },
];

export default function CvPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="no-print sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="font-mono flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeftIcon aria-label="Voltar ao portfólio" />
            <span className="hidden md:flex">Voltar ao portfólio</span>
          </Link>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <PrintButton />
          </div>
        </div>
      </div>

      <main className="cv-page mx-auto max-w-3xl px-6 py-14">
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Mauricio Girardi
          </h1>
          <p className="mt-1 text-lg text-muted-foreground">
            Desenvolvedor Front-End Sênior
          </p>

          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              Aveiro, Portugal
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
          <CvHeading>Perfil</CvHeading>
          <p className="text-sm leading-7 text-muted-foreground">
            Desenvolvedor Front-end apaixonado e dedicado, com sólida
            experiência na criação de experiências digitais envolventes e
            eficientes. Especializado em ReactJS, Next.js, Node.js e React
            Native, com atenção aos detalhes, usabilidade e acessibilidade.
            Confortável em equipes colaborativas e sempre em busca de desafios
            que impulsionem o crescimento e a inovação. Aberto a novos projetos
            e colaborações profissionais.
          </p>
        </section>

        <section className="mb-10">
          <CvHeading>Experiência Profissional</CvHeading>
          <div className="space-y-7">
            {EXPERIENCE.map((job) => (
              <div key={`${job.company}-${job.period}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-semibold">{job.role}</h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {job.period}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {job.company} — {job.location}
                </p>
                <ul className="mt-2 space-y-1.5">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-2 text-sm leading-6 text-muted-foreground"
                    >
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
          <CvHeading>Formação Acadêmica</CvHeading>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-semibold">
              Bacharelado em Engenharia de Software
            </h3>
            <span className="font-mono text-xs text-muted-foreground">
              Início Set 2019
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Universidade Cruzeiro do Sul — São Francisco do Sul, Brasil · Em
            pausa (5º semestre)
          </p>
        </section>

        <section className="mb-10">
          <CvHeading>Habilidades</CvHeading>
          <dl className="grid gap-4 sm:grid-cols-2">
            {SKILLS.map((group) => (
              <div key={group.title}>
                <dt className="text-sm font-semibold">{group.title}</dt>
                <dd className="mt-1 text-sm leading-6 text-muted-foreground">
                  {group.items}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section>
          <CvHeading>Idiomas</CvHeading>
          <p className="text-sm text-muted-foreground">
            Português — Nativo &nbsp;·&nbsp; Inglês — A2, nível básico (em
            andamento)
          </p>
        </section>
      </main>
    </div>
  );
}
