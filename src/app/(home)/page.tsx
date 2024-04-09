import { Metadata } from 'next'
import dynamic from 'next/dynamic'

import { Header } from '@/components/header'
import { Navigation } from '@/components/navigation'
import { RenderModel } from '@/components/render-modal'
const Wizard = dynamic(() => import('@/components/models/wizard'), {
  ssr: false
})

export const metadata: Metadata = {
  title: 'Home'
}

export default function Home() {
  return (
    <section className="container-bg min-h-screen bg-home ">
      <div className="container relative z-20">
        <Header />

        <div className="h-[calc(100vh_-_4.5rem)] w-full">
          <Navigation />
          <RenderModel>
            <Wizard />
          </RenderModel>
        </div>
      </div>
    </section>
  )
}
