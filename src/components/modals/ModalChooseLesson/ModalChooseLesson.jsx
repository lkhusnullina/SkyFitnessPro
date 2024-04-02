import React from 'react'
import styles from './ModalChooseLesson.module.css'
import { useNavigate } from 'react-router-dom'
import { useGetAllCoursesQuery } from '../../../service/getCourses'

function ModalChooseLesson({ closeProgressModal }) {
  const navigate = useNavigate()

  const { data: courses } = useGetAllCoursesQuery()
  if (!courses) return null

  const handleClickOutside = (event) => {
    if (event.target.classList.contains(styles.pageContainer)) {
      closeProgressModal()
    }
  }

  return (
    <div className={styles.pageContainer} onClick={handleClickOutside}>
      <div className={styles.modalForm}>
        <h1 className={styles.title}>Выберите тренировку</h1>
        <div className={styles.lessonsContainerScroll}>
          <div className={styles.lessonsContainer}>
            {Object.values(courses).map((course) =>
              course.workouts.map((workoutId) => (
                <div
                  onClick={() => navigate(`/workout/${workoutId}`)}
                  key={workoutId}
                  className={styles.lessonContainer}
                >
                  {/* <div className={styles.markDone}>
                    <div className={styles.done}></div>
                  </div> */}
                  {workoutId}
                </div>
              )),
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalChooseLesson
