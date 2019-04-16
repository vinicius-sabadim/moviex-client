import React, { useState } from 'react'

import RatingPopup from './RatingPopup'
import Star from '../Star'

import styles from './Rating.styles'

const Rating = () => {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <Star color='#FCCA46' />
        <div className={styles.rateContainer}>
          <span className={styles.rating}>9.8</span>
          <span className={styles.total}>146</span>
        </div>
      </div>
      <div
        id="rate-this-toggle"
        className={styles.block}
        style={{ borderLeft: '1px solid #ccc', cursor: 'pointer' }}
        onClick={() => setShowPopup(true)}
      >
        <Star color='#ccc' />
        <div className={styles.rateContainer}>
          <span className={styles.total}>Rate this</span>
        </div>
      </div>
      {showPopup && <RatingPopup onCancel={() => setShowPopup(false)} />}
    </div>
  )
}

export default Rating
