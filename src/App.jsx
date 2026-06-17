import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import Features from './pages/Features/Features.jsx'
import Integration from './pages/Integrations/Integration.jsx'
import SplashScreen from './components/SplashScreen/SplashScreen.jsx'
import PricingPage from './pages/Pricing/PricingPage.jsx'
import DocumentationPage from './pages/Documentation/DocumentationPage.jsx'
import RegisterPage from './pages/Register/RegisterPage.jsx'
import './App.css'

function App() {
  const [isReady, setIsReady] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // Longer timeout to allow the dynamic text to cycle a bit
    const timer = window.setTimeout(() => setIsReady(true), 2800)
    return () => window.clearTimeout(timer)
  }, [])

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

  return (
    <div className={`app-shell${isReady ? ' app-shell--ready' : ''}`}>
      <SplashScreen isReady={isReady} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/integration" element={<Integration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/documentation" element={<DocumentationPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  )
}

export default App
