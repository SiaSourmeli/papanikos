import Head from 'next/head'
// import Header from '@components/Header'

import TopBar from 'src/components/top-bar/topBar'
import Header from 'src/components/header/header'
import Hero from 'src/components/hero/hero'
import About from 'src/components/about/about'
import Services from 'src/components/services/services'
import Work from 'src/components/work/work'
import Contact from 'src/components/contact/contact'

import Footer from 'src/components/footer/footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TopBar />
        {/* <Header title="Welcome to my app!" /> */}
        <Header />
        <Hero />
      </main>

      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />

    </div>
  )
}
