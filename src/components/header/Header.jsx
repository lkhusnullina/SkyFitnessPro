import { Link, useLocation } from 'react-router-dom'
import styles from './Header.module.css'
import UserMenu from '../userMenu/UserMenu'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase'
import { setAuthUser } from '../../store/authSlice'

function Header() {
  const [authUser, setAuthUser] = useState(null)

  useEffect(() => {
     const listen = onAuthStateChanged(auth, (user) => {
        if(user) {
          setAuthUser(user)
        }
        else {
          setAuthUser(null)
        }
     })
     return () => {listen()}
  }, [])
  //console.log(authUser);
  const location = useLocation()
  const home = location.pathname === '/'
  const logoUrl = home
    ? 'images/header_logo.png'
    : 'images/header_logo_black.png'

  //const noUser = location.pathname === '/course'
  const userProfile = Boolean(authUser)
   // location.pathname === '/profile' || location.pathname === '/workout'

  const userUrl = userProfile ? (
    <UserMenu user={authUser} />
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
