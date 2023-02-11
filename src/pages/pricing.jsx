import Head from 'next/head'
import Link from 'next/link'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Prices } from '@/components/Prices'

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Daizy AI - Pricing</title>
        <meta
          name="description"
          content="Here is a list of our prices and services"
        />
      </Head>
      <Header />
      <main>
        <Prices />
      </main>
      <Footer />
    </>
  )
}
