import './Hero.css'

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
      <section className="hero" id="home">
        <div className="landing-container hero__inner">
          <div className="hero__content">
            <h1 className="hero__heading font-mono text-[56px] leading-[1.05] sm:text-[64px] lg:text-[72px] text-white">
              Code Faster,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-primary-60">Debug Smarter.</span>
            </h1>
            <p className="hero__description font-sans text-[17px] text-neutral-400">
              Your AI-powered pair programmer. Generate functions, fix bugs, and
              refactor code in seconds.
            </p>
            <div className="hero__cta" data-reveal="up">
              <button className="button-primary" type="button">
                Start Free Coding
              </button>
              <a href="#how-it-works" className="hero__video-link">
                <span className="hero__video-icon">
                  <PlayIcon />
                </span>
                <span>Watch a Video</span>
              </a>
            </div>
            <MetricPair className="hero__metrics" />
          </div>

          <div
            className="hero__visual"
            aria-label="AI code generation preview"
          >
            <PromptCard />
            <div className="hero__visual-grid">
              <FileTree />
              <CodePreview />
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

      <section
        className="pricing-section"
        id="pricing"
        aria-labelledby="pricing-title"
      >
        <div className="landing-container pricing-section__intro">
          <h2 className="section-title font-mono text-[40px] sm:text-[48px] text-white" id="pricing-title" data-reveal="up">
            Unlock the Power
            <br />
            of <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-primary-60">AI with Woof</span>
          </h2>
          <p className="section-copy">
            We offer tailored pricing plans designed to meet the unique needs of
            your business.
          </p>
        </div>

        <div className="landing-container pricing-section__plans">
          {planCards.map((plan, index) => (
            <article
              className={`plan-card${plan.popular ? ' plan-card--popular' : ''}`} data-reveal="up"
              key={plan.name}
              style={{ '--reveal-delay': `${index * 100}ms` }}
            >
              {plan.popular && (
                <span className="plan-card__badge">Most Popular</span>
              )}
              <div className="plan-card__header">
                <div>
                  <h3>{plan.name}</h3>
                  <p>{plan.subtitle}</p>
                </div>
                <div
                  className="plan-card__price"
                  aria-label={`$${plan.price} per month`}
                >
                  <span>$</span>
                  {plan.price}
                  <small>/mo</small>
                </div>
              </div>
              <div className="plan-card__features-heading">
                <span>Features</span>
                <p>Everything in our basic plan...</p>
              </div>
              <ul className="plan-card__features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="button-primary plan-card__button" type="button">
                Get This Plan
              </button>
            </article>
          ))}
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

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <circle cx="10" cy="10" r="9" fill="currentColor" />
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
