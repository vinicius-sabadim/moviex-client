import React, { Component } from 'react'

import styles from './Movie.style'

export default class Movie extends Component {
  render() {
    const { movie } = this.props
    return (
      <li className={styles.movie}>
        <h2>{movie.title}</h2>
        <span>{movie.genre}</span>
      </li>
    )
  }
}
