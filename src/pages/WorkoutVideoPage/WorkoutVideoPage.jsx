import { useState } from 'react'
import ModalMyProgress from '../../components/modals/ModalMyProgress/ModalMyProgress.jsx'
import Video from '../../components/workoutVideo/WorkoutVideo'
import styles from './WorkoutVideoPage.module.css'
import Lessons from '../../components/lessons/Lessons.jsx'
import { Progress } from '../../components/progress/Progress.jsx'
import Exercises from "../../components/exercises/Exercises.jsx"
import { useGetWorkoutsIdQuery } from '../../service/getCourses.js'
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

  //если у урока нет workout.exercises то оставляем пустое место Lessons и Progress не отрисовываем
  // можно вынести в отдельный компонент Lessons и Progress и делать проверку

  return (
    <div>
    <h2 className={styles.title}>Курс</h2>
    <div className={styles.description}>{workout.name}</div>
    <Video workout={workout} />
    <Exercises workout={workout} setIsOpen={setIsOpen}/>
    {isOpen && <ModalMyProgress isOpen={isOpen} closeModal={closeModal} />}
  </div>
  )
}
