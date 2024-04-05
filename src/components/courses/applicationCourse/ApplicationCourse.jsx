import { useNavigate } from 'react-router-dom'
import { BigButton } from '../../buttons/bigButton'
import styles from './ApplicationCourse.module.css'

import {
  Database,
  getDatabase,
  ref,
  set,
  child,
  push,
  update,
  get,
  onValue,
} from '@firebase/database'

const ApplicationCourse = (paramId) => {
  const db = getDatabase()
  const navigate = useNavigate()
  const buyCourse = () => {

    const loggedBuyCourse = () => {
      const result = confirm("Благодарим за приобретение курса. Теперь он отображается на странице вашего профиля.\n \nВы готовы начать работу над собой и достичь своей мечты, стать более здоровым и уверенным в себе человеком? \nНаша команда уверена, что вместе мы сможем достичь невероятных результатов! \n \nХотите перейти к обучению?");
      if(result === true) {
        const id = JSON.parse(localStorage.getItem('user')).id
        console.log(id);
        const courseId = Object.values(paramId)
        console.log(courseId)


        // async function postCourseId(paramId) {
        //   const db = getDatabase()
        //   set(ref(db,  'users/' + id ), {
        //     paramId
        //   })
        // }
       
        async function postCourseId(courseId) {
          const db = getDatabase()
          set(ref(db,  'users/' + id + '/courses/' + courseId ), {
            courseId
          })
        }
        postCourseId(courseId)
       
        navigate("/profile");
      }
    };
     

    const unloggedBuyCourse = () => {
      const result = confirm("Задумались о приобретении курса? \nНаша команда уверена, что вместе мы сможем достичь невероятных результатов! \nЕсли у вас есть аккаунт, пожалуйста, авторизуйтесь.");
      if(result === true) navigate("/login")
    };
    const isAllowed = Boolean(localStorage.getItem('user'))
    isAllowed ? loggedBuyCourse() : unloggedBuyCourse()
  }

    return (
        <div className={styles.footerGroup}>
        <div className={styles.footerInfo}>
          <p className={styles.footerText}>
            Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с
            выбором направления и тренера, с которым тренировки принесут
            здоровье и радость!
          </p>
          <div className={styles.footerButton}>
            <BigButton value='Записаться на тренировку' onClick={buyCourse} />
          </div>
        </div>
        <img className={styles.handImg} src="/images/hand.svg" />
      </div>
        
    )
  }
  
  export default ApplicationCourse
