import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bug, ChevronRight, Code2, Copy, Folder, Play, Sparkles } from 'lucide-react'
import logoProduct from '../../assets/Logo.png'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

export default function MainPage() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1400)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('js-reveal-active')
          } else {
            entry.target.classList.remove('js-reveal-active')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('.section-reveal').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
  return (
    <div className="relative min-h-screen overflow-hidden bg-natural-100 text-natural-10 font-sans">
      <AnimatePresence>
        {showSplash && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-natural-100"
          >
            <div className="relative flex h-28 w-28 items-center justify-center">
              <span className="absolute inset-0 rounded-full border border-primary-60/30 animate-splash-ring" />
              <span className="absolute inset-4 rounded-full border border-[#2DD4BF]/20 animate-splash-ring-delay" />
              <motion.img
                layoutId="main-logo"
                src={logoProduct}
                alt="Logo"
                className="relative h-8 w-auto"
                transition={{ type: "spring", bounce: 0, duration: 0.8 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar showLogo={!showSplash} />

      {/* Hero Section */}
      <main className="section-reveal hero-reveal relative z-0 grid grid-cols-1 gap-0 overflow-visible pb-10 pt-10 lg:min-h-[640px] lg:grid-cols-12">
        <div className="hero-neon-field" />
        <div className="hero-neon-beam" />
        <div className="hero-scan-line" />

        {/* Left Column - Content */}
        <section className="relative z-10 col-span-1 lg:col-span-5 px-6 sm:px-10 lg:px-0 lg:pl-[max(4rem,calc(50vw-576px+4rem))]">
          {/* Headline - Two perfect lines */}
          <div className="opacity-0 translate-y-8 animate-fade-up font-mono text-[44px] sm:text-[56px] lg:text-[70px] leading-[1.1] font-normal text-natural-10 whitespace-nowrap">
            <div>Code Faster,</div>
            <div>Debug Smarter.</div>
          </div>

          {/* Subheadline */}
          <p className="mt-6 max-w-md opacity-0 translate-y-8 animate-fade-up-delay-200 text-[18px] leading-[1.6] text-natural-70 font-sans">
            Your AI-powered pair programmer. Generate functions, fix bugs, and refactor code in seconds.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 opacity-0 translate-y-8 animate-fade-up-delay-400 flex flex-col gap-6 sm:flex-row sm:items-center">
            <button className="rounded-lg bg-[#bfff00] px-6 py-3 text-[16px] font-medium text-black font-sans transition-transform duration-200 hover:scale-[1.02]">
              Start Free Coding
            </button>
            <button className="inline-flex items-center gap-3 font-sans text-[16px]">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-60 p-2 text-primary-60">
                <Play className="h-4 w-4" />
              </span>
              <span className="bg-gradient-to-r from-[#2DD4BF] to-primary-60 bg-clip-text text-transparent font-medium">
                Watch a Video
              </span>
            </button>
          </div>

          {/* Stats Section */}
          <div className="mt-16 opacity-0 translate-y-8 animate-fade-up-delay-400 flex flex-col gap-12 sm:flex-row">
            <div>
              <div className="font-mono text-[64px] leading-[1.2] font-medium bg-gradient-to-r from-[#2DD4BF] to-primary-60 bg-clip-text text-transparent">
                84%
              </div>
              <div className="mt-3 text-[16px] font-sans text-natural-70">Adoption Rate</div>
            </div>
            <div>
              <div className="font-mono text-[64px] leading-[1.2] font-medium bg-gradient-to-r from-[#2DD4BF] to-primary-60 bg-clip-text text-transparent">
                40%
              </div>
              <div className="mt-3 text-[16px] font-sans text-natural-70">Efficiency Gains</div>
            </div>
          </div>
        </section>

        {/* Right Column - Mockup Full Bleed with Right Shift */}
        <section className="relative z-10 mt-16 lg:mt-0 col-span-1 lg:col-start-8 lg:col-span-5 pr-0 overflow-hidden sm:overflow-visible">
          <div className="relative opacity-0 translate-x-12 animate-slide-in-right animate-fade-up-delay-600">
            {/* Top Card - Prompt */}
            <div className="rounded-xl border border-natural-70/20 bg-[#111111] p-6">
              <p className="text-[14px] leading-7 text-natural-70 font-sans">
                Generate a responsive navigation bar using HTML, CSS, and JavaScript that matches the provided UI specification and design tokens.
              </p>
            </div>

            {/* Bottom Layout - File Explorer + Code Editor */}
            <div className="mt-4 flex flex-col gap-4 lg:flex-row">
              {/* Left Card - File Explorer */}
              <div className="w-full rounded-xl border border-natural-70/20 bg-[#111111] p-5 lg:w-1/3">
                <div className="mb-4 flex items-center gap-2 text-[14px] font-sans text-natural-10">
                  <Folder className="h-4 w-4 text-primary-60" />
                  <span>website</span>
                </div>
                <ul className="space-y-3 text-[14px] font-sans text-natural-10">
                  <li className="flex items-center gap-2 text-natural-70">
                    <ChevronRight className="h-3.5 w-3.5" /> Feature
                  </li>
                  <li className="flex items-center gap-2 text-natural-70">
                    <ChevronRight className="h-3.5 w-3.5" /> add-ons
                  </li>
                  <li className="flex items-center gap-2 text-natural-70">
                    <ChevronRight className="h-3.5 w-3.5" /> helpers
                  </li>
                  <li className="mt-4 flex items-center gap-2 text-natural-10">
                    <Folder className="h-3.5 w-3.5 text-primary-60" /> http
                  </li>
                  <li className="ml-6 flex items-center gap-2 text-natural-70">
                    <ChevronRight className="h-3.5 w-3.5" /> Javascript
                  </li>
                  <li className="ml-10 flex items-center gap-2 text-natural-10">
                    <ChevronRight className="h-3.5 w-3.5" /> Navbar.php
                  </li>
                  <li className="ml-10 flex items-center gap-2 text-natural-10">
                    <ChevronRight className="h-3.5 w-3.5" /> Login.php
                  </li>
                </ul>
              </div>

              {/* Right Card - PHP Code Editor */}
              <div className="w-full rounded-xl border border-natural-70/20 bg-[#111111] p-5 lg:w-2/3">
                <div className="mb-4 flex items-center gap-3 text-[14px] text-natural-70">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-primary-60" />
                  <span>PHP / Blade</span>
                </div>
                <div className="grid grid-cols-[32px_1fr] gap-4 text-[14px] leading-relaxed">
                  {/* Line Numbers */}
                  <div className="space-y-1 text-right text-natural-70/50">
                    {Array.from({ length: 12 }, (_, index) => (
                      <div key={index}>{index + 1}</div>
                    ))}
                  </div>

                  {/* Code */}
                  <div className="space-y-1 font-mono text-[14px] leading-relaxed text-natural-10">
                    <div>
                      <span className="text-primary-60">&lt;?php</span>
                    </div>
                    <div className="h-1" />
                    <div>
                      <span className="text-primary-60">namespace</span>{' '}
                      <span className="text-natural-10">App\Http\Navbar;</span>
                    </div>
                    <div className="h-1" />
                    <div>
                      <span className="text-primary-60">class</span>{' '}
                      <span className="text-natural-10">ReportController</span>{' '}
                      <span className="text-primary-60">extends</span>{' '}
                      <span className="text-natural-10">Controller</span>
                    </div>
                    <div>{'{'}</div>
                    <div className="pl-4">
                      <span className="text-primary-60">public</span>{' '}
                      <span className="text-primary-60">function</span>{' '}
                      <span className="text-natural-10">render()</span>
                    </div>
                    <div className="pl-4">{'{'}</div>
                    <div className="pl-8">
                      <span className="text-primary-60">return</span>{' '}
                      <span className="text-natural-10">view('navbar');</span>
                    </div>
                    <div className="pl-4">{'}'}</div>
                    <div>{'}'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Supported Languages Section */}
      <section className="section-reveal languages-reveal relative z-20 w-full bg-natural-100 pt-16 pb-32">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-6 sm:px-10 lg:px-16">
          <h2 className="font-mono text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05] font-normal text-natural-10 text-center">
            Supported Languages
          </h2>

          <div className="mt-20 flex w-full flex-wrap justify-between gap-10">
            <div className="language-icon flex h-20 w-20 items-center justify-center opacity-60 transition duration-300 hover:opacity-100 text-natural-10">
              <svg viewBox="0 0 24 24" className="h-16 w-16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" />
              </svg>
            </div>

            <div className="language-icon flex h-20 w-20 items-center justify-center opacity-60 transition duration-300 hover:opacity-100 text-natural-10">
              <svg viewBox="0 0 24 24" className="h-16 w-16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
              </svg>
            </div>

            <div className="language-icon flex h-20 w-20 items-center justify-center opacity-60 transition duration-300 hover:opacity-100 text-natural-10">
              <svg viewBox="0 0 24 24" className="h-16 w-16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
              </svg>
            </div>

            <div className="language-icon flex h-20 w-20 items-center justify-center opacity-60 transition duration-300 hover:opacity-100 text-natural-10">
              <svg viewBox="0 0 24 24" className="h-16 w-16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
              </svg>
            </div>

            <div className="language-icon flex h-20 w-20 items-center justify-center opacity-60 transition duration-300 hover:opacity-100 text-natural-10">
              <svg viewBox="0 0 24 24" className="h-16 w-16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.795.514-1.204 1.274-1.192 2.22.011.935.654 1.706 1.577 1.835.795.105 1.46-.175 1.987-.77.105-.13.198-.27.315-.434H10.47c-.245 0-.304-.152-.222-.35.152-.362.432-.97.596-1.274a.315.315 0 01.292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 01-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.77-.865-.655-1.356-1.52-1.484-2.595-.152-1.274.222-2.419.993-3.424.83-1.086 1.928-1.776 3.272-2.02 1.098-.2 2.15-.07 3.096.571.62.41 1.063.97 1.356 1.648.07.105.023.164-.117.2m3.868 6.461c-1.064-.024-2.034-.328-2.852-1.029a3.665 3.665 0 01-1.262-2.255c-.21-1.32.152-2.489.947-3.529.853-1.122 1.881-1.706 3.272-1.95 1.192-.21 2.314-.095 3.33.595.923.63 1.496 1.484 1.648 2.605.198 1.578-.257 2.863-1.344 3.962-.771.783-1.718 1.273-2.805 1.495-.315.06-.63.07-.934.106zm2.78-4.72c-.011-.153-.011-.27-.034-.387-.21-1.157-1.274-1.81-2.384-1.554-1.087.245-1.788.935-2.045 2.033-.21.912.234 1.835 1.075 2.21.643.28 1.285.244 1.905-.07.923-.48 1.425-1.228 1.484-2.233z" />
              </svg>
            </div>

            <div className="language-icon flex h-20 w-20 items-center justify-center opacity-60 transition duration-300 hover:opacity-100 text-natural-10">
              <svg viewBox="0 0 24 24" className="h-16 w-16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.8346 11.7033l-1.0073-.6236a13.7268 13.7268 0 00-.0283-.2936l.8656-.8069a.3483.3483 0 00-.1154-.578l-1.1066-.414a8.4958 8.4958 0 00-.087-.2856l.6904-.9587a.3462.3462 0 00-.2257-.5446l-1.1663-.1894a9.3574 9.3574 0 00-.1407-.2622l.49-1.0761a.3437.3437 0 00-.0274-.3361.3486.3486 0 00-.3006-.154l-1.1845.0416a6.7444 6.7444 0 00-.1873-.2268l.2723-1.153a.3472.3472 0 00-.417-.4172l-1.1532.2724a14.0183 14.0183 0 00-.2278-.1873l.0415-1.1845a.3442.3442 0 00-.49-.328l-1.076.491c-.0872-.0476-.1742-.0952-.2623-.1407l-.1903-1.1673A.3483.3483 0 0016.256.955l-.9597.6905a8.4867 8.4867 0 00-.2855-.086l-.414-1.1066a.3483.3483 0 00-.5781-.1154l-.8069.8666a9.2936 9.2936 0 00-.2936-.0284L12.2946.1683a.3462.3462 0 00-.5892 0l-.6236 1.0073a13.7383 13.7383 0 00-.2936.0284L9.9803.3374a.3462.3462 0 00-.578.1154l-.4141 1.1065c-.0962.0274-.1903.0567-.2855.086L7.744.955a.3483.3483 0 00-.5447.2258L7.009 2.348a9.3574 9.3574 0 00-.2622.1407l-1.0762-.491a.3462.3462 0 00-.49.328l.0416 1.1845a7.9826 7.9826 0 00-.2278.1873L3.8413 3.425a.3472.3472 0 00-.4171.4171l.2713 1.1531c-.0628.075-.1255.1509-.1863.2268l-1.1845-.0415a.3462.3462 0 00-.328.49l.491 1.0761a9.167 9.167 0 00-.1407.2622l-1.1662.1894a.3483.3483 0 00-.2258.5446l.6904.9587a13.303 13.303 0 00-.087.2855l-1.1065.414a.3483.3483 0 00-.1155.5781l.8656.807a9.2936 9.2936 0 00-.0283.2935l-1.0073.6236a.3442.3442 0 000 .5892l1.0073.6236c.008.0982.0182.1964.0283.2936l-.8656.8079a.3462.3462 0 00.1155.578l1.1065.4141c.0273.0962.0567.1914.087.2855l-.6904.9587a.3452.3452 0 00.2268.5447l1.1662.1893c.0456.088.0922.1751.1408.2622l-.491 1.0762a.3462.3462 0 00.328.49l1.1834-.0415c.0618.0769.1235.1528.1873.2277l-.2713 1.1541a.3462.3462 0 00.4171.4161l1.153-.2713c.075.0638.151.1255.2279.1863l-.0415 1.1845a.3442.3442 0 00.49.327l1.0761-.49c.087.0486.1741.0951.2622.1407l.1903 1.1662a.3483.3483 0 00.5447.2268l.9587-.6904a9.299 9.299 0 00.2855.087l.414 1.1066a.3452.3452 0 00.5781.1154l.8079-.8656c.0972.0111.1954.0203.2936.0294l.6236 1.0073a.3472.3472 0 00.5892 0l.6236-1.0073c.0982-.0091.1964-.0183.2936-.0294l.8069.8656a.3483.3483 0 00.578-.1154l.4141-1.1066a8.4626 8.4626 0 00.2855-.087l.9587.6904a.3452.3452 0 00.5447-.2268l.1903-1.1662c.088-.0456.1751-.0931.2622-.1407l1.0762.49a.3472.3472 0 00.49-.327l-.0415-1.1845a6.7267 6.7267 0 00.2267-.1863l1.1531.2713a.3472.3472 0 00.4171-.416l-.2713-1.1542c.0628-.0749.1255-.1508.1863-.2278l1.1845.0415a.3442.3442 0 00.328-.49l-.49-1.076c.0475-.0872.0951-.1742.1407-.2623l1.1662-.1893a.3483.3483 0 00.2258-.5447l-.6904-.9587.087-.2855 1.1066-.414a.3462.3462 0 00.1154-.5781l-.8656-.8079c.0101-.0972.0202-.1954.0283-.2936l1.0073-.6236a.3442.3442 0 000-.5892zm-6.7413 8.3551a.7138.7138 0 01.2986-1.396.714.714 0 11-.2997 1.396zm-.3422-2.3142a.649.649 0 00-.7715.5l-.3573 1.6685c-1.1035.501-2.3285.7795-3.6193.7795a8.7368 8.7368 0 01-3.6951-.814l-.3574-1.6684a.648.648 0 00-.7714-.499l-1.473.3158a8.7216 8.7216 0 01-.7613-.898h7.1676c.081 0 .1356-.0141.1356-.088v-2.536c0-.074-.0536-.0881-.1356-.0881h-2.0966v-1.6077h2.2677c.2065 0 1.1065.0587 1.394 1.2088.0901.3533.2875 1.5044.4232 1.8729.1346.413.6833 1.2381 1.2685 1.2381h3.5716a.7492.7492 0 00.1296-.0131 8.7874 8.7874 0 01-.8119.9526zM6.8369 20.024a.714.714 0 11-.2997-1.396.714.714 0 01.2997 1.396zM4.1177 8.9972a.7137.7137 0 11-1.304.5791.7137.7137 0 011.304-.579zm-.8352 1.9813l1.5347-.6824a.65.65 0 00.33-.8585l-.3158-.7147h1.2432v5.6025H3.5669a8.7753 8.7753 0 01-.2834-3.348zm6.7343-.5437V8.7836h2.9601c.153 0 1.0792.1772 1.0792.8697 0 .575-.7107.7815-1.2948.7815zm10.7574 1.4862c0 .2187-.008.4363-.0243.651h-.9c-.09 0-.1265.0586-.1265.1477v.413c0 .973-.5487 1.1846-1.0296 1.2382-.4576.0517-.9648-.1913-1.0275-.4717-.2704-1.5186-.7198-1.8436-1.4305-2.4034.8817-.5599 1.799-1.386 1.799-2.4915 0-1.1936-.819-1.9458-1.3769-2.3153-.7825-.5163-1.6491-.6195-1.883-.6195H5.4682a8.7651 8.7651 0 014.907-2.7699l1.0974 1.151a.648.648 0 00.9182.0213l1.227-1.1743a8.7753 8.7753 0 016.0044 4.2762l-.8403 1.8982a.652.652 0 00.33.8585l1.6178.7188c.0283.2875.0425.577.0425.8717zm-9.3006-9.5993a.7128.7128 0 11.984 1.0316.7137.7137 0 01-.984-1.0316zm8.3389 6.71a.7107.7107 0 01.9395-.3625.7137.7137 0 11-.9405.3635z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="section-reveal why-reveal relative z-20 w-full bg-natural-100 pb-24 pt-20 lg:pb-32 lg:pt-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
            <h2 className="font-mono text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05] font-normal text-natural-10">
              Why Us?
            </h2>
            <p className="max-w-[430px] font-sans text-[17px] leading-8 text-natural-70 lg:justify-self-end">
              Production-aware AI for detecting issues, refactoring faster, and shipping reliable code with less review drag.
            </p>
          </div>

          <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-2">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-2">
              <article className="motion-card flex h-full flex-col justify-center rounded-[20px] bg-[#bfff00] p-8 text-black transition duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#111111] text-[#bfff00]">
                    <Bug className="h-6 w-6" />
                  </div>
                  <h3 className="font-sans text-[20px] font-medium">Bug Detection</h3>
                </div>
                <p className="mt-6 font-sans text-[15px] leading-relaxed text-black/80">
                  Leverage AI to instantly create blogs, articles with ease.
                </p>
              </article>

              <article className="motion-card flex h-full flex-col justify-center rounded-[20px] border border-[#bfff00]/30 bg-[#111111] p-8 text-natural-10 transition duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-natural-70/20 bg-natural-90 text-[#2DD4BF]">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <h3 className="font-sans text-[20px] font-medium text-natural-10">Refactor Code</h3>
                </div>
                <p className="mt-6 font-sans text-[15px] leading-relaxed text-natural-70">
                  Turn raw ideas into actionable insights with AI-powered analysis.
                </p>
              </article>
            </div>

            <article className="motion-card graph-card flex h-full flex-col justify-between rounded-[20px] border border-natural-70/20 bg-[#0a0a0a] p-8">
              <div className="flex flex-col gap-1">
                <p className="font-sans text-[14px] text-natural-70">Production Transactions (5 Month)</p>
                <div className="mt-2 font-sans text-[40px] font-medium text-natural-10">1 million</div>
              </div>

              <div className="mt-10 flex flex-1 items-center overflow-hidden">
                <svg viewBox="0 0 760 300" className="h-full w-full" fill="none" role="img" aria-label="Dual line graph from January to August">
                  <g className="text-natural-70/20">
                    <line x1="44" y1="42" x2="724" y2="42" stroke="currentColor" strokeWidth="1" />
                    <line x1="44" y1="102" x2="724" y2="102" stroke="currentColor" strokeWidth="1" />
                    <line x1="44" y1="162" x2="724" y2="162" stroke="currentColor" strokeWidth="1" />
                    <line x1="44" y1="222" x2="724" y2="222" stroke="currentColor" strokeWidth="1" />
                  </g>
                  <path
                    d="M52 190 C98 108 146 90 198 138 C252 190 310 206 358 146 C412 78 476 82 532 132 C590 184 646 164 716 76"
                    stroke="#2DD4BF"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M52 132 C106 168 150 220 210 192 C270 164 286 72 356 86 C430 100 456 196 526 178 C592 162 626 86 716 118"
                    stroke="#bfff00"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <g className="font-sans text-[16px] text-natural-70">
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'].map((month, index) => (
                      <text key={month} x={60 + index * 96} y="282" fill="currentColor" textAnchor="middle">
                        {month}
                      </text>
                    ))}
                  </g>
                </svg>
              </div>
            </article>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-stretch">
            <div className="relative flex min-h-[360px] w-full items-center justify-center overflow-hidden rounded-[20px] bg-[#cccccc]">
              <svg viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-32 w-32 opacity-70">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>

            <div className="flex flex-col justify-center p-4 lg:p-8">
              <h3 className="font-sans text-[20px] font-medium text-natural-10">
                Content Strategy Consulting
              </h3>
              <p className="mt-4 max-w-md font-sans text-[15px] leading-relaxed text-natural-70">
                Expert guidance to help you plan, implement, and maximize AI-driven content workflows.
              </p>

              <div className="mt-12 flex flex-col sm:flex-row gap-8 sm:gap-16">
                <div>
                  <div className="font-sans text-[40px] sm:text-[56px] font-medium bg-gradient-to-r from-[#bfff00] to-[#2DD4BF] bg-clip-text text-transparent">
                    84%
                  </div>
                  <div className="mt-2 font-sans text-[16px] text-natural-70">Adoption Rate</div>
                </div>
                <div>
                  <div className="font-sans text-[40px] sm:text-[56px] font-medium bg-gradient-to-r from-[#bfff00] to-[#2DD4BF] bg-clip-text text-transparent">
                    40%
                  </div>
                  <div className="mt-2 font-sans text-[16px] text-natural-70">Efficiency Gains</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="section-reveal process-reveal relative z-20 w-full overflow-hidden bg-natural-100 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_430px] lg:items-end">
            <h2 className="font-mono text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05] font-normal text-natural-10">
              How it Works
            </h2>
            <p className="max-w-[430px] font-sans text-[17px] leading-8 text-natural-70 lg:justify-self-end">
              Describe the change, let Woof generate the fix, then copy production-ready code into your workflow.
            </p>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="space-y-5 lg:col-span-5">
              <div className="rounded-2xl bg-gradient-to-b from-[#bfff00]/40 to-transparent p-[1px]">
                <article className="process-step h-full rounded-[15px] bg-gradient-to-b from-[#82a300] to-[#0a0a0a] px-6 py-6">
                  <div className="font-mono text-[18px] font-medium text-natural-10">01.</div>
                  <h3 className="mt-5 font-mono text-[24px] leading-tight font-normal text-natural-10">Type your request</h3>
                  <p className="mt-4 max-w-sm font-sans text-[15px] leading-7 text-natural-70">
                    Ask for a bug fix, refactor, component, or backend flow using plain language.
                  </p>
                </article>
              </div>

              <div className="rounded-2xl bg-gradient-to-b from-white/30 to-transparent p-[1px]">
                <article className="process-step h-full rounded-[15px] bg-[#111111] px-6 py-6">
                  <div className="font-mono text-[18px] font-medium text-natural-10">02.</div>
                  <h3 className="mt-5 font-mono text-[24px] leading-tight font-normal text-natural-10">
                    AI processes the request
                  </h3>
                  <p className="mt-4 max-w-sm font-sans text-[15px] leading-7 text-natural-70">
                    Context, syntax, and intent are analyzed before a clean implementation is drafted.
                  </p>
                </article>
              </div>

              <div className="rounded-2xl bg-gradient-to-b from-white/30 to-transparent p-[1px]">
                <article className="process-step h-full rounded-[15px] bg-[#111111] px-6 py-6">
                  <div className="font-mono text-[18px] font-medium text-natural-10">02.</div>
                  <h3 className="mt-5 font-mono text-[24px] leading-tight font-normal text-natural-10">
                    Review & use the generated code
                  </h3>
                  <p className="mt-4 max-w-sm font-sans text-[15px] leading-7 text-natural-70">
                    Inspect the result, copy it into your project, and keep moving with confidence.
                  </p>
                </article>
              </div>
            </div>

            <div className="space-y-5 lg:col-span-7">
              <div className="flex flex-col gap-4 rounded-2xl border border-[#777777] bg-[#222222] p-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-mono text-[15px] leading-7 text-natural-10">
                  <span className="text-primary-60">&gt; User:</span>{' '}
                  Generate a cleaner PHP controller with validation and structured response data.
                </p>
                <button className="shrink-0 rounded-lg bg-primary-60 px-5 py-3 font-sans text-[15px] font-medium text-black transition-transform duration-200 hover:scale-[1.02]">
                  Generate
                </button>
              </div>

              <div className="rounded-2xl border border-[#777777] bg-[#222222] px-5 py-4">
                <p className="font-mono text-[14px] leading-6 text-natural-70">
                  <span className="text-[#2DD4BF]">runtime</span> Generating improved PHP controller...{' '}
                  <span className="text-primary-60">Done! (0.4s)</span>
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-[#777777] bg-[#222222]">
                <div className="flex items-center justify-between border-b border-natural-70/10 px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full bg-primary-60" />
                    <span className="h-3 w-3 rounded-full bg-[#2DD4BF]" />
                    <span className="h-3 w-3 rounded-full bg-natural-70/40" />
                  </div>
                  <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#2DD4BF] to-primary-60 px-3 py-2 font-sans text-[13px] font-medium text-black">
                    <Copy className="h-3.5 w-3.5" />
                    Copy
                  </button>
                </div>

                <div className="grid grid-cols-[42px_1fr] gap-4 overflow-x-auto p-5 font-mono text-[14px] leading-7">
                  <div className="select-none space-y-1 text-right text-natural-70/50">
                    {Array.from({ length: 15 }, (_, index) => (
                      <div key={index}>{index + 1}</div>
                    ))}
                  </div>
                  <div className="min-w-[540px] space-y-1 text-natural-10">
                    <div>
                      <span className="text-primary-60">&lt;?php</span>
                    </div>
                    <div>
                      <span className="text-primary-60">namespace</span>{' '}
                      <span>App\Http\Controllers;</span>
                    </div>
                    <div>
                      <span className="text-primary-60">use</span>{' '}
                      <span>Illuminate\Http\Request;</span>
                    </div>
                    <div>
                      <span className="text-primary-60">class</span>{' '}
                      <span className="text-[#2DD4BF]">ReportController</span>{' '}
                      <span className="text-primary-60">extends</span> Controller
                    </div>
                    <div>{'{'}</div>
                    <div className="pl-5">
                      <span className="text-primary-60">public function</span>{' '}
                      <span className="text-[#2DD4BF]">store</span>(Request $request)
                    </div>
                    <div className="pl-5">{'{'}</div>
                    <div className="pl-10">
                      <span className="text-natural-70">$data</span> = $request-&gt;validate([
                    </div>
                    <div className="pl-14">
                      <span className="text-[#2DD4BF]">'title'</span> =&gt;{' '}
                      <span className="text-[#2DD4BF]">'required|string'</span>,
                    </div>
                    <div className="pl-14">
                      <span className="text-[#2DD4BF]">'status'</span> =&gt;{' '}
                      <span className="text-[#2DD4BF]">'required|in:draft,live'</span>,
                    </div>
                    <div className="pl-10">]);</div>
                    <div className="pl-10">
                      <span className="text-primary-60">return</span> response()-&gt;json($data, 201);
                    </div>
                    <div className="pl-5">{'}'}</div>
                    <div>{'}'}</div>
                    <div className="text-natural-70">// Generated with validation and clean response handling.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Works Where You Work Section */}
      <section className="section-reveal integrations-reveal relative z-20 w-full bg-natural-100 py-24 lg:py-28">
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center px-6 sm:px-10 lg:px-16">
          <h2 className="font-mono text-[44px] leading-[1.08] font-normal text-natural-10 sm:text-[56px]">
            Works Where You Work
          </h2>
          <p className="mt-6 mb-20 max-w-2xl font-sans text-[17px] leading-8 text-natural-70 sm:mb-24">
            Integrate the tool directly into your favorite IDEs including VS Code, IntelliJ,<br className="hidden sm:block" /> PyCharm, and Android Studio.
          </p>

          <div className="flex flex-row flex-wrap items-center justify-center gap-12 md:gap-24">
            <div className="integration-icon flex h-24 w-24 items-center justify-center rounded-full bg-[#e5e5e5] shadow-md md:h-28 md:w-28">
              <svg viewBox="0 0 96 96" className="h-16 w-16 md:h-20 md:w-20" fill="none" role="img" aria-label="IntelliJ IDEA logo">
                <rect width="96" height="96" rx="18" fill="#000000" />
                <path d="M0 0H54L0 54V0Z" fill="#FF2D95" />
                <path d="M96 0V50L52 0H96Z" fill="#087CFA" />
                <path d="M0 96L48 45L96 96H0Z" fill="#F97A12" />
                <path d="M46 0L96 52V96L42 42L46 0Z" fill="#7A3CFF" />
                <rect x="21" y="21" width="54" height="54" fill="#050505" />
                <text x="48" y="52" textAnchor="middle" fontSize="27" fontFamily="Arial, sans-serif" fontWeight="700" fill="#FFFFFF">IJ</text>
                <path d="M28 64H51" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="square" />
              </svg>
            </div>

            <div className="integration-icon flex h-24 w-24 items-center justify-center rounded-full bg-[#e5e5e5] shadow-md md:h-28 md:w-28">
              <svg viewBox="0 0 96 96" className="h-16 w-16 md:h-20 md:w-20" fill="none" role="img" aria-label="Android Studio logo">
                <path d="M48 12L78 80H66L48 38L30 80H18L48 12Z" fill="#3DDC84" />
                <path d="M48 12L78 80H66L48 38L30 80H18L48 12Z" stroke="#2F80ED" strokeWidth="6" strokeLinejoin="round" />
                <circle cx="48" cy="54" r="17" fill="#3DDC84" stroke="#0B8F5A" strokeWidth="3" />
                <path d="M36 39L30 30M60 39L66 30" stroke="#0B8F5A" strokeWidth="4" strokeLinecap="round" />
                <circle cx="42" cy="53" r="2.5" fill="#0D3020" />
                <circle cx="54" cy="53" r="2.5" fill="#0D3020" />
                <path d="M38 64H58" stroke="#0D3020" strokeWidth="3" strokeLinecap="round" />
                <path d="M23 80H73" stroke="#2F80ED" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </div>

            <div className="integration-icon flex h-24 w-24 items-center justify-center rounded-full bg-[#e5e5e5] shadow-md md:h-28 md:w-28">
              <svg viewBox="0 0 96 96" className="h-16 w-16 md:h-20 md:w-20" fill="none" role="img" aria-label="Visual Studio Code logo">
                <path d="M70 12L88 20V76L70 84L22 60L10 70L4 66V30L10 26L22 36L70 12Z" fill="#007ACC" />
                <path d="M70 12L34 48L70 84V12Z" fill="#1F9CF0" />
                <path d="M22 36L10 26L10 70L22 60L48 48L22 36Z" fill="#0E6FB8" />
                <path d="M70 30L47 48L70 66V30Z" fill="#EAF6FF" fillOpacity="0.18" />
              </svg>
            </div>

            <div className="integration-icon flex h-24 w-24 items-center justify-center rounded-full bg-[#e5e5e5] shadow-md md:h-28 md:w-28">
              <svg viewBox="0 0 96 96" className="h-16 w-16 md:h-20 md:w-20" fill="none" role="img" aria-label="PyCharm logo">
                <rect width="96" height="96" rx="18" fill="#000000" />
                <path d="M0 0H64L35 33L0 46V0Z" fill="#21D789" />
                <path d="M96 0V44L58 28L36 0H96Z" fill="#F8E71C" />
                <path d="M0 96V46L42 32L96 96H0Z" fill="#10B981" />
                <path d="M96 44V96L42 32L58 28L96 44Z" fill="#C8FD26" />
                <rect x="21" y="21" width="54" height="54" fill="#050505" />
                <text x="48" y="52" textAnchor="middle" fontSize="26" fontFamily="Arial, sans-serif" fontWeight="700" fill="#FFFFFF">PC</text>
                <path d="M28 64H51" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="square" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-reveal pricing-reveal relative z-20 w-full bg-natural-100 py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="font-mono text-[48px] leading-[1.03] font-normal text-natural-10 sm:text-[56px] lg:text-[64px]">
              Unlock the Power of AI with Woof
            </h2>
            <p className="max-w-xl font-sans text-[17px] leading-8 text-natural-70">
              We offer tailored pricing plans designed to meet the unique needs of your business.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-16 lg:grid-cols-2 lg:gap-10">
            {/* Basic Plan Card */}
            <div className="pricing-card relative rounded-[1.75rem] bg-gradient-to-r from-[#2DD4BF] to-[#bfff00] p-[1px] shadow-2xl mt-4 lg:mt-0">
              <span className="absolute left-8 -top-4 z-10 rounded-md bg-gradient-to-r from-[#2DD4BF] to-[#bfff00] px-3 py-1.5 text-[14px] font-semibold text-black shadow-sm">
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
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#bfff00] to-[#2DD4BF] text-black">
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

                <button className="mt-12 w-full rounded-xl bg-[#bfff00] py-4 text-[16px] font-medium text-black transition-transform duration-200 hover:scale-[1.02]">
                  Get This Plan
                </button>
              </div>
            </div>

            {/* Premium Plan Card */}
            <div className="pricing-card relative rounded-[1.75rem] bg-gradient-to-r from-[#2DD4BF] to-[#bfff00] p-[1px] shadow-2xl mt-4 lg:mt-0">
              <div className="relative flex h-full flex-col justify-between rounded-[calc(1.75rem-1px)] bg-[#0a0a0a] p-8 sm:p-10">
                <div>
                  <div className="flex items-start justify-between">
                    <div className="pt-2">
                      <h3 className="font-sans text-[28px] text-white">Premium Plan</h3>
                      <p className="mt-2 font-sans text-[14px] text-natural-70">Perfect for organizations</p>
                    </div>
                    <div className="flex items-start gap-1">
                      <span className="mt-2 font-mono text-[20px] font-medium text-natural-70">$</span>
                      <span className="font-mono text-[64px] leading-[1] font-medium bg-gradient-to-r from-[#bfff00] to-[#2DD4BF] bg-clip-text text-transparent">699</span>
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
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#bfff00] to-[#2DD4BF] text-black">
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

                <button className="mt-12 w-full rounded-xl bg-[#bfff00] py-4 text-[16px] font-medium text-black transition-transform duration-200 hover:scale-[1.02]">
                  Get This Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
