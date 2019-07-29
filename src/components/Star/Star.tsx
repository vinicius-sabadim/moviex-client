import React from 'react'

import './Star.css'

interface StarProps {
  color?: string
  hasEffect?: boolean
  style?: object
  onClick?(): void
}

const Star: React.SFC<StarProps> = ({
  color = '#ccc',
  hasEffect = false,
  style = {},
  onClick
}) => {
  return (
    <i
      className={`fas fa-star ${hasEffect ? 'star__hoverEffect' : ''}`}
      style={{ color, fontSize: '24px', ...style }}
      onClick={onClick}
    />
  )
}

export default Star
