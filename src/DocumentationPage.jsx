import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'

export default function DocumentationPage() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  }
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-natural-100 text-natural-10 font-sans">
      {/* Glow effect positioned at the absolute top-left of the page */}
      <div className="absolute top-0 left-0 h-[1200px] w-[450px] -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-[#bfff00]/50 blur-[100px] opacity-100 pointer-events-none z-0" />

      <Navbar />

      <main className="relative z-10 pb-24 pt-8 lg:pb-32 lg:pt-10">
        <motion.div 
          className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 relative z-10"
          variants={container}
          initial="hidden"
          animate="show"
        >
          
          {/* Header */}
          <motion.div variants={item} className="flex flex-col items-center text-center gap-6 mt-4">
            <h1 className="font-mono text-[56px] leading-[1.05] font-normal text-white sm:text-[64px] lg:text-[72px]">
              Documentation
            </h1>
            <p className="max-w-xl font-sans text-[17px] leading-8 text-natural-70">
              Integrate the AI Chat API into your product—fast, reliable, and secure for production use.
            </p>
          </motion.div>

          <div className="mt-24 flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <motion.div variants={item} className="w-full md:w-72 shrink-0 rounded-[1.75rem] bg-[#111] p-8 flex flex-col gap-6 self-start">
              <h3 className="font-sans text-[18px] font-semibold text-white">Main Sections</h3>
              <nav className="flex flex-col gap-5 mt-2">
                <a href="#" className="font-sans text-[14px] font-bold text-white transition-colors">Introduction</a>
                <a href="#" className="font-sans text-[14px] text-natural-70 hover:text-white transition-colors">How It Works</a>
                <a href="#" className="font-sans text-[14px] text-natural-70 hover:text-white transition-colors">Project Requirements</a>
                <a href="#" className="font-sans text-[14px] text-natural-70 hover:text-white transition-colors">Supported Languages</a>
                <a href="#" className="font-sans text-[14px] text-natural-70 hover:text-white transition-colors">Generate Code</a>
                <a href="#" className="font-sans text-[14px] text-natural-70 hover:text-white transition-colors">Terminal Chat Commands</a>
                <a href="#" className="font-sans text-[14px] text-natural-70 hover:text-white transition-colors">Refactor & Fix Code</a>
                <a href="#" className="font-sans text-[14px] text-natural-70 hover:text-white transition-colors">AI Suggestions</a>
              </nav>
            </motion.div>

            {/* Content */}
            <div className="flex-1 flex flex-col gap-6">
              {/* Card 1 */}
              <motion.div variants={item} className="rounded-[1.75rem] bg-[#0a0a0a] border border-[#333] p-8 sm:p-10">
                <h2 className="font-sans text-[20px] text-white mb-6">1. Introduction</h2>
                <div className="font-sans text-[15px] leading-relaxed text-[#e5e5e5] space-y-4">
                  <p>
                    The AI Code Generator helps you build software faster using natural language prompts.
                    Describe what you want and the system generates full files, components, or entire project structures.
                  </p>
                  <p>It supports:</p>
                  <ul className="list-disc pl-5 space-y-2 text-[#a3a3a3]">
                    <li>Frontend frameworks (React, Vue, Next.js)</li>
                    <li>Backend stacks (Node.js, Laravel, Django, Go)</li>
                    <li>Mobile apps (Flutter, React Native)</li>
                    <li>Database schemas</li>
                    <li>API scaffolding</li>
                  </ul>
                  <p>
                    Whether you're prototyping or shipping production code, this tool accelerates the entire workflow.
                  </p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div variants={item} className="rounded-[1.75rem] bg-[#0a0a0a] border border-[#333] p-8 sm:p-10">
                <h2 className="font-sans text-[20px] text-white mb-6">2. The AI Builds the File</h2>
                <div className="font-sans text-[15px] leading-relaxed text-[#e5e5e5] space-y-4">
                  <p>The system processes your prompt and generates:</p>
                  <ul className="list-disc pl-5 space-y-2 text-[#a3a3a3]">
                    <li>folder structure</li>
                    <li>full code</li>
                    <li>reusable components</li>
                  </ul>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div variants={item} className="rounded-[1.75rem] bg-[#0a0a0a] border border-[#333] p-8 sm:p-10">
                <h2 className="font-sans text-[20px] text-white mb-6">3. Review & Edit</h2>
                <div className="font-sans text-[15px] leading-relaxed text-[#e5e5e5] space-y-4">
                  <p>You can add follow-up commands:</p>
                </div>
              </motion.div>

              {/* Card 4 */}
              <motion.div variants={item} className="rounded-[1.75rem] bg-[#0a0a0a] border border-[#333] p-8 sm:p-10">
                <h2 className="font-sans text-[20px] text-white mb-6">4. Review & Edit</h2>
                <div className="font-sans text-[15px] leading-relaxed text-[#e5e5e5] space-y-4">
                  <p>You can add follow-up commands:</p>
                </div>
              </motion.div>
            </div>
          </div>

        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
