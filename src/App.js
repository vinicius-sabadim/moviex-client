import React, { useState, useEffect } from 'react'

import MovieList from './components/MovieList'
import Search from './components/Search'

import styles from './App.style'

const useMovies = () => {
  const [isSearching, setSearching] = useState(false)
  const [movies, setMovies] = useState([])

  const fetchMovies = async (term = '') => {
    setSearching(true)
    const res = await fetch(
      `http://localhost:5000/api/movies?search=${term.replace(' ', '+')}`
    )
    const data = await res.json()
    setMovies(data)
    setSearching(false)
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return { isSearching, movies, fetchMovies }
}

const App = () => {
  const { isSearching, movies, fetchMovies } = useMovies()

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>MovieX</h1>
      <Search isSearching={isSearching} onSearch={fetchMovies} />
      <MovieList movies={movies} />
    </div>
  )
}

export default App
