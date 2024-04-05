import { useState } from 'react'
import styles from './ProfilePage.module.css'
import ModalChooseLesson from '../../components/modals/ModalChooseLesson/ModalChooseLesson.jsx'
import { ProfileData } from '../../components/profileData/profileData.jsx'
import ModalChangeUserData from '../../components/modals/ModalChangeUserData/ModalChangeUserData.jsx'
import Cards from '../../components/cards/Cards.jsx'


export const ProfilePage = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isPasswordChange, setIsPasswordChange] = useState(false);
  const [idWorkout, setIdWorkout] = useState(null);
 
  const closeProgressModal = () => {
    setIsOpen(false)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  return (
    <div className={styles.container}>
      <ProfileData setIsPasswordChange={setIsPasswordChange} setIsModalOpen={setIsModalOpen} />
      <h2 className={styles.title_courses}>Мои курсы</h2>
      <Cards showButton={true} setIsOpen={setIsOpen} setIdWorkout={setIdWorkout}/>
      {isOpen && (
        <div className={styles.modalOverlay}>
          <ModalChooseLesson closeProgressModal={closeProgressModal} idWorkout={idWorkout}/>
        </div>
      )}
        {isModalOpen && (
            <div className={styles.modalOverlay}>
            <ModalChangeUserData
               isPasswordChange={isPasswordChange}
               closeModal={closeModal}
            />
            </div>
         )}
    </div>
  )
}
