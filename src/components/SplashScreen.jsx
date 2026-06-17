import { useState, useEffect } from 'react'
import './SplashScreen.css'
import logo from '../assets/logo.svg'

const LOADING_TEXTS = [
  'Preparing your workspace...',
  'Analyzing codebase...',
  'Detecting bugs...',
  'Optimizing performance...',
  'Starting engines...',
]

function SplashScreen({ isReady }) {
  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    if (isReady) return

    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % LOADING_TEXTS.length)
    }, 450)

    return () => clearInterval(interval)
  }, [isReady])

  return (
    <div className={`splash-screen ${isReady ? 'splash-screen--hiding' : ''}`} aria-hidden="true">
      <div className="splash-screen__frame">
        <img className="splash-screen__logo" src={logo} alt="" />
        <p className="splash-screen__text">{LOADING_TEXTS[textIndex]}</p>
        <div className="splash-screen__bar">
          <span />
        </div>
      </div>
    </div>
  )
}

export default SplashScreen
