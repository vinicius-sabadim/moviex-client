import { css } from 'glamor'

const button = {
  backgroundColor: '#FFF',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
  margin: '0 3px',
  padding: '5px'
}

export default {
  container: css({
    backgroundColor: '#FFF',
    border: '1px solid #ccc',
    boxShadow: '0 0 10px #ccc',
    padding: '10px',
    position: 'absolute',
    right: '5px',
    textAlign: 'center',
    top: '-70px',
    width: '360px'
  }),
  buttonContainer: css({
    borderTop: '1px solid #ccc',
    marginTop: '15px',
    paddingTop: '10px'
  }),
  buttonSave: css({
    ...button,
    color: 'var(--secondary-color)'
  }),
  buttonCancel: css({
    ...button,
    color: '#aaa',
    fontSize: '14px'
  })
}
