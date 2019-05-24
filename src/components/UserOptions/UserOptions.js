import React from 'react'

import styles from './UserOptions.styles'

const UserOptions = ({ onLogout }) => {
  return (
    <ul className={styles.container}>
      <li className={styles.option} onClick={onLogout}>
        Logout
      </li>
    </ul>
  )
}

export default UserOptions
