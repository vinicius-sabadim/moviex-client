import React from 'react'

import styles from './Movie.style'

const Movie = ({ movie }) => {
  return (
    <li className={styles.container}>
      <h2 className={styles.title}>{movie.title}</h2>
      <span className={styles.year}>Year: {movie.year}</span>
      <img
        className={styles.image}
        src={movie.poster}
        alt={`Poster for ${movie.title}`}
      />
      <p className={styles.synopsis}>{movie.synopsis}</p>
    </li>
  )
}

export default Movie
