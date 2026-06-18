import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './SplashScreen.css'
import logo from '../../assets/Logo.png'

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
    <AnimatePresence>
      {!isReady && (
        <motion.div 
          className="splash-screen" 
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
          aria-hidden="true"
        >
          <div className="splash-screen__frame">
            <motion.img 
              layoutId="main-logo" 
              className="splash-screen__logo" 
              src={logo} 
              alt="" 
            />
            <p className="splash-screen__text">{LOADING_TEXTS[textIndex]}</p>
            <div className="splash-screen__bar">
              <span />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SplashScreen
