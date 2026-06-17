import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './MainPage'
import PricingPage from './PricingPage'
import DocumentationPage from './DocumentationPage'
import RegisterPage from './RegisterPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/documentation" element={<DocumentationPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
