import { useDispatch, useSelector } from 'react-redux'
import Card from '../сard/Card'
import styles from './Cards.module.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { BigButton } from '../buttons/bigButton';
import { useEffect } from 'react';
import { setIdUserCourses, setIdUserCoursesLoaded } from '../../store/usersSlice';
import { useGetIdUserCoursesQuery } from '../../service/getCourses';

function Cards({showButton, setIsOpen, setIdWorkout}) {
  const pictures = useSelector((state) => state.courses.pictures);
  const courses = useSelector((state) => state.courses.courses);

  const location = useLocation()
  const home = location.pathname === '/'
  const profile = location.pathname === '/profile'
  const goToMainPage = () => {
    const navigate = useNavigate()
    navigate("/")
  }

  if(profile) {
    console.log("It`s a profile Page!!!");
    const dispatch = useDispatch();
    const id = JSON.parse(localStorage.getItem('user')).id
    
    // const isLoadedIdUserCourses = useSelector((state) => state.users.isLoaded);
    // const {data: userCourses, isLoading} = useGetIdUserCoursesQuery(id)
    // useEffect(() => {
    //   if (isLoadedIdUserCourses) return;
    //   if (!userCourses) return;
    //   const arrayUserCourses = Object.keys(userCourses)
    //   if (!arrayUserCourses) return;
    //   dispatch(setIdUserCourses({ idUserCourses: arrayUserCourses }));
    //   dispatch(setIdUserCoursesLoaded())
    //   console.log(userCourses);
    //   console.log(arrayUserCourses);
    // }, [userCourses])
    // const idUserCourses = useSelector((state) => state.users.idUserCourses);
    // console.log(idUserCourses);

      const {data: userCourses, isLoading} = useGetIdUserCoursesQuery(id)
      console.log(userCourses);
      if(userCourses){
        const arrayUserCourses = Object.keys(userCourses)
        console.log(arrayUserCourses);
        const arrayAllCoursesId = courses?.map((course, index) => course._id)
        console.log(arrayAllCoursesId);
      }
        return (
          <>
            {isLoading ?  <strong className={styles.cards_alert}> Идёт загрузка курсов, пожалуйста, подождите.</strong> 
            : <div className={styles.cards_block}>{courses ?
            courses.map((course) => (
              <Card key={course._id} card={course} showButton={showButton} setIsOpen={setIsOpen} setIdWorkout={setIdWorkout} picture={pictures.find(p => p.altCard == course.nameEN)}/>
            )) 
            : <> <h3>У вас ещё нет приобретённых курсов</h3>
            <BigButton value='Выбрать курс' onClick={goToMainPage} /></>}</div>}
            
          </>
        )
   } else if(home){
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
