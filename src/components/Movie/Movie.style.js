import { css } from 'glamor'

export default {
  container: css({
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
    border: '2px solid #ddd',
    display: 'flex',
    position: 'relative'
  }),
  watched: css({
    border: '2px solid var(--main-color-green)',
    '&::after': {
      alignItems: 'center',
      backgroundColor: 'var(--main-color-green)',
      color: '#fff',
      content: '✔️',
      display: 'flex',
      fontSize: '24px',
      height: '42px',
      justifyContent: 'center',
      position: 'absolute',
      right: 0,
      top: 0,
      width: '42px'
    }
  }),
  info: css({
    padding: '15px'
  }),
  title: css({
    borderBottom: '1px solid #eeeeee',
    fontSize: '18px',
    padding: '0 40px 5px 0'
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
    marginTop: '10px'
  })
}
