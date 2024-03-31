import { useDispatch, useSelector } from 'react-redux'
import { useGetAllCoursesQuery } from '../../service/getCourses'
import { setCourses } from '../../store/slice'
import Card from '../сard/Card'
import styles from './Cards.module.css'

function Cards({showButton, setIsOpen}) {
  const dispatch = useDispatch();
  const pictures = useSelector((state) => state.courses.pictures);
  const { data: courses } = useGetAllCoursesQuery();
  if (!courses) return;
  const crs = Object.values(courses);
  if(!crs) dispatch(setCourses({ courses: crs }));
  
  return (
    <div className={styles.cards_block}>
      {crs.map((course) => (
        <Card key={course._id} card={course} showButton={showButton} setIsOpen={setIsOpen} picture={pictures.find(p => p.altCard == course.nameEN)}/>
      ))}
    </div>
  )
}

export default Cards
