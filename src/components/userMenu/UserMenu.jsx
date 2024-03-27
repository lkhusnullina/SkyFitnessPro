import { useState } from 'react'
import styles from './UserMenu.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { BigButton } from '../buttons/bigButton'

function UserMenu() {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const toggleVisibility = () => {
    setIsOpen(!isOpen)
  }

  const handleLogout = () => {
    // logout();
    navigate('/login')
  }

  return (
    <>
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
          <div className={styles.menu_block} onClick={handleLogout}>
            <div className={styles.menu_link}>Выйти</div>
          </div>
        </div>
      )}
    </>
  )
}
export default UserMenu
