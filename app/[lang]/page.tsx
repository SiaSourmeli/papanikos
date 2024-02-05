import Head from 'next/head'
import Hero from './components/hero'
import About from './components/about'
import Services from './components/services'
import Work from './components/work'
import Contact from './components/contact'

import { getDictionary } from '../../get-dictionary'
import { Locale } from '../../i18n-config'

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)

  return (
    <div>       
      <Head>
        <title>Papanikos Plexiglas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <About dictionary={dictionary.About}/>
      <Services dictionary={dictionary.Services}/>
      <Work dictionary={dictionary.Work}/>
      <Contact dictionary={dictionary.Contact}/>
    </div>
  )
}
