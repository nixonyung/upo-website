import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import './index.css'
import Cabinet from './routes/Cabinet'
import Concerts from './routes/Concerts'
import Index from './routes/Index'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='concerts' element={<Concerts />} />
        <Route path='cabinet' element={<Cabinet />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
