import '@styles/globals.css'
import Layout from 'src/components/layout'

function Application({ Component, pageProps }) {
  console.log(pageProps)

  return (
    <Layout>
          <Component {...pageProps} />
    </Layout>
  )
}

export default Application
