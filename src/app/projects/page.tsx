import { Metadata } from 'next'

import { Header } from '@/components/header'
import Staff from '@/components/models/staff'
import { ProjectList } from '@/components/project-list'
import { RenderModel } from '@/components/render-modal'

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
          <div className="fixed left-20 top-20 -z-20 flex h-screen items-center justify-center lg:-left-16 2xl:left-20">
            <RenderModel>
              <Staff />
            </RenderModel>
          </div>
        </div>
      </div>
    </section>
  )
}
