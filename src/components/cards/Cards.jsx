import { useSelector } from 'react-redux'
import Card from '../сard/Card'
import styles from './Cards.module.css'

function Cards({showButton, setIsOpen, setIdWorkout}) {
  const pictures = useSelector((state) => state.courses.pictures);
  const courses = useSelector((state) => state.courses.courses);
  
  return (
    <div className={styles.cards_block}>
      {courses ?
      courses.map((course) => (
        <Card key={course._id} card={course} showButton={showButton} setIsOpen={setIsOpen} setIdWorkout={setIdWorkout} picture={pictures.find(p => p.altCard == course.nameEN)}/>
      )) :
      <h3>Нет доступных курсов</h3>}
    </div>
  )
}

export default Cards
