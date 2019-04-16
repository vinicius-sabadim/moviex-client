import { css } from 'glamor'

export default {
  hover: css({
    transition: 'all .2s',
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.3)'
    }
  })
}
