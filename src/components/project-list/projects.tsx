import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import { Icon } from '../icon'
import { projectsData } from './data'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.5
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 }
}

export function Projects() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="my-6 space-y-4"
    >
      {projectsData.map((project) => {
        return (
          <motion.div
            variants={item}
            key={project.id}
            className="custom-bg w-full space-y-4 overflow-hidden rounded-lg p-4 md:max-w-[1000px] md:p-6"
          >
            <div className="flex flex-col gap-6 lg:flex-row">
              <Image
                src={project.img}
                alt={project.name}
                width={500}
                height={300}
                className="h-auto w-full animate-pulse rounded-lg object-cover lg:w-1/2"
              />

              <div className="space-y-3">
                <h1 className="text-lg font-medium text-zinc-300 md:text-2xl">
                  {project.name}
                </h1>
                <p className="text-pretty text-sm md:text-base">
                  {project.description}
                </p>

                <div className="flex items-center justify-end gap-4 pt-9">
                  <Link
                    href={project.linkGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-zinc-400 px-3 py-2 text-sm font-medium hover:bg-zinc-400 hover:text-zinc-900"
                  >
                    <Icon name="github" className="size-4" />
                    Github
                  </Link>
                  {project.demoLink && (
                    <Link
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full bg-zinc-600 px-3 py-2 text-sm font-medium hover:bg-zinc-700"
                    >
                      <Icon name="globe" className="size-4" />
                      Demo
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )
      })}

      <div className="custom-bg flex h-72 w-full items-center justify-center space-y-4 overflow-hidden rounded-lg p-4 md:max-w-[1000px] md:p-6">
        <h1 className="text-lg lowercase text-zinc-300 md:text-2xl">
          New project coming soon!
        </h1>
      </div>
    </motion.div>
  )
}
