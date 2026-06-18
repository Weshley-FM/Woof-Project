# Woof - AI & Code Generator Web Template

## 1. Welcome

Thank you for using **Woof**.

Woof is a modern, premium React-based website template designed for AI startups, coding platforms, and SaaS products. It features a clean, responsive, and highly scalable component-based architecture built with **Vite** and **Tailwind CSS**.

The template is structured for practical customization, fast development, and smooth deployment. Figma design files or visual references are intended to be included in the `03_Design_Asset/` folder when distributed with the full template package.

---

## 2. Project Structure

```text
Woof/
+-- public/
|   +-- (Static assets if any)
+-- src/
|   +-- assets/
|   +-- components/
|   |   +-- Footer/
|   |   +-- Navbar/
|   |   +-- SplashScreen/
|   +-- pages/
|   |   +-- Documentation/
|   |   +-- Features/
|   |   +-- Home/
|   |   +-- Integrations/
|   |   +-- Login/
|   |   +-- Pricing/
|   |   +-- Register/
|   +-- App.jsx
|   +-- index.css
|   +-- main.jsx
+-- dist/
+-- index.html
+-- package.json
+-- package-lock.json
+-- postcss.config.js
+-- tailwind.config.js
+-- vite.config.js
+-- README.md
```

| Directory / File | Description |
| :--- | :--- |
| `public/` | Static public files served directly by Vite. |
| `src/` | Main application source folder containing React components, pages, styles, and local assets. |
| `src/assets/` | Local image and graphic assets imported directly into React components. |
| `src/components/`| Global reusable UI components such as Navbar and Footer. |
| `src/pages/` | Page-level modules for each route and major website section. |
| `dist/` | Production build output generated after running `npm run build`. |
| `index.html` | Main HTML entry file, including font loading and the root application mount point. |
| `package.json` | Project scripts, dependencies, and development dependencies. |
| `tailwind.config.js`| Tailwind CSS theme configuration, including color and font extensions. |
| `vite.config.js` | Vite configuration with React plugin integration. |

---

## 3. System Requirements

Before running this project, make sure your environment includes:

- **Node.js v18+** or **v20+** recommended
- **npm**, **yarn**, or **pnpm** package manager
- Modern web browser such as **Chrome**, **Safari**, **Edge**, or **Firefox**
- Code editor, preferably **Visual Studio Code**

---

## 4. Installation Guide

| Step | Command |
| :--- | :--- |
| Navigate to the project folder | `cd "Woof - AI&Code Generator"` |
| Install dependencies | `npm install` |
| Run the local development server | `npm run dev` |

After running the development server, Vite will provide a local preview URL in the terminal, usually similar to:
`http://localhost:5173/`

---

## 5. Build for Production

To generate optimized production files, run:
```bash
npm run build
```

The build output will be generated inside the `dist/` folder. These files are ready to deploy to modern hosting platforms such as **Vercel**, **Netlify**, or a custom **VPS**.

To preview the production build locally, run:
```bash
npm run preview
```

---

## 6. Src Structure

The main application source code resides inside the `src/` directory.

```text
src/
+-- assets/
|   +-- Logo.png
|   +-- (and other images)
+-- components/
|   +-- Footer/
|   |   +-- Footer.css
|   |   +-- Footer.jsx
|   +-- Navbar/
|   |   +-- Navbar.css
|   |   +-- Navbar.jsx
|   +-- SplashScreen/
|   |   +-- SplashScreen.css
|   |   +-- SplashScreen.jsx
+-- pages/
|   +-- Documentation/
|   |   +-- DocumentationPage.jsx
|   +-- Features/
|   |   +-- Features.css
|   |   +-- Features.jsx
|   +-- Home/
|   |   +-- Hero.css
|   |   +-- Hero.jsx
|   |   +-- Home.jsx
|   +-- Integrations/
|   |   +-- Integration.css
|   |   +-- Integration.jsx
|   +-- Login/
|   |   +-- Login.css
|   |   +-- Login.jsx
|   +-- Pricing/
|   |   +-- PricingPage.jsx
|   +-- Register/
|   |   +-- RegisterPage.jsx
+-- App.jsx
+-- index.css
+-- main.jsx
```

| Path | Description |
| :--- | :--- |
| `src/assets/` | Local image assets imported directly into React components. |
| `src/components/` | Shared global components such as navigation and footer. |
| `src/pages/` | Route-based page modules and their page-specific section components. |
| `src/App.jsx` | Main route configuration using `react-router-dom`. |
| `src/main.jsx` | React application entry point. |
| `src/index.css` | Tailwind directives, global utilities, typography variables, and baseline styling. |

---

## 7. Shared Components & Pages Structure

### Shared Components
The reusable global UI components are located inside `src/components/`.

