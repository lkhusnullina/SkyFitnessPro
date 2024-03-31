import { useState } from 'react'
import styles from './UserMenu.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'


function UserMenu({user}) {
  const navigate = useNavigate()
  const dispatch = useDispatch
  const [isOpen, setIsOpen] = useState(false)
  
  const toggleVisibility = () => {
    setIsOpen(!isOpen)
  }

  function handleLogout() {
    signOut(auth).then(() => {
      console.log("signOut");
    }).catch((error) => {
      console.log(error);
    });
    
  }

  return (
    <div className={styles.header_user_container}>
      <div className={styles.header_user} onClick={toggleVisibility}>
        <img className={styles.header_img_user}src="/images/avatar.svg" alt="avatar" />
        <div className={styles.header_userName}>{user.email}</div>
        <img className={styles.header_img_arrow} src="/images/arrow.svg" alt="arrow" />
      </div>
      {isOpen && (
        <div className={styles.menu}>
          <Link className={styles.menu_block} to="/">
            <div className={styles.menu_link}>На главную</div>
          </Link>
          <Link className={styles.menu_block} to="/profile">
            <div className={styles.menu_link}>Профиль</div>
          </Link>
          <Link className={styles.menu_block} onClick={handleLogout}>
            <div className={styles.menu_link} onClick={() => {
              localStorage.clear()
              navigate('/login')
            }}>Выйти</div>
          </Link>
        </div>
      )}
    </div>
  )
}
export default UserMenu
