import ModalChangeUserData from '../modals/ModalChangeUserData/ModalChangeUserData.jsx'
import { useState } from 'react'
import styles from './profileData.module.css'

export const ProfileData = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [isPasswordChange, setIsPasswordChange] = useState(false)

   const openModal = (changePassword) => {
   setIsPasswordChange(changePassword)
   setIsModalOpen(true)
   }

   const closeModal = () => {
   setIsModalOpen(false)
   }

      return (
         <>
         <h1 className={styles.title}>Мой профиль</h1>
            <div className={styles.profile_data}>
               <p className={styles.login}>Логин: sergey.petrov96</p>
               <p className={styles.password}>Пароль: 4fkhdj880d</p>
               <div className={styles.button_container}>
                  <button
                     className={styles.change_login_btn}
                     onClick={() => openModal(false)}
                  >
                     Редактировать логин
                  </button>
                  <button
                     className={styles.change_password_btn}
                     onClick={() => openModal(true)}
                  >
                     Редактировать пароль
                  </button>
               </div>
            </div>
         {isModalOpen && (
            <div className={styles.modalOverlay}>
            <ModalChangeUserData
               isPasswordChange={isPasswordChange}
               closeModal={closeModal}
            />
            </div>
         )}
      </>
   )
};




