import Lessons from "../lessons/Lessons";
import { Progress } from "../progress/Progress";
import styles from './Exercises.module.css'

function Exercises({workout, setIsOpen}) {
  return (
    <div className={styles.workout_block}>
      <Lessons workout={workout} setIsOpen={setIsOpen} />
      <Progress workout={workout} />
    </div>
  )
}

export default Exercises
