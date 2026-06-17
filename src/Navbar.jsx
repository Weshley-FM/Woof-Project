import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import logoProduct from './assets/Logo.png'

export default function Navbar({ showLogo = true }) {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="relative z-30 mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16 py-6">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 min-w-[120px]">
          {showLogo && (
            <motion.img 
              layoutId="main-logo"
              src={logoProduct} 
              alt="Logo" 
              className="h-6 w-auto block" 
            />
          )}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-10 font-sans text-[16px] md:flex">
          <Link to="/" className={`transition-colors hover:text-white ${location.pathname === '/' ? 'text-white font-medium' : 'text-natural-70'}`}>Home</Link>
          <Link to="/features" className={`transition-colors hover:text-white ${location.pathname === '/features' ? 'text-white font-medium' : 'text-natural-70'}`}>Features</Link>
          <Link to="/pricing" className={`transition-colors hover:text-white ${location.pathname === '/pricing' ? 'text-white font-medium' : 'text-natural-70'}`}>Pricing</Link>
          <Link to="/integrations" className={`transition-colors hover:text-white ${location.pathname === '/integrations' ? 'text-white font-medium' : 'text-natural-70'}`}>Integration</Link>
          <Link to="/documentation" className={`transition-colors hover:text-white ${location.pathname === '/documentation' ? 'text-white font-medium' : 'text-natural-70'}`}>Documentation</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/login" className="hidden sm:flex rounded-lg bg-[#bfff00] px-6 py-2 text-[16px] font-medium text-black font-sans hover:bg-[#bfff00]/90 transition-colors">
            Get Started
          </Link>
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-white/10 p-6 flex flex-col gap-4 shadow-xl md:hidden">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className={`transition-colors hover:text-white ${location.pathname === '/' ? 'text-white font-medium' : 'text-natural-70'}`}>Home</Link>
          <Link to="/features" onClick={() => setIsMenuOpen(false)} className={`transition-colors hover:text-white ${location.pathname === '/features' ? 'text-white font-medium' : 'text-natural-70'}`}>Features</Link>
          <Link to="/pricing" onClick={() => setIsMenuOpen(false)} className={`transition-colors hover:text-white ${location.pathname === '/pricing' ? 'text-white font-medium' : 'text-natural-70'}`}>Pricing</Link>
          <Link to="/integrations" onClick={() => setIsMenuOpen(false)} className={`transition-colors hover:text-white ${location.pathname === '/integrations' ? 'text-white font-medium' : 'text-natural-70'}`}>Integration</Link>
          <Link to="/documentation" onClick={() => setIsMenuOpen(false)} className={`transition-colors hover:text-white ${location.pathname === '/documentation' ? 'text-white font-medium' : 'text-natural-70'}`}>Documentation</Link>
          <div className="flex flex-col gap-3 mt-2">
            <Link to="/login" onClick={() => setIsMenuOpen(false)} className="rounded-lg bg-[#bfff00] px-6 py-3 text-center text-[16px] font-medium text-black font-sans w-full hover:bg-[#bfff00]/90 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
