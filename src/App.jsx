import React from 'react'
import Hero from './components/Hero'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/profile" element={<Profile />} /> */}
      <Route path="*" element={<div>404 Not Found</div>} />
      <Route path="/home" element={<Dashboard />} />
    </Routes>
  )
}

export default App
