import { MovieType } from '@/types'
import { GetServerSidePropsContext, NextPage } from 'next'
import { Api } from '../../utils/api'

import styles from '../../styles/MovieInfo.module.scss'

type MovieInfoProps = {
  movie: MovieType
}

const MovieInfo: NextPage<MovieInfoProps> = ({ movie }) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={movie.imageUrl} />
      <div className={styles.title}>{movie.title}</div>
      <div className={styles.description}>{movie.description}</div>
      <div className={styles.ageRating}>{movie.ageRating}</div>
      <div className={styles.cast}>{movie.cast}</div>
      <div className={styles.director}>{movie.director}</div>
      <div className={styles.duration}>{movie.duration}</div>
      <div className={styles.genre}>{movie.genre}</div>
    </div>
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
