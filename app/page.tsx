import { About } from '@/components/about'
import { BackgroundGrid } from '@/components/background-grid'
import { Contact } from '@/components/contact'
import { Experience } from '@/components/experience'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { Navbar } from '@/components/navbar'
import { Projects } from '@/components/projects'
import { Stack } from '@/components/stack'
import { getLanguage } from '@/lib/i18n/get-language'
import { translations } from '@/lib/i18n/translations'
import { SITE_URL } from '@/lib/site'

const PERSON_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mauricio Girardi',
  jobTitle: 'Senior Front-End Engineer',
  url: SITE_URL,
  email: 'mailto:devmauriciogirardi@gmail.com',
  knowsAbout: ['React', 'Next.js', 'TypeScript', 'Design Systems', 'Core Web Vitals'],
  sameAs: ['https://github.com/mauriciogirardi', 'https://www.linkedin.com/in/mauricio-girardi/'],
}

export default async function Home() {
  const language = await getLanguage()
  const t = translations[language]

  return (
    <div className="relative flex flex-1 flex-col overflow-x-hidden">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD structured data, no user input
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
      />
      <BackgroundGrid />
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform focus-visible:translate-y-0"
      >
        {t.skipToContent}
      </a>
      <Navbar
        nav={t.nav}
        languageToggleLabel={t.languageToggle}
        themeToggleLabel={t.themeToggle}
        language={language}
      />
      <main id="main-content" className="flex-1">
        <Hero t={t.hero} />
        <About t={t.about} />
        <Stack t={t.stack} />
        <Projects t={t.projects} />
        <Experience t={t.experience} />
        <Contact t={t.contact} />
      </main>
      <Footer t={t.footer} />
    </div>
  )
}
