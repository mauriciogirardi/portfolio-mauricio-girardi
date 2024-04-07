'use client'

import { useEffect, useState } from 'react'

export function useScreenSize() {
  const [screenSize, setScreenSize] = useState<number | null>(null)

  useEffect(() => {
    function getScreenSize() {
      return window.innerWidth
    }

    function handleResize() {
      setScreenSize(getScreenSize())
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return screenSize
}
