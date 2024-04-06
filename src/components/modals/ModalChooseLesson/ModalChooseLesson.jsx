import React, { useEffect, useState } from 'react'
import styles from './ModalChooseLesson.module.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ModalChooseLesson({ closeProgressModal, courseId }) {
  const [workouts, setWorkouts] = useState([])
  const courses = useSelector(state => state.courses.courses);
  const course = courses.find(p => p._id === courseId)
  const progress = useSelector(state => state.users.purchasedCourses);
  const progressCourse = progress.find(p => p._id === courseId)

  const checkCourse = (workoutId) => {
    if (!progressCourse) return false;
    const workout = progressCourse.workouts.find((workout) => workout._id === workoutId)
    if (!workout) return false;
    if (!workout.exercises) return true;
    for (let ex of workout.exercises) {
      if (ex.quantity > ex.count) return false;
    }
    return true;
  }

  const ws = useSelector(state => state.workouts.workouts);
  useEffect(() => {
    if (!course) return;
    const filtered = ws.filter(p => course.workouts.includes(p._id));
    filtered.sort((a, b) => a.name.localeCompare(b.name));
    setWorkouts(filtered)
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
              {workouts?.map((work) => {
                const isFinished = checkCourse(work._id);
                const parts = work.name.split(' / ')
                const lessonTitle = parts[0]
                const lessonDescription = parts.slice(1, -1).join(' / ')
                return (
                  <Link
                    key={work._id}
                    to={`/${course._id}/workout/${work._id}`}
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
      </div>
    </div>
  )
}

export default ModalChooseLesson
