import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import PricingPage from './pages/Pricing/Pricing'
import DocumentationPage from './pages/Documentation/Documentation'
import RegisterPage from './pages/Register/Register'
import Login from './pages/Login/Login'
import Features from './pages/Features/Features'
import Integration from './pages/Integrations/Integration'
import useScrollReveal from './hooks/useScrollReveal'

function AppRoutes() {
  useScrollReveal(true);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/documentation" element={<DocumentationPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/features" element={<Features />} />
      <Route path="/integrations" element={<Integration />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
