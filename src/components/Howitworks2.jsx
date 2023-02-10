import Image from 'next/image'

import algorithm from '@/images/screenshots/algorithm.png'

export function Howitworks2() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pt-4 lg:pl-4">
            <div className="lg:max-w-lg">
              <h2 className="text-lg font-semibold leading-8 tracking-tight text-[#0CC47F]">
                AI-based Content Generation
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Daizy AI uses advanced algorithms to generate high-quality,
                tailored posts for all your social media platforms.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our platform utilizes the natural language generation
                capabilities of an advanced AI-based technology, to create
                content that's consistent with your brand's voice, style, and
                message. We also format the post based on which social media
                platform you choose, making it easy to post on multiple
                platforms at once. It's an all-in-one solution for your social
                media management needs.
              </p>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <Image
              src={algorithm}
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
