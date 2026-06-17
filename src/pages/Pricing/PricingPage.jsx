import React, { useState } from 'react'

import Footer from '../../components/Footer/Footer.jsx';
import Navbar from '../../components/Navbar/Navbar.jsx';

export default function PricingPage() {
  const faqs = [
    {
      question: "What is this AI chatbot and how does it work?",
      answer: "This AI chatbot uses advanced natural language processing to understand your questions and generate human-like responses in real time. It learns from large datasets, allowing it to provide helpful answers."
    },
    {
      question: "Is my data safe when chatting with the AI?",
      answer: "Yes, your data is completely safe. We use industry-standard encryption to protect all your conversations."
    },
    {
      question: "Can I integrate this AI chatbot into my own website or app?",
      answer: "Absolutely! We provide comprehensive API documentation and easy-to-use SDKs for seamless integration."
    },
    {
      question: "Does the AI support multiple languages?",
      answer: "Yes, our AI currently supports over 50 different languages with high accuracy."
    },
    {
      question: "Is there a free plan available?",
      answer: "Yes, we offer a generous free tier so you can test the capabilities of our AI before upgrading."
    }
  ];

  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  return (
    <>
      <Navbar />
      <main className="app-content relative z-10 pb-24 pt-16 lg:pb-32 lg:pt-20">
        {/* Glow effect */}
        <div className="absolute -left-1/4 -top-1/4 h-[900px] w-[900px] rounded-full bg-primary-60/40 blur-[150px] opacity-100 pointer-events-none" />
        <div className="absolute -left-1/4 top-0 h-[700px] w-[700px] rounded-full bg-[#2DD4BF]/30 blur-[120px] opacity-90 pointer-events-none" />

        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 relative z-10" data-reveal="up">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center gap-6 mt-10">
            <h1 className="font-mono text-[56px] leading-[1.05] font-normal text-white sm:text-[64px] lg:text-[72px]">
              Pricing
            </h1>
            <p className="max-w-xl font-sans text-[17px] leading-8 text-natural-70">
              Safely collect, process, and share your data with the plan that&apos;s right for you
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-8 mt-24 lg:grid-cols-2 lg:gap-10">
            {/* Basic Plan Card */}
            <div className="pricing-card relative rounded-[1.75rem] bg-gradient-to-r from-teal-400 to-primary-60 p-[1px] shadow-2xl mt-4 lg:mt-0">
              <span className="absolute left-8 -top-4 z-10 rounded-md bg-gradient-to-r from-teal-400 to-primary-60 px-3 py-1.5 text-[14px] font-semibold text-black shadow-sm">
                Most Popular
              </span>
              <div className="relative flex h-full flex-col justify-between rounded-[calc(1.75rem-1px)] bg-[#0a0a0a] p-8 sm:p-10">
                <div>
                  <div className="flex items-start justify-between">
                    <div className="pt-2">
                      <h3 className="font-sans text-[28px] text-white">Basic Plan</h3>
                      <p className="mt-2 font-sans text-[14px] text-natural-70">The Basic Plan is designed for small.</p>
                    </div>
                    <div className="flex items-start gap-1">
                      <span className="mt-2 font-mono text-[20px] font-medium text-natural-70">$</span>
                      <span className="font-mono text-[64px] leading-[1] font-medium text-white">599</span>
                      <span className="self-end pb-2 font-mono text-[15px] text-natural-70">/mo</span>
                    </div>
                  </div>

                  <div className="mt-12">
                    <h4 className="font-sans text-[18px] text-white">Features</h4>
                    <p className="mt-2 font-sans text-[14px] text-natural-70">Everything in our basic plan....</p>
                    <ul className="mt-6 space-y-5">
                      {[
                        '20 hours of consultation',
                        'Access to the AI Learning Portal',
                        'Monthly performance reporting',
                        'Email support',
                        'AI Readiness Assessment',
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-4">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-primary-60 text-black">
                            <svg className="h-3 w-3" viewBox="0 0 14 10" fill="none">
                              <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                          <span className="font-sans text-[15px] text-[#e5e5e5]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button className="mt-12 w-full rounded-xl bg-primary-60 py-4 text-[16px] font-medium text-black transition-transform duration-200 hover:scale-[1.02]">
                  Get This Plan
                </button>
              </div>
            </div>

            {/* Premium Plan Card */}
            <div className="pricing-card relative rounded-[1.75rem] bg-gradient-to-r from-teal-400 to-primary-60 p-[1px] shadow-2xl mt-4 lg:mt-0">
              <div className="relative flex h-full flex-col justify-between rounded-[calc(1.75rem-1px)] bg-[#0a0a0a] p-8 sm:p-10">
                <div>
                  <div className="flex items-start justify-between">
                    <div className="pt-2">
                      <h3 className="font-sans text-[28px] text-white">Premium Plan</h3>
                      <p className="mt-2 font-sans text-[14px] text-natural-70">Perfect for organizations</p>
                    </div>
                    <div className="flex items-start gap-1">
                      <span className="mt-2 font-mono text-[20px] font-medium text-natural-70">$</span>
                      <span className="font-mono text-[64px] leading-[1] font-medium text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-primary-60">699</span>
                      <span className="self-end pb-2 font-mono text-[15px] text-natural-70">/mo</span>
                    </div>
                  </div>

                  <div className="mt-12">
                    <h4 className="font-sans text-[18px] text-white">Features</h4>
                    <p className="mt-2 font-sans text-[14px] text-natural-70">Everything in our premium plan....</p>
                    <ul className="mt-6 space-y-5">
                      {[
                        '40 hours of consultation',
                        'Comprehensive machine learning',
                        'AI training and workshops',
                        'Advanced analytics and insights',
                        'Priority support',
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-4">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-primary-60 text-black">
                            <svg className="h-3 w-3" viewBox="0 0 14 10" fill="none">
                              <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                          <span className="font-sans text-[15px] text-[#e5e5e5]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button className="mt-12 w-full rounded-xl bg-primary-60 py-4 text-[16px] font-medium text-black transition-transform duration-200 hover:scale-[1.02]">
                  Get This Plan
                </button>
              </div>
            </div>
          </div>

          {/* Compare Plans Section */}
          <div className="mt-32 overflow-x-auto pb-10">
            <table className="w-full min-w-[800px] border-collapse text-left">
              <thead>
                <tr>
                  <th className="w-1/3 border-b border-white/10 pb-8 pr-8 align-top font-normal">
                    <h2 className="font-sans text-[40px] leading-tight text-white">Compare Plans</h2>
                    <p className="mt-4 max-w-sm font-sans text-[15px] text-natural-70">
                      Safely collect, process, and share your data with the plan that&apos;s right for you
                    </p>
                  </th>
                  <th className="w-1/3 border-b border-l border-white/10 pb-8 px-8 align-top font-normal">
                    <h3 className="font-sans text-[18px] text-white">Basic Plan</h3>
                    <button className="mt-6 w-full rounded-xl bg-primary-60 py-3.5 text-[15px] font-medium text-black transition-transform duration-200 hover:scale-[1.02]">
                      Get This Plan
                    </button>
                  </th>
                  <th className="w-1/3 border-b border-l border-white/10 pb-8 pl-8 align-top font-normal">
                    <h3 className="font-sans text-[18px] text-white">Premium Plan</h3>
                    <button className="mt-6 w-full rounded-xl bg-primary-60 py-3.5 text-[15px] font-medium text-black transition-transform duration-200 hover:scale-[1.02]">
                      Get This Plan
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Hours of consultation', basic: '20 Hours', premium: '40 Hours' },
                  { feature: 'Access to the AI Learning Portal', basic: true, premium: true },
                  { feature: 'Monthly performance reporting', basic: true, premium: true },
                  { feature: 'Email support', basic: true, premium: true },
                  { feature: 'AI Readiness Assessment', basic: true, premium: true },
                  { feature: 'Comprehensive machine learning', basic: false, premium: true },
                  { feature: 'AI training and workshops', basic: false, premium: true },
                  { feature: 'Advanced analytics and insights', basic: false, premium: true },
                  { feature: 'Priority support', basic: false, premium: true },
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="border-b border-white/10 py-6 pr-8 font-sans text-[15px] text-[#e5e5e5]">
                      {row.feature}
                    </td>
                    <td className="border-b border-l border-white/10 py-6 px-8 text-center">
                      {typeof row.basic === 'string' ? (
                        <span className="font-sans text-[15px] text-[#e5e5e5]">{row.basic}</span>
                      ) : row.basic ? (
                        <div className="flex justify-center">
                          <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-primary-60 text-black">
                            <svg className="h-3 w-3" viewBox="0 0 14 10" fill="none">
                              <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                        </div>
                      ) : null}
                    </td>
                    <td className="border-b border-l border-white/10 py-6 pl-8 text-center">
                      {typeof row.premium === 'string' ? (
                        <span className="font-sans text-[15px] text-[#e5e5e5]">{row.premium}</span>
                      ) : row.premium ? (
                        <div className="flex justify-center">
                          <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-primary-60 text-black">
                            <svg className="h-3 w-3" viewBox="0 0 14 10" fill="none">
                              <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                        </div>
                      ) : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* FAQ Section */}
          <div className="mt-32 pb-20">
            <div className="flex flex-col items-center text-center gap-6 mb-16">
              <h2 className="font-mono text-[56px] leading-[1.05] font-normal text-white sm:text-[64px] lg:text-[72px]">
                FAQ
              </h2>
              <p className="max-w-xl font-sans text-[17px] leading-8 text-natural-70">
                Safely collect, process, and share your data with the plan that&apos;s right for you
              </p>
            </div>

            <div className="flex flex-col">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div key={index} className="border-b-2 border-white/20 last:border-0 py-6">
                    <button
                      className="w-full flex items-center justify-between text-left focus:outline-none group"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    >
                      <h3 className="font-sans text-[18px] text-white group-hover:text-white/80 transition-colors">
                        {faq.question}
                      </h3>
                      <span className="ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
                        {isOpen ? (
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                          </svg>
                        ) : (
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        )}
                      </span>
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
                    >
                      <p className="font-sans text-[15px] leading-relaxed text-natural-70 pr-16">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
