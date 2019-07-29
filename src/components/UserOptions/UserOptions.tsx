import React from 'react'

import './UserOptions.css'

interface UserOptionsProps {
  onLogout(): void
}

const UserOptions: React.SFC<UserOptionsProps> = ({ onLogout }) => {
  return (
    <ul className="userOptions__container">
      <li className="userOptions__option" onClick={onLogout}>
        Logout
      </li>
    </ul>
  )
}

export default UserOptions
