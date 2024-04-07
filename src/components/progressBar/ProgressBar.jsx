import { useSelector } from 'react-redux'
import styles from './ProgressBar.module.css'
import { colors, getLeftPosition } from '../../utils/progressCustom'
import { useParams } from 'react-router-dom'

export const ProgressBar = ({ quantity, name, index, workoutId }) => {
  const params = useParams();
  const courseId = params.courseId;
  const purchasedCourses = useSelector(state => state.users.purchasedCourses)
  const exercise = purchasedCourses.find((course) => course._id === courseId).workouts.find((w) => w._id === workoutId).exercises.find((ex) => ex.name === name);

  const savedResult = exercise.count || 0
  const completionPercentage = Math.round((savedResult / quantity) * 100)

  return (
    <div className={styles.progress_percent}>
      <div className={styles.progress_percent__name}>
        {name.replace(/\s*\(.*?\)\s*/g, '')}
      </div>
      <div
        className={styles.progress_bar}
        style={{
          backgroundColor: colors[index]?.background,
          border: `2px solid ${colors[index]?.fill}`,
        }}
      >
        <div
          className={styles.done}
          style={{
            width: `${completionPercentage}%`,
            backgroundColor: colors[index]?.fill,
          }}
        />
      </div>
      <span
        className={styles.percent}
        style={{
          color:
            completionPercentage === 100 || completionPercentage === 0
              ? '#000'
              : '#fff',
          right: getLeftPosition(completionPercentage),
        }}
      >
        {completionPercentage > 100 ? '100%' : `${completionPercentage}%`}
      </span>
    </div>
  )
}
