import React, { useState } from 'react'

import Star from '../Star'

import Rate from '../../types/Rate'

import './RatingPopup.css'

interface RatingPopupProps {
  onCancel(): void
  onSave(rate: Rate): void
}

const RatingPopup: React.SFC<RatingPopupProps> = ({ onCancel, onSave }) => {
  const [rate, setRate] = useState<Rate>(6)

  const onSaveClicked = () => {
    onSave(rate)
  }

  return (
    <div className="ratingPopup__container">
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
      <div className="ratingPopup__buttonContainer">
        <button
          className="ratingPopup__button ratingPopup__button-save"
          onClick={onSaveClicked}
        >
          Save
        </button>
        <button
          className="ratingPopup__button ratingPopup__button-cancel"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

export default RatingPopup
