import { css } from 'glamor'

export default {
  list: css({
    display: 'grid',
    gridGap: '30px',
    gridTemplateColumns: 'repeat(auto-fill, 600px)',
    justifyContent: 'space-between',
    marginTop: '20px'
  })
}
