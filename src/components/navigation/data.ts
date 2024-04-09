import { IconNamesProps } from '../icon'

type BtnListProps = {
  label: string
  link: string
  newTab: boolean
  icon: IconNamesProps
}

export const btnList: BtnListProps[] = [
  { label: 'Home', link: '/', icon: 'home', newTab: false },
  { label: 'About', link: '/about', icon: 'user', newTab: false },
  { label: 'Projects', link: '/projects', icon: 'palette', newTab: false },
  { label: 'Contact', link: '/contact', icon: 'contact', newTab: false },
  {
    label: 'Github',
    link: 'https://www.github.com/mauriciogirardi',
    icon: 'github',
    newTab: true
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/mauricio-girardi',
    icon: 'linkedin',
    newTab: true
  },
  {
    label: 'Resume',
    link: '/resume-mauricio-girardi-2024.pdf',
    icon: 'notebook-text',
    newTab: true
  }
]
