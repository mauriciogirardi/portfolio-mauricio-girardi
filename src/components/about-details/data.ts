export type Course = {
  title: 'Udemy' | 'Rocketseat' | 'Coodesh' | 'AlgaWorks'
  date: string
  course: string
}

export const courses: Course[] = [
  {
    title: 'Udemy',
    date: 'Feb 2024',
    course: 'Cypress'
  },
  {
    title: 'Rocketseat',
    date: 'Feb 2024',
    course: 'TailwindCSS'
  },
  {
    title: 'Rocketseat',
    date: 'Feb 2024',
    course: 'NLW Node.js'
  },
  {
    title: 'Rocketseat',
    date: 'Feb 2024',
    course: 'NLW React.js'
  },
  {
    title: 'Udemy',
    date: 'Feb 2024',
    course: 'Next.js and Socket IO'
  },
  {
    title: 'Udemy',
    date: 'Feb 2024',
    course: 'Redux and Zustand'
  },
  {
    title: 'Coodesh',
    course: 'React.js',
    date: 'Sep 2022'
  },
  {
    title: 'Rocketseat',
    course: 'Node.js',
    date: 'Aug 2022'
  },
  {
    title: 'Udemy',
    course: 'Webpack and Micro-frontend',
    date: 'May 2022'
  },
  {
    title: 'AlgaWorks',
    course: 'Expert React.js',
    date: 'May 2022'
  },
  {
    course: 'Ignite React.js',
    title: 'Rocketseat',
    date: 'Nov 2021'
  }
]
