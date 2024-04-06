import { useNavigate } from 'react-router-dom'
import { BigButton } from '../../buttons/bigButton'
import styles from './ApplicationCourse.module.css'
import { useAddCourseToUserMutation } from '../../../service/firebaseApi'
import { useSelector } from 'react-redux'

function ApplicationCourse({ courseId }) {
  const navigate = useNavigate()

  const [addCourseToUser] = useAddCourseToUserMutation()

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

    const result = true//confirm(confirmText)
    if (!userId && result === true) {
      navigate('/login')
      return
    }

    addCourseToUser({ userId, courseId })
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
