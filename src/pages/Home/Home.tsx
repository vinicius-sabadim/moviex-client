import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Header from '../../components/Header'
import MovieList from '../../components/MovieList'
import Search from '../../components/Search'

import Movie from '../../types/Movie'
import User from '../../types/User'

const useMovies = () => {
  const [isSearching, setSearching] = useState(false)
  const [movies, setMovies] = useState<Movie[] | []>([])

  const fetchMovies = async (term = '') => {
    setSearching(true)
    const token = localStorage.getItem('token')
    try {
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
    } catch {}
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return { isSearching, movies, fetchMovies }
}

interface HomeProps {
  user: User
  onLogout(): void
}

const Home: React.SFC<HomeProps> = ({ user, onLogout }) => {
  const { isSearching, movies, fetchMovies } = useMovies()

  return (
    <div className="app">
      <Header user={user} onLogout={onLogout} />
      <Search isSearching={isSearching} onSearch={fetchMovies} />
      <MovieList movies={movies} />
    </div>
  )
}

export default Home
