import { Metadata } from 'next'
import dynamic from 'next/dynamic'

import { Header } from '@/components/header'
import { ProjectList } from '@/components/project-list'
import { RenderModel } from '@/components/render-modal'

const Staff = dynamic(() => import('@/components/models/staff'), {
  ssr: false
})

export const metadata: Metadata = {
  title: 'Projects'
}

export default function ProjectPage() {
  return (
    <section className="container-bg bg-projects">
      <div className="container relative z-20">
        <Header showBtnHome />

        <div className=" flex flex-col items-center justify-center">
          <ProjectList />
          <div className="fixed left-10 top-20 -z-20 flex h-screen items-center justify-center lg:-left-16 2xl:left-20">
            <RenderModel>
              <Staff />
            </RenderModel>
          </div>
        </div>
      </div>
    </section>
  )
}
