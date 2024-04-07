import { LucideProps } from 'lucide-react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import dynamic from 'next/dynamic'

export type IconNamesProps = keyof typeof dynamicIconImports
export interface IconProps extends LucideProps {
  name: IconNamesProps
}

export const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = dynamic(dynamicIconImports[name])

  return <LucideIcon {...props} />
}
