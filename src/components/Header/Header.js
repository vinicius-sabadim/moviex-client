import React, { useState } from 'react'

import UserOptions from '../UserOptions'

import styles from './Header.styles'

const Header = ({ onLogout }) => {
  const [isUserOptionsOpened, setUserOptionsOpened] = useState(false)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>MovieX</h1>
      <div
        className={styles.user}
        onClick={() => setUserOptionsOpened(!isUserOptionsOpened)}
      >
        <span className={styles.userName}>Vinicius</span>
        <i className="fa fa-caret-down" />
      </div>
      {isUserOptionsOpened && <UserOptions onLogout={onLogout} />}
    </div>
  )
}

export default Header
