import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction1() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-white py-20"
    >
      <Container className="relative">
        <div className="mx-auto max-w-[1000px] text-center font-medium">
          <h2 className="font-display text-3xl tracking-tight text-black sm:text-4xl">
            Use Daizy to{' '}
            <span className="bg-gradient-to-r from-[#0CC47F] to-[#F1CB00] bg-clip-text font-extrabold text-transparent">
              easily and quickly
            </span>{' '}
            create engaging social media copy for any platform.
          </h2>
          <p className="mx-auto mt-6 max-w-[740px] text-lg tracking-tight text-black">
            Using cutting-edge AI technology, Daisy generates high-quality,
            tailored posts for all of your social media platforms, saving you
            time and effort while increasing engagement and reach.
          </p>
          <Button href="/register" color="slate" className="mt-10">
            Start For Free!
          </Button>
        </div>
      </Container>
    </section>
  )
}
