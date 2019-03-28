import { css } from 'glamor'

export default {
  container: css({
    bottom: '20px',
    display: 'flex',
    position: 'absolute',
    right: '10px'
  }),
  block: css({
    alignItems: 'center',
    display: 'flex',
    padding: '0 10px'
  }),
  star: css({
    fontSize: '24px'
  }),
  rateContainer: css({
    marginLeft: '8px',
    textAlign: 'center'
  }),
  rating: css({
    fontSize: '20px',
    fontWeight: 'bold'
  }),
  total: css({
    display: 'block',
    fontSize: '12px'
  })
}
