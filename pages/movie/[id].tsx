import { MovieType } from '@/types'
import { GetServerSidePropsContext, NextPage } from 'next'
import { Api } from '../../utils/api'

type MovieInfoProps = {
  movie: MovieType
}

const MovieInfo: NextPage<MovieInfoProps> = ({ movie }) => {
  console.log(movie)
  return (
    <>
      <div>{movie.title}</div>
      <div>{movie.description}</div>
    </>
  )
}

export default MovieInfo

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const id = ctx.params?.id as string

    console.log(ctx.params)
    const movie = await Api(ctx).movies.getOne(id)

    return {
      props: {
        movie,
      },
    }
  } catch (err) {
    console.log('Full movie page', err)

    return {
      props: {},
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
}
