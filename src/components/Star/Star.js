import React from 'react'
import { css } from 'glamor'

import styles from './Star.styles'

const Star = ({ color = '#ccc', hasEffect = false, style = {}, onClick }) => {
  return (
    <i
      className="fas fa-star"
      style={{ color, fontSize: '24px', ...style }}
      {...css(hasEffect ? styles.hover : null)}
      onClick={onClick}
    />
  )
}

export default Star
