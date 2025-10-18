import React from 'react'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Blogs from './pages/Blogs'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Blogs />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        
      </Routes>
    </div>
  )
}

export default App