import React from 'react'

import Star from './Star'

import styles from './RatingPopup.styles'

const RatingPopup = () => {
  return (
    <div className={styles.container}>
      {[...Array(10)].map((_, i) => (
        <Star key={i} />
      ))}
    </div>
  )
}

export default RatingPopup
