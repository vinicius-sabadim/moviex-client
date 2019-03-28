import React from 'react'
import { css } from 'glamor'

import styles from './Rating.styles'

const Rating = () => {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <i
          className="fas fa-star"
          {...css(styles.star)}
          style={{ color: '#FCCA46' }}
        />
        <div className={styles.rateContainer}>
          <span className={styles.rating}>9.8</span>
          <span className={styles.total}>146</span>
        </div>
      </div>
      <div
        className={styles.block}
        style={{ borderLeft: '1px solid #ccc', cursor: 'pointer' }}
      >
        <i
          className="fas fa-star"
          {...css(styles.star)}
          style={{ color: '#ccc' }}
        />
        <div className={styles.rateContainer}>
          <span className={styles.total}>Rate this</span>
        </div>
      </div>
    </div>
  )
}

export default Rating
