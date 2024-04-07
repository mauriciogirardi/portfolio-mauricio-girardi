'use client'

import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { ReactNode, Suspense } from 'react'

import { cn } from '@/lib/utils'

export type RenderModelProps = {
  children: ReactNode
  className?: string
}

export function RenderModel({ children, className }: RenderModelProps) {
  return (
    <Canvas className={cn('relative -z-10 h-screen w-screen', className)}>
      <Suspense fallback={null}>{children}</Suspense>
      <Environment preset="sunset" />
    </Canvas>
  )
}
