import { css } from 'glamor'

export default {
  container: css({
    backgroundColor: '#fcfcfc',
    borderBottom: '1px solid #ccc',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px',
    position: 'relative'
  }),
  title: css({
    color: 'var(--main-color)'
  }),
  user: css({
    alignItems: 'center',
    cursor: 'pointer',
    display: 'flex'
  }),
  userName: css({
    color: 'var(--main-color)',
    fontSize: '18px',
    margin: '0 5px'
  })
}
