import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import { Navbar } from './components/Navbar'
import './index.css'
import About from './routes/About'
import Concerts from './routes/Concerts'
import Index from './routes/Index'
import RouterScrollToTop from './utils/RouterScrollToTop'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RouterScrollToTop />

      <Navbar />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='concerts' element={<Concerts />} />
        <Route path='about' element={<About />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
