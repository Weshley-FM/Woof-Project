const fs = require('fs');
let c = fs.readFileSync('src/components/Hero.jsx', 'utf8');

// Replace:
// } data-reveal="up"
// with:
// }`} data-reveal="up"
// IF IT LACKS THE }` BEFORE THE data-reveal

c = c.replace(/\n\s*\}\s*data-reveal="up"/g, '\n                }`} data-reveal="up"');
c = c.replace(/\n\s*\}\s*data-reveal="left"/g, '\n                }`} data-reveal="left"');
c = c.replace(/\n\s*\}\s*data-reveal="right"/g, '\n                }`} data-reveal="right"');

fs.writeFileSync('src/components/Hero.jsx', c);
