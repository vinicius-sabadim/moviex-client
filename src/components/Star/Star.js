import React from 'react'

import './Star.css'

const Star = ({ color = '#ccc', hasEffect = false, style = {}, onClick }) => {
  return (
    <i
      className={`fas fa-star ${hasEffect ? 'star__hoverEffect' : ''}`}
      style={{ color, fontSize: '24px', ...style }}
      onClick={onClick}
    />
  )
}

export default Star
