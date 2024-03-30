import { useSelector } from 'react-redux'
import styles from './CoursePage.module.css'
import { useParams } from 'react-router-dom'
import { useGetCourseIdQuery } from '../../service/getCourses'
import DirectionsCourse from '../../components/courses/directionsCourse/DirectionsCourse'
import FittingCourse from '../../components/courses/fittingCourse/FittingCourse'
import DescriptionCourse from '../../components/courses/descriptionCourse/DescriptionCourse'
import ApplicationCourse from '../../components/courses/applicationCourse/ApplicationCourse'
import BannerCourse from '../../components/courses/bannerCourse/BannerCourse'

export const CoursePage = () => {
  const params = useParams();
  const id = params.id;

  const courses = useSelector((state) => state.courses.courses);
  const pictures = useSelector((state) => state.courses.pictures);
  let course = courses.find(p => p._id === id);
  if (!course) {
    const { data: crs } = useGetCourseIdQuery(id);
    course = crs;
  }
  
  if (!course) return;

  return (
    <div>
      <BannerCourse course={course} picture={pictures}/>
      <h2 className={styles.courses_title}>Подойдет для вас, если: </h2>
      <FittingCourse />
      <DirectionsCourse course={course}/>
      <DescriptionCourse />
      <ApplicationCourse/>
    </div>
  )
}
