import { useState } from 'react'
import styles from './UserMenu.module.css'
import { Link, useNavigate } from 'react-router-dom'

function UserMenu() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const toggleVisibility = () => {
    setOpen(!open)
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
      {open && (
        <ul className={styles.menu}>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/profile">Мой профиль</Link>
          </li>
          <li>
            <button onClick={handleLogout}>Выйти</button>
          </li>
        </ul>
      )}
    </>
  )
}
export default UserMenu
