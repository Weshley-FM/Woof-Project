const fs = require('fs');
let content = fs.readFileSync('src/components/Hero.jsx', 'utf8');
content = content.replace(/\s*data-reveal(?:="[^"]*")?/g, '');
content = content.replace(/\s*style=\{\{ '--reveal-delay': [^\}]* \}\}/g, '');
fs.writeFileSync('src/components/Hero.jsx', content);
