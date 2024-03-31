import styles from './Progress.module.css'
import { ProgressBar } from '../../components/progressBar/ProgressBar.jsx'
export const Progress = ({ workout }) => {
  let list = []
  if (workout && workout.exercises)
    list = workout.exercises.map((exercise, i) => (
      <ProgressBar
        key={i}
        quantity={exercise.quantity}
        name={exercise.name}
      />
    ))
  return (
    <div className={styles.progress_block}>
      <div className={styles.progress_header}>Мой прогресс по тренировке:</div>
      <div className={styles.progress_percentages}>
        <div className={styles.progress_percent}>{list}</div>
      </div>
    </div>
  )
}
