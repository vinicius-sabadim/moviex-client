import React from 'react'

const Star = ({ color = '#ccc'}) => {
  return (
    <i
      className="fas fa-star"
      style={{ color, fontSize: '24px' }}
    />
  )
}

export default Star
