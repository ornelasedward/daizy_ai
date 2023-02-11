import Link from 'next/link'

export default function Newsletter() {
  return (
    <div className="bg-white pb-16 sm:pb-24">
      <div className="relative sm:py-16">
        <div aria-hidden="true" className="hidden lg:block">
          <div className="absolute inset-y-0 left-0 w-1/2 rounded-r-3xl bg-gray-50" />
          <svg
            className="absolute top-8 left-1/2 -ml-3"
            width={404}
            height={392}
            fill="none"
            viewBox="0 0 404 392"
          >
            <defs>
              <pattern
                id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={392}
              fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
            />
          </svg>
        </div>

        <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-7xl lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-[#151515] px-6 py-10 shadow-xl sm:px-12 sm:py-20">
            <div className="absolute top-0 -right-4 h-72 w-72 animate-blob rounded-full bg-[#F1CB00]  opacity-50 blur-3xl filter"></div>
            <div className="animation-delay-4000 absolute -bottom-8 left-20 h-72 w-72 animate-blob rounded-full bg-[#0CC47F] opacity-50 blur-3xl filter"></div>
            <div
              aria-hidden="true"
              className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
            >
              <svg
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1463 360"
              ></svg>
            </div>
            <div className="relative">
              <div className="sm:text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Stay Informed with Our Weekly Newsletter
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-white">
                  Sign up now to receive updates and exclusive content delivered
                  straight to your inbox.
                </p>
              </div>
              <form action="#" className="mt-12 sm:mx-auto sm:flex sm:max-w-lg">
                <div className="min-w-0 flex-1">
                  <label htmlFor="cta-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="cta-email"
                    type="email"
                    className="block w-full rounded-md border border-transparent bg-[#DBDBDB] bg-opacity-10 px-5 py-3 text-base text-[#E7E7E7] placeholder-[#E7E7E7] shadow-xl backdrop-blur-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-3">
                  <button
                    type="submit"
                    className="block w-full rounded-md border border-transparent bg-gradient-to-r from-[#0CC47F] to-[#F1CB00] px-5 py-3 text-base font-medium text-[#151515] shadow  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2  sm:px-10"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
