const fs = require('fs');

let content = fs.readFileSync('src/components/Footer.jsx', 'utf8');

const mappings = [
  { regex: /<div className="site-footer__newsletter">/g, attr: ' data-reveal="left"' },
  { regex: /<div className="site-footer__details">/g, attr: ' data-reveal="right"' },
  { regex: /<div className="site-footer__bottom-inner">/g, attr: ' data-reveal="up"' },
];

mappings.forEach(m => {
  content = content.replace(m.regex, (match) => {
    if (match.includes('data-reveal')) return match;
    return match.replace('>', m.attr + '>');
  });
});

fs.writeFileSync('src/components/Footer.jsx', content);
