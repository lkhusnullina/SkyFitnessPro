import { BigButton } from '../buttons/bigButton'
import styles from './Lessons.module.css'

function Lessons({ workout, setIsOpen }) {
  let list = []
  if (workout && workout.exercises)
    list = workout.exercises.map((exercise, i) => (
      <li key={i}>{exercise.name}</li>
    ))

  return (
    <div className={styles.workout_description}>
      <h2 className={styles.workout_header}>Упражнения</h2>
      <ul className={styles.workout_element}>{list}</ul>
      <BigButton
        value="Заполнить свой прогресс"
        onClick={() => setIsOpen(true)}
      />
    </div>
  )
}

export default Lessons
