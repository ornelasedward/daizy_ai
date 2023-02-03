import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'

export function Hero() {
  return (
    <div className="relative overflow-hidden pt-20 pb-16 text-center lg:pt-32">
      <div className="absolute top-0 -right-4 hidden h-72 w-72 animate-blob rounded-full bg-[#F1CB00] opacity-40  blur-3xl filter lg:block"></div>
      <div className="animation-delay-2000 absolute -bottom-8 right-20 h-72 w-72 animate-blob rounded-full bg-[#0CC47F] opacity-40 blur-3xl filter"></div>
      <div className="animation-delay-4000 absolute left-20 h-72 w-72 animate-blob rounded-full bg-[#F1CB00] opacity-20 blur-3xl  filter lg:opacity-30 "></div>
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-white sm:text-6xl">
        Transform your social media strategy with the power of{' '}
        <span className="bg-gradient-to-r from-[#0CC47F] to-[#F1CB00] bg-clip-text text-7xl font-extrabold text-transparent">
          AI
        </span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-[#E5E5E5]">
        Say goodbye to the hassle of manual post creation. Daisy generates
        high-quality, tailored posts for all your social media platforms, saving
        you time and effort while increasing engagement and reach.
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Button href="/register">Start For Free</Button>
        <Button
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          variant="outline"
        >
          <svg
            aria-hidden="true"
            className="h-3 w-3 flex-none fill-[#F1CB00] group-active:fill-current"
          >
            <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
          </svg>
          <span className="ml-3">Watch video</span>
        </Button>
      </div>
      <div className="mt-36 lg:mt-44">
        <p className="font-display text-base text-slate-900">
          Trusted by these six companies so far
        </p>
        <ul
          role="list"
          className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          {[
            [
              { name: 'Transistor', logo: logoTransistor },
              { name: 'Tuple', logo: logoTuple },
              { name: 'StaticKit', logo: logoStaticKit },
            ],
            [
              { name: 'Mirage', logo: logoMirage },
              { name: 'Laravel', logo: logoLaravel },
              { name: 'Statamic', logo: logoStatamic },
            ],
          ].map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul
                role="list"
                className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
              >
                {group.map((company) => (
                  <li key={company.name} className="flex">
                    <Image src={company.logo} alt={company.name} unoptimized />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
