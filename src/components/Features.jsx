import './Features.css';
import '../components/Hero.css'; // Reuse some Hero components CSS (PromptCard, CodePreview, FileTree)
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

const codeRows = [
  { number: '1', parts: [{ text: '<?php' }] },
  { number: '2', parts: [] },
  {
    number: '3',
    parts: [
      { text: 'namespace ', tone: 'keyword' },
      { text: 'App\\Http\\Navbar;', tone: 'accent' },
    ],
  },
  {
    number: '4',
    parts: [
      { text: 'use ', tone: 'keyword' },
      { text: 'App\\Javascript;', tone: 'accent' },
    ],
  },
  {
    number: '5',
    parts: [
      { text: 'use ', tone: 'keyword' },
      { text: 'Illuminate\\Http\\Request;', tone: 'accent' },
    ],
  },
  { number: '6', parts: [] },
  {
    number: '7',
    parts: [
      { text: 'class ', tone: 'keyword' },
      { text: 'ReportController ', tone: 'accent' },
      { text: 'extends Controller', tone: 'keyword' },
    ],
  },
  { number: '8', parts: [{ text: '{' }] },
  { number: '9', parts: [] },
  {
    number: '10',
    parts: [
      { text: 'public ', tone: 'keyword' },
      { text: 'function ', tone: 'keyword' },
      { text: 'list()' },
    ],
  },
  { number: '11', parts: [{ text: '{' }] },
  { number: '12', parts: [] },
  { number: '13', parts: [] },
  { number: '14', parts: [] },
  { number: '15', parts: [] },
];

function PromptCard({ text }) {
  return (
    <div className="prompt-card" data-reveal="fade">
      {text}
    </div>
  );
}

function TreeRow({ label, open = false, file = false, indent = 0 }) {
  return (
    <div className={`tree-row tree-row--indent-${indent}`}>
      {!file && <span className="tree-row__chevron">{open ? 'v' : '>'}</span>}
      {file ? <FileIcon /> : <FolderIcon open={open} />}
      <span>{label}</span>
    </div>
  );
}

function FileTree() {
  return (
    <div className="file-card" data-reveal="left">
      <TreeRow label="Folder" />
      <TreeRow label="website" open />
      <TreeRow label="Feature" indent={1} />
      <TreeRow label="add-ons" indent={1} />
      <TreeRow label="helpers" indent={1} />
      <TreeRow label="http" indent={1} open />
      <TreeRow label="Javascript" indent={1} open />
      <TreeRow label="Navbar.php" indent={2} file />
      <TreeRow label="Login.php" indent={2} file />
    </div>
  );
}

