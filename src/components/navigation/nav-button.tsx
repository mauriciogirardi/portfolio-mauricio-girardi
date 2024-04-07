import Link from 'next/link'

import { Icon, IconNamesProps } from '../icon'
type NavButtonProps = {
  x: string
  y: string
  label: string
  icon: IconNamesProps
  link: string
  newTab: boolean
}

export function NavButton({ icon, label, link, newTab, x, y }: NavButtonProps) {
  function content() {
    return (
      <span className="group-hover:pause relative size-14 animate-spin-slow-reverse p-4 hover:text-amber-300/60">
        <Icon name={icon} className="h-auto w-full" strokeWidth={1.5} />
        <span className="peer absolute left-0 top-0 h-full w-full bg-transparent" />
        <span className="absolute left-full top-1/2 mx-2 hidden -translate-y-1/2 whitespace-nowrap rounded-md px-2 py-1 text-sm text-foreground shadow-lg group-hover:[text-shadow:_0_0_10px_#fff_,_0_0_20px_#fff_,_0_0_40px_#fff_,_0_0_80px_#fff_,_0_0_120px_#fff] peer-hover:block">
          {label}
        </span>
      </span>
    )
  }

  return (
    <div
      className="absolute z-50 cursor-pointer"
      style={{
        transform: `translate(${x}, ${y})`
      }}
    >
      {newTab ? (
        <a
          href={link}
          className="custom-bg flex items-center justify-center rounded-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          {content()}
        </a>
      ) : (
        <Link
          href={link}
          className="custom-bg flex items-center justify-center rounded-full"
          aria-label={label}
        >
          {content()}
        </Link>
      )}
    </div>
  )
}
