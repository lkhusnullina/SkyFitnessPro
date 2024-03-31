import styles from './ProgressBar.module.css'

export const ProgressBar = ({ progress, quantity, name }) => {
  return (
    <div className={styles.progress_percent}>
      <div className={styles.progress_percent__name}>{name}</div>
      <input
        className={styles.progress_input}
        type="range"
        name="range"
        min="0"
        max={quantity}
        step="1"
        defaultValue={quantity}
      />
    </div>
  )
}
