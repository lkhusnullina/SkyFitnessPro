import styles from './ProgressBar.module.css'

export const ProgressBar = ({ progress, lessons}) => {

  return (
        <div className={styles.progress_percent}>
          <div className={styles.progress_percent__name}>{lessons}</div>
          <input
            type="range"
            name="range"
            min="0"
            max="100"
            step="1"
            defaultValue={progress}
          />
      </div>
  )
}

