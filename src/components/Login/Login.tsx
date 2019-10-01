import React, { useState } from 'react'
import axios from 'axios'

import { useAuthState } from '../../contexts/Auth'

import './Login.css'

interface LoginInterface {
  closeUserOptions: () => void
}

const Login: React.FC<LoginInterface> = ({ closeUserOptions }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [hasError, setHasError] = useState(false)

  const { setUser } = useAuthState()

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
      setUser(user)
      closeUserOptions()
    } catch ({ response }) {
      setHasError(true)
      setErrorMessage(response.data.errors)
    }
  }

  return (
    <div className="loginPage__container">
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
