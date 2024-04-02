import React, { useEffect, useState } from 'react'
import styles from './ModalChooseLesson.module.css'
import { Link, useNavigate } from 'react-router-dom'
import {
  useGetCourseIdQuery,
  useLazyGetWorkoutsIdQuery,
} from '../../../service/getCourses'

function ModalChooseLesson({ closeProgressModal, idWorkout }) {
  const { data: course } = useGetCourseIdQuery(idWorkout)
  const [getWorkout] = useLazyGetWorkoutsIdQuery()
  const [workouts, setWorkouts] = useState([])

  useEffect(() => {
    if (course) {
      const workoutsId = course.workouts
      workoutsId.forEach((element) => {
        getWorkout(element)
          .unwrap()
          .then((res) => {
            console.log(res)
            setWorkouts((prev) => {
              const arr = [...prev]
              arr.push({ name: res.name, id: res._id })
              return arr
            })
          })
      })
    }
  }, [course])

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
            {workouts?.map((work) => (
              <Link key={work.id} to={`/workout/${work.id}`}>
                <div className={styles.lessonContainer}>
                  <h2 className={styles.lessonTitle}>{work.name}</h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalChooseLesson
