import type { ReactNode } from 'react'
import type { Language } from './language-context'

function Highlight({ children }: { children: ReactNode }) {
  return <span className="text-foreground">{children}</span>
}

const pt = {
  nav: {
    links: [
      { href: '#sobre', label: 'Sobre' },
      { href: '#stack', label: 'Stack' },
      { href: '#projetos', label: 'Projetos' },
      { href: '#experiencia', label: 'Experiência' },
      { href: '#contato', label: 'Contato' },
      { href: '/cv', label: 'CV' },
    ],
    cta: 'Vamos conversar',
    openMenu: 'Abrir menu',
  },
  themeToggle: 'Alternar tema claro e escuro',
  languageToggle: 'Alternar idioma',
  hero: {
    availability: 'Disponível para novos projetos',
    titleLine1: 'Eu crio interfaces',
    titleLine2: 'rápidas, sólidas e escaláveis.',
    intro: (
      <>
        Sou <Highlight>Mauricio Girardi</Highlight>, desenvolvedor front-end sênior. Construo
        interfaces web robustas com <Highlight>React</Highlight>, <Highlight>Next.js</Highlight> e{' '}
        <Highlight>TypeScript</Highlight> — de design systems a aplicações complexas, com foco em
        performance, acessibilidade e DX.
      </>
    ),
    ctaPrimary: 'Ver projetos',
    ctaSecondary: 'Fale comigo',
    githubLabel: 'GitHub',
    linkedinLabel: 'LinkedIn',
    emailLabel: 'E-mail',
    stats: {
      experienceLabel: 'Experiência',
      experienceValue: '7+ anos',
      projectsLabel: 'Projetos',
      projectsValue: '30+',
      stackLabel: 'Stack',
      stackValue: 'React / Next.js',
    },
  },
  about: {
    headingLabel: 'Quem sou eu',
    headingTitle: 'Sobre mim',
    paragraph1: (
      <>
        Sou desenvolvedor front-end sênior com mais de 7 anos de experiência construindo interfaces
        para sistemas bancários, e-commerce de luxo e software de análise usado por organizações
        governamentais. Trabalho principalmente com <Highlight>React</Highlight>,{' '}
        <Highlight>Next.js</Highlight> e <Highlight>TypeScript</Highlight>, cobrindo desde a
        arquitetura de componentes até testes e deploy.
      </>
    ),
    paragraph2: (
      <>
        Recentemente liderei tecnicamente o front-end de um sistema bancário na ITSector, onde
        também fui responsável pelo design system do produto. Gosto de código limpo, acessibilidade
        e decisões orientadas por dados e experiência do usuário.
      </>
    ),
    highlights: [
      'Arquitetura de aplicações React e Next.js escaláveis e de fácil manutenção',
      'Design systems consistentes e acessíveis, usados por múltiplos times de produto',
      'Cultura de testes automatizados, CI/CD e code review',
      'Liderança técnica e mentoria de desenvolvedores pleno/júnior',
    ],
  },
  stack: {
    headingLabel: 'Ecossistema',
    headingTitle: 'Tecnologias que eu domino',
    groups: [
      {
        title: 'Front-End Core',
        items: ['React', 'Next.js', 'TypeScript', 'Redux / Zustand', 'React Query'],
      },
      {
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
        title: 'Performance & Arquitetura',
        items: ['Core Web Vitals', 'SSR / SSG', 'Code Splitting', 'Arquitetura de componentes'],
      },
      {
        title: 'Qualidade & Ferramentas',
        items: ['Jest / Testing Library', 'Playwright', 'Git & Code Review', 'CI/CD', 'Docker'],
      },
    ],
  },
  projects: {
    headingLabel: 'Portfólio',
    headingTitle: 'Projetos selecionados',
    ndaLabel: 'NDA',
    ndaTitle: 'Projeto corporativo — código sob confidencialidade',
    items: [
      {
        title: 'Design System — Sistema Bancário',
        description:
          'Criação e evolução do design system de uma aplicação bancária, garantindo consistência visual e escalabilidade. Desenvolvi o formulário de questionário de investimentos, com foco em usabilidade e validação de dados.',
        tags: ['React', 'Next.js', 'TypeScript', 'Design System'],
      },
      {
        title: 'E-commerce de Luxo',
        description:
          'Novas funcionalidades a partir do design, testes unitários, code review e correção de bugs para uma plataforma de e-commerce de alto padrão.',
        tags: ['React', 'Testes Unitários', 'Code Review', 'QA'],
      },
      {
        title: 'Software de Análise Investigativa',
        description:
          'Novas funcionalidades para um software utilizado por organizações governamentais, com foco em qualidade, code review e mentoria de novos desenvolvedores no time.',
        tags: ['React', 'Code Review', 'Mentoria'],
      },
      {
        title: 'Sistema de Gestão de Frotas',
        description:
          'Funcionalidades para monitoramento de frota em tempo real, telemetria e visão computacional, com foco em qualidade e performance.',
        tags: ['React', 'Real-time', 'Performance'],
      },
    ],
  },
  experience: {
    headingLabel: 'Trajetória',
    headingTitle: 'Experiência profissional',
    roles: [
      {
        period: 'Mai 2024 — Set 2026',
        duration: '2 anos e 4 meses',
        role: 'Frontend Developer',
        meta: 'Full-time · Aveiro, Portugal · Remoto',
        description:
          'Atuei no desenvolvimento de um sistema bancário, responsável pela criação do design system, garantindo consistência e escalabilidade na interface da aplicação. Desenvolvi o formulário de questionário de investimentos, com foco em usabilidade e validação de dados, além de colaborar na arquitetura e implementação de funcionalidades-chave do sistema. Também atuei como team leader, com foco em performance, acessibilidade e boas práticas de desenvolvimento.',
      },
      {
        period: 'Mar 2024 — Mai 2024',
        duration: '3 meses',
        role: 'Frontend Developer',
        meta: 'Full-time · Portugal · Presencial',
        description:
          'Desenvolvi jogos retrô e soluções interativas para eventos com a Play Machine, incluindo gamificação, cadastro de participantes e distribuição de prêmios. Também mantive sites em WordPress, personalizando interfaces de acordo com a identidade visual de cada cliente.',
      },
      {
        period: 'Dez 2023 — Set 2024',
        duration: 'Freelance',
        role: 'Frontend Developer',
        meta: 'Freelance · Portugal · Remoto',
        description:
          'Atuei em sistemas de eventos, corrigindo bugs e implementando melhorias de responsividade. Também trabalhei em uma plataforma de ensino, com correção de bugs, melhoria de performance, atualização de layout e implementação de novas funcionalidades.',
      },
      {
        period: 'Jun 2023 — Jan 2024',
        duration: '8 meses',
        role: 'Frontend Developer',
        meta: 'Full-time · Porto, Portugal · Remoto',
        description:
          'Desenvolvimento de um e-commerce para uma empresa de luxo: criação de novas funcionalidades a partir do design, apoio ao time de QA nos testes do sistema, escrita de testes unitários, code review e correção de bugs.',
      },
      {
        period: 'Nov 2021 — Mai 2023',
        duration: '1 ano e 7 meses',
        role: 'Frontend Developer',
        meta: 'Full-time · Florianópolis, SC, Brasil · Remoto',
        description:
          'Atuei em um software de análise investigativa utilizado por diversas organizações governamentais e outras instituições. Responsável por criar novas funcionalidades a partir de novos designs, apoiar o QA nos testes, revisar código, corrigir bugs e ajudar novos desenvolvedores a se familiarizarem com o código e as funcionalidades do sistema.',
      },
      {
        period: 'Mar 2021 — Out 2021',
        duration: '8 meses',
        role: 'Frontend Developer',
        meta: 'Full-time · Remoto',
        description:
          'Sistema de gestão de frotas focado em linearidade de estoque considerando lead time e vendas em tempo real, melhor composição de frota e monitoramento de veículos com telemetria, câmeras de fadiga e visão computacional. Atuei no desenvolvimento de funcionalidades em vários dos principais produtos da empresa, do código à entrega, sempre com foco em qualidade e performance.',
      },
      {
        period: 'Jan 2020 — Jun 2020',
        duration: '6 meses',
        role: 'Frontend Developer',
        meta: 'Part-time · Jaraguá do Sul, SC, Brasil · Presencial',
        description:
          'Landing page institucional com simulador de empréstimos para clientes de microcrédito consultarem informações e simularem contratações. Responsável pelo desenvolvimento e manutenção de SPAs em React.js.',
      },
    ],
  },
  contact: {
    headingLabel: 'Próximo passo',
    headingTitle: 'Vamos construir algo juntos?',
    heading2: 'Disponível para novos projetos, posições full-time e consultorias técnicas.',
    paragraph:
      'Me chame diretamente por e-mail ou pelas redes abaixo — normalmente respondo em até 1 dia útil.',
    cta: 'Enviar um e-mail',
    channelLabels: ['E-mail', 'Telefone', 'LinkedIn', 'GitHub'],
  },
  footer: {
    rights: 'Todos os direitos reservados.',
    madeWith: 'Feito com React, Next.js & Tailwind CSS',
  },
  cv: {
    backToPortfolio: 'Voltar ao portfólio',
    printButton: 'Baixar / Imprimir PDF',
    role: 'Desenvolvedor Front-End Sênior',
    location: 'Aveiro, Portugal',
    sections: {
      profile: 'Perfil',
      experience: 'Experiência Profissional',
      education: 'Formação Acadêmica',
      skills: 'Habilidades',
      languages: 'Idiomas',
    },
    profileText:
      'Desenvolvedor Front-end apaixonado e dedicado, com sólida experiência na criação de experiências digitais envolventes e eficientes. Especializado em ReactJS, Next.js, Node.js e React Native, com atenção aos detalhes, usabilidade e acessibilidade. Confortável em equipes colaborativas e sempre em busca de desafios que impulsionem o crescimento e a inovação. Aberto a novos projetos e colaborações profissionais.',
    experience: [
      {
        role: 'Desenvolvedor Front-end',
        location: 'Aveiro, Portugal',
        period: 'Mai 2024 — Set 2026',
        bullets: [
          'Contribuiu para o desenvolvimento de um design system para uma plataforma bancária, focado em consistência e escalabilidade.',
          'Desenvolveu um formulário de questionário de investimentos com ênfase em usabilidade e validação de dados.',
          'Colaborou na arquitetura do sistema e implementou funcionalidades principais.',
          'Otimizou performance e acessibilidade seguindo as melhores práticas do mercado.',
          'Apoiou novos membros da equipe para acelerar o onboarding.',
          'Realizou revisões de código, escreveu testes unitários e corrigiu bugs.',
        ],
      },
      {
        role: 'Desenvolvedor Front-end (Freelance)',
        location: 'Remoto, Portugal',
        period: 'Jan 2024 — Nov 2024',
        bullets: [
          'Melhorou a performance e responsividade de plataformas de gestão de eventos e e-learning.',
          'Corrigiu bugs e entregou novas funcionalidades com melhorias de UI.',
        ],
      },
      {
        role: 'Desenvolvedor Front-end',
        location: 'Porto, Portugal',
        period: 'Jun 2023 — Jan 2024',
        bullets: [
          'Desenvolveu uma plataforma de e-commerce de luxo.',
          'Implementou novas funcionalidades com base em especificações de design.',
          'Colaborou com a equipe de QA nos testes e garantiu a qualidade do código por meio de revisões e testes unitários.',
        ],
      },
      {
        role: 'Desenvolvedor Front-end',
        location: 'Remoto',
        period: 'Nov 2021 — Mai 2023',
        bullets: [
          'Contribuiu para um software de análise investigativa utilizado por agências governamentais.',
          'Desenvolveu novas funcionalidades, realizou revisões de código e apoiou testes de QA.',
          'Auxiliou no onboarding de novos desenvolvedores.',
        ],
      },
      {
        role: 'Desenvolvedor Front-end Júnior',
        location: 'Remoto',
        period: 'Mar 2021 — Out 2021',
        bullets: [
          'Trabalhou em plataformas de gestão de frotas e logística com telemetria em tempo real, monitoramento de fadiga e visão computacional.',
          'Entregou funcionalidades de alta qualidade em múltiplos produtos com foco em performance.',
        ],
      },
      {
        role: 'Desenvolvedor Front-end',
        location: 'Jaraguá do Sul, Brasil',
        period: 'Jan 2020 — Jun 2020',
        bullets: [
          'Desenvolveu e manteve SPAs em React.js para landing pages e sistemas de simulação de empréstimos.',
        ],
      },
    ],
    education: {
      degree: 'Bacharelado em Engenharia de Software',
      period: 'Início Set 2019',
      institution:
        'Universidade Cruzeiro do Sul — São Francisco do Sul, Brasil · Em pausa (5º semestre)',
    },
    skills: [
      {
        title: 'Front-end',
        items:
          'React.js, Next.js, React Native, TypeScript, TailwindCSS, CSS Modules, Styled-components, HTML, CSS, Vite, Shadcn/UI, Storybook',
      },
      {
        title: 'Back-end & APIs',
        items: 'Node.js, Express, Nest.js, Fastify, Knex.js, Prisma, PostgreSQL',
      },
      {
        title: 'Testes',
        items: 'Jest, Vitest, React Testing Library, Cypress',
      },
      {
        title: 'DevOps & Ferramentas',
        items: 'Docker, GitLab, Azure DevOps, CI/CD, pnpm, yarn, npm',
      },
      {
        title: 'Gerenciamento de Estado',
        items: 'Redux, Zustand, Easy-peasy',
      },
      {
        title: 'Outros',
        items: 'Three.js, Python, Spring Boot, Zod, React Hook Form, Scrum, Jira',
      },
    ],
    languagesText: <>Português — Nativo &nbsp;·&nbsp; Inglês — A2, nível básico (em andamento)</>,
  },
} satisfies Record<string, unknown>

