import { useDispatch } from 'react-redux'
import { useGetAllCoursesQuery } from '../../service/getCourses'
import { setCourses } from '../../store/slice'
import Card from '../сard/Card'
import styles from './Cards.module.css'
import { Pictures } from '../../constans'

function Cards({showButton}) {
  const dispatch = useDispatch()
  const { data: courses } = useGetAllCoursesQuery()
  if (!courses) return
  const crs = Object.values(courses);
  dispatch(setCourses({ courses: crs }));
  console.log(Pictures);

  return (
    <div className={styles.cards_block}>
      {crs.map((course, i) => (
        <Card key={course._id} card={course} showButton={showButton} picture={Pictures[i%Pictures.length]}/>
      ))}
    </div>
  )
}

export default Cards
