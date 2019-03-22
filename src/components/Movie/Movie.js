import React, { Component } from 'react'

import styles from './Movie.style'

export default class Movie extends Component {
  render() {
    const { movie } = this.props

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
}
