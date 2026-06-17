import { useState } from 'react';
import './Login.css';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import logo from '../assets/logo.svg';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Navbar />
      <main className="app-content login-main">
        <div className="login-content">
          
          {/* Left Column: Form */}
          <div className="login-form-wrapper" data-reveal="left" style={{ '--reveal-delay': '200ms' }}>
            <h1 className="login-title">Welcome Back</h1>
            <p className="login-subtitle">Please login your account</p>

            <form className="login-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="admin@gmail.com" 
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="password-input-wrapper">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    id="password" 
                    placeholder="Password" 
                    required 
                  />
                  <button 
                    type="button" 
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    <svg xmlns="http://www.000000.com/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {showPassword ? (
                        <>
                          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                          <line x1="1" y1="1" x2="23" y2="23"></line>
                        </>
                      ) : (
                        <>
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </>
                      )}
                    </svg>
                  </button>
                </div>
              </div>

              <a href="#forgot" className="login-forgot">Forgot Password</a>

              <button type="submit" className="btn-primary">Sign up</button>
            </form>

            <div className="login-divider">OR</div>

            <button type="button" className="btn-github">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Continue with Github
            </button>

            <p className="login-footer-text">
              Didn't have an Account? <a href="#signup">Sign-Up</a>
            </p>
          </div>

          {/* Right Column: Banner */}
          <div className="login-banner" data-reveal="right" style={{ '--reveal-delay': '400ms' }}>
            <div className="login-banner-pattern">
              {/* Add a few logos to act as pattern */}
              <img src={logo} alt="" style={{ width: '150px', opacity: 0.2, transform: 'rotate(15deg)' }} />
              <img src={logo} alt="" style={{ width: '200px', opacity: 0.1, transform: 'rotate(-10deg)', position: 'absolute', top: '-50px', left: '-50px' }} />
              <img src={logo} alt="" style={{ width: '250px', opacity: 0.15, transform: 'rotate(25deg)', position: 'absolute', bottom: '-80px', right: '-40px' }} />
              <img src={logo} alt="" style={{ width: '120px', opacity: 0.1, transform: 'rotate(-5deg)', position: 'absolute', top: '40%', left: '10%' }} />
            </div>
            
            <h2>Welcome Back</h2>
            <p>Sign in to access your personalized workspace, manage your projects, and pick up right where you left off.</p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
