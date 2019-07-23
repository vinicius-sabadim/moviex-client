import React, { useState } from 'react'

import './Search.css'

const Search = ({ isSearching, onSearch }) => {
  const [term, setTerm] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    onSearch(term)
  }

  return (
    <div className="search__container">
      <form onSubmit={handleSubmit}>
        <div className="search__inputContainer">
          <input
            className="search__input"
            type="search"
            placeholder="Search for a movie..."
            value={term}
            onChange={e => setTerm(e.target.value)}
          />

          {isSearching ? (
            <i className="search__loadingIcon fas fa-spinner fa-spin" />
          ) : (
            <button className="search__button fas fa-search" />
          )}
        </div>
      </form>
    </div>
  )
}

export default Search
