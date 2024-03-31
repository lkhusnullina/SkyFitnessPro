import Banner from '../../components/CourseDescription/CourseBanner/CourseBanner'
import Description from '../../components/CourseDescription/CourseDescription/CourseDescription'
import Footer from '../../components/CourseDescription/CourseFooter/CourseFooter'
import Points from '../../components/CourseDescription/CoursePoints/CoursePoints'
import Types from '../../components/CourseDescription/CourseTypes/CourseTypes'
import styles from './CoursePage.module.css'
import { useSelector } from 'react-redux'

export const CoursePage = () => {
  // const uid = useSelector(state => state.auth.id)
  // console.log(uid);
  // const mail = useSelector(state => state.auth.email)
  // console.log(mail);

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
