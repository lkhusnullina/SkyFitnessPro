import Banner from '../../components/CourseDescription/CourseBanner/CourseBanner'
import Description from '../../components/CourseDescription/CourseDescription/CourseDescription'
import Footer from '../../components/CourseDescription/CourseFooter/CourseFooter'
import Points from '../../components/CourseDescription/CoursePoints/CoursePoints'
import Types from '../../components/CourseDescription/CourseTypes/CourseTypes'
import styles from './CoursePage.module.css'
import { auth } from '../../firebase'
import { getAllCourses } from '../../api'
import { onAuthStateChanged } from 'firebase/auth'
import { useGetAllCoursesQuery } from '../../service/getCourses.js'

export const CoursePage = () => {
  // const { data: courses } = useGetAllCoursesQuery();
  // console.log(courses)
  

  

  getAllCourses()

  return (
    <div className={styles.container}>
      <Banner />
      <h2 className={styles.yogaTitle}>Подойдет для вас, если: </h2>
      <Points />
      <Types />
      <Description />
      <Footer />
    </div>
  )
}
