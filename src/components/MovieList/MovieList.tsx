import React from 'react'

import Movie from '../Movie'

import './MovieList.css'

const MovieList = ({ movies }) => {
  return (
    <ul className="movieList__container">
      {movies.map(movie => (
        <Movie key={movie._id} movie={movie} />
      ))}
    </ul>
  )
}

export default MovieList
