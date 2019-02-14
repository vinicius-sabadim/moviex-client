import React, { Component } from 'react'

import MovieList from './components/MovieList'

import styles from './App.style'

const movies = [
  { id: 1, title: 'Lord of the rings', genre: 'fantasy' },
  { id: 2, title: 'Children of the corn', genre: 'horror' }
]

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <h1 className={styles.title}>MovieX</h1>
        <MovieList movies={movies} />
      </div>
    )
  }
}

export default App
