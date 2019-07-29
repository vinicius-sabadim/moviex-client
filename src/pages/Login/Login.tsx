import React, { useState } from 'react'
import axios from 'axios'

import User from '../../types/User'

import './Login.css'

interface LoginProps {
  onLogin(user: User): void
}

const Login: React.SFC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [hasError, setHasError] = useState(false)

  const handleLogin = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    try {
      const { data } = await axios.post(
        'http://localhost:5000/api/user/login',
        {
          user: {
            email,
            password
          }
        }
      )
      const { user } = data
      onLogin(user)
    } catch ({ response }) {
      setHasError(true)
      setErrorMessage(response.data.errors)
    }
  }

  return (
    <div className="loginPage__container">
      <h1 className="loginPage__logo">MovieX</h1>
      <form onSubmit={handleLogin}>
        <div className="loginPage__formGroup">
          <label>E-mail</label>
          <input
            autoFocus
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="loginPage__formGroup">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button
          className="loginPage__button"
          disabled={email === '' || password === ''}
        >
          Login
        </button>
      </form>
      {hasError && <p className="loginPage__error">{errorMessage}</p>}
    </div>
  )
}

export default Login
