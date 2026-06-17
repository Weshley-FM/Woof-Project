const fs = require('fs');
const path = require('path');

const filesToRefactor = [
  'PricingPage.jsx',
  'DocumentationPage.jsx',
  'RegisterPage.jsx'
];

for (const file of filesToRefactor) {
  const filePath = path.join(__dirname, 'src', 'components', file);
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Remove framer-motion imports
  content = content.replace(/import\s+\{.*motion.*\}\s+from\s+['"]framer-motion['"];?\n?/g, '');
  content = content.replace(/const\s+(container|item)\s*=\s*\{[\s\S]*?\};\n+/g, ''); // rough heuristic to remove motion variants
  
  // 2. Remove motion. tags
  content = content.replace(/<motion\.([a-zA-Z0-9]+)/g, '<$1');
  content = content.replace(/<\/motion\.([a-zA-Z0-9]+)>/g, '</$1>');
  content = content.replace(/\svariants=\{[^\}]+\}/g, '');
  content = content.replace(/\sinitial=\{[^\}]+\}/g, '');
  content = content.replace(/\sanimate=\{[^\}]+\}/g, '');
  content = content.replace(/\stransition=\{[^\}]+\}/g, '');
  
  // 3. Fix colors (Weshley's design tokens via tailwind config)
  content = content.replace(/bg-\[#bfff00\]/g, 'bg-primary-60');
  content = content.replace(/border-\[#bfff00\]/g, 'border-primary-60');
  content = content.replace(/text-\[#bfff00\]/g, 'text-primary-60');
  content = content.replace(/from-\[#2DD4BF\]\s+to-\[#bfff00\]/g, 'from-teal-400 to-primary-60'); // Keep teal as standard tailwind
  
  // 4. Navbar & Footer
  content = content.replace(/import\s+Footer\s+from\s+['"]\.\/Footer['"];?/g, 'import Footer from \'./Footer.jsx\';\nimport Navbar from \'./Navbar.jsx\';');
  
  // If Navbar wasn't added, add it manually
  if (!content.includes('./Navbar.jsx')) {
    content = content.replace(/import\s+Footer\s+from\s+['"]\.\/Footer.jsx['"];?/, 'import Footer from \'./Footer.jsx\';\nimport Navbar from \'./Navbar.jsx\';');
  }

  // 5. Wrap with main.app-content
  // Look for the main wrapping div inside the return (after the first div)
  // RegisterPage has `<div className="min-h-screen...`
  // We'll replace it with `<> <Navbar /> <main className="app-content"> <div className="..."> ... </div> </main> <Footer /> </>`
  
  // Find return statement
  const returnMatch = content.match(/return\s*\(\s*(<div[^>]*>[\s\S]*?)<\/div>\s*\)\s*}/);
  if (returnMatch) {
    let mainContent = returnMatch[1];
    
    // remove <Footer /> from inside if exists
    mainContent = mainContent.replace(/<Footer\s*\/>\s*/g, '');
    
    const replacement = `return (
    <>
      <Navbar />
      <main className="app-content">
        ${mainContent}
        </div>
      </main>
      <Footer />
    </>
  )
}`;
    content = content.replace(returnMatch[0], replacement);
  }

  // 6. Add useScrollReveal hooks (data-reveal="up") to major sections
  // E.g. finding `<section` and adding `data-reveal="up"`
  content = content.replace(/<section\s+className="/g, '<section data-reveal="up" className="');
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Refactored ${file}`);
}
