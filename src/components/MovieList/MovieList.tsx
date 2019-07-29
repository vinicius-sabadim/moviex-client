import React from 'react'

import Movie from '../Movie'

import MovieType from '../../types/Movie'

import './MovieList.css'

interface MovieListProps {
  movies: MovieType[] | []
}

const MovieList: React.SFC<MovieListProps> = ({ movies }) => {
  const movieMapper = (movies: MovieType[]): JSX.Element[] => {
    return movies.map(movie => <Movie key={movie._id} movie={movie} />)
  }

  return <ul className="movieList__container">{movieMapper(movies)}</ul>
}

export default MovieList
