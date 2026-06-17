import './Integration.css';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Footer from '../../components/Footer/Footer.jsx';

function IntellijIcon() {
  return (
    <svg viewBox="0 0 72 72" aria-hidden="true" focusable="false">
      <rect x="13" y="13" width="46" height="46" rx="8" fill="#f25c38" />
      <path d="M13 47 47 13h12v46H13Z" fill="#3b82f6" />
      <rect x="22" y="22" width="28" height="28" fill="var(--color-neutral-100)" />
      <text x="36" y="42" textAnchor="middle" style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:'bold',fill:'#fff'}}>IJ</text>
    </svg>
  );
}

function PycharmIcon() {
  return (
    <svg viewBox="0 0 72 72" aria-hidden="true" focusable="false">
      <rect x="13" y="13" width="46" height="46" rx="8" fill="#81f64f" />
      <path d="M13 47 47 13h12v46H13Z" fill="#2dd4bf" />
      <rect x="22" y="22" width="28" height="28" fill="var(--color-neutral-100)" />
      <text x="36" y="42" textAnchor="middle" style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:'bold',fill:'#fff'}}>PC</text>
    </svg>
  );
}

function AndroidStudioIcon() {
  return (
    <svg viewBox="0 0 72 72" aria-hidden="true" focusable="false">
      {/* Background folder */}
      <path d="M16 26c0-3.3 2.7-6 6-6h12l6 6h10c3.3 0 6 2.7 6 6v22c0 3.3-2.7 6-6 6H22c-3.3 0-6-2.7-6-6V26z" fill="#3b82f6" />
      {/* Green Android Head peeking out */}
      <path d="M26 30v-2c0-5.5 4.5-10 10-10s10 4.5 10 10v2H26z" fill="#a4c639" />
      <path d="M30 20l-3-4m15 4l3-4" stroke="#a4c639" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="32" cy="24" r="1.5" fill="#fff" />
      <circle cx="40" cy="24" r="1.5" fill="#fff" />
      {/* Compass / Caliper A-shape */}
      <path d="M36 34l-8 16h4l2-4h4l2 4h4L36 34zm-2 9l2-4 2 4h-4z" fill="#1e1e24" />
    </svg>
  );
}

function ImageIcon() {
  return (
    <svg viewBox="0 0 120 92" aria-hidden="true" focusable="false">
      <rect x="16" y="14" width="88" height="64" rx="4" fill="none" stroke="currentColor" strokeWidth="8" />
      <circle cx="80" cy="34" r="8" fill="currentColor" />
      <path d="M25 68 48 47l18 15 11-9 21 18" fill="none" stroke="currentColor" strokeWidth="8" strokeLinejoin="round" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
    </svg>
  );
}

function GitlabIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.955 13.587l-1.342-4.135-2.664-8.189A.456.456 0 0019.083.99a.456.456 0 00-.4.275L16.03 8.441H7.97L5.318 1.265a.456.456 0 00-.4-.275.456.456 0 00-.4.275L1.85 9.452.51 13.587a.91.91 0 00.327.994l11.164 8.118 11.163-8.118a.91.91 0 00.327-.994z" fill="#E24329"/>
      <path d="M12 22.699l11.164-8.118-3.411-10.51-5.088 15.657L12 22.699z" fill="#FC6D26"/>
      <path d="M12 22.699L.836 14.581l3.411-10.51 5.088 15.657L12 22.699z" fill="#FC6D26"/>
      <path d="M12 22.699l2.665-8.189H9.335L12 22.699z" fill="#FCA326"/>
    </svg>
  );
}

function JiraIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.53 11.53a3.54 3.54 0 0 0 0-5.01L7.38 2.38a.98.98 0 0 0-1.38 0L1.85 6.53a.98.98 0 0 0 0 1.38l4.15 4.15a3.54 3.54 0 0 0 5.01 0l.52-.53zM22.15 6.53l-4.15-4.15a.98.98 0 0 0-1.38 0L12.47 6.53a3.54 3.54 0 0 0 0 5.01l4.15 4.15a.98.98 0 0 0 1.38 0l4.15-4.15a.98.98 0 0 0 0-1.38v.01zM11.53 22.15l4.15-4.15a.98.98 0 0 0 0-1.38l-4.15-4.15a3.54 3.54 0 0 0-5.01 0l-4.15 4.15a.98.98 0 0 0 0 1.38l4.15 4.15a3.54 3.54 0 0 0 5.01 0z" fill="#2684FF"/>
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
    </svg>
  );
}

function SlackIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.166 0a2.528 2.528 0 0 1 2.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.166 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.166a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
    </svg>
  );
}

function GenericIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 4h10v6h6v10H4V4zm12 2v4h4v-4h-4zm-2-2H2v18h18V8h-6V2z"/>
    </svg>
  );
}

export default function Integration() {
  const cards = [
    { icon: <GithubIcon />, name: 'GitHub' },
    { icon: <GitlabIcon />, name: 'GitLab' },
    { icon: <JiraIcon />, name: 'Jira' },
    { icon: <DiscordIcon />, name: 'Discord' },
    { icon: <SlackIcon />, name: 'Slack' },
    { icon: <GenericIcon />, name: 'Other' },
  ];

  return (
    <>
      <Navbar />

      <main className="app-content integration-page-container relative z-10" aria-label="Integrations content">
        {/* Glow effect */}
        <div className="absolute -left-1/4 -top-1/4 h-[900px] w-[900px] rounded-full bg-primary-60/40 blur-[150px] opacity-100 pointer-events-none" />
        <div className="absolute -left-1/4 top-0 h-[700px] w-[700px] rounded-full bg-[#2DD4BF]/30 blur-[120px] opacity-90 pointer-events-none" />

        <section className="integration-hero relative z-10">
          <div className="integration-hero-text" data-reveal="fade">
            <h1 className="font-mono text-[56px] leading-[1.05] sm:text-[64px] lg:text-[72px] text-white mb-6">Connect Your<br />Workflow In<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-primary-60">One Place</span></h1>
            <p className="font-sans text-[17px] text-neutral-400 mb-8">Integrate your favorite tools and bring your entire workflow together from source control to issue tracking.</p>
            <button className="bg-primary-60 text-black font-medium text-[16px] rounded-xl hover:bg-primary-60/90 transition-colors" style={{width:'fit-content', padding:'16px 32px'}}>Explore</button>
          </div>
          <div className="integration-hero-visual" data-reveal="fade">
            <div className="integration-circle-track"></div>
            <div className="integration-center-icon">
              <ImageIcon />
            </div>
            <div className="integration-orbit-item">
              <IntellijIcon />
            </div>
            <div className="integration-orbit-item">
              <PycharmIcon />
            </div>
            <div className="integration-orbit-item">
              <AndroidStudioIcon />
            </div>
          </div>
        </section>

        <section className="integration-grid-section relative z-10">
          <div className="integration-grid-header" data-reveal="up">
            <h2 className="font-mono text-[40px] sm:text-[48px] text-white mb-4">Supported Integrations</h2>
            <p className="font-sans text-[17px] text-neutral-400">Effortlessly connect the platforms you already use. Each integration helps you automate tasks, sync updates, and speed up your development process.</p>
          </div>
          
          <div className="integration-cards">
            {cards.map((card, idx) => (
              <div className="integration-card" key={idx} data-reveal="up" style={{ '--reveal-delay': `${idx * 100}ms` }}>
                <div className="integration-card-icon">
                  {card.icon}
                </div>
                <p>Sync your repositories, automate commits, and pull real-time updates directly into your workspace.</p>
                <button className="integration-card-btn">Connect</button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
