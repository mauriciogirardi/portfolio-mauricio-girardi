'use client'

import Link from 'next/link'

import { cn } from '@/lib/utils'

import { Icon, IconNamesProps } from './icon'

export type ButtonRoundedProps = {
  link: string
  label: string
  icon?: IconNamesProps
  className?: string
}

export function ButtonRounded({
  label,
  link,
  icon,
  className
}: ButtonRoundedProps) {
  return (
    <Link
      href={link}
      className={cn(
        'custom-bg group flex cursor-pointer items-center justify-center rounded-full',
        className
      )}
      aria-label={label}
    >
      <span className="relative size-14 p-4 group-hover:text-amber-300/60">
        {icon && (
          <Icon name={icon} className="h-auto w-full" strokeWidth={1.5} />
        )}
      </span>
    </Link>
  )
}
