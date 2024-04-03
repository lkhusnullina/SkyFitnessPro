import React, { useEffect, useState } from 'react'
import styles from './ModalChooseLesson.module.css'
import { Link } from 'react-router-dom'
import {
  useGetCourseIdQuery,
  useLazyGetWorkoutsIdQuery,
} from '../../../service/getCourses'

function ModalChooseLesson({ closeProgressModal, idWorkout }) {
  const { data: course, isLoading: courseLoading } =
    useGetCourseIdQuery(idWorkout)
  const [getWorkout] = useLazyGetWorkoutsIdQuery()
  const [workouts, setWorkouts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // TODO: ДОПИСАТЬ ЛОГИКУ ЗАВЕРШЕНИЯ УРОКА ПОЛЬЗОВАТЕЛЕМ isFinished
  let isFinished = true

  useEffect(() => {
    if (course) {
      const workoutsId = course.workouts
      Promise.all(
        workoutsId.map((element) =>
          getWorkout(element)
            .unwrap()
            .then((res) => ({ name: res.name, id: res._id })),
        ),
      ).then((res) => {
        setWorkouts(res)
        setIsLoading(false)
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
        {isLoading ? (
          <div className={styles.loader}></div>
        ) : (
          <div className={styles.lessonsContainerScroll}>
            <div className={styles.lessonsContainer}>
              {workouts?.map((work) => {
                const parts = work.name.split(' / ')
                const lessonTitle = parts[0]
                const lessonDescription = parts.slice(1, -1).join(' / ')
                return (
                  <Link
                    key={work.id}
                    to={`/workout/${work.id}`}
                    className={styles.lessonsLink}
                  >
                    <div
                      className={`${styles.lessonContainer} ${isFinished ? styles.finishLesson : ''}`}
                    >
                      <div className={styles.lessonDoneContainer}>
                        <h2
                          className={`${styles.lessonTitle} ${isFinished ? styles.finishLesson : ''}`}
                        >
                          {lessonTitle}
                        </h2>
                        {isFinished ? (
                          <div className={styles.markDone}>
                            <div className={styles.done}></div>
                          </div>
                        ) : null}
                      </div>
                      {lessonDescription ? (
                        <p
                          className={`${styles.lesson} ${isFinished ? styles.finishLesson : ''}`}
                          style={{ marginTop: '6px' }}
                        >
                          {lessonDescription}
                        </p>
                      ) : null}
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ModalChooseLesson
