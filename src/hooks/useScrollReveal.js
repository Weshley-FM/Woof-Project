import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function useScrollReveal(isReady) {
  const location = useLocation()

  useEffect(() => {
    if (!isReady) {
      return undefined
    }

    const revealItems = Array.from(document.querySelectorAll('[data-reveal]'))

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      revealItems.forEach((item) => item.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        rootMargin: '0px 0px 0px 0px',
        threshold: 0.1,
      },
    )

    revealItems.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [isReady, location.pathname])
}

export default useScrollReveal
