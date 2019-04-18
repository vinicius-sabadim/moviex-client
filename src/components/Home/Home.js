import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Header from '../Header'
import MovieList from '../MovieList'
import Search from '../Search'

import styles from './Home.styles'

const useMovies = () => {
  const [isSearching, setSearching] = useState(false)
  const [movies, setMovies] = useState([])

  const fetchMovies = async (term = '') => {
    const token = localStorage.getItem('token')
    setSearching(true)
    const { data } = await axios.get(
      `http://localhost:5000/api/movies?search=${term.replace(' ', '+')}`,
      {
        headers: {
          Authorization: `Token ${token}`
        }
      }
    )
    setMovies(data)
    setSearching(false)
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return { isSearching, movies, fetchMovies }
}

const Home = () => {
  const { isSearching, movies, fetchMovies } = useMovies()

  return (
    <div className={styles.container}>
      <Header />
      <Search isSearching={isSearching} onSearch={fetchMovies} />
      <MovieList movies={movies} />
    </div>
  )
}

export default Home
