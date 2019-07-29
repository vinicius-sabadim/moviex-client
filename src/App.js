import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Home from './pages/Home'
import Login from './pages/Login'

import './App.css'

const App = () => {
  const [isInitialized, setIsInitialized] = useState(false)
  const [isLogged, setIsLogged] = useState(false)
  const [user, setUser] = useState({})

  const handleLogin = user => {
    localStorage.setItem('token', user.token)
    setUser(user)
    setIsLogged(true)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    setUser({})
    setIsLogged(false)
  }

  axios.interceptors.response.use(
    response => {
      return response
    },
    error => {
      if (error.response.status === 403) {
        handleLogout()
      }
      return Promise.reject(error)
    }
  )

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      setIsInitialized(true)
      setIsLogged(false)
    } else {
      setIsInitialized(true)
      setIsLogged(true)
    }
  }, [])

  if (!isInitialized) {
    return (
      <div className="app">
        <Loading />
      </div>
    )
  }

  return (
    <div>
      {isLogged ? (
        <Home user={user} onLogout={handleLogout} />
      ) : (
        <div className="app">
          <Login onLogin={handleLogin} />
        </div>
      )}
    </div>
  )
}

const Loading = () => {
  return <i className="fas fa-spin fa-spinner" />
}

export default App
