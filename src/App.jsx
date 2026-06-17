import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './MainPage'
import PricingPage from './PricingPage'
import DocumentationPage from './DocumentationPage'
import RegisterPage from './RegisterPage'
import Login from './components/Login'
import Features from './components/Features'
import Integration from './components/Integration'
import useScrollReveal from './hooks/useScrollReveal'

function AppRoutes() {
  useScrollReveal(true);
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
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
