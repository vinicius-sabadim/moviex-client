import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Genre from '../../types/Genre'

import './Genres.css'

const Genres = () => {
  const [genres, setGenres] = useState<Genre[] | []>([])

  const fetchGenres = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/genres')
      setGenres(data)
    } catch {}
  }

  useEffect(() => {
    fetchGenres()
  }, [])

  const genreMapper = (genres: Genre[]): JSX.Element[] => {
    return genres.map(genre => (
      <li className="genres__listItem" key={genre._id}>
        {genre.name}
      </li>
    ))
  }

  return (
    <ul className="genres__container">
      <h3>Genres</h3>
      <li className="genres__listItem">All</li>
      {genreMapper(genres)}
    </ul>
  )
}

export default Genres
