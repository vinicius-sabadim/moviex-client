import React from 'react'

import Rating from '../Rating'

import Genre from '../../types/Genre'
import MovieType from '../../types/Movie'

import './Movie.css'

const getGenres = (genres: [Genre]) => {
  return genres.map(genre => genre.name).join(', ')
}

interface MovieProps {
  movie: MovieType
}

const Movie: React.SFC<MovieProps> = ({ movie }) => {
  return (
    <li className="movie__container">
      <img
        className="movie__image"
        src={movie.poster}
        alt={`Poster for ${movie.title}`}
      />

      <div className="movie__info">
        <h2 className="movie__title">{movie.title}</h2>
        <div className="movie__items">
          <span>
            <strong>Year:</strong> {movie.year}
          </span>
          <span>
            <strong>Duration:</strong> {movie.duration}
          </span>
          <span>
            <strong>Genre:</strong> {getGenres(movie.genre)}
          </span>
        </div>
        <p className="movie__synopsis">{movie.synopsis}</p>

        <Rating />
      </div>
    </li>
  )
}

export default Movie
