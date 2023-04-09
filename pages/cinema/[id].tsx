import { GetServerSidePropsContext, NextPage } from 'next'
import { Api } from '../../utils/api'
import { CinemaType, MovieType } from '@/types'
import MovieItem from '@/components/MovieItem'

import styles from '../../styles/CinemaInfo.module.scss'

type CinemaInfoProps = {
  cinema: CinemaType
  movies: MovieType[]
}

const CinemaInfo: NextPage<CinemaInfoProps> = ({ cinema, movies }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{cinema.title}</div>
      <div className={styles.description}>{cinema.description}</div>
      <div className={styles.adress}>{cinema.adress}</div>
      <img className={styles.image} src={cinema.imageUrl} />

      <div className={styles.movies}>
        {movies.map((item) => (
          <MovieItem key={item._id} movie={item} />
        ))}
      </div>
    </div>
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
