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
  let courses = useSelector((state) => state.courses.courses);

  const dispatch = useDispatch();
  const location = useLocation()
  const home = location.pathname === '/'
  const profile = location.pathname === '/profile'
  const goToMainPage = () => {
    const navigate = useNavigate()
    navigate("/")
  }

  if(profile) {
    console.log("It`s a profile Page!!!");
    
    const id = JSON.parse(localStorage.getItem('user')).id
    const isLoadedIdUserCourses = useSelector((state) => state.users.isLoaded);

    const idUserCourses = useSelector((state) => state.users.idUserCourses);
    //Получаем данные купленных курсов из базы (массив объектов)
    const {data: userCourses} = useGetIdUserCoursesQuery(id)
    
    useEffect(() => {
      // Дожидаемся получения данных из useGetIdUserCoursesQuery
      if (isLoadedIdUserCourses) return;
      if (!userCourses) return;
      // Записываем в массив ключи полученных данных - id купленных курсов
      const arrayUserCourses = Object.keys(userCourses);
      if (!arrayUserCourses) return;
      // Храним данные в Store и меняем стэйт загрузки
      dispatch(setIdUserCourses(arrayUserCourses ));
      dispatch(setIdUserCoursesLoaded())

    }, [userCourses])
    // Сортируем массив всех курсов, лдаляя данные ещё не купленных курсов
    let usCourses = courses.map((el) => {
     for(let i = 0; i<idUserCourses.length; i++){
      if(el._id === idUserCourses[i]){
        return el
      }
     }
    })
    usCourses = usCourses.filter(Boolean)

        return (
          <>
            {!isLoadedIdUserCourses ?  <strong className={styles.cards_alert}> Идёт загрузка курсов, пожалуйста, подождите.</strong> 
            : <div className={styles.cards_block}>{usCourses ?
              usCourses.map((course) => (
              <Card key={course._id} card={course} showButton={showButton} setIsOpen={setIsOpen} setIdWorkout={setIdWorkout} picture={pictures.find(p => p.altCard == course.nameEN)}/>
            )) 
            : <div className={styles.cards_noCourses_massage}> 
                <h3>У вас ещё нет приобретённых курсов</h3>
                <BigButton value='Выбрать курс' onClick={goToMainPage} /></div>}
             </div>}
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
  
}

export default Cards
