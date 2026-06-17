import './Footer.css'

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: <FacebookIcon />,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/',
    icon: <TwitterIcon />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: <LinkedInIcon />,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/',
    icon: <YouTubeIcon />,
  },
]

function Footer() {
  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <footer className="site-footer" data-reveal="up">
      <div className="site-footer__main">
        <div className="site-footer__inner site-footer__top">
          <section
            className="site-footer__brand"
            aria-labelledby="footer-heading"
          >
            <h2 id="footer-heading" className="site-footer__heading">
              Woof - AI &amp; Code
              <br />
              Generator Website
            </h2>

            <div className="site-footer__newsletter" data-reveal="left">
              <h3>Subscribe newsletter</h3>
              <p>Sign up and get 15% discount on your first purchase</p>

              <form
                className="site-footer__form"
                aria-label="Subscribe newsletter"
                onSubmit={handleSubmit}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="youremail@gmail.com"
                  aria-label="Email address"
                />
                <button type="submit">Submit</button>
              </form>
            </div>
          </section>

          <section className="site-footer__details" aria-label="Company details">
            <p className="site-footer__description">
              Offers cutting-edge solutions designed to help businesses leverage
              the power of artificial intelligence and machine learning. Whether
              you're just starting your AI journey or looking to scale existing
              capabilities, Woof provides tailored services.
            </p>

            <address className="site-footer__contact">
              <div className="site-footer__contact-item">
                <MapPinIcon />
                <span>
                  Woof Company, 234 East,
                  <br />
                  19th Street, St. louis 10001
                </span>
              </div>

              <a className="site-footer__contact-item" href="tel:+11234567890">
                <PhoneIcon />
                <span>(123) 456-7890</span>
              </a>
            </address>
          </section>
        </div>
      </div>

      <div className="site-footer__divider" />

      <div className="site-footer__bottom">
        <div className="site-footer__inner site-footer__bottom-inner">
          <div className="site-footer__social">
            <span>Social Media</span>
            <nav aria-label="Social media">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  aria-label={link.name}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </nav>
          </div>

          <p className="site-footer__copyright">
            Copyright &copy; 2024 &bull; Woof Company.
          </p>
        </div>
      </div>
    </footer>
  )
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M12 22s7-6.44 7-13A7 7 0 0 0 5 9c0 6.56 7 13 7 13Z"
        fill="currentColor"
      />
      <circle cx="12" cy="9" r="2.4" fill="var(--color-neutral-100)" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M19.8 15.75 16 14.13a1.45 1.45 0 0 0-1.64.42l-1.34 1.64a13.2 13.2 0 0 1-5.2-5.2l1.64-1.34A1.45 1.45 0 0 0 9.88 8L8.25 4.2A1.45 1.45 0 0 0 6.58 3.36L3.05 4.17A1.45 1.45 0 0 0 2 5.58 16.43 16.43 0 0 0 18.42 22a1.45 1.45 0 0 0 1.41-1.05l.81-3.53a1.45 1.45 0 0 0-.84-1.67Z"
        fill="currentColor"
      />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M20.9 2H3.1A1.1 1.1 0 0 0 2 3.1v17.8A1.1 1.1 0 0 0 3.1 22h9.58v-7.75h-2.6v-3.02h2.6V9c0-2.59 1.58-4 3.89-4 1.1 0 2.05.08 2.33.12v2.7h-1.6c-1.25 0-1.5.6-1.5 1.48v1.93h3l-.39 3.02H15.8V22h5.1a1.1 1.1 0 0 0 1.1-1.1V3.1A1.1 1.1 0 0 0 20.9 2Z"
        fill="currentColor"
      />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M23 5.92c-.78.35-1.62.58-2.5.69a4.37 4.37 0 0 0 1.92-2.41 8.71 8.71 0 0 1-2.76 1.05 4.35 4.35 0 0 0-7.52 2.98c0 .34.04.67.11.99a12.34 12.34 0 0 1-8.96-4.54 4.35 4.35 0 0 0 1.35 5.8 4.32 4.32 0 0 1-1.97-.54v.05a4.35 4.35 0 0 0 3.49 4.27 4.34 4.34 0 0 1-1.96.07 4.36 4.36 0 0 0 4.07 3.02A8.73 8.73 0 0 1 1 19.25a12.3 12.3 0 0 0 6.67 1.95c8 0 12.37-6.63 12.37-12.37v-.56A8.84 8.84 0 0 0 23 5.92Z"
        fill="currentColor"
      />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"
        fill="currentColor"
      />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M23.5 6.2a3 3 0 0 0-2.11-2.12C19.52 3.58 12 3.58 12 3.58s-7.52 0-9.39.5A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.11 2.12c1.87.5 9.39.5 9.39.5s7.52 0 9.39-.5a3 3 0 0 0 2.11-2.12A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8ZM9.6 15.57V8.43L15.82 12 9.6 15.57Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default Footer
