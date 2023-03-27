import { Inter } from 'next/font/google'
import { GetServerSideProps, NextPage } from 'next'

import { Api } from '../utils/api'
import { MovieType } from '@/types'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

type MainProps = {
  movies: MovieType[]
}

const Main: NextPage<MainProps> = ({ movies }) => {
  console.log(movies)
  return (
    <>
      {movies.map((item) => (
        <Link key={item._id} href={`/movie/${item._id}`}>
          <div>{item.title}</div>
        </Link>
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
