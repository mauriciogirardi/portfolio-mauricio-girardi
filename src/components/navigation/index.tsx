'use client'

import { motion } from 'framer-motion'

import { useScreenSize } from '@/hooks/useScreenSize'

import { Responsive } from '../responsive'
import { btnList } from './data'
import { NavButton } from './nav-button'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

export function Navigation() {
  const size = useScreenSize()
  const angleIncrement = 360 / btnList.length

  const isLarge = size >= 1024
  const isMedium = size >= 768

  return (
    <div className="fixed left-1/2 top-1/2 flex h-screen w-full -translate-x-[51%] -translate-y-1/2 items-center justify-center">
      <Responsive>
        {({ size }) =>
          size && size >= 768 ? (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="hover:pause group relative flex w-max animate-spin-slow items-center justify-center "
            >
              {btnList.map((btn, index) => {
                const angleRad = (index * angleIncrement * Math.PI) / 180
                const radius = isLarge
                  ? 'calc(20vw - 1rem)'
                  : isMedium
                    ? 'calc(30vw - 1rem)'
                    : 'calc(40vw - 1rem)'
                const x = `calc(${radius}*${Math.cos(angleRad)})`
                const y = `calc(${radius}*${Math.sin(angleRad)})`

                return <NavButton key={btn.label} x={x} y={y} {...btn} />
              })}
            </motion.div>
          ) : (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="group relative flex w-full flex-col items-start justify-start gap-2 pl-5 "
            >
              {btnList.map((btn) => {
                return <NavButton key={btn.label} x={'0'} y={'0'} {...btn} />
              })}
            </motion.div>
          )
        }
      </Responsive>
    </div>
  )
}
