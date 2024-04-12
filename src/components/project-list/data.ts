export type ProjectDataType = {
  id: number
  name: string
  description: string
  demoLink?: string
  linkGithub: string
  img: string
}

export type ProjectsCompanies = {
  position: string
  company: string
  type: 'On-site' | 'Remote' | 'Hibrido'
  description: string
  responsible: string
  period: string
  skills: string[]
  id: number
}

export const projectsCompanies: ProjectsCompanies[] = [
  {
    id: 4,
    position: 'FullStack Developer',
    company: 'Evoke It',
    type: 'On-site',
    period: 'Abr 2024 ',
    responsible:
      'Create new features in the system,create unit test, code review and bug fix,',
    description:
      'create innovative and technological communication solutions that are able to stimulate behaviors and expressions. Our projects evoke sensations, arouse true emotions and call for engagement with target audiences.',
    skills: [
      'Vite.js',
      'Javascript',
      'Typescript',
      'Jest',
      'React-test-library',
      'Storybook',
      'Redux',
      'Prisma',
      'MariaDB',
      'Scrum',
      'Jira',
      'Node.js',
      'Styled-components',
      'Express'
    ]
  },
  {
    id: 0,
    position: 'Front-end Developer',
    company: 'Bliss Applications',
    type: 'Remote',
    period: 'Jun 2023 - Jan 2024',
    responsible:
      'Create new features in the system, based on design, help the QA team with system tests, create unit test, code review and bug fix,',
    description:
      'Developing an e-commerce for a luxury company, my responsibilities were.',
    skills: [
      'Next.js',
      'Javascript',
      'Typescript',
      'Jest',
      'React-test-library',
      'Storybook',
      'Redux',
      'CMS',
      'Scrum',
      'Jira',
      'Cypress',
      'Styled-components',
      'Figma'
    ]
  },
  {
    id: 1,
    position: 'Front-end Developer',
    company: 'Cognyte',
    type: 'Remote',
    period: 'Nov 2021 - May 2023',
    description:
      'worked on an investigative analysis software that empowers a variety of government organizations and others.',
    responsible:
      'Create new features in the system, based on new design, help the QA team with system tests, code review, bug fix, help new devs to get comfortable with the code and new features.',
    skills: [
      'React.js',
      'Javascript',
      'Typescript',
      'Jest',
      'React-test-library',
      'Java',
      'Spring Boot',
      'Ant Design',
      'Rest APIs',
      'Storybook',
      'Less',
      'Git',
      'Yup',
      'Axios',
      'Easy-peasy',
      'React-hooks',
      'Context',
      'Micro frontend',
      'Leaflet',
      'Scrum',
      'Gitlab',
      'Jira'
    ]
  },
  {
    id: 2,
    position: 'Junior Front-end Developer',
    company: 'Denox / Maxtrack',
    type: 'Remote',
    description:
      'System focused on, inventory linearity considering leadtime and real-time sales, better fleet composition to move the load between two points in the shortest possible path and full vehicle measurement and monitoring with telemetry, fatigue and computer vision cameras and various market items.',
    period: 'Mar 2021 - Oct 2021',
    responsible:
      "I worked on the development of features in several of the company's main products, from coding to feature delivery. Always focusing on quality and performance.",
    skills: [
      'CSS',
      'HTML',
      'Rest APIs',
      'Ant Design',
      'Storybook',
      'Git',
      'Yup',
      'Axios',
      'Context',
      'Redux',
      'React-router-dom',
      'React.js',
      'Javascript',
      'Hooks',
      'Gitlab',
      'Scrum',
      'Leaflet',
      'Styled-components',
      'Panda',
      'Python',
      'React-hook-form',
      'Moment.js',
      'Figma'
    ]
  },
  {
    id: 3,
    position: 'Intership Front-end Developer',
    company: 'Bom',
    type: 'On-site',
    description:
      'Landing page with all the information of the company where the client had access to the information of micro credited where he could make simulations of loans.',
    responsible:
      'Responsible for the development and maintenance of React.js SPAs',
    period: 'Jan 2020 - jun 2020',
    skills: [
      'CSS',
      'HTML',
      'CSS Modules',
      'Git',
      'Gatsby',
      'Javascript',
      'Cypress'
    ]
  }
]

export const projectsData: ProjectDataType[] = [
  {
    id: 1,
    linkGithub: 'https://github.com/mauriciogirardi/Timer',
    description:
      "This is a Pomodoro application, a very important part of this method is the listing of the tasks that you must perform during the day and it is essential that this step is carried out correctly. It may seem like this is a simple task, but not everyone can do it so easily. When you have a routine pre-established by your school, course or work, this part of the organization of your day often comes more or less ready for you and doesn't require much effort.",
    demoLink: 'https://timer-wheat.vercel.app/',
    name: 'Timer',
    img: '/projects/time.png'
  },
  {
    id: 2,
    img: '/projects/call.png',
    linkGithub: 'https://github.com/mauriciogirardi/Call',
    name: 'Call',
    description:
      'The Ignite Call project was built for booking appointments from a calendar with Google Calendar integration. Users can register for the app using their Google account and indicate their days of the week and times when they will be available to schedule appointments. Every schedule registered in the application has integration with Google Calendar, which allows the user to check their new appointments directly on the Google platform.'
  },
  {
    id: 3,
    linkGithub: 'https://github.com/mauriciogirardi/GoBarber-2020',
    name: 'GoBarber',
    img: '/projects/go-barber.png',
    description:
      'Application to schedule and manage beauty services, where service providers can register, and users can schedule appointments with these providers.'
  }
]
