import React from 'react'

import Rating from '../Rating'

import styles from './Movie.style'

const Movie = ({ movie }) => {
  return (
    <li className={styles.container}>
      <img
        className={styles.image}
        src={movie.poster}
        alt={`Poster for ${movie.title}`}
      />

      <div className={styles.info}>
        <h2 className={styles.title}>{movie.title}</h2>
        <div className={styles.infoItems}>
          <span>
            <strong>Year:</strong> {movie.year}
          </span>
          <span>
            <strong>Duration:</strong> {movie.duration}
          </span>
          <span>
            <strong>Genre:</strong> {movie.genre.join(', ')}
          </span>
        </div>
        <p className={styles.synopsis}>{movie.synopsis}</p>

        <Rating />
      </div>
    </li>
  )
}

export default Movie
