import { useState } from 'react'
import styles from './UserMenu.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { removeAuth } from '../../store/authSlice'
import { useAuth } from '../../utils/authHook'


function UserMenu() {
  const navigate = useNavigate()
  const dispatch = useDispatch
  const [isOpen, setIsOpen] = useState(false)
  useAuth()
  const toggleVisibility = () => {
    setIsOpen(!isOpen)
  }

  const handleLogout = () => {
    dispatch(removeAuth(null))
    // logout();
    navigate('/login')
  }

  return (
    <div className={styles.header_user_container}>
      <div className={styles.header_user} onClick={toggleVisibility}>
        <img src="images/avatar.svg" alt="avatar" />
        <div className={styles.header_userName}>Сергей</div>
        <img src="images/arrow.svg" alt="arrow" />
      </div>
      {isOpen && (
        <div className={styles.menu}>
          <Link className={styles.menu_block} to="/">
            <div className={styles.menu_link}>На главную</div>
          </Link>
          <Link className={styles.menu_block} to="/profile">
            <div className={styles.menu_link}>Профиль</div>
          </Link>
          <Link className={styles.menu_block} onClick={(e) => {
            e.preventDefault();
            handleLogout();
          }}>
            <div className={styles.menu_link}>Выйти</div>
          </Link>
        </div>
      )}
    </div>
  )
}
export default UserMenu
