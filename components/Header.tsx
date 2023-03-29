import styles from '../styles/Header.module.scss'

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src='https://cdn-icons-png.flaticon.com/512/3418/3418886.png' />
      <button className={styles.table}>Table</button>
      <button className={styles.cinemas}>Cinemas</button>
      <button className={styles.about}>About us</button>
      <input className={styles.search} placeholder='search' />
    </div>
  )
}

export default Header
