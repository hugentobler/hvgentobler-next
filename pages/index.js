import Head from 'next/head'
import Image from 'next/image'

const isProd = process.env.NEXT_PUBLIC_IS_PROD

export default function Home() {
  return (
    <>
      <Head>
        {/* Prevent robots scraping dev / staging sites */}
        {isProd ? <meta name="robots" content="index, follow" /> : <meta name="robots" content="noindex, nofollow" />}
      </Head>
      <h1>Home</h1>
    </>
  )
}
