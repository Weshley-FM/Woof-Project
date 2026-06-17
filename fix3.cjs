const fs = require('fs');
let c = fs.readFileSync('src/components/Hero.jsx', 'utf8');

c = c.replace(/className=\{`feature-card\$\{feature\.active \? ' feature-card--active' : ''\}`\}\} data-reveal="up"/g, 'className={`feature-card${feature.active ? \' feature-card--active\' : \'\'}`} data-reveal="up"');
c = c.replace(/className=\{`work-step\$\{step\.active \? ' work-step--active' : ''\}`\}\} data-reveal="left"/g, 'className={`work-step${step.active ? \' work-step--active\' : \'\'}`} data-reveal="left"');
c = c.replace(/className=\{`plan-card\$\{plan\.popular \? ' plan-card--popular' : ''\}`\}\} data-reveal="up"/g, 'className={`plan-card${plan.popular ? \' plan-card--popular\' : \'\'}`} data-reveal="up"');

fs.writeFileSync('src/components/Hero.jsx', c);
