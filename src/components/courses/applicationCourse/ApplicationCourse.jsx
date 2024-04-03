import { useNavigate } from 'react-router-dom'
import { BigButton } from '../../buttons/bigButton'
import styles from './ApplicationCourse.module.css'

const ApplicationCourse = (paramId) => {
  
  const navigate = useNavigate()
  const buyCourse = () => {

    const loggedBuyCourse = () => {
      const result = confirm("Благодарим за приобретение курса. Теперь он отображается на странице вашего профиля.\n \nВы готовы начать работу над собой и достичь своей мечты, стать более здоровым и уверенным в себе человеком? \nНаша команда уверена, что вместе мы сможем достичь невероятных результатов! \n \nХотите перейти к обучению?");
      if(result === true) {
        const uid = JSON.parse(localStorage.getItem('user')).id
        console.log(paramId);
        console.log(uid);
       // useAddUserIdByCourseQuery(paramId, uid);
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
