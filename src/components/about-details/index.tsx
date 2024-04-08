import { Icon } from '../icon'
import { courses } from './data'

export function AboutDetails() {
  return (
    <section className="flex flex-col gap-5 pb-9 lg:flex-row">
      <div className="custom-bg w-full overflow-hidden rounded-lg p-4 lg:w-3/5">
        <h2 className="mb-5 text-2xl font-semibold text-orange-300">
          About me
        </h2>
        <p className="text-pretty">
          🚀 Hello! I’m Mauricio Girardi, a passionate
          <strong className="text-orange-300"> Front-end Developer</strong> with
          a solid background in creating amazing digital experiences. My main
          focus is on technologies like
          <strong className="text-orange-300"> ReactJS </strong>,
          <strong className="text-orange-300"> Next.js </strong>,
          <strong className="text-orange-300"> Node.js </strong>,
          <strong className="text-orange-300"> React Native </strong> and more.
          <span className="block py-2">
            Currently, I work as a{' '}
            <strong className="text-orange-300">Front-end Developer</strong> in
            projects that use ReactJS and Next.js to create intuitive and
            responsive interfaces. My experience with Node.js allows me to
            efficiently integrate the front-end and back-end, ensuring
            exceptional performance.
          </span>
          <span>
            I’m always looking for challenges that broaden my horizons and
            opportunities to collaborate with talented teams. If you are looking
            for a committed and passionate developer, ready to face new
            challenges.
          </span>
          <span className="block pt-3">
            I am open to new opportunities and collaborations. Let’s create
            something amazing together? I’m excited to be part of your next
            project!
          </span>
        </p>
      </div>

      <div className="w-full space-y-5 lg:w-2/5">
        <div className="custom-bg overflow-hidden rounded-lg p-4">
          <p className="flex items-center gap-2 text-left text-3xl font-semibold">
            4+ <sub className="text-base">years of experience</sub>
          </p>
        </div>

        <div className="custom-bg overflow-hidden rounded-lg p-4">
          <h2 className="mb-5 text-2xl font-semibold text-orange-300">
            Courses
          </h2>

          <div className="h-auto space-y-3 scrollbar-thin lg:h-[350px] lg:overflow-y-auto">
            {courses.map(({ course, date, title }) => (
              <div className="flex justify-between" key={course}>
                <div className="flex gap-3">
                  <Icon name="notebook" className="size-5 text-zinc-300" />
                  <div>
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p>Udemy</p>
                  </div>
                </div>

                <time className="pr-2 font-medium text-zinc-400">{date}</time>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
