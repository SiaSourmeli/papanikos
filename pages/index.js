import Head from 'next/head'
import Hero from 'src/components/hero/hero'
import About from 'src/components/about/about'
import Services from 'src/components/services/services'
import Work from 'src/components/work/work'
import Contact from 'src/components/contact/contact'
import Layout from 'src/components/layout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main>
          <Hero />
          <About />
          <Services />
          <Work />
          <Contact />
        </main>
      </Layout> 
    </div>
  )
}