| Component | Description |
| :--- | :--- |
| `Navbar.jsx` | Main website navigation used across primary pages and routes (excluding Login and Register pages). |
| `Footer.jsx` | Global footer component for closing brand, navigation, and supporting information. |
| `SplashScreen.jsx` | Global animated loading screen component shown upon app startup. |

### Pages
The website pages are organized as route-based modules inside `src/pages/`.

| Page Module | Description |
| :--- | :--- |
| `Home/` | Homepage experience including the main hero, code previews, and pricing section. |
| `Pricing/` | Pricing plans and feature comparisons. |
| `Features/` | Detailed feature showcase and capabilities explanation. |
| `Integrations/` | Showcase of supported third-party tools and plugins. |
| `Documentation/`| Static documentation reading page structure. |
| `Login/` & `Register/`| User authentication flow and forms (designed cleanly without the Navbar). |

The active route map is managed in `src/App.jsx`:

| Route | Component |
| :--- | :--- |
| `/` | `Home` |
| `/pricing` | `PricingPage` |
| `/documentation` | `DocumentationPage` |
| `/register` | `RegisterPage` |
| `/login` | `Login` |
| `/features` | `Features` |
| `/integrations` | `Integration` |

---

## 8. Theme and Styling

Woof uses **Tailwind CSS** as its main styling system.

Theme configuration is managed inside `tailwind.config.js`, where the project extends Tailwind with brand-specific color tokens and font families:

```javascript
colors: {
  primary: {
    60: '#c8fd26', // Neon green/yellow accent
    DEFAULT: '#2DD4BF', // Teal accent
  },
  natural: {
    10: '#FBFBFB', // Bright text
    100: '#050505', // Deep dark background
  }
}
```

Global styling is managed inside `src/index.css`, which includes:
- Tailwind base, components, and utilities directives.
- Custom keyframe animations for splash screens and scrolling behaviors.
- Baseline font rules for form elements and interface text.
- Page-specific typography normalization for hero titles and technical accents.

**Pro Tip**: For branding, color, spacing, or global theme updates, make changes inside `tailwind.config.js` first. This helps preserve visual consistency across every page and component.

---

## 9. Font

Woof uses **Inter** as the primary UI and content font. It also uses **Space Mono** as the secondary font for technical indicators, numbers, headlines, and accent text.

The fonts are extended inside the `fontFamily` block of `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Inter', 'sans-serif'],
  mono: ['"Space Mono"', 'monospace'],
}
```

Fonts are dynamically loaded through web font integration in `src/index.css` via Google Fonts. Downloading raw `.ttf` or `.woff2` files into the project assets is not required.

---

## 10. Assets

All local graphics and logos can live inside `src/assets/`. The project currently includes assets such as `Logo.png`.

You can import assets directly into JSX components without creating manual registration files:

```javascript
import logoProduct from '../../assets/Logo.png';

function Navbar() {
  return <img src={logoProduct} alt="Woof Logo" />;
}
```

---

## 11. Figma Design Asset

Design blueprints or reference files for the template are intended to be placed inside the `03_Design_Asset/` folder in the full product package. Use these files as visual guidance when adjusting layouts, spacing, imagery, and brand presentation.

If the folder is not present in your local workspace, check the downloaded template package or the platform where the template was acquired.

---

## 12. Main Packages

The project uses the following core packages from `package.json`:

| Package | Purpose |
| :--- | :--- |
| `react` | Core React library for building the user interface. |
| `react-dom` | React rendering package for the browser. |
| `react-router-dom` | Client-side routing for pages such as home, pricing, and features. |
| `framer-motion` | Animation library used for transitions and motion-based UI behavior. |
| `lucide-react` | SVG icon library used across the interface. |
| `vite` | Fast development server and production build tool. |
| `@vitejs/plugin-react` | Official Vite plugin for React support. |
| `tailwindcss` | Utility-first CSS framework used for layout, typography, colors, and styling. |
| `postcss` | CSS processing layer used by Tailwind. |
| `autoprefixer` | Adds vendor prefixes for broader browser compatibility. |

Available scripts:

| Script | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server. |
| `npm run build` | Builds optimized production files into `dist/`. |
| `npm run preview` | Serves the production build locally for preview. |

---

## 13. Screenshots

Visual interface preview images are intended to be located in the `Screenshots/` directory when included with the full template package. These previews help users compare the delivered interface with the original design direction during customization.

If the `Screenshots/` folder is not available in the current workspace, refer back to the downloaded package archive or marketplace listing.

---

## 14. Support

If you run into roadblocks while customizing Woof, please reach out through the platform where the template was acquired. Include a clear description of the issue, the file you are editing, and any relevant error message so support can help you faster.

Thank you for choosing **Woof**.

We wish you success building a refined, premium web presence for your AI and coding platform.
