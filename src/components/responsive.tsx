'use client'

import { ReactNode } from 'react'

import { useScreenSize } from '@/hooks/useScreenSize'

type ResponsiveProps = {
  children: (props: { size: number }) => ReactNode
}

export function Responsive({ children }: ResponsiveProps) {
  const size = useScreenSize()

  if (typeof children === 'function') {
    return <>{children({ size })}</>
  }

  return null
}
