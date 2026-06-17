const fs = require('fs');

const css = `
/* Enhanced Scroll Reveal Animations */
[data-reveal] {
  opacity: 0;
  transition: opacity 1000ms cubic-bezier(0.16, 1, 0.3, 1), transform 1000ms cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
  transition-delay: var(--reveal-delay, 0ms);
}

[data-reveal="up"] {
  transform: translateY(40px) scale(0.98);
}

[data-reveal="left"] {
  transform: translateX(-40px);
}

[data-reveal="right"] {
  transform: translateX(40px);
}

[data-reveal="fade"] {
  transform: translateY(10px);
}

.app-shell--ready [data-reveal].is-visible {
  opacity: 1;
  transform: translate(0, 0) scale(1);
}

.hero__headline { --reveal-delay: 100ms; }
.hero__copy { --reveal-delay: 200ms; }
.hero__cta { --reveal-delay: 300ms; }
.prompt-card { --reveal-delay: 400ms; }
.file-card { --reveal-delay: 500ms; }
.code-card { --reveal-delay: 600ms; }
.chart-card { --reveal-delay: 200ms; }
.image-placeholder { --reveal-delay: 400ms; }
.consulting-card { --reveal-delay: 600ms; }
.demo-prompt { --reveal-delay: 200ms; }
.demo-status { --reveal-delay: 400ms; }

@media (prefers-reduced-motion: reduce) {
  [data-reveal] {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
`;

fs.appendFileSync('src/components/Hero.css', css);
