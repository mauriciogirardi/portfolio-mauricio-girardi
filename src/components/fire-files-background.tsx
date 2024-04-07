'use client'

import { useEffect, useState } from 'react'

// export type FireFilesBackgroundProps = {}

type FirefliesData = {
  id: number
  top: string
  left: string
  animationDuration: string
}

const createFirefly = () => ({
  id: Math.random(),
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animationDuration: `${Math.random() * 5 + 5}s`
})

export function FireFilesBackground() {
  const [fireflies, setFireflies] = useState<FirefliesData[]>([])

  useEffect(() => {
    const addFireflyPeriodically = () => {
      const newFirefly = createFirefly()
      setFireflies((prev) => [...prev.slice(-14), newFirefly])
    }

    const interval = setInterval(addFireflyPeriodically, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed left-0 top-0  h-full w-full overflow-hidden">
      {fireflies.map((item) => {
        return (
          <div
            key={item.id}
            className="absolute h-5 w-5 rounded-full bg-firefly-radial"
            style={{
              top: item.top,
              left: item.left,
              animation: `move ${item.animationDuration} infinite alternate`
            }}
          />
        )
      })}
    </div>
  )
}
