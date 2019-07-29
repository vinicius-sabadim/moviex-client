import Genre from './Genre'

type Movie = {
  _id: string
  duration: string
  genre: [Genre]
  poster: string
  synopsis: string
  title: string
  year: number
}

export default Movie
