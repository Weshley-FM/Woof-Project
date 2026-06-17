import './Hero.css'
import { ChevronRight, Folder, Play } from 'lucide-react'

const languageItems = [
  { name: 'PHP', icon: <PhpIcon /> },
  { name: 'Python', icon: <PythonIcon /> },
  { name: 'React', icon: <ReactIcon /> },
  { name: 'JavaScript', icon: <JavaScriptIcon /> },
  { name: 'Go', icon: <GoIcon /> },
  { name: 'Rust', icon: <RustIcon /> },
]

const featureCards = [
  {
    title: 'Bug Detection',
    description: 'Leverage AI to instantly create blogs, articles with ease.',
    icon: <BugIcon />,
    active: true,
  },
  {
    title: 'Refactor Code',
    description:
      'Turn raw ideas into actionable insights with AI-powered analysis.',
    icon: <RefactorIcon />,
  },
]

const workSteps = [
  {
    number: '01.',
    title: 'Type your request',
    description:
      'Enter a clear command describing what you want, like "fix this controller and generate optimized version".',
    active: true,
  },
  {
    number: '02.',
    title: 'AI processes the request',
    description:
      'The system reads your prompt and generates code you can review in seconds.',
  },
  {
    number: '02.',
    title: 'Review & use the generated code',
    description:
      'Inspect the output, choose follow-ups, copy the answer, and paste it into your project.',
  },
]

const ideItems = [
  { name: 'IntelliJ IDEA', icon: <IntellijIcon /> },
  { name: 'Android Studio', icon: <AndroidStudioIcon /> },
  { name: 'Visual Studio Code', icon: <VsCodeIcon /> },
  { name: 'PyCharm', icon: <PycharmIcon /> },
]

const planCards = [
  {
    name: 'Basic Plan',
    subtitle: 'The Basic Plan is designed for smart.',
    price: '599',
    popular: true,
    features: [
      '20 hours of consultation',
      'Access to the AI Learning Portal',
      'Monthly performance reporting',
      'Email support',
      'AI Readiness Assessment',
    ],
  },
  {
    name: 'Premium Plan',
    subtitle: 'Perfect for organizations',
    price: '699',
    features: [
      '40 hours of consultation',
      'Comprehensive machine learning',
      'AI training and workshops',
      'Advanced analytics and insights',
      'Priority support',
    ],
  },
]

const codeRows = [
  { number: '1', parts: [{ text: '<?php' }] },
  { number: '2', parts: [] },
  {
    number: '3',
    parts: [
      { text: 'namespace ', tone: 'keyword' },
      { text: 'App\\Http\\Navbar;', tone: 'accent' },
    ],
  },
  {
    number: '4',
    parts: [
      { text: 'use ', tone: 'keyword' },
      { text: 'App\\Javascript;', tone: 'accent' },
    ],
  },
  {
    number: '5',
    parts: [
      { text: 'use ', tone: 'keyword' },
      { text: 'Illuminate\\Http\\Request;', tone: 'accent' },
    ],
  },
  { number: '6', parts: [] },
  {
    number: '7',
    parts: [
      { text: 'class ', tone: 'keyword' },
      { text: 'ReportController ', tone: 'accent' },
      { text: 'extends', tone: 'keyword' },
    ],
  },
  { number: '8', parts: [{ text: '{' }] },
  { number: '9', parts: [] },
  {
    number: '10',
    parts: [
      { text: 'public ', tone: 'keyword' },
      { text: 'function ', tone: 'keyword' },
      { text: 'list()' },
    ],
  },
  { number: '11', parts: [{ text: '{' }] },
  { number: '12', parts: [] },
  { number: '13', parts: [] },
  { number: '14', parts: [] },
  { number: '15', parts: [] },
]

