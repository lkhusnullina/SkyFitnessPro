import { useState } from 'react'
import ModalMyProgress from '../../components/modals/ModalMyProgress/ModalMyProgress.jsx'
import Video from '../../components/workoutVideo/WorkoutVideo'
import styles from './WorkoutVideoPage.module.css'
// import Lessons from '../../components/lessons/Lessons.jsx'
// import { Progress } from '../../components/progress/Progress.jsx'
import { useGetWorkoutsIdQuery } from '../../service/getCourses.js'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Exercises from '../../components/exercises/Exercises.jsx'

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

  //сделать проверку на отрисовку компонента Exercises

  // сделать проверку и прокинуть воркаут в модалку и прописать там названия 

  return (
    <div>
      <h2 className={styles.title}>Курс</h2>
      <div className={styles.description}>{workout.name}</div>
      <Video workout={workout} />
      {workout.exercises ? <Exercises workout={workout} setIsOpen={setIsOpen}/> : <div className={styles.emptyBlock}></div> }
      {isOpen && <ModalMyProgress workout={workout} isOpen={isOpen} closeModal={closeModal} />}
    </div>
  )
}
