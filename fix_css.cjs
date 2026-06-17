const fs = require('fs');
let content = fs.readFileSync('src/components/Hero.css', 'utf8');

// Remove [data-reveal] blocks
content = content.replace(/\[data-reveal\](?:="[^"]*")?\s*\{[^}]*\}/g, '');
content = content.replace(/\.app-shell--ready\s+\[data-reveal\]\.is-visible\s*\{[^}]*\}/g, '');

// Remove animation styles
content = content.replace(/animation(-delay)?:[^;]+;/g, '');

fs.writeFileSync('src/components/Hero.css', content);
