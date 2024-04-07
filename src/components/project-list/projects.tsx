import Image from 'next/image'

import { Icon } from '../icon'
import { projectsData } from './data'

export function Projects() {
  return (
    <div className="my-6 space-y-4">
      {projectsData.map((item) => {
        return (
          <div
            key={item.id}
            className="custom-bg w-full space-y-4 overflow-hidden rounded-lg p-4 md:max-w-[1000px] md:p-6"
          >
            <div className="flex flex-col gap-6 lg:flex-row">
              <Image
                src={item.img}
                alt={item.name}
                width={500}
                height={300}
                className="h-auto w-full animate-pulse rounded-lg object-cover lg:w-1/2"
              />

              <div className="space-y-3">
                <h1 className="text-lg font-medium text-zinc-300 md:text-2xl">
                  {item.name}
                </h1>
                <p className="text-pretty text-sm md:text-base">
                  {item.description}
                </p>

                <div className="flex items-center justify-end gap-4 pt-9">
                  <a
                    href={item.linkGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-zinc-400 px-3 py-2 text-sm font-medium hover:bg-zinc-400 hover:text-zinc-900"
                  >
                    <Icon name="github" className="size-4" />
                    Github
                  </a>
                  {item.demoLink && (
                    <a
                      href={item.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full bg-zinc-600 px-3 py-2 text-sm font-medium hover:bg-zinc-700"
                    >
                      <Icon name="globe" className="size-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      })}

      <div className="custom-bg flex h-72 w-full items-center justify-center space-y-4 overflow-hidden rounded-lg p-4 md:max-w-[1000px] md:p-6">
        <h1 className="text-2xl lowercase text-zinc-300">
          New project coming soon!
        </h1>
      </div>
    </div>
  )
}
