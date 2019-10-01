import React from 'react'

import Login from '../Login'

import { useAuthState } from '../../contexts/Auth'

import './UserOptions.css'

interface UserOptionsInterface {
  closeUserOptions: () => void
}

const UserOptions: React.SFC<UserOptionsInterface> = ({ closeUserOptions }) => {
  const { isLogged, logout } = useAuthState()

  if (!isLogged) {
    return (
      <div className="userOptions__container">
        <Login closeUserOptions={closeUserOptions} />
      </div>
    )
  }

  return (
    <ul className="userOptions__container">
      <li
        className="userOptions__option"
        onClick={() => {
          logout()
          closeUserOptions()
        }}
      >
        Logout
      </li>
    </ul>
  )
}

export default UserOptions
