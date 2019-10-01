import React from 'react'

import Home from './pages/Home'

import { AuthProvider } from './contexts/Auth'

import './App.css'
import Header from './components/Header'

const App = () => {
  return (
    <AuthProvider>
      <Header />
      <Home />
    </AuthProvider>
  )
}

export default App
