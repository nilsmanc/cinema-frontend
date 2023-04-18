import { MovieType } from '@/types'
import Link from 'next/link'

import styles from './../styles/MovieItem.module.scss'

type MovieItemProps = {
  movie: MovieType
  price: number
}

const MovieItem: React.FC<MovieItemProps> = ({ movie, price }) => {
  const finalPrice = (price * movie.priceRatio).toFixed(2)

  return (
    <Link href={`/movie/${movie._id}`}>
      <div className={styles.wrapper}>
        <img className={styles.image} src={movie.imageUrl} />
        <div className={styles.title}>{movie.title}</div>
        <div className={styles.genre}>{movie.genre}</div>
        <div className={styles.description}>{movie.description}</div>
        {price && <div className={styles.price}>{finalPrice}$</div>}
      </div>
    </Link>
  )
}

export default MovieItem
