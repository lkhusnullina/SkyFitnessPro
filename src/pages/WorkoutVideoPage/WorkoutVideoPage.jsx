import { useState } from 'react'
import ModalMyProgress from '../../components/modals/ModalMyProgress/ModalMyProgress.jsx'
import Video from '../../components/workoutVideo/WorkoutVideo'
import styles from './WorkoutVideoPage.module.css'
import Exercises from '../../components/exercises/Exercises.jsx'
import {
  useGetCourseIdQuery,
  useGetWorkoutsIdQuery,
} from '../../service/getCourses.js'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export const WorkoutVideoPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const params = useParams()
  const id = params.id
  const workouts = useSelector((state) => state.workouts.workouts)
  let workout = workouts.find((p) => p._id === id)

  if (!workout) {
    const { data: wkt } = useGetWorkoutsIdQuery(id)
    workout = wkt
  }
  if (!workout) return

  const closeModal = () => {
    setIsOpen(false)
  }

  // const courses = useSelector((state) => state.courses.courses)
  // let course = courses.find((p) => p._id === id)
  // if (!course) {
  //   const { data: crs } = useGetCourseIdQuery(id)
  //   course = crs
  // }
  // if (!course) return

  //    workout.exercises     Lessons  Progress
  //      Lessons  Progress

  //

  return (
    <div>
      {/* <h2 className={styles.title}>{course.nameRU}</h2> */}
      <div className={styles.description}>{workout.name}</div>
      <Video workout={workout} />
      {workout.exercises ? (
        <Exercises workout={workout} setIsOpen={setIsOpen} />
      ) : (
        <div className={styles.emptyBlock}></div>
      )}
      {isOpen && (
        <ModalMyProgress
          workout={workout}
          isOpen={isOpen}
          closeModal={closeModal}
        />
      )}
    </div>
  )
}
