import { Web3Provider } from '@components/Web3Context'

import Head from 'next/head'

import '../styles/globals.css'



function MyApp({ Component, pageProps }) {

  return (

    <Web3Provider>

      <Head>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      </Head>

      <Component {...pageProps} />

    </Web3Provider>

  )

}



export default MyApp
