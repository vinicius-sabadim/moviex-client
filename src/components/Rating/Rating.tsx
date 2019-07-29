import React, { useState } from 'react'

import RatingPopup from './RatingPopup'
import Star from '../Star'

import Rate from '../../types/Rate'

import './Rating.css'

const Rating = () => {
  const [showPopup, setShowPopup] = useState(false)

  const handleSave = (rate: Rate) => {
    console.log(rate)
    setShowPopup(false)
  }

  return (
    <div className="rating__container">
      <div className="rating__block">
        <Star color="#FCCA46" />
        <div className="rating__rateContainer">
          <span className="rating__rating">9.8</span>
          <span className="rating__total">146</span>
        </div>
      </div>
      <div
        id="rate-this-toggle"
        className="rating__block"
        style={{ borderLeft: '1px solid #ccc', cursor: 'pointer' }}
        onClick={() => setShowPopup(true)}
      >
        <Star color="#ccc" />
        <div className="rating__rateContainer">
          <span className="rating__total">Rate this</span>
        </div>
      </div>
      {showPopup && (
        <RatingPopup onCancel={() => setShowPopup(false)} onSave={handleSave} />
      )}
    </div>
  )
}

export default Rating
