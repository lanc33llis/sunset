import '../styles/globals.sass'
import Layout from './components/Layout'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>sunset</title>
        <meta name="description" content="sunset" />
        <meta name="viewport" content ="width=device-width, initial-scale=1.0" /> 
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />    
    </Layout>
  )
}

export default MyApp
