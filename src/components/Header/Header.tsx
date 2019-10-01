import React, { useState } from 'react'

import UserOptions from '../UserOptions'

import { useAuthState } from '../../contexts/Auth'

import './Header.css'

const Header: React.SFC = () => {
  const [isUserOptionsOpened, setUserOptionsOpened] = useState(false)
  const { user } = useAuthState()

  return (
    <div className="header__container">
      <h1 className="header__title">MovieX</h1>
      <div
        className="header__user"
        onClick={() => setUserOptionsOpened(!isUserOptionsOpened)}
      >
        <span className="header__userName">{user ? 'Vinicius' : 'Login'}</span>
        <i className="fa fa-caret-down" />
      </div>
      {isUserOptionsOpened && (
        <UserOptions closeUserOptions={() => setUserOptionsOpened(false)} />
      )}
    </div>
  )
}

export default Header
