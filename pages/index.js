import Head from 'next/head'
import Hero from 'src/components/hero/hero'
import About from 'src/components/about/about'
import Services from 'src/components/services/services'
import Work from 'src/components/work/work'
import Contact from 'src/components/contact/contact'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Papanikos Plexiglas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <About />
      <Services />
      <Work />
      <Contact />

    </div>
  )
}
