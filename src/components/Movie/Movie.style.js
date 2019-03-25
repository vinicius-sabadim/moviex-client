import { css } from 'glamor'

export default {
  container: css({
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
    border: '1px solid #cccccc',
    display: 'flex',
    padding: '10px'
  }),
  info: css({
    padding: '0 10px'
  }),
  title: css({
    borderBottom: '1px solid #eeeeee',
    fontSize: '18px',
    paddingBottom: '5px'
  }),
  infoItems: css({
    display: 'flex',
    fontSize: '14px',
    flexDirection: 'column',
    padding: '10px 0'
  }),
  image: css({
    display: 'block',
    objectFit: 'contain'
  }),
  synopsis: css({
    margin: '10px 0'
  })
}
