import { css } from 'glamor'

export default {
  container: css({
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px'
  }),
  title: css({
    color: 'var(--main-color)'
  }),
  user: css({
    alignItems: 'center',
    display: 'flex'
  }),
  photo: css({
    borderRadius: '50%',
    height: '50px',
    width: '50px'
  }),
  userName: css({
    color: 'var(--main-color)',
    fontSize: '18px',
    marginLeft: '5px'
  })
}
