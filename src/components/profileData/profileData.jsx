import ModalChangeUserData from '../modals/ModalChangeUserData/ModalChangeUserData.jsx'
import { useState } from 'react'
import styles from './profileData.module.css'
import { BigButton } from '../buttons/bigButton.jsx';
import { useSelector } from 'react-redux';

export const ProfileData = ({setIsModalOpen, setIsPasswordChange}) => {
   const password = JSON.parse(localStorage.getItem('user')).password
   console.log(password);
   const mail = JSON.parse(localStorage.getItem('user')).email
   console.log(mail);
   const openModal = (changePassword) => {
   setIsPasswordChange(changePassword)
   setIsModalOpen(true)
   }
      return (
         <>
         <h1 className={styles.title}>Мой профиль</h1>
            <div className={styles.profile_data}>
               <p className={styles.login}>Логин: {mail}</p>
               <p className={styles.password}>Пароль: {password}</p>
               <div className={styles.button_container}>
                  <BigButton value='Редактировать логин' onClick={() => openModal(false)} />
                  <BigButton value='Редактировать пароль' onClick={() => openModal(true)} />
               </div>
            </div>
      </>
   )
};




