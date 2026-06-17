import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Features from './components/Features.jsx'
import Integration from './components/Integration.jsx'
import SplashScreen from './components/SplashScreen.jsx'
import useScrollReveal from './hooks/useScrollReveal.js'
import './App.css'

function App() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    // Longer timeout to allow the dynamic text to cycle a bit
    const timer = window.setTimeout(() => setIsReady(true), 2800)
    return () => window.clearTimeout(timer)
  }, [])

  useScrollReveal(isReady)

  return (
    <div className={`app-shell${isReady ? ' app-shell--ready' : ''}`}>
      <SplashScreen isReady={isReady} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/integration" element={<Integration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
