import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import Newsletter from '@/components/Newsletter'
import { Clients } from '@/components/Clients'

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
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Faqs />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
