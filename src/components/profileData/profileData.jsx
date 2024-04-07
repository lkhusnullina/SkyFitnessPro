import { BigButton } from '../buttons/bigButton.jsx'
import { auth } from '../../firebase.js'
import styles from './profileData.module.css'

export const ProfileData = ({ setIsModalOpen, setIsPasswordChange }) => {
  const password = JSON.parse(localStorage.getItem('user')).password

  const openModal = (changePassword) => {
    setIsPasswordChange(changePassword)
    setIsModalOpen(true)
  }

  return (
    <>
      <h1 className={styles.title}>Мой профиль</h1>
      <div className={styles.profile_data}>
        <p className={styles.login}>Логин: {auth.currentUser.email}</p>
        <p className={styles.password}>Пароль: {password}</p>
        <div className={styles.button_container}>
          <BigButton
            value="Редактировать логин"
            onClick={() => openModal(false)}
          />
          <BigButton
            value="Редактировать пароль"
            onClick={() => openModal(true)}
          />
        </div>
      </div>
    </>
  )
}
