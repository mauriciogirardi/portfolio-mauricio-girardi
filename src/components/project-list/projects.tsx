import { motion, Variants } from 'framer-motion'
import { Github, Globe } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { projectsData } from './data'

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.5
    }
  }
}

const itemAnimation = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 }
}

export function Projects() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="my-6 animate-opacity space-y-4"
    >
      {projectsData.map((project) => {
        return (
          <motion.div
            variants={itemAnimation}
            key={project.id}
            className="custom-bg w-full space-y-4 overflow-hidden rounded-lg p-4 md:max-w-[1000px] md:p-6"
          >
            <div className="flex flex-col items-start gap-6 lg:flex-row">
              <Image
                src={project.img}
                alt={project.name}
                width={500}
                height={300}
                className="h-auto w-full rounded-lg object-contain lg:w-1/2"
                priority
              />

              <div className="flex flex-col justify-between gap-3">
                <h1 className="text-lg font-medium text-zinc-300 md:text-2xl">
                  {project.name}
                </h1>

                <div>
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
                      <Github className="size-4" />
                      Github
                    </Link>
                    {project.demoLink && (
                      <Link
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-full bg-zinc-600 px-3 py-2 text-sm font-medium hover:bg-zinc-700"
                      >
                        <Globe className="size-4" />
                        Demo
                      </Link>
                    )}
                  </div>
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