const en: typeof pt = {
  nav: {
    links: [
      { href: '#sobre', label: 'About' },
      { href: '#stack', label: 'Stack' },
      { href: '#projetos', label: 'Projects' },
      { href: '#experiencia', label: 'Experience' },
      { href: '#contato', label: 'Contact' },
      { href: '/cv', label: 'CV' },
    ],
    cta: "Let's talk",
    openMenu: 'Open menu',
  },
  themeToggle: 'Toggle light and dark theme',
  languageToggle: 'Switch language',
  hero: {
    availability: 'Available for new projects',
    titleLine1: 'I build interfaces',
    titleLine2: 'fast, robust and scalable.',
    intro: (
      <>
        I'm <Highlight>Mauricio Girardi</Highlight>, a senior front-end developer. I build robust
        web interfaces with <Highlight>React</Highlight>, <Highlight>Next.js</Highlight> and{' '}
        <Highlight>TypeScript</Highlight> — from design systems to complex applications, focused on
        performance, accessibility and DX.
      </>
    ),
    ctaPrimary: 'View projects',
    ctaSecondary: 'Contact me',
    githubLabel: 'GitHub',
    linkedinLabel: 'LinkedIn',
    emailLabel: 'Email',
    stats: {
      experienceLabel: 'Experience',
      experienceValue: '7+ years',
      projectsLabel: 'Projects',
      projectsValue: '30+',
      stackLabel: 'Stack',
      stackValue: 'React / Next.js',
    },
  },
  about: {
    headingLabel: 'Who I am',
    headingTitle: 'About me',
    paragraph1: (
      <>
        I'm a senior front-end developer with more than 7 years of experience building interfaces
        for banking systems, luxury e-commerce and analysis software used by government
        organizations. I work mainly with <Highlight>React</Highlight>,{' '}
        <Highlight>Next.js</Highlight> and <Highlight>TypeScript</Highlight>, covering everything
        from component architecture to testing and deployment.
      </>
    ),
    paragraph2: (
      <>
        I recently led the front-end technically for a banking system at ITSector, where I was also
        responsible for the product's design system. I enjoy clean code, accessibility and decisions
        driven by data and user experience.
      </>
    ),
    highlights: [
      'Architecture of scalable, maintainable React and Next.js applications',
      'Consistent, accessible design systems used across multiple product teams',
      'Culture of automated testing, CI/CD and code review',
      'Technical leadership and mentoring of mid-level/junior developers',
    ],
  },
  stack: {
    headingLabel: 'Ecosystem',
    headingTitle: 'Technologies I work with',
    groups: [
      {
        title: 'Front-End Core',
        items: ['React', 'Next.js', 'TypeScript', 'Redux / Zustand', 'React Query'],
      },
      {
        title: 'UI & Design Systems',
        items: [
          'Tailwind CSS',
          'Storybook',
          'Design Tokens',
          'Componentization',
          'Accessibility (a11y)',
        ],
      },
      {
        title: 'Performance & Architecture',
        items: ['Core Web Vitals', 'SSR / SSG', 'Code Splitting', 'Component architecture'],
      },
      {
        title: 'Quality & Tooling',
        items: ['Jest / Testing Library', 'Playwright', 'Git & Code Review', 'CI/CD', 'Docker'],
      },
    ],
  },
  projects: {
    headingLabel: 'Portfolio',
    headingTitle: 'Selected projects',
    ndaLabel: 'NDA',
    ndaTitle: 'Corporate project — code under NDA',
    items: [
      {
        title: 'Design System — Banking System',
        description:
          'Creation and evolution of the design system for a banking application, ensuring visual consistency and scalability. I built the investment questionnaire form, focused on usability and data validation.',
        tags: ['React', 'Next.js', 'TypeScript', 'Design System'],
      },
      {
        title: 'Luxury E-commerce',
        description:
          'New features built from design specs, unit tests, code review and bug fixes for a high-end e-commerce platform.',
        tags: ['React', 'Unit Tests', 'Code Review', 'QA'],
      },
      {
        title: 'Investigative Analysis Software',
        description:
          'New features for software used by government organizations, focused on quality, code review and mentoring new developers on the team.',
        tags: ['React', 'Code Review', 'Mentorship'],
      },
      {
        title: 'Fleet Management System',
        description:
          'Features for real-time fleet monitoring, telemetry and computer vision, focused on quality and performance.',
        tags: ['React', 'Real-time', 'Performance'],
      },
    ],
  },
  experience: {
    headingLabel: 'Journey',
    headingTitle: 'Professional experience',
    roles: [
      {
        period: 'May 2024 — Sep 2026',
        duration: '2 years and 4 months',
        role: 'Frontend Developer',
        meta: 'Full-time · Aveiro, Portugal · Remote',
        description:
          "I worked on the development of a banking system, responsible for building the product's design system, ensuring consistency and scalability across the application's interface. I built the investment questionnaire form, focused on usability and data validation, and collaborated on the architecture and implementation of key system features. I also acted as team leader, focusing on performance, accessibility and development best practices.",
      },
      {
        period: 'Mar 2024 — May 2024',
        duration: '3 months',
        role: 'Frontend Developer',
        meta: 'Full-time · Portugal · On-site',
        description:
          "I built retro games and interactive event solutions with Play Machine, including gamification, participant registration and prize distribution. I also maintained WordPress sites, customizing interfaces to match each client's visual identity.",
      },
      {
        period: 'Dec 2023 — Sep 2024',
        duration: 'Freelance',
        role: 'Frontend Developer',
        meta: 'Freelance · Portugal · Remote',
        description:
          'I worked on event management systems, fixing bugs and implementing responsiveness improvements. I also worked on an e-learning platform, fixing bugs, improving performance, updating the layout and implementing new features.',
      },
      {
        period: 'Jun 2023 — Jan 2024',
        duration: '8 months',
        role: 'Frontend Developer',
        meta: 'Full-time · Porto, Portugal · Remote',
        description:
          'Development of an e-commerce platform for a luxury brand: building new features from design specs, supporting the QA team with system testing, writing unit tests, code review and bug fixes.',
      },
      {
        period: 'Nov 2021 — May 2023',
        duration: '1 year and 7 months',
        role: 'Frontend Developer',
        meta: 'Full-time · Florianópolis, SC, Brazil · Remote',
        description:
          "I worked on investigative analysis software used by several government organizations and other institutions. Responsible for building new features from new designs, supporting QA testing, reviewing code, fixing bugs and helping new developers get familiar with the codebase and the system's features.",
      },
      {
        period: 'Mar 2021 — Oct 2021',
        duration: '8 months',
        role: 'Frontend Developer',
        meta: 'Full-time · Remote',
        description:
          "Fleet management system focused on inventory linearity considering lead time and real-time sales, better fleet composition and vehicle monitoring with telemetry, fatigue cameras and computer vision. I worked on feature development across several of the company's core products, from code to delivery, always focused on quality and performance.",
      },
      {
        period: 'Jan 2020 — Jun 2020',
        duration: '6 months',
        role: 'Frontend Developer',
        meta: 'Part-time · Jaraguá do Sul, SC, Brazil · On-site',
        description:
          'Corporate landing page with a loan simulator for microcredit clients to check information and simulate loan applications. Responsible for developing and maintaining SPAs in React.js.',
      },
    ],
  },
  contact: {
    headingLabel: 'Next step',
    headingTitle: "Let's build something together?",
    heading2: 'Available for new projects, full-time positions and technical consulting.',
    paragraph:
      'Reach out directly by email or through the channels below — I usually reply within 1 business day.',
    cta: 'Send an email',
    channelLabels: ['Email', 'Phone', 'LinkedIn', 'GitHub'],
  },
  footer: {
    rights: 'All rights reserved.',
    madeWith: 'Feito com React, Next.js & Tailwind CSS',
  },
  cv: {
    backToPortfolio: 'Back to portfolio',
    printButton: 'Download / Print PDF',
    role: 'Senior Front-End Developer',
    location: 'Aveiro, Portugal',
    sections: {
      profile: 'Profile',
      experience: 'Professional Experience',
      education: 'Education',
      skills: 'Skills',
      languages: 'Languages',
    },
    profileText:
      'Passionate and dedicated Front-end Developer with solid experience building engaging, efficient digital experiences. Specialized in ReactJS, Next.js, Node.js and React Native, with strong attention to detail, usability and accessibility. Comfortable in collaborative teams and always looking for challenges that drive growth and innovation. Open to new projects and professional collaborations.',
    experience: [
      {
        role: 'Front-end Developer',
        location: 'Aveiro, Portugal',
        period: 'May 2024 — Sep 2026',
        bullets: [
          'Contributed to the development of a design system for a banking platform, focused on consistency and scalability.',
          'Built an investment questionnaire form with an emphasis on usability and data validation.',
          'Collaborated on the system architecture and implemented core features.',
          'Optimized performance and accessibility following market best practices.',
          'Supported new team members to speed up onboarding.',
          'Performed code reviews, wrote unit tests and fixed bugs.',
        ],
      },
      {
        role: 'Front-end Developer (Freelance)',
        location: 'Remote, Portugal',
        period: 'Jan 2024 — Nov 2024',
        bullets: [
          'Improved performance and responsiveness of event management and e-learning platforms.',
          'Fixed bugs and delivered new features with UI improvements.',
        ],
      },
      {
        role: 'Front-end Developer',
        location: 'Porto, Portugal',
        period: 'Jun 2023 — Jan 2024',
        bullets: [
          'Developed a luxury e-commerce platform.',
          'Implemented new features based on design specifications.',
          'Collaborated with the QA team on testing and ensured code quality through reviews and unit tests.',
        ],
      },
      {
        role: 'Front-end Developer',
        location: 'Remote',
        period: 'Nov 2021 — May 2023',
        bullets: [
          'Contributed to investigative analysis software used by government agencies.',
          'Developed new features, performed code reviews and supported QA testing.',
          'Helped onboard new developers.',
        ],
      },
      {
        role: 'Junior Front-end Developer',
        location: 'Remote',
        period: 'Mar 2021 — Oct 2021',
        bullets: [
          'Worked on fleet and logistics management platforms with real-time telemetry, fatigue monitoring and computer vision.',
          'Delivered high-quality features across multiple products with a focus on performance.',
        ],
      },
      {
        role: 'Front-end Developer',
        location: 'Jaraguá do Sul, Brazil',
        period: 'Jan 2020 — Jun 2020',
        bullets: [
          'Developed and maintained SPAs in React.js for landing pages and loan simulation systems.',
        ],
      },
    ],
    education: {
      degree: "Bachelor's Degree in Software Engineering",
      period: 'Started Sep 2019',
      institution:
        'Universidade Cruzeiro do Sul — São Francisco do Sul, Brazil · On hold (5th semester)',
    },
    skills: [
      {
        title: 'Front-end',
        items:
          'React.js, Next.js, React Native, TypeScript, TailwindCSS, CSS Modules, Styled-components, HTML, CSS, Vite, Shadcn/UI, Storybook',
      },
      {
        title: 'Back-end & APIs',
        items: 'Node.js, Express, Nest.js, Fastify, Knex.js, Prisma, PostgreSQL',
      },
      {
        title: 'Testing',
        items: 'Jest, Vitest, React Testing Library, Cypress',
      },
      {
        title: 'DevOps & Tools',
        items: 'Docker, GitLab, Azure DevOps, CI/CD, pnpm, yarn, npm',
      },
      {
        title: 'State Management',
        items: 'Redux, Zustand, Easy-peasy',
      },
      {
        title: 'Other',
        items: 'Three.js, Python, Spring Boot, Zod, React Hook Form, Scrum, Jira',
      },
    ],
    languagesText: <>Portuguese — Native &nbsp;·&nbsp; English — A2, basic level (in progress)</>,
  },
}

export const translations: Record<Language, typeof pt> = { pt, en }
