import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Cards from '../../components/cards/Cards.jsx'
import ModalChangeUserData from '../../components/modals/ModalChangeUserData/ModalChangeUserData.jsx'
import ModalChooseLesson from '../../components/modals/ModalChooseLesson/ModalChooseLesson.jsx'
import { ProfileData } from '../../components/profileData/profileData.jsx'
import styles from './ProfilePage.module.css'

export const ProfilePage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isPasswordChange, setIsPasswordChange] = useState(false)
  const [courseId, setCourseId] = useState(null)
  const [myCourses, setMyCourses] = useState([]);

  const courses = useSelector(state => state.courses.courses)
  const purchasedCourses = useSelector(state => state.users.purchasedCourses) || []

  useEffect(() => {
    const courseIds = Object.values(purchasedCourses).map((course) => course._id);
    setMyCourses(courses.filter((course) => courseIds.includes(course._id)))
  }, [purchasedCourses])

  const closeProgressModal = () => {
    setIsOpen(false)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  
  useEffect(() => {
    const handleBodyScroll = () => {
      if (isOpen || isModalOpen) {
        document.body.classList.add('openModal')
      } else {
        document.body.classList.remove('openModal')
      }
    }

    handleBodyScroll()

    return () => {
      document.body.classList.remove('openModal')
    }
  }, [isOpen, isModalOpen])

  return (
    <div className={styles.container}>
      <ProfileData
        setIsPasswordChange={setIsPasswordChange}
        setIsModalOpen={setIsModalOpen}
      />
      <h2 className={styles.title_courses}>Мои курсы</h2>
      <Cards
        showButton={true}
        setIsOpen={setIsOpen}
        setCourseId={setCourseId}
        courses={myCourses}
      />
      {isOpen && (
        <div className={styles.modalOverlay}>
          <ModalChooseLesson
            closeProgressModal={closeProgressModal}
            courseId={courseId}
          />
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

