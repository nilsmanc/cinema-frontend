import { GetServerSidePropsContext, NextPage } from 'next'
import { Api } from '../../utils/api'
import { CinemaType, MovieType } from '@/types'
import MovieItem from '@/components/MovieItem'

import styles from '../../styles/CinemaInfo.module.scss'
import { useState } from 'react'

type CinemaInfoProps = {
  cinema: CinemaType
  movies: MovieType[]
}

const CinemaInfo: NextPage<CinemaInfoProps> = ({ cinema, movies }) => {
  const [day, setDay] = useState('')

  console.log(day)

  const days = ['3', '4', '5', '6', '7', '8']

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{cinema.title}</div>
      <div className={styles.description}>{cinema.description}</div>
      <img className={styles.image} src={cinema.imageUrl} />
      <div>
        {days.map((day) => (
          <button key={day} onClick={() => setDay(day)} className={styles.date}>
            {day}
          </button>
        ))}
      </div>
      <div className={styles.movies}>
        <div className={styles.time}>10.00</div>
        {movies
          .filter((item) => item.cinema === '64265d3456289865eeb9d844')
          .filter((item) => item.time.includes('10.00'))
          .filter((item) => item.day === day)
          .map((item) => (
            <MovieItem key={item._id} movie={item} />
          ))}
        <div className={styles.time}>12.00</div>
        {movies
          .filter((item) => item.cinema === '64265d3456289865eeb9d844')
          .filter((item) => item.time.includes('12.00'))
          .filter((item) => item.day === day)
          .map((item) => (
            <MovieItem key={item._id} movie={item} />
          ))}
        <div className={styles.time}>14.00</div>
        {movies
          .filter((item) => item.cinema === '64265d3456289865eeb9d844')
          .filter((item) => item.time.includes('14.00'))
          .filter((item) => item.day === day)
          .map((item) => (
            <MovieItem key={item._id} movie={item} />
          ))}
        <div className={styles.time}>16.00</div>
        {movies
          .filter((item) => item.cinema === '64265d3456289865eeb9d844')
          .filter((item) => item.time.includes('16.00'))
          .filter((item) => item.day === day)
          .map((item) => (
            <MovieItem key={item._id} movie={item} />
          ))}
        <div className={styles.time}>18.00</div>
        {movies
          .filter((item) => item.cinema === '64265d3456289865eeb9d844')
          .filter((item) => item.time.includes('18.00'))
          .filter((item) => item.day === day)
          .map((item) => (
            <MovieItem key={item._id} movie={item} />
          ))}
        <div className={styles.time}>20.00</div>
        {movies
          .filter((item) => item.cinema === '64265d3456289865eeb9d844')
          .filter((item) => item.time.includes('20.00'))
          .filter((item) => item.day === day)
          .map((item) => (
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
