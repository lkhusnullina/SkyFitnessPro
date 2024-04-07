import { BigButton } from '../buttons/bigButton.jsx'
import styles from './profileData.module.css'
import { useSelector } from 'react-redux'

export const ProfileData = ({ setIsModalOpen, setIsPasswordChange }) => {
  let password = JSON.parse(localStorage.getItem('user')).password

  password = useSelector(state => state.auth.password)
  const userLogin = useSelector(state => state.auth.email)

  const openModal = (changePassword) => {
    setIsPasswordChange(changePassword)
    setIsModalOpen(true)
  }


  return (
    <>
      <h1 className={styles.title}>Мой профиль</h1>
      <div className={styles.profile_data}>
        <p className={styles.login}>Логин: {userLogin}</p>
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
