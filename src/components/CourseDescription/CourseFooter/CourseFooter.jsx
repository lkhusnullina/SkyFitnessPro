import styles from './CourseFooter.module.css'

const Footer = () => {
    return (
        <div className={styles.footerGroup}>
        <div className={styles.footerInfo}>
          <p className={styles.footerText}>
            Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с
            выбором направления и тренера, с которым тренировки принесут
            здоровье и радость!
          </p>
          <button className={styles.footerButton}>
            Записаться на тренировку
          </button>
        </div>
        <img className={styles.handImg} src="images/hand.svg" />
      </div>
        
    )
  }
  
  export default Footer