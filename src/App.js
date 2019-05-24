import React, { useState, useEffect } from 'react'

import Home from './pages/Home'
import Login from './pages/Login'

import styles from './App.style'

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
      <div className={styles.center}>
        <Loading />
      </div>
    )
  }

  return (
    <div>
      {isLogged ? (
        <Home user={user} onLogout={handleLogout} />
      ) : (
        <div className={styles.center}>
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
