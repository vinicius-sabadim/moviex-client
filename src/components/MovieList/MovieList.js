import React from 'react'

import Movie from '../Movie'

import styles from './MovieList.style'

const MovieList = ({ movies }) => {
  return (
    <ul className={styles.list}>
      {movies.map(movie => (
        <Movie key={movie.title} movie={movie} />
      ))}
    </ul>
  )
}

export default MovieList
