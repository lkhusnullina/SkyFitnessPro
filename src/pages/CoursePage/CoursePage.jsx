import Banner from '../../components/CourseDescription/CourseBanner/CourseBanner'
import Description from '../../components/CourseDescription/CourseDescription/CourseDescription'
import Footer from '../../components/CourseDescription/CourseFooter/CourseFooter'
import Points from '../../components/CourseDescription/CoursePoints/CoursePoints'
import Types from '../../components/CourseDescription/CourseTypes/CourseTypes'
import styles from './CoursePage.module.css'
import {db} from '../../firebase'
import { collection, getDocs } from 'firebase/firestore'

export const CoursePage = () => {

// const querySnapshot = await getDocs(collection(db, "courses"));
// querySnapshot.forEach((doc) => {
//   console.log(doc.data());
// });
// const cursesCol = collection(db, 'courses')
// const snapshot = getDocs(cursesCol)
// const yoga = snapshot.ab1c3f
// console.log(db)
// console.log(snapshot)
// console.log(yoga)
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
