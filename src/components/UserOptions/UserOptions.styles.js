import { css } from 'glamor'

export default {
  container: css({
    backgroundColor: '#FFF',
    bottom: '-40px',
    position: 'absolute',
    right: '20px',
    width: '100px'
  }),
  option: css({
    cursor: 'pointer',
    padding: '10px',
    '&:hover': {
      backgroundColor: '#ccc',
      color: '#fff'
    }
  })
}
