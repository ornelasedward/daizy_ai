import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import Newsletter from '@/components/Newsletter'
import { Clients } from '@/components/Clients'
import { CallToAction1 } from '@/components/CallToAction1'
import { Howitworks } from '@/components/Howitworks'
import { Who } from '@/components/Who'
import { Howitworks2 } from '@/components/Howitworks2'

export default function Home() {
  return (
    <>
      <Head>
        <title>Daizy AI - Social Media made simple for small businesses</title>
        <meta
          name="description"
          content="Daizy generates high-quality, tailored posts for all of your social media platforms, saving you time and effort while increasing engagement and reach."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <Clients />
        <CallToAction1 />
        <Howitworks />
        <Who />
        <Howitworks2 />
        <PrimaryFeatures />
        <CallToAction />
        <Faqs />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
