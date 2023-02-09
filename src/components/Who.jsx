/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          sky: colors.sky,
          teal: colors.teal,
          rose: colors.rose,
        },
      },
    },
  }
  ```
*/
import {
  AcademicCapIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

const actions = [
  {
    title: 'Simplicity',
    href: '#',
    icon: ClockIcon,
    iconForeground: 'text-black',
    iconBackground: 'bg-[#F1CB00]',
    description:
      'Social Media Managers, community managers and digital marketers Manage all your social media platforms with ease.',
  },
  {
    title: 'Scalability',
    href: '#',
    icon: CheckBadgeIcon,
    iconForeground: 'text-black',
    iconBackground: 'bg-[#0CC47F]',
    description:
      'Small and medium-sized businesses. Expand your social media reach and engagement without the need for multiple copywriters or content creators',
  },
  {
    title: 'Influence',
    href: '#',
    icon: UsersIcon,
    iconForeground: 'text-black',
    iconBackground: 'bg-[#0CC47F]',
    description:
      'Content creators, bloggers, and influencers Create more with less effort by using Daisy AI to generate high-quality, tailored posts for all your social media platforms',
  },
  {
    title: 'Simplicity',
    href: '#',
    icon: BanknotesIcon,
    iconForeground: 'text-black',
    iconBackground: 'bg-[#F1CB00]',
    description:
      'E-commerce businesses Easily promote your products and services on social media to drive engagement and sales.',
  },
  {
    title: 'Growth',
    href: '#',
    icon: ReceiptRefundIcon,
    iconForeground: 'text-black',
    iconBackground: 'bg-[#F1CB00]',
    description:
      'Any Individual or Business Improve your social media strategy and reach a larger audience.',
  },
  {
    title: 'Automation',
    href: '#',
    icon: AcademicCapIcon,
    iconForeground: 'text-black',
    iconBackground: 'bg-[#0CC47F]',
    description:
      'Businesses and Individuals DaizyAI provides a tool that will save companies 70% per year in marketing costs.',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Who() {
  return (
    <div>
      <div className="mt-20 text-center">
        <h1 className=" text-4xl text-white">
          Who Benefits Most from{' '}
          <span className="bg-gradient-to-r from-[#0CC47F] to-[#F1CB00] bg-clip-text font-semibold text-transparent">
            Daizy AI
          </span>
          ?
        </h1>
        <h3 className="pt-2 text-[#E5E5E5]">
          Daizy AI can help a variety of individuals and businesses who want to
          effectively manage their social media presence.
        </h3>
      </div>
      <div className="m-auto my-20 max-w-[1100px] divide-y divide-[#1C1C1C] overflow-hidden rounded-lg text-[#E5E5E5] shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
        {actions.map((action, actionIdx) => (
          <div
            key={action.title}
            className={classNames(
              actionIdx === 0
                ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
                : '',
              actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
              actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
              actionIdx === actions.length - 1
                ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
                : '',
              'group relative m-4 rounded-xl bg-[#1C1C1C] p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
            )}
          >
            <div>
              <span
                className={classNames(
                  action.iconBackground,
                  action.iconForeground,
                  'inline-flex rounded-lg p-3 ring-4 ring-white'
                )}
              >
                <action.icon className="h-6 w-6" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-medium">
                <a href={action.href} className="focus:outline-none">
                  {/* Extend touch target to entire panel */}
                  <span className="absolute inset-0" aria-hidden="true" />
                  {action.title}
                </a>
              </h3>
              <p className="mt-2 text-sm text-[#E5E5E5]">
                {action.description}
              </p>
            </div>
            <span
              className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
              aria-hidden="true"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
              </svg>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
