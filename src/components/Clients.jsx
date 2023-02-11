import Image from 'next/image'
import Link from 'next/link'

import { TwitterLogo } from '@/images/logos/Twitter.svg'

import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'

export function Clients() {
  return (
    <section>
      <div className="mx-auto bg-[#ffffff] py-24 text-[#A9A9A9] sm:px-5 lg:px-16">
        <div className="mb-8 flex w-full flex-col text-center">
          <span className="mb-4 px-4 text-sm font-medium uppercase tracking-wide text-[#A9A9A9]">
            Compatible with your favorite social media platforms!
          </span>
        </div>
        <div className="mx-auto justify-center text-center xl:pl-16">
          <div className="mx-auto grid max-w-[600px] justify-center text-2xl font-semibold sm:grid-cols-2 sm:gap-16 sm:text-3xl lg:max-w-[1280px] lg:grid-cols-4 lg:gap-4">
            <div className="m-auto flex justify-center gap-2 rounded-xl p-8 shadow-xl sm:min-w-[258px]">
              <BsFacebook className="mt-1" />
              <h1>Facebook</h1>
            </div>
            <div className="m-auto flex justify-center gap-2 rounded-xl p-8  shadow-xl sm:min-w-[258px]">
              <BsInstagram className="mt-1" />
              <h1>Instagram</h1>
            </div>
            <div className="m-auto mt-10 flex justify-center gap-2 rounded-xl p-8  shadow-xl sm:min-w-[258px] lg:mt-0">
              <BsTwitter className="mt-1" />
              <h1>Twitter</h1>
            </div>

            <div className="m-auto mt-10 flex justify-center gap-2 rounded-xl p-8  shadow-xl sm:min-w-[258px] lg:mt-0">
              <BsLinkedin className="mt-1" />
              LinkedIn
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
