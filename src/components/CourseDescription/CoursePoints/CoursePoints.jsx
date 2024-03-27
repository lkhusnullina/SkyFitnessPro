import styles from './CoursePoints.module.css'

const Points = () => {
    return (
        <div className={styles.description}>
        <div className={styles.pointsInfo}>
          <img className={styles.points} src="images/1.svg" />
          <p className={styles.pointsText}>
            Давно хотели попробовать йогу, но не решались начать.
          </p>
        </div>

        <div className={styles.pointsInfo}>
          <img className={styles.points} src="images/2.svg" />
          <p className={styles.pointsText}>
            Хотите укрепить позвоночник, избавиться от болей в спине и суставах.
          </p>
        </div>

        <div className={styles.pointsInfo}>
          <img className={styles.points} src="images/3.svg" />
          <p className={styles.pointsText}>
            Ищете активность, полезную для тела и души.
          </p>
        </div>
      </div>
        
    )
  }
  
  export default Points