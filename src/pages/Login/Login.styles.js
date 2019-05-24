import { css } from 'glamor'

export default {
  container: css({
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    padding: '20px',
    width: '340px'
  }),
  logo: css({
    marginBottom: '20px'
  }),
  formGroup: css({
    marginBottom: '10px',
    '> label': {
      display: 'block',
      color: 'var(--main-color)',
      fontSize: '14px',
      paddingBottom: '3px'
    },
    '> input': {
      fontSize: '18px',
      padding: '5px 10px',
      width: '100%'
    }
  }),
  button: css({
    backgroundColor: 'var(--secondary-color)',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    padding: '10px',
    transition: 'all 0.5s',
    '&:hover': {
      opacity: '0.8'
    }
  }),
  error: css({
    color: 'red',
    fontSize: '14px',
    marginTop: '20px'
  })
}
