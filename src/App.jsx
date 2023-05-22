import { useState } from 'react'
import Header from './components/Header/Header'
import './App.css'
import Homepage from './pages/Homepage/Homepage'
import Footer from './components/Footer/Footer'
import Cart from './pages/Cart/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  

  return (
    <BrowserRouter>
      <Header />

      <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/cart' element={<Cart/>} />
      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App

