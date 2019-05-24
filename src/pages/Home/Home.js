import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Header from '../../components/Header'
import MovieList from '../../components/MovieList'
import Search from '../../components/Search'

import styles from './Home.styles'

const useMovies = () => {
  const [isSearching, setSearching] = useState(false)
  const [movies, setMovies] = useState([])

  const fetchMovies = async (term = '') => {
    setSearching(true)
    const token = localStorage.getItem('token')
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

const Home = ({ onLogout }) => {
  const { isSearching, movies, fetchMovies } = useMovies()

  return (
    <div className="app">
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Search isSearching={isSearching} onSearch={fetchMovies} />
        <MovieList movies={movies} />
      </div>
    </div>
  )
}

export default Home
