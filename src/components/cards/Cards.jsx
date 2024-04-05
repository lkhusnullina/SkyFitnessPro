import { useSelector } from 'react-redux'
import Card from '../сard/Card'
import styles from './Cards.module.css'
import { useLocation } from 'react-router-dom';
import { useGetIdUserCoursesQuery } from '../../service/getCourses';

function Cards({showButton, setIsOpen, setIdWorkout}) {
  const pictures = useSelector((state) => state.courses.pictures);
  const courses = useSelector((state) => state.courses.courses);

  const location = useLocation()
  const home = location.pathname === '/'
  const profile = location.pathname === '/profile'

  if(profile) {
    console.log("It`s a profile Page!!!");
    async function getIdUserCourses() {
      const id = JSON.parse(localStorage.getItem('user')).id
      const {data: userCourses, isLoading, isError} = useGetIdUserCoursesQuery(id)
      console.log(userCourses);
      if(userCourses){
        const arrayUserCourses = Object.keys(await userCourses)
        console.log(arrayUserCourses);
        return arrayUserCourses
      }
     
    }
    const idUserCourses = getIdUserCourses()
    
        // return (
        //   <div className={styles.cards_block}>
        //     {courses ?
        //     courses.map((course) => (
        //       <Card key={course._id} card={course} showButton={showButton} setIsOpen={setIsOpen} setIdWorkout={setIdWorkout} picture={pictures.find(p => p.altCard == course.nameEN)}/>
        //     )) :
        //     <h3>Нет доступных курсов</h3>}
        //   </div>
        // )
   } else{
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
  
  // return (
  //   <div className={styles.cards_block}>
  //     {courses ?
  //     courses.map((course) => (
  //       <Card key={course._id} card={course} showButton={showButton} setIsOpen={setIsOpen} setIdWorkout={setIdWorkout} picture={pictures.find(p => p.altCard == course.nameEN)}/>
  //     )) :
  //     <h3>Нет доступных курсов</h3>}
  //   </div>
  // )
}

export default Cards
