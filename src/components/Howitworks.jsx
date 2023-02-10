import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'

import Image from 'next/image'

const features = [
  {
    name: 'Create Engaging Content',
    description:
      'Easily and quickly create engaging content thats consistent with your brands voice, style, and message.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Saves Time and Effort',
    description: 'Instantly generate engaging social media copy in seconds.',
    icon: LockClosedIcon,
  },
  {
    name: 'Create Multiple Post at Once',
    description:
      'Generate high-quality, tailored posts for all of your social media platforms.',
    icon: ServerIcon,
  },
  {
    name: 'All-In-One Platform',
    description:
      'Create, emulate, and schedule to post to Facebook, Twitter, LinkedIn, and more.',
    icon: ServerIcon,
  },
]

export function Howitworks() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-lg font-semibold leading-8 tracking-tight text-[#0CC47F]">
                Daizy works, so you don&apos;t have to
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                What does Daizy AI do?
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Daizy AI is a SaaS platform that generates social media posts
                using AI technology. It uses the advanced algorithm of ChatGPT
                to create high-quality, tailored posts for all your social media
                platforms.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute top-1 left-1 h-5 w-5 text-[#0CC47F]"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="relative isolate overflow-hidden bg-[#0CC47F] px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pt-16 sm:pl-16 sm:pr-0 lg:mx-0 lg:max-w-none">
              <div
                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white"
                aria-hidden="true"
              />
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <Image
                  src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
                  alt="Product screenshot"
                  width={2432}
                  height={1442}
                  className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10"
                />
              </div>
              <div
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
