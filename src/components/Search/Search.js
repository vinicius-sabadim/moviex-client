import React, { useState } from 'react'

import styles from './Search.style'

const Search = ({ isSearching, onSearch }) => {
  const [term, setTerm] = useState('')

  return (
    <div>
      <input
        className={styles.input}
        type="search"
        placeholder="Search for a movie..."
        value={term}
        onChange={e => setTerm(e.target.value)}
      />
      <button className={styles.button} onClick={() => onSearch(term)}>
        Search
      </button>
      {isSearching && <i className={`fas fa-spinner fa-spin ${styles.icon}`} />}
    </div>
  )
}

export default Search
