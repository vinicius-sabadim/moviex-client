import React, { useState } from 'react'

import Star from '../Star'

import styles from './RatingPopup.styles'

const RatingPopup = ({ onCancel }) => {
  const [rate, setRate] = useState(6)

  return (
    <div className={styles.container}>
      {[...Array(10)].map((_, index) => (
        <Star
          key={index}
          color={index + 1 <= rate ? '#FCCA46' : '#ccc'}
          hasEffect={true}
          style={{
            margin: '0 3px'
          }}
          onClick={() => setRate(index + 1)}
        />
      ))}
      <div className={styles.buttonContainer}>
        <button className={styles.buttonSave}>Save</button>
        <button className={styles.buttonCancel} onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  )
}

export default RatingPopup
