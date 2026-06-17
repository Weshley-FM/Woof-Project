import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import Footer from './Footer.jsx'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="app-content relative z-10" aria-label="Page content">
        {/* Glow effect */}
        <div className="absolute -left-1/4 -top-1/4 h-[900px] w-[900px] rounded-full bg-primary-60/40 blur-[150px] opacity-100 pointer-events-none" />
        <div className="absolute -left-1/4 top-0 h-[700px] w-[700px] rounded-full bg-[#2DD4BF]/30 blur-[120px] opacity-90 pointer-events-none" />
        
        <Hero />
      </main>
      <Footer />
    </>
  )
}
