import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import Footer from './Footer.jsx'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="app-content" aria-label="Page content">
        <Hero />
      </main>
      <Footer />
    </>
  )
}
