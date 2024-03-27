import { getCourseByTd } from '../../../api'
import styles from './CourseTypes.module.css'

const Types = () => {
  async function types() {
    const id  = "ab1c3f"    
    const response = await fetch(`https://fitness-project-bc4c2-default-rtdb.asia-southeast1.firebasedatabase.app/courses/${id}.json`)
    const course = await response.json()
    const typesCourse = course.directions
     
      console.log(typesCourse)
      return typesCourse
    
  }

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