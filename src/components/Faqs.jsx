import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  {
    question: 'What social media platforms does Daizy AI support?',
    answer:
      'Daizy AI supports a wide range of popular social media platforms, including Facebook, Twitter, Instagram, and LinkedIn.',
  },
  // More questions...
  {
    question:
      'How does the AI technology work to tailor custom posts in Daizy AI?',
    answer:
      'Daizy AI uses advanced AI algorithms to analyze social media trends, user behavior, and content engagement metrics to generate custom posts tailored to each social media platform.',
  },
  {
    question:
      'Can I preview the custom posts before they are published in Daizy AI?',
    answer:
      'Yes, Daizy AI provides a preview feature that allows users to view and edit the custom posts before they are published.',
  },
  {
    question: 'Does Daizy AI support scheduling of posts in advance?',
    answer:
      'Yes, Daizy AI supports scheduling of posts in advance, allowing users to plan their social media content and publish it at optimal times.',
  },
  {
    question:
      'Can I use my own branded images and logos in the custom posts in Daizy AI?',
    answer:
      'Yes, Daizy AI supports the use of custom images and logos, allowing users to maintain brand consistency across their social media presence.',
  },
  {
    question: 'Does Daizy AI support multiple social media accounts?',
    answer:
      'Yes, Daizy AI supports the management of multiple social media accounts, making it easy for users to manage their social media presence from a single platform.',
  },
  {
    question: 'How is user data collected and stored by Daizy AI?',
    answer:
      'Daizy AI uses industry-standard security measures to protect user data and privacy, and stores data in secure, encrypted databases.',
  },
  {
    question:
      'Are there any limits on the number of custom posts that can be generated in Daizy AI?',
    answer:
      'There are no limits on the number of custom posts that can be generated in Daizy AI, allowing users to create as many posts as they need to maintain a consistent and effective social media presence.',
  },
  {
    question: 'Can I track the performance of my custom posts in Daizy AI?',
    answer:
      'Daizy AI provides detailed performance tracking and analytics, allowing users to track the success of their custom posts and make data-driven decisions about their social media strategy.',
  },
  {
    question:
      'Is Daizy AI platform compatible with my existing social media management tools?',
    answer:
      'Daizy AI is compatible with most popular social media management tools, making it easy to integrate into existing workflows.',
  },
  {
    question: 'What is the pricing model for Daizy AI?',
    answer:
      'Daizy AI operates on a subscription-based pricing model, with plans to suit the needs of businesses of all sizes.',
  },
  {
    question: 'Is there a free trial period for Daizy AI?',
    answer:
      'Yes, Daizy AI offers a free trial period, allowing users to test the platform and see the benefits of the AI-powered custom posts for themselves.',
  },
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 pt-20"
    >
      <Container className="relative">
        <div className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:pt-40">
            <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
              <h2 className="text-center text-2xl font-bold leading-10 tracking-tight text-gray-900 sm:text-3xl">
                Frequently asked questions
              </h2>
              <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                {faqs.map((faq) => (
                  <Disclosure as="div" key={faq.question} className="pt-6">
                    {({ open }) => (
                      <>
                        <dt>
                          <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                            <span className="text-base font-semibold leading-7">
                              {faq.question}
                            </span>
                            <span className="ml-6 flex h-7 items-center">
                              {open ? (
                                <PlusSmallIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              ) : (
                                <MinusSmallIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                          <p className="text-base leading-7 text-gray-600">
                            {faq.answer}
                          </p>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
