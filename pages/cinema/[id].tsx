import { GetServerSidePropsContext, NextPage } from 'next'
import { Api } from '../../utils/api'
import { CinemaType, MovieType } from '@/types'

type CinemaInfoProps = {
  cinema: CinemaType
  movies: MovieType[]
}

const CinemaInfo: NextPage<CinemaInfoProps> = ({ cinema, movies }) => {
  console.log(cinema)
  console.log(movies)
  return (
    <>
      <div>{cinema.title}</div>
      <div>{cinema.description}</div>
      <img src={cinema.imageUrl} />
    </>
  )
}

export default CinemaInfo

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const id = ctx.params?.id as string
    const cinema = await Api(ctx).cinemas.getOne(id)

    const movies = await Api(ctx).movies.getCinemaMovies(id)

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
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
}
