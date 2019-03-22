import React, { Component } from 'react'

import Movie from '../Movie'

import styles from './MovieList.style'

export default class MovieList extends Component {
  render() {
    const { movies } = this.props
    return (
      <ul className={styles.list}>
        {movies.map(movie => (
          <Movie key={movie.title} movie={movie} />
        ))}
      </ul>
    )
  }
}
