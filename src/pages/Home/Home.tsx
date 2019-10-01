import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Genres from '../../components/Genres'
import MovieList from '../../components/MovieList'
import Search from '../../components/Search'

import Movie from '../../types/Movie'

import './Home.css'

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

const Home: React.SFC = () => {
  const { isSearching, movies, fetchMovies } = useMovies()

  return (
    <React.Fragment>
      <div className="homePage__container">
        <Search isSearching={isSearching} onSearch={fetchMovies} />
        <div className="homePage__main">
          <MovieList movies={movies} />
        </div>
        <Genres />
      </div>
    </React.Fragment>
  )
}

export default Home
