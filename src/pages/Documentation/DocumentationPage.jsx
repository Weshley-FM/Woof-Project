import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer.jsx';
import Navbar from '../../components/Navbar/Navbar.jsx';

const SECTIONS = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: (
      <div className="rounded-[1.75rem] bg-[#0a0a0a] border border-[#333] p-8 sm:p-10">
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
      </div>
    )
  },
  {
    id: 'how-it-works',
    title: 'How It Works',
    content: (
      <div className="flex flex-col gap-6">
        <div className="rounded-[1.75rem] bg-[#0a0a0a] border border-[#333] p-8 sm:p-10">
          <h2 className="font-sans text-[20px] text-white mb-6">2. The AI Builds the File</h2>
          <div className="font-sans text-[15px] leading-relaxed text-[#e5e5e5] space-y-4">
            <p>The system processes your prompt and generates:</p>
            <ul className="list-disc pl-5 space-y-2 text-[#a3a3a3]">
              <li>folder structure</li>
              <li>full code</li>
              <li>reusable components</li>
            </ul>
          </div>
        </div>
        <div className="rounded-[1.75rem] bg-[#0a0a0a] border border-[#333] p-8 sm:p-10">
          <h2 className="font-sans text-[20px] text-white mb-6">3. Review & Edit</h2>
          <div className="font-sans text-[15px] leading-relaxed text-[#e5e5e5] space-y-4">
            <p>You can add follow-up commands to refine the generated code, making it easy to fix bugs or add new features instantly.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'project-requirements',
    title: 'Project Requirements',
    content: (
      <div className="rounded-[1.75rem] bg-[#0a0a0a] border border-[#333] p-8 sm:p-10">
        <h2 className="font-sans text-[20px] text-white mb-6">Project Requirements</h2>
        <div className="font-sans text-[15px] leading-relaxed text-[#e5e5e5] space-y-4">
          <p>Understand the prerequisites for setting up the AI code generation tools in your repository.</p>
        </div>
      </div>
    )
  },
  {
    id: 'supported-languages',
    title: 'Supported Languages',
    content: (
      <div className="rounded-[1.75rem] bg-[#0a0a0a] border border-[#333] p-8 sm:p-10">
        <h2 className="font-sans text-[20px] text-white mb-6">Supported Languages</h2>
        <div className="font-sans text-[15px] leading-relaxed text-[#e5e5e5] space-y-4">
          <p>We support a wide variety of programming languages including JavaScript, Python, Go, Rust, Java, and many more.</p>
        </div>
      </div>
    )
  },
  {
    id: 'generate-code',
    title: 'Generate Code',
    content: (
      <div className="rounded-[1.75rem] bg-[#0a0a0a] border border-[#333] p-8 sm:p-10">
        <h2 className="font-sans text-[20px] text-white mb-6">Generate Code</h2>
        <div className="font-sans text-[15px] leading-relaxed text-[#e5e5e5] space-y-4">
          <p>Learn how to craft the perfect prompts to generate high-quality code snippets or full architectures.</p>
        </div>
      </div>
    )
  },
  {
    id: 'terminal-chat-commands',
    title: 'Terminal Chat Commands',
    content: (
      <div className="rounded-[1.75rem] bg-[#0a0a0a] border border-[#333] p-8 sm:p-10">
        <h2 className="font-sans text-[20px] text-white mb-6">Terminal Chat Commands</h2>
        <div className="font-sans text-[15px] leading-relaxed text-[#e5e5e5] space-y-4">
          <p>Discover useful CLI commands that integrate seamlessly into your terminal environment.</p>
        </div>
      </div>
    )
  },
  {
    id: 'refactor-fix-code',
    title: 'Refactor & Fix Code',
    content: (
      <div className="rounded-[1.75rem] bg-[#0a0a0a] border border-[#333] p-8 sm:p-10">
        <h2 className="font-sans text-[20px] text-white mb-6">Refactor & Fix Code</h2>
        <div className="font-sans text-[15px] leading-relaxed text-[#e5e5e5] space-y-4">
          <p>Use the AI to quickly identify code smells, optimize performance, and refactor legacy systems.</p>
        </div>
      </div>
    )
  },
  {
    id: 'ai-suggestions',
    title: 'AI Suggestions',
    content: (
      <div className="rounded-[1.75rem] bg-[#0a0a0a] border border-[#333] p-8 sm:p-10">
        <h2 className="font-sans text-[20px] text-white mb-6">AI Suggestions</h2>
        <div className="font-sans text-[15px] leading-relaxed text-[#e5e5e5] space-y-4">
          <p>Get inline suggestions as you type to autocomplete complex logic and boilerplate.</p>
        </div>
      </div>
    )
  }
];

export default function DocumentationPage() {
  const [activeSectionId, setActiveSectionId] = useState(SECTIONS[0].id);
  const activeSection = SECTIONS.find(s => s.id === activeSectionId) || SECTIONS[0];
  return (
    <>
      <Navbar />
      <main className="app-content relative z-10 pb-24 pt-8 lg:pb-32 lg:pt-10">
        {/* Glow effect positioned at the absolute top-left of the page */}
        <div className="absolute top-0 left-0 h-[1200px] w-[450px] -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-primary-60/50 blur-[100px] opacity-100 pointer-events-none z-0" />

        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 relative z-10" data-reveal="up">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center gap-6 mt-4">
            <h1 className="font-mono text-[56px] leading-[1.05] font-normal text-white sm:text-[64px] lg:text-[72px]">
              Documentation
            </h1>
            <p className="max-w-xl font-sans text-[17px] leading-8 text-natural-70">
              Integrate the AI Chat API into your product—fast, reliable, and secure for production use.
            </p>
          </div>

          <div className="mt-24 flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full md:w-72 shrink-0 rounded-[1.75rem] bg-[#111] p-8 flex flex-col gap-6 self-start">
              <h3 className="font-sans text-[18px] font-semibold text-white">Main Sections</h3>
              <nav className="flex flex-col gap-5 mt-2">
                {SECTIONS.map((section) => (
                  <button
                    key={section.id}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveSectionId(section.id);
                    }}
                    className={`text-left font-sans text-[14px] transition-colors ${
                      activeSectionId === section.id 
                        ? "font-bold text-white" 
                        : "text-natural-70 hover:text-white"
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>

            {/* Content */}
            <div key={activeSection.id} className="flex-1 flex flex-col gap-6 animate-fade-in-up">
              {activeSection.content}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
