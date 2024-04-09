import { motion } from 'framer-motion'

import { Icon } from '../icon'
import { projectsCompanies } from './data'
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

export function Companies() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="my-6 space-y-4"
    >
      {projectsCompanies.map((item) => {
        return (
          <div
            key={item.company}
            className="custom-bg w-full space-y-4 overflow-hidden rounded-lg p-4 md:max-w-[1000px] md:p-6"
          >
            <div>
              <label className="text-sm font-medium text-zinc-400">
                Company
              </label>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium md:text-base">
                  {item.company}
                </p>
                <p className="flex items-center gap-2 text-sm text-zinc-400 md:text-base">
                  <Icon name="calendar-days" className="size-4" />
                  {item.period}
                </p>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-zinc-400">
                Description
              </label>
              <p className="text-pretty text-sm md:text-base">
                {item.description}
              </p>
            </div>

            <div>
              <label className="text-sm font-medium text-zinc-400">
                Responsible
              </label>
              <p className="text-pretty text-sm md:text-base">
                {item.responsible}
              </p>
            </div>

            <div>
              <label className="text-sm font-medium text-zinc-400">
                Skills
              </label>
              <div className="flex flex-wrap items-center gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-nowrap rounded-lg bg-amber-400 px-2 text-xs font-medium text-zinc-900"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )
      })}
    </motion.div>
  )
}
