import { useState, useEffect, useRef } from 'react'
import styles from './UserMenu.module.css'
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'

function UserMenu({ user }) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  const toggleVisibility = () => {
    setIsOpen(!isOpen)
  }

  function handleLogout() {
    signOut(auth).then(() => {
      console.log('signOut')
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <div className={styles.header_user_container} ref={menuRef}>
      <div className={styles.header_user} onClick={toggleVisibility}>
        <img
          className={styles.header_img_user}
          src="/images/avatar.svg"
          alt="avatar"
        />
        <div className={styles.header_userName}>{user.email}</div>
        <img
          className={styles.header_img_arrow}
          src="/images/arrow.svg"
          alt="arrow"
        />
      </div>
      {isOpen && (
        <div className={styles.menu}>
          <Link className={styles.menu_block} to="/">
            <div className={styles.menu_link} onClick={() => setIsOpen(false)}>
              Главная
            </div>
          </Link>
          <Link className={styles.menu_block} to="/profile">
            <div className={styles.menu_link} onClick={() => setIsOpen(false)}>
              Профиль
            </div>
          </Link>
          <Link
            className={styles.menu_block}
            to="/login"
            onClick={handleLogout}
          >
            <div
              className={styles.menu_link}
              onClick={() => {
                localStorage.clear()
                setIsOpen(false)
              }}
            >
              Выйти
            </div>
          </Link>
        </div>
      )}
    </div>
  )
}

export default UserMenu
