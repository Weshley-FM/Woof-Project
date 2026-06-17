import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';

export default function RegisterPage() {
  return (
    <>
      <Navbar />
      <main className="app-content relative z-10 pb-24 pt-16 lg:pb-32 lg:pt-20">
        <div className="w-full flex flex-col font-sans text-white">
          <div className="flex-1 flex items-center justify-center p-6 md:p-12">
            <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-12 lg:gap-16 mx-auto items-center" data-reveal="up">
              
              {/* Left Column - Form */}
              <div className="flex-1 flex flex-col justify-center w-full lg:items-end">
                <div className="w-full max-w-[480px]">
                  <h1 className="font-mono text-[40px] sm:text-[48px] lg:text-[56px] leading-[1.1] mb-4">
                    Create<br />Your Account
                  </h1>
                  <p className="text-[#a3a3a3] text-[15px] mb-10">
                    Start building faster with your personal workspace.
                  </p>

                  <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="flex flex-col sm:flex-row gap-5">
                      <div className="flex flex-col gap-2 flex-1">
                        <label className="text-[14px] text-[#e5e5e5]">Full Name</label>
                        <input 
                          type="text" 
                          placeholder="Name" 
                          className="bg-[#1a1a1a] border border-white/5 rounded-xl px-4 py-3.5 text-[15px] text-white placeholder-white/30 focus:outline-none focus:border-primary-60/50 transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-2 flex-1">
                        <label className="text-[14px] text-[#e5e5e5]">Email</label>
                        <input 
                          type="email" 
                          placeholder="admin@gmail.com" 
                          className="bg-[#1a1a1a] border border-white/5 rounded-xl px-4 py-3.5 text-[15px] text-white placeholder-white/30 focus:outline-none focus:border-primary-60/50 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[14px] text-[#e5e5e5]">Password</label>
                      <div className="relative">
                        <input 
                          type="password" 
                          placeholder="Password" 
                          className="w-full bg-[#1a1a1a] border border-white/5 rounded-xl px-4 py-3.5 text-[15px] text-white placeholder-white/30 focus:outline-none focus:border-primary-60/50 transition-colors"
                        />
                        <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[14px] text-[#e5e5e5]">Confirm Password</label>
                      <div className="relative">
                        <input 
                          type="password" 
                          placeholder="Password" 
                          className="w-full bg-[#1a1a1a] border border-white/5 rounded-xl px-4 py-3.5 text-[15px] text-white placeholder-white/30 focus:outline-none focus:border-primary-60/50 transition-colors"
                        />
                        <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <a href="#" className="text-[13px] text-[#e5e5e5] hover:text-white transition-colors">Forgot Password</a>
                    </div>

                    <button type="submit" className="w-full bg-primary-60 text-black font-medium text-[16px] py-3.5 rounded-xl hover:bg-primary-60/90 transition-colors mt-2">
                      Sign up
                    </button>

                    <div className="flex items-center gap-4 my-2">
                      <div className="h-px bg-white/10 flex-1"></div>
                      <span className="text-[12px] text-white/40 font-medium tracking-wider">OR</span>
                      <div className="h-px bg-white/10 flex-1"></div>
                    </div>

                    <button type="button" className="w-full bg-transparent border border-white/20 text-white font-medium text-[15px] py-3.5 rounded-xl hover:bg-white/5 transition-colors flex items-center justify-center gap-3">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                      Continue with Github
                    </button>

                    <div className="text-center mt-4">
                      <span className="text-[14px] text-white/50">Already have an Account? </span>
                      <Link to="/login" className="text-[14px] text-primary-60 hover:underline font-medium">Log In</Link>
                    </div>
                  </form>
                </div>
              </div>

              {/* Right Column - Image/Gradient */}
              <div className="hidden lg:flex flex-1 h-[700px] xl:h-[800px] w-full justify-start">
                <div className="w-full max-w-[480px] h-full rounded-[2.5rem] bg-gradient-to-br from-teal-400 to-primary-60 relative overflow-hidden flex flex-col items-center justify-center text-center px-12 shadow-2xl">
                  
                  {/* Subtle pattern background */}
                  <div className="absolute inset-0 opacity-[0.06] flex items-center justify-center pointer-events-none overflow-hidden">
                    <div className="w-[1000px] h-[300px] rounded-full border-[80px] border-black absolute -top-20 -left-20 rotate-45"></div>
                    <div className="w-[1000px] h-[300px] rounded-full border-[80px] border-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                    <div className="w-[1000px] h-[300px] rounded-full border-[80px] border-black absolute -bottom-20 -right-20 rotate-45"></div>
                  </div>

                  <div className="relative z-10 max-w-lg">
                    <h2 className="text-[40px] font-sans font-medium text-neutral-100 mb-6">
                      Get Started With Us
                    </h2>
                    <p className="text-[16px] leading-relaxed text-neutral-100/90">
                      Sign up to start generating code instantly, organize your
                      workflow, and seamlessly AI into your development process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
