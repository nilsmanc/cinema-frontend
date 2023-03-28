import { Inter } from 'next/font/google'
import { GetServerSideProps, NextPage } from 'next'

import { Api } from '../utils/api'
import { MovieType } from '@/types'
import Link from 'next/link'
import MovieItem from '@/components/MovieItem'

const inter = Inter({ subsets: ['latin'] })

type MainProps = {
  movies: MovieType[]
}

const Main: NextPage<MainProps> = ({ movies }) => {
  console.log(movies)
  return (
    <>
      {movies.map((item) => (
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
