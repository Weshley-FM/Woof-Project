const fs = require('fs');

function addReveal(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  const mappings = [
    { regex: /className="hero__headline"/g, attr: ' data-reveal="up"' },
    { regex: /className="hero__copy"/g, attr: ' data-reveal="up"' },
    { regex: /className="hero__cta"/g, attr: ' data-reveal="up"' },
    { regex: /className="language-section__item"/g, attr: ' data-reveal="fade"' },
    { regex: /className={`feature-card\$\{/g, attr: ' data-reveal="up"' },
    { regex: /className={`work-step\$\{/g, attr: ' data-reveal="left"' },
    { regex: /className="ide-badge"/g, attr: ' data-reveal="fade"' },
    { regex: /className={`plan-card\$\{/g, attr: ' data-reveal="up"' },
    
    // Components
    { regex: /className="prompt-card"/g, attr: ' data-reveal="fade"' },
    { regex: /className="file-card"/g, attr: ' data-reveal="left"' },
    { regex: /className="code-card"/g, attr: ' data-reveal="right"' },
    { regex: /className="chart-card"/g, attr: ' data-reveal="up"' },
    { regex: /className="image-placeholder"/g, attr: ' data-reveal="up"' },
    { regex: /className="consulting-card"/g, attr: ' data-reveal="right"' },
    { regex: /className="demo-prompt"/g, attr: ' data-reveal="fade"' },
    { regex: /className="demo-status"/g, attr: ' data-reveal="up"' },
    
    // Headers
    { regex: /<h2([^>]*)>/g, attr: ' data-reveal="up"' },
  ];

  mappings.forEach(m => {
    // We only add if it's not already there to be safe
    content = content.replace(m.regex, (match, p1) => {
      if (match.includes('data-reveal')) return match;
      if (match.startsWith('<h2')) {
        return `<h2${p1}${m.attr}>`;
      }
      return match + m.attr;
    });
  });

  fs.writeFileSync(filePath, content);
}

['src/components/Hero.jsx'].forEach(addReveal);
