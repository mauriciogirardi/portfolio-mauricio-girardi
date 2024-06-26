import './globals.css'

import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Head from 'next/head'

import { FireFilesBackground } from '@/components/fire-files-background'
import { Sound } from '@/components/sound'
import { ThemeProvider } from '@/contexts/theme-provider'
import { env } from '@/env'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '800', '600']
})
const baseUrl = env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: `%s | ${env.SITE_NAME}`,
    default: env.SITE_NAME
  },
  // image: 'URL_DA_SUA_IMAGEM',
  keywords: [
    'desenvolvimento web',
    'Next.js',
    'desenvolvedor front-end',
    'React.js',
    'React Native',
    'Nodejs',
    'programador',
    'portfólio',
    'experiência',
    'soluções digitais'
  ],
  description:
    'Explorando o mundo da programação há mais de quatro anos, estou aqui para criar soluções digitais inovadoras e envolventes. Especializado em desenvolvimento web e apaixonado por transformar ideias em realidade através de código limpo e eficiente. Descubra como posso ajudar a impulsionar seu projeto!'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className="min-h-screen bg-black antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <FireFilesBackground />
          <Sound />
        </ThemeProvider>
      </body>
    </html>
  )
}
