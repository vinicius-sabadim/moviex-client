import React from 'react'

import './UserOptions.css'

const UserOptions = ({ onLogout }) => {
  return (
    <ul className="userOptions__container">
      <li className="userOptions__option" onClick={onLogout}>
        Logout
      </li>
    </ul>
  )
}

export default UserOptions
