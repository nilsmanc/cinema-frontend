import { Inter } from 'next/font/google'
import { GetServerSideProps, NextPage } from 'next'

import { Api } from '../utils/api'
import { MovieType } from '@/types'
import MovieItem from '@/components/MovieItem'
import { useEffect, useState } from 'react'

type MainProps = {
  movies: MovieType[]
}

const Main: NextPage<MainProps> = ({ movies }) => {
  const [filteredMovies, setFilteredMovies] = useState(movies)

  const [search, setSearch] = useState('')

  const [genre, setGenre] = useState('')

  const handleSearch = (search?: string, genre?: string) => {
    let data = [...movies]
    if (genre) {
      data = data.filter((movie) => movie.genre.includes(genre))
    }

    if (search) {
      data = data.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()))
    }

    setFilteredMovies(data)
  }

  useEffect(() => {
    //@ts-ignore
    const genreValue = genre?.value || ''

    handleSearch(search, genreValue)
  })

  return (
    <>
      <div>Genre</div>
      <input value={genre} onChange={(e) => setGenre(e.target.value)} />
      {filteredMovies.map((item) => (
        <MovieItem key={item._id} movie={item} />
      ))}
    </>
  )
}

export default Main

export const getServerSideProps = async (ctx: GetServerSideProps) => {
  try {
    const movies = await Api().movies.getAll()

    return {
      props: {
        movies,
      },
    }
  } catch (err) {
    console.log(err)
  }
  return {
    props: {
      movies: null,
    },
  }
}
