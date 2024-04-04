import { useSelector } from 'react-redux'
import styles from './ProgressBar.module.css'
import { colors, getLeftPosition } from '../../utils/progressCustom'

export const ProgressBar = ({ quantity, name, index, workoutId }) => {
  const progress = useSelector(
    (state) => state.workouts.progress[workoutId] || [],
  )
  const savedResult = progress[index] || 0
  const completionPercentage = parseInt(
    Math.round((savedResult / quantity) * 100),
  )

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
