import styles from './CourseTypes.module.css'

const Types = () => {
    return (
        <>
        <h2 className={styles.types}>Направления:</h2>
        <div className={styles.yogaAllTypes}>
        <ul className={styles.typesColumn}>
          <li>Йога для новичков </li>
          <li>Классическая йога </li>
          <li>Йогатерапия</li>
        </ul>
        <ul className={styles.typesColumn}>
          <li>Кундалини-йога </li>
          <li>Хатха-йога </li>
          <li>Аштанга-йога</li>
        </ul>
        </div>
        </>
        
    )
  }
  
  export default Types