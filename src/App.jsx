import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './components/Products'
import AppProvider from './context/Context'
import Cart from './components/Cart'

function App() {
  return (
    <AppProvider>
      <div className='bg-gray-200 min-h-screen'>
        <Routes>
         <Route path='/' element={<Products />} />
         <Route path='/Cart' element={<Cart />} />
        </Routes>
      </div>
    </AppProvider>
  )
}

export default App
