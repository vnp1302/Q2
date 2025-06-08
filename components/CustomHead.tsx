import Head from 'next/head'

import { useRouter } from 'next/router'



interface CustomHeadProps {

  title?: string

  description?: string

  keywords?: string[]

  ogImage?: string

}

export default function CustomHead({
  title = "Q2 Project",
  description = "Q2 Web3 Project Description",
}: CustomHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export const CustomHead = ({

  title = 'Q1 Token - Multi-Token Ecosystem',

  description = 'Advanced ERC1155 token system on Ethereum and Polygon',

  keywords = ['ERC1155', 'Blockchain', 'Ethereum', 'Polygon', 'Token'],

  ogImage = '/images/og-default.jpg'

}: CustomHeadProps) => {

  const { asPath } = useRouter()

  const canonicalUrl = `https://q1token.com${asPath}`



  return (

    <Head>

      <title>{title}</title>

      <meta name="description" content={description} />

      <meta name="keywords" content={keywords.join(', ')} />

      <link rel="canonical" href={canonicalUrl} />

      

      {/* Open Graph */}

      <meta property="og:title" content={title} />

      <meta property="og:description" content={description} />

      <meta property="og:image" content={ogImage} />

      <meta property="og:url" content={canonicalUrl} />

      <meta property="og:type" content="website" />

      

      {/* Twitter */}

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:site" content="@q1token" />

      

      {/* Favicon */}

      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />

      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      

      {/* PWA */}

      <link rel="manifest" href="/manifest.json" />

      <meta name="theme-color" content="#4F46E5" />

    </Head>

  )

}