function CustomCodePreview({ rows, copyButton = false, highlightRed = null, highlightGreen = null }) {
  return (
    <div className="code-card" data-reveal="right">
      {copyButton && (
        <button className="code-card__copy" type="button">
          Copy
        </button>
      )}
      {rows.map((row) => {
        let rowClass = 'code-card__row';
        if (highlightRed === row.number) rowClass += ' code-card-row-red';
        if (highlightGreen === row.number) rowClass += ' code-card-row-green';

        return (
          <div className={rowClass} key={row.number}>
            <span className="code-card__number">{row.number}</span>
            <code>
              {row.parts.map((part, index) => (
                <span
                  className={
                    part.tone ? `code-token code-token--${part.tone}` : 'code-token'
                  }
                  key={`${row.number}-${index}`}
                >
                  {part.text}
                </span>
              ))}
            </code>
          </div>
        );
      })}
      <div className="code-card__ghost-lines" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

function FolderIcon({ open = false }) {
  return (
    <svg className="tree-row__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d={open ? 'M3 8.3h7l1.6 2h9.4v7.4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8.3Z' : 'M3 6.5h6.5l1.8 2H21v9.2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6.5Z'} fill="currentColor" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg className="tree-row__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M7 3h7l4 4v14H7V3Z" fill="currentColor" />
      <path d="M14 3v5h4" fill="none" stroke="var(--color-neutral-100)" strokeWidth="1.4" />
    </svg>
  );
}

function BigCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M5 13l4 4L19 7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Features() {
  return (
    <>
      <Navbar />

      <main className="app-content relative z-10" aria-label="Features content">
        {/* Glow effect */}
        <div className="absolute -left-1/4 -top-1/4 h-[900px] w-[900px] rounded-full bg-primary-60/40 blur-[150px] opacity-100 pointer-events-none" />
        <div className="absolute -left-1/4 top-0 h-[700px] w-[700px] rounded-full bg-[#2DD4BF]/30 blur-[120px] opacity-90 pointer-events-none" />

        <section className="features-hero relative z-10" data-reveal="fade">
          <h1 className="features-section-title section-title font-mono text-[56px] leading-[1.05] sm:text-[64px] lg:text-[72px] text-white">Supercharge Your <span className="text-gradient-primary">Workflow.</span></h1>
          <p className="features-section-desc section-copy font-sans text-[17px] text-neutral-400">
            Boost your development speed with AI that understands<br />your entire project, fixes issues automatically.
          </p>
        </section>

        {/* Section 1 */}
        <section className="features-section relative z-10">
          <div className="features-text" data-reveal="up">
            <h2 className="features-section-title font-mono text-[40px] sm:text-[48px] text-white">Understands your<br />entire codebase.</h2>
            <p className="features-section-desc font-sans text-[17px] text-neutral-400">
              Our AI reads your whole repository not just the file you're editing. It understands folder structure, dependencies, naming conventions, patterns, and architecture. That means every suggestion, refactor, or generated code is context-aware and accurate.
            </p>
            <p className="features-prompt-title" style={{marginTop: '24px'}}>AI automatically detects:</p>
            <ul className="features-list">
              <li>Imported modules</li>
              <li>Routing structures</li>
              <li>API endpoints</li>
              <li>Shared components</li>
              <li>Database models</li>
              <li>Utility functions nearby</li>
            </ul>
          </div>
          <div className="features-visual">
            <PromptCard text="Generate a responsive navigation bar using HTML, CSS, and JavaScript that includes a logo, menu items, and a hamburger menu for mobile view" />
            <div className="features-visual-grid">
              <FileTree />
              <CustomCodePreview rows={codeRows} />
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="features-section features-section--reverse relative z-10">
          <div className="features-text" data-reveal="up">
            <p className="features-section-desc font-sans text-[17px] text-neutral-400">
              The AI automatically scans your project for vulnerabilities, outdated dependencies, unsafe functions, insecure authentication logic, and risky API exposure.
            </p>
            <p className="features-prompt-title" style={{marginTop: '24px'}}>Detects problems like:</p>
            <ul className="features-list" style={{marginBottom: '32px'}}>
              <li>SQL Injection</li>
              <li>XSS</li>
              <li>Unsafe eval() or crypto usage</li>
              <li>Missing input validation</li>
              <li>Weak password rules</li>
              <li>Exposed environment variables</li>
            </ul>
            <p className="features-prompt-title">Generates a secure version with one command:</p>
            <PromptCard text="> /secure-all" />
          </div>
          <div className="features-visual">
            <h2 className="features-section-title font-mono text-[40px] sm:text-[48px] text-white" data-reveal="right" style={{marginBottom: '40px'}}>Security<br />built-in.</h2>
            <CustomCodePreview rows={codeRows} />
          </div>
        </section>

        {/* Section 3 */}
        <section className="features-section relative z-10">
          <div className="features-text" data-reveal="up">
            <h2 className="features-section-title font-mono text-[40px] sm:text-[48px] text-white">Generate tests<br />in seconds.</h2>
            
            <p className="features-prompt-title" style={{marginTop: '40px'}}>AI produces:</p>
            <ul className="features-list" style={{marginBottom: '32px'}}>
              <li>Test cases</li>
              <li>Mocked dependencies</li>
              <li>Edge case coverage</li>
              <li>Pass/Fail logic</li>
            </ul>

            <p className="features-prompt-title">You can ask:</p>
            <PromptCard text="Generate unit tests for login controller" />
            
            <p className="features-prompt-title" style={{marginTop: '24px'}}>And you can instantly re-run:</p>
            <PromptCard text="> test-ui-all" />
          </div>
          <div className="features-visual" data-reveal="left">
            <p className="features-section-desc font-sans text-[17px] text-neutral-400">
              Stop writing repetitive test boilerplate. The AI generates full test suites for functions, API endpoints, React components, models, or utilities.
            </p>
            <div className="checkmark-card">
              <div className="checkmark-circle">
                <BigCheckIcon />
              </div>
              <p>The AI generates full test suites for functions, API endpoints, React components, models, or utilities.</p>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="features-section relative z-10" style={{display: 'block'}}>
          <div style={{display: 'flex', gap: '80px', marginBottom: '40px', alignItems: 'center'}} data-reveal="up">
            <div style={{flex: 1}}>
              <h2 className="features-section-title font-mono text-[40px] sm:text-[48px] text-white" style={{margin: 0}}>Compare and<br />improve your code.</h2>
            </div>
            <div style={{flex: 1}}>
              <p className="features-section-desc font-sans text-[17px] text-neutral-400" style={{margin: 0}}>
                The tool provides a visual diff that shows exactly what changed. Perfect for refactoring, debugging, or optimizing large files.
              </p>
            </div>
          </div>

          <div className="features-visual-grid" data-reveal="up">
            <div className="code-card-diff">
              <div className="diff-label">Old Code</div>
              <CustomCodePreview rows={codeRows} highlightRed="5" />
            </div>
            <div className="code-card-diff">
              <div className="diff-label">Optimized Code</div>
              <CustomCodePreview rows={codeRows} highlightGreen="5" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
