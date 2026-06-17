import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../assets/logo.svg'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Integration', href: '/integration' },
  { label: 'Documentation', href: '/#how-it-works' },
]

function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar__inner" aria-label="Primary navigation" data-reveal="fade">
        <Link className="navbar__brand" to="/" aria-label="Woof home">
          <img src={logo} alt="" className="navbar__logo" />
        </Link>

        <ul className="navbar__menu">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <Link className="navbar__button" to="/login">
          Get Started
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
