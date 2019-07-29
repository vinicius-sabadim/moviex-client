import React, { useState } from 'react'

import UserOptions from '../UserOptions'

import './Header.css'

const Header = ({ user, onLogout }) => {
  const [isUserOptionsOpened, setUserOptionsOpened] = useState(false)

  return (
    <div className="header__container">
      <h1 className="header__title">MovieX</h1>
      <div
        className="header__user"
        onClick={() => setUserOptionsOpened(!isUserOptionsOpened)}
      >
        <span className="header__userName">Vinicius</span>
        <i className="fa fa-caret-down" />
      </div>
      {isUserOptionsOpened && <UserOptions onLogout={onLogout} />}
    </div>
  )
}

export default Header
