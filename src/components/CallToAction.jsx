import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-[#151515] py-32"
    >
      <div className="absolute top-0 -right-2 h-72 w-72 animate-blob rounded-full bg-[#F1CB00]  opacity-50 blur-3xl filter"></div>
      <div className="animation-delay-4000 absolute -bottom-8 left-20 h-72 w-72 animate-blob rounded-full bg-[#0CC47F] opacity-50 blur-3xl filter"></div>

      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Unlock the full potential of your social media presence with Daizy
            AI.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Sign up now and start seeing results.
          </p>
          <Button href="/register" color="slate" className="mt-10">
            Start For Free!
          </Button>
        </div>
      </Container>
    </section>
  )
}
