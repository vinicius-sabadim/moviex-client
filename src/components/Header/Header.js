import React from 'react'

import styles from './Header.styles'

const Header = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>MovieX</h1>
      <div className={styles.user}>
        <img
          className={styles.photo}
          src="https://avatars2.githubusercontent.com/u/7515783?s=400&u=c52c883bfdbd029b1115b8d3bcd7ed394be13533&v=4"
          alt="user"
        />
        <span className={styles.userName}>Vinicius</span>
      </div>
    </div>
  )
}

export default Header
