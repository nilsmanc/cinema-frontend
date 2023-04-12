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
      <div className={styles.title}>
        <div>{movie.title}</div>
        <span className={styles.genre}>{movie.genre}</span>
        <span className={styles.duration}>{movie.duration}</span>
      </div>
      <div className={styles.description}>{movie.description}</div>
      <div className={styles.ageRating}>{movie.ageRating}</div>

      <div className={styles.cast}>
        Director: <span className={styles.director}>{movie.director}</span>
        <br />
        Cast: <span className={styles.cast}>{movie.cast}</span>
      </div>
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
