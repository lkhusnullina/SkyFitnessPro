import styles from './bigButton.module.css'

export const BigButton = ({ value, onClick, isLoading }) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={isLoading}>
      {value}
    </button>
  )
}

//<BigButton value='test' onClick={onClick} />
