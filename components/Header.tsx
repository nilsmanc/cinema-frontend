import Link from 'next/link'
import styles from '../styles/Header.module.scss'

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src='https://cdn-icons-png.flaticon.com/512/3418/3418886.png' />
      <Link href={'/'}>
        <button className={styles.table}>Table</button>
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
