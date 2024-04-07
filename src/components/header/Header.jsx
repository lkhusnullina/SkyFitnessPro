import { Link, useLocation } from 'react-router-dom'
import styles from './Header.module.css'
import UserMenu from '../userMenu/UserMenu'
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase'

function Header() {
  //const isAuthUser = JSON.parse(localStorage.getItem('user'))

  const [isAuthUser, setIsAuthUser] = useState(null)
  useEffect(() => {
     const listen = onAuthStateChanged(auth, (user) => {
        if(user) {
          setIsAuthUser(user)
        }
        else {
          setIsAuthUser(null)
        }
     })
     return () => {listen()}
  }, [])
  //console.log(isAuthUser);
  const location = useLocation()
  const home = location.pathname === '/'
  const logoUrl = home
    ? '/images/header_logo.png'
    : '/images/header_logo_black.png'
    
  const userUrl = isAuthUser ? (
    <UserMenu user={isAuthUser} />
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
