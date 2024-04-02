import { useDispatch, useSelector } from 'react-redux'
import { useGetAllCoursesQuery } from '../../service/getCourses'
import { setCourses } from '../../store/slice'
import Card from '../сard/Card'
import styles from './Cards.module.css'
import { useEffect } from 'react'

function Cards({showButton, setIsOpen, setIdWorkout}) {
  const dispatch = useDispatch();
  const pictures = useSelector((state) => state.courses.pictures);
  const { data: allCourses } = useGetAllCoursesQuery();
  useEffect(() => {
    if (!allCourses) return;
    const coursesValue = Object.values(allCourses);
    dispatch(setCourses({ courses: coursesValue }));
  }, [allCourses])
  
  const courses = useSelector((state) => state.courses.courses);
  
  return (
    <div className={styles.cards_block}>
      {courses.map((course) => (
        <Card key={course._id} card={course} showButton={showButton} setIsOpen={setIsOpen} setIdWorkout={setIdWorkout} picture={pictures.find(p => p.altCard == course.nameEN)}/>
      ))}
    </div>
  )
}

export default Cards
