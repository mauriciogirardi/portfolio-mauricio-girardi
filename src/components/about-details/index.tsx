/* eslint-disable @next/next/no-img-element */
'use client'

import { motion } from 'framer-motion'
import { Notebook } from 'lucide-react'
import { ReactNode } from 'react'

import { env } from '@/env'
import { cn } from '@/lib/utils'

import { courses } from './data'

type CardProps = {
  children: ReactNode
  className?: string
}

const Card = ({ children, className }: CardProps) => (
  <motion.div
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className={cn('custom-bg overflow-hidden rounded-lg p-4 md:p-9', className)}
  >
    {children}
  </motion.div>
)

export function AboutDetails() {
  return (
    <section className="flex w-full flex-col gap-5 pb-9">
      <div className="flex flex-col gap-5 lg:flex-row">
        <Card className="w-full lg:w-3/5">
          <h2 className="mb-5 text-3xl font-semibold text-orange-300">
            About me
          </h2>
          <p className="text-pretty text-base">
            🚀 Hello! I’m Mauricio Girardi, a passionate
            <strong className="text-orange-300">
              {' '}
              Front-end Developer
            </strong>{' '}
            with a solid background in creating amazing digital experiences. My
            main focus is on technologies like
            <strong className="text-orange-300"> ReactJS </strong>,
            <strong className="text-orange-300"> Next.js </strong>,
            <strong className="text-orange-300"> Node.js </strong>,
            <strong className="text-orange-300"> React Native </strong> and
            more.
            <span className="block py-2">
              Currently, I work as a{' '}
              <strong className="text-orange-300">Front-end Developer</strong>{' '}
              in projects that use ReactJS and Next.js to create intuitive and
              responsive interfaces. My experience with Node.js allows me to
              efficiently integrate the front-end and back-end, ensuring
              exceptional performance.
            </span>
            <span>
              I’m always looking for challenges that broaden my horizons and
              opportunities to collaborate with talented teams. If you are
              looking for a committed and passionate developer, ready to face
              new challenges.
            </span>
            <span className="block pt-3">
              I am open to new opportunities and collaborations. Let’s create
              something amazing together? I’m excited to be part of your next
              project!
            </span>
          </p>
        </Card>

        <div className="w-full space-y-5 lg:w-2/5">
          <Card>
            <p className="flex items-center gap-2 text-left text-3xl font-semibold text-orange-300">
              4+ <sub className="pb-2 text-xl">years of experience</sub>
            </p>
          </Card>

          <Card>
            <h2 className="mb-5 text-3xl font-semibold text-orange-300">
              Courses
            </h2>

            <div className="h-auto space-y-3 scrollbar-thin lg:h-[350px] lg:overflow-y-auto">
              {courses.map(({ course, date, title }) => (
                <div className="flex justify-between" key={course}>
                  <div className="flex gap-2">
                    <Notebook className="mt-1 size-5 text-zinc-300" />
                    <div>
                      <h3 className="text-xl font-semibold">{title}</h3>
                      <p>Udemy</p>
                    </div>
                  </div>

                  <time className="pr-2 font-medium text-zinc-400">{date}</time>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <div className="flex w-full flex-col gap-5 md:flex-row">
        <Card className="w-full !p-0 md:w-2/5">
          <img
            className="h-auto w-full"
            src={`${env.NEXT_PUBLIC_GITHUB_STATS_URL}api/top-langs?username=mauriciogirardi&theme=transparent&hide_border=true&title_color=d9a165&text_color=FFFFFF&icon_color=d9a165&text_bold=false`}
            alt="Most used languages"
            loading="lazy"
          />
        </Card>
        <Card className="w-full !p-0 md:w-3/5">
          <img
            className="h-auto w-full"
            src={`${env.NEXT_PUBLIC_GITHUB_STATS_URL}api?username=mauriciogirardi&theme=transparent&hide_border=true&title_color=d9a165&text_color=FFFFFF&icon_color=d9a165&text_bold=false`}
            alt="Mauricio Girardi's github stats"
            loading="lazy"
          />
        </Card>
      </div>

      <Card>
        <img
          className="h-auto w-full"
          src={env.NEXT_PUBLIC_SKILL_ICONS_URL}
          alt="tecnologias and tools icons"
          loading="lazy"
        />
      </Card>
    </section>
  )
}
