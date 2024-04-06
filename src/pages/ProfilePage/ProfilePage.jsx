import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Cards from '../../components/cards/Cards.jsx'
import ModalChangeUserData from '../../components/modals/ModalChangeUserData/ModalChangeUserData.jsx'
import ModalChooseLesson from '../../components/modals/ModalChooseLesson/ModalChooseLesson.jsx'
import { ProfileData } from '../../components/profileData/profileData.jsx'
import { useGetIdUserCoursesQuery } from '../../service/firebaseApi'
import styles from './ProfilePage.module.css'

export const ProfilePage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isPasswordChange, setIsPasswordChange] = useState(false)
  const [idWorkout, setIdWorkout] = useState(null)
  const [myCourses, setMyCourses] = useState([]);

  const id = useSelector(state => state.auth.id)
  const courses = useSelector(state => state.courses.courses)

  const { data: userCourses } = useGetIdUserCoursesQuery(id, { refetchOnMountOrArgChange: true })

  useEffect(() => {
    console.log(userCourses)
    if (!userCourses) return;
    const courseIds = Object.keys(userCourses);
    setMyCourses(courses.filter((course) => courseIds.includes(course._id)))
  }, [userCourses, courses])

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
        setIdWorkout={setIdWorkout}
        courses={myCourses}
      />
      {isOpen && (
        <div className={styles.modalOverlay}>
          <ModalChooseLesson
            closeProgressModal={closeProgressModal}
            idWorkout={idWorkout}
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

