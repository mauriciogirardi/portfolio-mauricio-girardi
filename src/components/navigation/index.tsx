'use client'

import { btnList } from './data'
import { NavButton } from './nav-button'

export function Navigation() {
  const angleIncrement = 360 / btnList.length

  return (
    <div className="fixed left-1/2 top-1/2 flex h-screen w-full -translate-x-[51%] -translate-y-1/2 items-center justify-center">
      <div className="hover:pause group relative flex w-max animate-spin-slow items-center justify-center ">
        {btnList.map((btn, index) => {
          const angleRad = (index * angleIncrement * Math.PI) / 180
          const radius = 'calc(20vw - 1rem)'
          const x = `calc(${radius}*${Math.cos(angleRad)})`
          const y = `calc(${radius}*${Math.sin(angleRad)})`

          return <NavButton key={btn.label} x={x} y={y} {...btn} />
        })}
      </div>
    </div>
  )
}
