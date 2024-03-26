import { useState } from 'react'
import ModalMyProgress from '../../components/modals/ModalMyProgress/ModalMyProgress.jsx'
import Video from '../../components/workoutVideo/WorkoutVideo'
import styles from './WorkoutVideoPage.module.css'
import Lessons from '../../components/lessons/Lessons.jsx'
import { Progress } from '../../components/progress/Progress.jsx'

export const WorkoutVideoPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <h2 className={styles.title}>Йога</h2>
      <div className={styles.description}>
        Красота и здоровье / Йога на каждый день / 2 день
      </div>
      <Video />
      <div className={styles.workout_block}>
        <Lessons setIsOpen={setIsOpen}/>
        <Progress/>
      </div>
      {isOpen && <ModalMyProgress isOpen={isOpen} closeModal={closeModal} />}
    </div>
  )
}
