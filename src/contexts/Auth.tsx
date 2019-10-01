import React, { useEffect } from 'react'

import User from '../types/User'

type State = {
  isLogged: boolean
  user: User | null
  setUser: (user: User) => void
  logout: () => void
}

type AuthProviderProps = { children: React.ReactNode }

const AuthStateContext = React.createContext<State | undefined>(undefined)

function AuthProvider({ children }: AuthProviderProps) {
  const [state, setState] = React.useState<State>({
    isLogged: false,
    user: null,
    setUser,
    logout
  })

  // axios.interceptors.response.use(
  //   response => {
  //     return response
  //   },
  //   error => {
  //     if (error.response.status === 403) {
  //       handleLogout()
  //     }
  //     return Promise.reject(error)
  //   }
  // )

  useEffect(() => {
    const token = localStorage.getItem('token')

    // TODO: Get the user info here
    if (token) {
      setState(s => ({
        ...s,
        isLogged: true
      }))
    }
  }, [])

  function setUser(user: User) {
    localStorage.setItem('token', JSON.stringify(user.token))
    setState({
      ...state,
      isLogged: true,
      user
    })
  }

  function logout() {
    localStorage.removeItem('token')
    setState({
      ...state,
      isLogged: false,
      user: null
    })
  }

  return (
    <AuthStateContext.Provider value={state}>
      {children}
    </AuthStateContext.Provider>
  )
}

function useAuthState() {
  const context = React.useContext(AuthStateContext)
  if (context === undefined) {
    throw new Error('useAuthState must be used within a AuthProvider')
  }
  return context
}

export { AuthProvider, useAuthState }
