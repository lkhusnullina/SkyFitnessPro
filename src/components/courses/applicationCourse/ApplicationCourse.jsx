import { BigButton } from '../../buttons/bigButton'
import styles from './ApplicationCourse.module.css'

const ApplicationCourse = () => {
  const buyCourse = () => {
   alert("Благодарим за приобретение курса. Теперь он отображается на странице вашего профиля. Вы готовы начать работу над собой и достичь своей мечты, стать более здоровым и уверенным в себе человеком? Наша команда уверена, что вместе мы сможем достичь невероятных результатов! Удачных тренировок!");
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