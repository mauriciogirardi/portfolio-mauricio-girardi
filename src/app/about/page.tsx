import { Metadata } from 'next'

import { AboutDetails } from '@/components/about-details'
import { Header } from '@/components/header'
import Hat from '@/components/models/hat'
import { RenderModel } from '@/components/render-modal'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Hello! I’m Mauricio Girardi, a passionate Front-end Developer with a solid background in creating amazing digital experiences. My main focus is on technologies like ReactJS, Next.js, Node.js, React Native and more.'
}

export default async function AboutPage() {
  return (
    <section className="container-bg bg-about">
      <div className="container relative z-20">
        <div className="relative">
          <Header showBtnHome />

          <div className="xs:h-3/5 absolute left-0 top-1/2 z-10 h-3/5 w-full -translate-y-1/2 sm:h-screen">
            <RenderModel>
              <Hat />
            </RenderModel>
          </div>

          <div className="relative flex h-screen w-full flex-col items-center justify-center">
            <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center sm:top-[60%]">
              <p className="text-2xl font-medium  text-foreground md:text-3xl">
                Meet the wizard behind this portfolio
              </p>
            </div>
          </div>
        </div>

        <AboutDetails />
      </div>
    </section>
  )
}
