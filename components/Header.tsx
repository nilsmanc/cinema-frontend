import Link from 'next/link'
import styles from '../styles/Header.module.scss'

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Link href={'/'}>
        <img className={styles.image} src='https://img.icons8.com/wired/256/cinema-.png' />
      </Link>
      <Link href={'/'}>
        <button className={styles.table}>In Theaters</button>
      </Link>
      <Link href={'/cinemas'}>
        <button className={styles.cinemas}>Cinemas</button>
      </Link>
      <Link href={'/about'}>
        <button className={styles.about}>About us</button>
      </Link>
      <input className={styles.search} placeholder='search' />
    </div>
  )
}

export default Header
