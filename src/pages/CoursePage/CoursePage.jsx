import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useGetCourseIdQuery } from '../../service/firebaseApi'
import ApplicationCourse from '../../components/courses/applicationCourse/ApplicationCourse'
import BannerCourse from '../../components/courses/bannerCourse/BannerCourse'
import DirectionsCourse from '../../components/courses/directionsCourse/DirectionsCourse'
import DescriptionCourse from '../../components/courses/descriptionCourse/DescriptionCourse'
import FittingCourse from '../../components/courses/fittingCourse/FittingCourse'
import styles from './CoursePage.module.css'

export const CoursePage = () => {
  const params = useParams();
  const id = params.id;
  const courses = useSelector((state) => state.courses.courses);
  const pictures = useSelector((state) => state.courses.pictures);

  const { data: crs } = useGetCourseIdQuery(id);
  const [course, setCourse] = useState(null)

  useEffect(() => {
    if (courses) {
      const existCourse = courses.find(p => p._id === id)
      if (existCourse)
        setCourse(existCourse);
      else {
        setCourse(crs);
      }
    }
  }, [courses, crs])

  if (!course) return;

  const picture = pictures.find(p => p.altCard === course.nameEN);

  return (
    <div>
      <BannerCourse course={course} picture={picture}/>
      <h2 className={styles.courses_title}>Подойдет для вас, если:</h2>
      <FittingCourse course={course}/>
      <DirectionsCourse course={course}/>
      <DescriptionCourse course={course}/>
      <ApplicationCourse courseId={id}/>
    </div>
  )
}
