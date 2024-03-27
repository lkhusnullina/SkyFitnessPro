import styles from './bigButton.module.css';

export const BigButton = ({value, onClick}) => {
   return (
      <button
      className={styles.button}
      onClick={onClick}
    >
      {value}
    </button>
   )
}

//<BigButton value='test' onClick={onClick} />