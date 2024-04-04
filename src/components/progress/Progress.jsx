import styles from './Progress.module.css'
import { ProgressBar } from '../../components/progressBar/ProgressBar.jsx'

export const Progress = ({ workout }) => {
  let list = []
  if (workout && workout.exercises)
    list = workout.exercises.map((exercise, index) => (
      <ProgressBar
        key={`${workout._id}_${index}`}
        quantity={exercise.quantity}
        name={exercise.name}
        index={index}
        workoutId={workout._id}
      />
    ))
  return (
    <div className={styles.progress_block}>
      <div className={styles.progress_header}>Мой прогресс по тренировке:</div>
      <div className={styles.progress_percentages}>
        <div className={styles.progress_percents}>{list}</div>
      </div>
    </div>
  )
}
