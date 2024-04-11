'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

import { cn } from '@/lib/utils'

import { Icon, IconNamesProps } from './icon'

export type ButtonRoundedProps = {
  link?: string
  label: string
  icon?: IconNamesProps
  className?: string
  type?: 'button' | 'link'
  onClick?: () => void
}
const NavLink = motion(Link)

export function ButtonRounded({
  label,
  link,
  icon,
  type = 'link',
  className,
  onClick
}: ButtonRoundedProps) {
  return type === 'link' ? (
    <NavLink
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
      href={link || ''}
      className={cn(
        'custom-bg group flex cursor-pointer items-center justify-center rounded-full',
        className
      )}
      aria-label={label}
    >
      <span className="relative size-10 p-3 group-hover:text-amber-300/60 md:size-14 md:p-4">
        {icon && (
          <Icon name={icon} className="h-auto w-full" strokeWidth={1.5} />
        )}
      </span>
    </NavLink>
  ) : (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
      onClick={onClick}
      className={cn(
        'custom-bg group flex cursor-pointer items-center justify-center rounded-full',
        className
      )}
    >
      <span className="relative size-11 p-3 group-hover:text-amber-300/60 md:size-14 md:p-4">
        {icon && (
          <Icon name={icon} className="h-auto w-full" strokeWidth={1.5} />
        )}
      </span>
    </motion.button>
  )
}
