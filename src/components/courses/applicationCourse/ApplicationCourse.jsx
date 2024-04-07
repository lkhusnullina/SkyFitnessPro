import { useNavigate } from 'react-router-dom'
import { BigButton } from '../../buttons/bigButton'
import styles from './ApplicationCourse.module.css'
import { useAddFullCourseToUserMutation } from '../../../service/firebaseApi'
import { useDispatch, useSelector } from 'react-redux'
import { setPurchasedCourses } from '../../../store/usersSlice'

function ApplicationCourse({ courseId }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const courses = useSelector((state) => state.courses.courses)
  const workouts = useSelector((state) => state.workouts.workouts)

  const [addFullUser] = useAddFullCourseToUserMutation()

  const userId = useSelector(state => state.auth.id)

  const buyCourse = async () => {
    const confirmText = userId ?
      `Благодарим за приобретение курса. Теперь он отображается на странице вашего профиля.\n \n
      Вы готовы начать работу над собой и достичь своей мечты, стать более здоровым и уверенным в себе человеком? \n
      Наша команда уверена, что вместе мы сможем достичь невероятных результатов! \n Хотите перейти к обучению?`
      :
      `Задумались о приобретении курса? \n
      Наша команда уверена, что вместе мы сможем достичь невероятных результатов! \n
      Если у вас есть аккаунт, пожалуйста, авторизуйтесь.`

    const result = confirm(confirmText)
    if (!userId && result === true) {
      navigate('/login')
      return
    }

    const getCourse = () => {
      const course = courses.find((course) => course._id === courseId)
      const workoutIds = course.workouts
      const ws = workouts.filter(workout => workoutIds.includes(workout._id))
      const wss = ws.map(w =>  {
        return {
          _id: w._id,
          exercises: w.exercises ? w.exercises.map(ex => {return {
            name: ex.name,
            quantity: ex.quantity,
            count: 0
          }}) : null
        }
      });
      return {
        _id: course._id,
        workouts: wss
      };
    }
    const {data: newCourses} = await addFullUser({userId, course: getCourse()})
    dispatch(setPurchasedCourses({courses: newCourses}))
    if (result) navigate('/profile')
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
          <BigButton value="Записаться на тренировку" onClick={buyCourse} />
        </div>
      </div>
      <img className={styles.handImg} src="/images/hand.svg" />
    </div>
  )
}

export default ApplicationCourse
