const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'src/App.jsx',
  'src/pages/Home/Home.jsx',
  'src/pages/Pricing/Pricing.jsx',
  'src/pages/Documentation/Documentation.jsx',
  'src/pages/Register/Register.jsx',
  'src/pages/Login/Login.jsx',
  'src/pages/Features/Features.jsx',
  'src/pages/Integrations/Integration.jsx',
  'src/components/Navbar/Navbar.jsx',
  'src/components/Footer/Footer.jsx'
];

function updateImports(file) {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');

  // App.jsx updates
  if (file === 'src/App.jsx') {
    content = content.replace(/import MainPage from '\.\/MainPage'/g, "import Home from './pages/Home/Home'");
    content = content.replace(/<MainPage \/>/g, "<Home />");
    content = content.replace(/import PricingPage from '\.\/PricingPage'/g, "import PricingPage from './pages/Pricing/Pricing'");
    content = content.replace(/import DocumentationPage from '\.\/DocumentationPage'/g, "import DocumentationPage from './pages/Documentation/Documentation'");
    content = content.replace(/import RegisterPage from '\.\/RegisterPage'/g, "import RegisterPage from './pages/Register/Register'");
    content = content.replace(/import Login from '\.\/components\/Login'/g, "import Login from './pages/Login/Login'");
    content = content.replace(/import Features from '\.\/components\/Features'/g, "import Features from './pages/Features/Features'");
    content = content.replace(/import Integration from '\.\/components\/Integration'/g, "import Integration from './pages/Integrations/Integration'");
    // Don't forget hooks!
    content = content.replace(/import useScrollReveal from '\.\/hooks\/useScrollReveal'/g, "import useScrollReveal from './hooks/useScrollReveal'");
  }

  // Home.jsx
  if (file === 'src/pages/Home/Home.jsx') {
    content = content.replace(/import Footer from '\.\/Footer'/g, "import Footer from '../../components/Footer/Footer'");
    content = content.replace(/import Navbar from '\.\/Navbar'/g, "import Navbar from '../../components/Navbar/Navbar'");
    content = content.replace(/import logoProduct from '\.\/assets\/Logo\.png'/g, "import logoProduct from '../../assets/Logo.png'");
  }

  // Pricing.jsx, Documentation.jsx, Register.jsx
  if (file.includes('Pricing') || file.includes('Documentation') || file.includes('Register')) {
    content = content.replace(/import Footer from '\.\/Footer'/g, "import Footer from '../../components/Footer/Footer'");
    content = content.replace(/import Navbar from '\.\/Navbar'/g, "import Navbar from '../../components/Navbar/Navbar'");
  }

  // Login.jsx, Features.jsx, Integration.jsx
  if (file.includes('Login') || file.includes('Features') || file.includes('Integration')) {
    content = content.replace(/import Footer from '\.\.\/Footer\.jsx'/g, "import Footer from '../../components/Footer/Footer'");
    content = content.replace(/import Navbar from '\.\.\/Navbar\.jsx'/g, "import Navbar from '../../components/Navbar/Navbar'");
    content = content.replace(/import '\.\/Hero\.css'/g, "import '../Home/Hero.css'");
  }

  // Navbar.jsx
  if (file === 'src/components/Navbar/Navbar.jsx') {
    content = content.replace(/import logoProduct from '\.\/assets\/Logo\.png'/g, "import logoProduct from '../../assets/Logo.png'");
  }

  fs.writeFileSync(file, content);
  console.log(`Updated imports in ${file}`);
}

filesToUpdate.forEach(updateImports);
