import { About } from '@/components/about'
import { BackgroundGrid } from '@/components/background-grid'
import { Contact } from '@/components/contact'
import { Experience } from '@/components/experience'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { Navbar } from '@/components/navbar'
import { Projects } from '@/components/projects'
import { Stack } from '@/components/stack'
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

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col overflow-x-hidden">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD structured data, no user input
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
      />
      <BackgroundGrid />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
