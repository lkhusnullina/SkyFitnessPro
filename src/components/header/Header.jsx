import { Link, useLocation } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
  const location = useLocation()
  const home = location.pathname === '/'
  const logoUrl = home
    ? 'images/header_logo.png'
    : 'images/header_logo_black.png'

  const noUser = location.pathname === '/course'
  const userProfile =
    location.pathname === '/profile' || location.pathname === '/workout'

  const userUrl = noUser ? (
    <div></div>
  ) : userProfile ? (
    <div className={styles.header_user}>
      <img src="images/avatar.svg" alt="avatar" />
      <div className={styles.header_userName}>Сергей</div>
      <img src="images/arrow.svg" alt="arrow" />
    </div>
  ) : (
    <Link to="/login">
      <button className={styles.header_btn}>Войти</button>
    </Link>
  )

  return (
    <div id="top">
      <div className={styles.header_block}>
        <Link to="/">
          <img src={logoUrl} />
        </Link>
        <div>{userUrl}</div>
      </div>
    </div>
  )
}

export default Header