function Hero() {
  return (
    <>
      <section className="section-reveal hero-reveal relative z-0 grid grid-cols-1 gap-0 overflow-visible pb-10 pt-10 lg:min-h-[640px] lg:grid-cols-12" id="home">
        <div className="hero-neon-field" />
        <div className="hero-neon-beam" />
        <div className="hero-scan-line" />

        {/* Left Column - Content */}
        <div className="relative z-10 col-span-1 lg:col-span-5 px-6 sm:px-10 lg:px-0 lg:pl-[max(4rem,calc(50vw-576px+4rem))]">
          {/* Headline - Two perfect lines */}
          <div className="opacity-0 translate-y-8 animate-fade-up font-mono text-[44px] sm:text-[56px] lg:text-[70px] leading-[1.1] font-normal text-white whitespace-nowrap">
            <div>Code Faster,</div>
            <div>Debug Smarter.</div>
          </div>

          {/* Subheadline */}
          <p className="mt-6 max-w-md opacity-0 translate-y-8 animate-fade-up-delay-200 text-[18px] leading-[1.6] text-neutral-400 font-sans">
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
              <div className="mt-3 text-[16px] font-sans text-neutral-400">Adoption Rate</div>
            </div>
            <div>
              <div className="font-mono text-[64px] leading-[1.2] font-medium bg-gradient-to-r from-[#2DD4BF] to-primary-60 bg-clip-text text-transparent">
                40%
              </div>
              <div className="mt-3 text-[16px] font-sans text-neutral-400">Efficiency Gains</div>
            </div>
          </div>
        </div>

        {/* Right Column - Mockup Full Bleed with Right Shift */}
        <div className="relative z-10 mt-16 lg:mt-0 col-span-1 lg:col-start-8 lg:col-span-5 pr-0 overflow-hidden sm:overflow-visible">
          <div className="relative opacity-0 translate-x-12 animate-slide-in-right animate-fade-up-delay-600">
            {/* Top Card - Prompt */}
            <div className="rounded-xl border border-neutral-700 bg-[#111111] p-6">
              <p className="text-[14px] leading-7 text-neutral-400 font-sans">
                Generate a responsive navigation bar using HTML, CSS, and JavaScript that matches the provided UI specification and design tokens.
              </p>
            </div>

            {/* Bottom Layout - File Explorer + Code Editor */}
            <div className="mt-4 flex flex-col gap-4 lg:flex-row">
              {/* Left Card - File Explorer */}
              <div className="w-full rounded-xl border border-neutral-700 bg-[#111111] p-5 lg:w-1/3">
                <div className="mb-4 flex items-center gap-2 text-[14px] font-sans text-white">
                  <Folder className="h-4 w-4 text-primary-60" />
                  <span>website</span>
                </div>
                <ul className="space-y-3 text-[14px] font-sans text-white">
                  <li className="flex items-center gap-2 text-neutral-400">
                    <ChevronRight className="h-3.5 w-3.5" /> Feature
                  </li>
                  <li className="flex items-center gap-2 text-neutral-400">
                    <ChevronRight className="h-3.5 w-3.5" /> add-ons
                  </li>
                  <li className="flex items-center gap-2 text-neutral-400">
                    <ChevronRight className="h-3.5 w-3.5" /> helpers
                  </li>
                  <li className="mt-4 flex items-center gap-2 text-white">
                    <Folder className="h-3.5 w-3.5 text-primary-60" /> http
                  </li>
                  <li className="ml-6 flex items-center gap-2 text-neutral-400">
                    <ChevronRight className="h-3.5 w-3.5" /> Javascript
                  </li>
                  <li className="ml-10 flex items-center gap-2 text-white">
                    <ChevronRight className="h-3.5 w-3.5" /> Navbar.php
                  </li>
                  <li className="ml-10 flex items-center gap-2 text-white">
                    <ChevronRight className="h-3.5 w-3.5" /> Login.php
                  </li>
                </ul>
              </div>

              {/* Right Card - PHP Code Editor */}
              <div className="w-full rounded-xl border border-neutral-700 bg-[#111111] p-5 lg:w-2/3">
                <div className="mb-4 flex items-center gap-3 text-[14px] text-neutral-400">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-primary-60" />
                  <span>PHP / Blade</span>
                </div>
                <div className="grid grid-cols-[32px_1fr] gap-4 text-[14px] leading-relaxed">
                  {/* Line Numbers */}
                  <div className="space-y-1 text-right text-neutral-500">
                    {Array.from({ length: 12 }, (_, index) => (
                      <div key={index}>{index + 1}</div>
                    ))}
                  </div>

                  {/* Code */}
                  <div className="space-y-1 font-mono text-[14px] leading-relaxed text-white">
                    <div>
                      <span className="text-primary-60">&lt;?php</span>
                    </div>
                    <div className="h-1" />
                    <div>
                      <span className="text-primary-60">namespace</span>{' '}
                      <span className="text-white">App\Http\Navbar;</span>
                    </div>
                    <div className="h-1" />
                    <div>
                      <span className="text-primary-60">class</span>{' '}
                      <span className="text-white">ReportController</span>{' '}
                      <span className="text-primary-60">extends</span>{' '}
                      <span className="text-white">Controller</span>
                    </div>
                    <div>{'{'}</div>
                    <div className="pl-4">
                      <span className="text-primary-60">public</span>{' '}
                      <span className="text-primary-60">function</span>{' '}
                      <span className="text-white">render()</span>
                    </div>
                    <div className="pl-4">{'{'}</div>
                    <div className="pl-8">
                      <span className="text-primary-60">return</span>{' '}
                      <span className="text-white">view('navbar');</span>
                    </div>
                    <div className="pl-4">{'}'}</div>
                    <div>{'}'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="language-section" aria-labelledby="languages-title">
        <div className="landing-container language-section__inner">
          <h2 id="languages-title" data-reveal="up" className="font-mono text-[40px] sm:text-[48px] text-white mb-8">
            Supported Languages
          </h2>
          <div className="language-section__grid">
            {languageItems.map((item, index) => (
              <div
                className="language-section__item" data-reveal="fade"
                key={item.name}
                aria-label={item.name}
                title={item.name}
                style={{ '--reveal-delay': `${index * 60}ms` }}
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="why-section" id="features" aria-labelledby="why-title">
        <div className="landing-container why-section__grid">
          <h2
            className="section-title why-section__title font-mono text-[40px] sm:text-[48px] text-white"
            id="why-title"
           data-reveal="up">
            Why Us?
          </h2>
          <p className="section-copy why-section__intro font-sans text-[17px] text-neutral-400">
            Your AI-powered pair programmer. Generate functions, fix bugs, and
            refactor code in seconds.
          </p>

          <div className="why-section__features">
            {featureCards.map((feature, index) => (
              <article
                className={`feature-card${
                  feature.active ? ' feature-card--active' : ''
                }`} data-reveal="up"
                key={feature.title}
                style={{ '--reveal-delay': `${index * 80}ms` }}
              >
                <span className="feature-card__icon">{feature.icon}</span>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </article>
            ))}
          </div>

          <ChartCard />
          <ImagePlaceholder />

          <article className="consulting-card" data-reveal="right">
            <h3>Content Strategy Consulting</h3>
            <p>
              Expert guidance to help you plan, implement, and maximize
              AI-driven content workflows.
            </p>
            <MetricPair />
          </article>
        </div>
      </section>

      <section
        className="work-section"
        id="how-it-works"
        aria-labelledby="work-title"
      >
        <div className="landing-container work-section__grid">
          <h2
            className="section-title work-section__title font-mono text-[40px] sm:text-[48px] text-white"
            id="work-title"
           data-reveal="up">
            How it Works
          </h2>
          <p className="section-copy work-section__intro font-sans text-[17px] text-neutral-400">
            Your AI-powered pair programmer. Generate functions, fix bugs, and
            refactor code in seconds.
          </p>

          <div className="work-section__steps">
            {workSteps.map((step, index) => (
              <article
                className={`work-step${step.active ? ' work-step--active' : ''}`} data-reveal="left"
                key={`${step.number}-${step.title}`}
                style={{ '--reveal-delay': `${index * 80}ms` }}
              >
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>

          <div
            className="work-section__demo"
            aria-label="Generated code demo"
          >
            <div className="demo-prompt" data-reveal="fade">
              <p>
                <span>- User</span>
                Fix this controller and generate an optimized version.
              </p>
              <button
                className="button-primary button-primary--small"
                type="button"
              >
                Generate
              </button>
            </div>
            <div className="demo-status" data-reveal="up">
              Generating improved PHP controller... Done! (0.4s)
            </div>
            <CodePreview copyButton />
          </div>
        </div>
      </section>

      <section
        className="integration-section"
        id="integrations"
        aria-labelledby="integrations-title"
      >
        <div className="landing-container integration-section__inner">
          <h2 id="integrations-title" data-reveal="up" className="font-mono text-[40px] sm:text-[48px] text-white">
            Works Where You Work
          </h2>
          <p>
            Integrate the tool directly into your favorite IDEs including VS
            Code, IntelliJ, PyCharm, and Android Studio.
          </p>
          <div className="integration-section__grid">
            {ideItems.map((item, index) => (
              <div
                className="ide-badge" data-reveal="fade"
                key={item.name}
                title={item.name}
                style={{ '--reveal-delay': `${index * 70}ms` }}
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-20 w-full bg-natural-100 py-24 lg:py-28" id="pricing">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="font-mono text-[48px] leading-[1.03] font-normal text-white sm:text-[56px] lg:text-[64px]">
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
            <div className="pricing-card relative rounded-[1.75rem] bg-gradient-to-r from-[#2DD4BF] to-[#bfff00] p-[1px] shadow-2xl mt-4 lg:mt-0" style={{ '--reveal-delay': '200ms' }}>
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
    </>
  )
}

function MetricPair({ className = '' }) {
  return (
    <div className={`metric-pair ${className}`}>
      <div>
        <strong>84%</strong>
        <span>Adoption Rate</span>
      </div>
      <div>
        <strong>40%</strong>
        <span>Efficiency Gains</span>
      </div>
    </div>
  )
}

function PromptCard() {
  return (
    <div className="prompt-card" data-reveal="fade">
      Generate a responsive navigation bar using HTML, CSS, and JavaScript that
      includes a logo, menu items, and a hamburger menu for mobile view
    </div>
  )
}

function FileTree() {
  return (
    <div className="file-card" data-reveal="left">
      <TreeRow label="Folder" />
      <TreeRow label="website" open />
      <TreeRow label="Feature" indent={1} />
      <TreeRow label="add-ons" indent={1} />
      <TreeRow label="helpers" indent={1} />
      <TreeRow label="http" indent={1} open />
      <TreeRow label="Javascript" indent={1} open />
      <TreeRow label="Navbar.php" indent={2} file />
      <TreeRow label="Login.php" indent={2} file />
    </div>
  )
}

function TreeRow({ label, open = false, file = false, indent = 0 }) {
  return (
    <div className={`tree-row tree-row--indent-${indent}`}>
      {!file && <span className="tree-row__chevron">{open ? 'v' : '>'}</span>}
      {file ? <FileIcon /> : <FolderIcon open={open} />}
      <span>{label}</span>
    </div>
  )
}

function CodePreview({ copyButton = false }) {
  return (
    <div className="code-card" data-reveal="right">
      {copyButton && (
        <button className="code-card__copy" type="button">
          Copy
        </button>
      )}
      {codeRows.map((row) => (
        <div className="code-card__row" key={row.number}>
          <span className="code-card__number">{row.number}</span>
          <code>
            {row.parts.map((part, index) => (
              <span
                className={
                  part.tone ? `code-token code-token--${part.tone}` : 'code-token'
                }
                key={`${row.number}-${index}`}
              >
                {part.text}
              </span>
            ))}
          </code>
        </div>
      ))}
      <div className="code-card__ghost-lines" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}

function ChartCard() {
  return (
    <article className="chart-card" data-reveal="up">
      <p>Production Transactions (8 Month)</p>
      <strong>1 million</strong>
      <svg viewBox="0 0 420 142" aria-hidden="true" focusable="false">
        <path
          d="M10 48 72 82 145 64 206 98 280 116 330 110 366 52 410 56"
          className="chart-card__line chart-card__line--muted"
        />
        <path
          d="M10 64 72 95 145 76 206 108 280 122 330 120 366 79 410 82"
          className="chart-card__line"
        />
      </svg>
      <div className="chart-card__months">
        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'].map(
          (month) => (
            <span key={month}>{month}</span>
          ),
        )}
      </div>
    </article>
  )
}

function ImagePlaceholder() {
  return (
    <div
      className="image-placeholder" data-reveal="up"
      aria-label="AI generated content preview"
    >
      <ImageIcon />
    </div>
  )
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M9 7.3v9.4L16.4 12 9 7.3Z" fill="currentColor" />
    </svg>
  )
}

function FolderIcon({ open = false }) {
  return (
    <svg
      className="tree-row__icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d={
          open
            ? 'M3 8.3h7l1.6 2h9.4v7.4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8.3Z'
            : 'M3 6.5h6.5l1.8 2H21v9.2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6.5Z'
        }
        fill="currentColor"
      />
    </svg>
  )
}

function FileIcon() {
  return (
    <svg
      className="tree-row__icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M7 3h7l4 4v14H7V3Z" fill="currentColor" />
      <path
        d="M14 3v5h4"
        fill="none"
        stroke="var(--color-neutral-100)"
        strokeWidth="1.4"
      />
    </svg>
  )
}

function PhpIcon() {
  return (
    <svg viewBox="0 0 96 56" aria-hidden="true" focusable="false">
      <ellipse cx="48" cy="28" rx="44" ry="23" fill="currentColor" />
      <text
        x="48"
        y="38"
        textAnchor="middle"
        className="language-icon__text language-icon__text--dark"
      >
        php
      </text>
    </svg>
  )
}

function PythonIcon() {
  return (
    <svg viewBox="0 0 72 72" aria-hidden="true" focusable="false">
      <path
        d="M35 7c-10 0-15 3.4-15 10.1v8.2h16v3.4H15.1C8.4 28.7 5 33.2 5 42c0 8.9 3.7 14 10.9 14h8.3v-9.8c0-7.7 5.1-12.1 12.2-12.1h14.7c6.2 0 10.9-5.1 10.9-11.7v-5.3C62 10.4 55.7 7 45.3 7H35Zm-7.8 7.2a3.3 3.3 0 1 1 0 6.6 3.3 3.3 0 0 1 0-6.6Z"
        fill="currentColor"
      />
      <path
        d="M37 65c10 0 15-3.4 15-10.1v-8.2H36v-3.4h20.9C63.6 43.3 67 38.8 67 30c0-8.9-3.7-14-10.9-14h-8.3v9.8c0 7.7-5.1 12.1-12.2 12.1H20.9C14.7 37.9 10 43 10 49.6v5.3C10 61.6 16.3 65 26.7 65H37Zm7.8-7.2a3.3 3.3 0 1 1 0-6.6 3.3 3.3 0 0 1 0 6.6Z"
        fill="currentColor"
        opacity="0.78"
      />
    </svg>
  )
}

function ReactIcon() {
  return (
    <svg viewBox="0 0 72 72" aria-hidden="true" focusable="false">
      <circle cx="36" cy="36" r="5.2" fill="currentColor" />
      <ellipse
        cx="36"
        cy="36"
        rx="29"
        ry="11"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />
      <ellipse
        cx="36"
        cy="36"
        rx="29"
        ry="11"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        transform="rotate(60 36 36)"
      />
      <ellipse
        cx="36"
        cy="36"
        rx="29"
        ry="11"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        transform="rotate(120 36 36)"
      />
    </svg>
  )
}

function JavaScriptIcon() {
  return (
    <svg viewBox="0 0 72 72" aria-hidden="true" focusable="false">
      <rect x="10" y="10" width="52" height="52" fill="currentColor" />
      <text
        x="45"
        y="51"
        textAnchor="middle"
        className="language-icon__text language-icon__text--square"
      >
        JS
      </text>
    </svg>
  )
}

function GoIcon() {
  return (
    <svg viewBox="0 0 96 56" aria-hidden="true" focusable="false">
      <path
        d="M8 22h23M2 29h26M10 36h20"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <text x="64" y="38" textAnchor="middle" className="language-icon__text">
        GO
      </text>
    </svg>
  )
}

function RustIcon() {
  return (
    <svg viewBox="0 0 72 72" aria-hidden="true" focusable="false">
      <circle
        cx="36"
        cy="36"
        r="25"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeDasharray="5 5"
      />
      <circle
        cx="36"
        cy="36"
        r="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
      />
      <text x="36" y="45" textAnchor="middle" className="language-icon__text">
        R
      </text>
    </svg>
  )
}

function BugIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.16" />
      <path
        d="M8 10h8M9 7l2 2m4-2-2 2M8 13H5m14 0h-3M8.5 16 6 18m9.5-2 2.5 2M9 10v5a3 3 0 0 0 6 0v-5H9Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function RefactorIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.14" />
      <path
        d="M8 8h6.5a2.5 2.5 0 0 1 0 5H10m0 0 2.5-2.5M10 13l2.5 2.5M16 16H8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ImageIcon() {
  return (
    <svg viewBox="0 0 120 92" aria-hidden="true" focusable="false">
      <rect
        x="16"
        y="14"
        width="88"
        height="64"
        rx="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
      />
      <circle cx="80" cy="34" r="8" fill="currentColor" />
      <path
        d="M25 68 48 47l18 15 11-9 21 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CheckIcon({ isGradient = false }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false" style={{width: 20, height: 20}}>
      {isGradient && (
        <defs>
          <linearGradient id="check-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2DD4BF" />
            <stop offset="100%" stopColor="var(--color-primary-60)" />
          </linearGradient>
        </defs>
      )}
      <circle cx="10" cy="10" r="9" fill={isGradient ? "url(#check-gradient)" : "var(--color-primary-60)"} />
      <path
        d="m6.2 10.2 2.4 2.4 5.2-5.4"
        fill="none"
        stroke="var(--color-neutral-100)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IntellijIcon() {
  return (
    <svg viewBox="0 0 72 72" aria-hidden="true" focusable="false">
      <rect x="13" y="13" width="46" height="46" rx="8" fill="#f25c38" />
      <path d="M13 47 47 13h12v46H13Z" fill="#3b82f6" />
      <rect x="22" y="22" width="28" height="28" fill="var(--color-neutral-100)" />
      <text x="36" y="42" textAnchor="middle" className="ide-badge__text">
        IJ
      </text>
    </svg>
  )
}

function AndroidStudioIcon() {
  return (
    <svg viewBox="0 0 72 72" aria-hidden="true" focusable="false">
      <rect x="13" y="13" width="46" height="46" rx="8" fill="#2dd4bf" />
      <path d="M36 14 57 58H15L36 14Z" fill="#4f46e5" />
      <rect x="24" y="28" width="24" height="22" rx="4" fill="var(--color-neutral-10)" />
      <text x="36" y="45" textAnchor="middle" className="ide-badge__text">
        AI
      </text>
    </svg>
  )
}

function VsCodeIcon() {
  return (
    <svg viewBox="0 0 72 72" aria-hidden="true" focusable="false">
      <path
        d="M52 11 24 32 12 23l-6 6 13 10L6 49l6 6 12-9 28 21 14-7V18L52 11Z"
        fill="#32a3ff"
      />
      <path d="M52 24v24L32 36l20-12Z" fill="#1271c4" />
    </svg>
  )
}

function PycharmIcon() {
  return (
    <svg viewBox="0 0 72 72" aria-hidden="true" focusable="false">
      <rect x="13" y="13" width="46" height="46" rx="8" fill="#81f64f" />
      <path d="M13 13h46L35 36 13 59V13Z" fill="#10b981" />
      <rect x="22" y="22" width="28" height="28" fill="var(--color-neutral-100)" />
      <text x="36" y="42" textAnchor="middle" className="ide-badge__text">
        PC
      </text>
    </svg>
  )
}

export default Hero
