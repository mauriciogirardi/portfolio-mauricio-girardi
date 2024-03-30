import { Metadata } from 'next'

import { Header } from '@/components/header'

export const metadata: Metadata = {
  title: 'Home'
}

export default function Home() {
  return (
    <section className="">
      <Header />
    </section>
  )
}
