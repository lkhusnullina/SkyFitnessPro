import ModalChangeUserData from '../modals/ModalChangeUserData/ModalChangeUserData.jsx'
import { useState } from 'react'
import styles from './profileData.module.css'
import { BigButton } from '../buttons/bigButton.jsx';

export const ProfileData = ({setIsModalOpen, setIsPasswordChange}) => {
   
   const openModal = (changePassword) => {
   setIsPasswordChange(changePassword)
   setIsModalOpen(true)
   }
      return (
         <>
         <h1 className={styles.title}>Мой профиль</h1>
            <div className={styles.profile_data}>
               <p className={styles.login}>Логин: sergey.petrov96</p>
               <p className={styles.password}>Пароль: 4fkhdj880d</p>
               <div className={styles.button_container}>
                  <BigButton value='Редактировать логин' onClick={() => openModal(false)} />
                  <BigButton value='Редактировать пароль' onClick={() => openModal(true)} />
               </div>
            </div>
      </>
   )
};




