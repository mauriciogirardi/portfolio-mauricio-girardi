import { Metadata } from 'next'

import { Header } from '@/components/header'

export const metadata: Metadata = {
  title: 'Contact',
  description: ''
}

export default function ContactPage() {
  return (
    <section className="container-bg bg-contact">
      <article className="container relative z-20">
        <Header showBtnHome />

        <div className="flex h-[calc(100vh_-_6.5rem)] w-full animate-opacity flex-col items-center justify-center">
          <div className="flex w-full flex-col items-center justify-center space-y-6 lg:w-3/4">
            <h1 className="text-center text-2xl font-semibold capitalize lg:text-3xl">
              summon the wizard
            </h1>

            <p className="text-left font-light">
              Step into the circle of enchantment and weave your words into the
              fabric of the cosmos. Whether you seek to conjure collaborations,
              unlock mysteries, or simply share tales of adventure, your
              messages are treasured scrolls within this realm. Use the email or
              phone below to send your missives through the ethereal network,
              and await the whisper of magic in response.
            </p>

            <div className="flex w-full flex-col items-start justify-start gap-4">
              <div className="flex flex-col">
                <span className="font-semibold text-zinc-300">Phone</span>
                <a
                  className="block rounded bg-black/15 p-1 hover:text-orange-100"
                  href="tel:+351910789181"
                >
                  +351910789181
                </a>
              </div>

              <div className="flex flex-col">
                <span className="font-semibold text-zinc-300">Email</span>
                <a
                  className="block rounded bg-black/15 p-1 hover:text-orange-100"
                  href="mailto:devmauriciogirardi@gmail.com"
                >
                  devmauriciogirardi@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}
