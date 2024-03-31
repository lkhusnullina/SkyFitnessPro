import { Link, useLocation } from 'react-router-dom'
import styles from './Header.module.css'
import UserMenu from '../userMenu/UserMenu'
import { useSelector } from 'react-redux'

function Header() {
  
  const isAllowed = useSelector(store => store.courses.isAllowed)
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
    <UserMenu />
  ) : (
    <Link to="/login">
      <button className={styles.header_btn}>Войти</button>
      {/*в компоненте юзерменю передавать емайл вместо сергея*/}
    </Link>
  )
    
      // Выйти
  // signOut(auth).then(() => {
  //   // Sign-out successful.
  // }).catch((error) => {
  //   // An error happened.
  // });
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
