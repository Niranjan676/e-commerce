import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './components/Products'

function App() {
  return (
    <div className='bg-gray-200 min-h-screen'>
      <Routes>
        <Route path='/' element={<Products />} />
      </Routes>
    </div>
  )
}

export default App
