import { GetServerSidePropsContext, NextPage } from 'next'
import { Api } from '../../utils/api'
import { CinemaType, MovieType } from '@/types'
import MovieItem from '@/components/MovieItem'

type CinemaInfoProps = {
  cinema: CinemaType
  movies: MovieType[]
}

const CinemaInfo: NextPage<CinemaInfoProps> = ({ cinema, movies }) => {
  return (
    <>
      <div>{cinema.title}</div>
      <div>{cinema.description}</div>
      <img src={cinema.imageUrl} />
      {movies.map((item) => (
        <MovieItem key={item._id} movie={item} />
      ))}
    </>
  )
}

export default CinemaInfo

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const id = ctx.params?.id as string
    const [cinema, movies] = await Promise.all([
      await Api(ctx).cinemas.getOne(id),
      await Api(ctx).movies.getCinemaMovies(id),
    ])

    return {
      props: {
        cinema,
        movies,
      },
    }
  } catch (err) {
    console.log('Full cinema page', err)

    return {
      props: {},
    }
  }
}
