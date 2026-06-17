const fs = require('fs');
let c = fs.readFileSync('src/components/Hero.jsx', 'utf8');

c = c.replace(/className=\{\`([^\`]*)\`\}\` data-reveal="([^"]*)"\}/g, 'className={`$1`} data-reveal="$2"');
c = c.replace(/\}` data-reveal="([^"]*)"\}/g, '} data-reveal="$1"');

fs.writeFileSync('src/components/Hero.jsx', c);
