import { CinemaType } from '@/types'
import Link from 'next/link'

import styles from './../styles/MovieItem.module.scss'

type CinemaItemProps = {
  cinema: CinemaType
}

const CinemaItem: React.FC<CinemaItemProps> = ({ cinema }) => {
  return (
    <Link href={`/cinema/${cinema._id}`}>
      <div className={styles.wrapper}>
        <img className={styles.image} src={cinema.imageUrl} />
        <div className={styles.title}>{cinema.title}</div>
        <div className={styles.description}>{cinema.description}</div>
      </div>
    </Link>
  )
}

export default CinemaItem
