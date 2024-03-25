import styles from './CoursePage.module.css'

export const CoursePage = () => {
  return (
    <div className={styles.container}>
      <img className={styles.yogaImg} src="images/banner.png" />
      <h2 className={styles.yogaTitle}>Подойдет для вас, если: </h2>

      <div className={styles.description}>
        <div className={styles.pointsInfo}>
          <img className={styles.points} src="images/1.svg" />
          <p className={styles.pointsText}>
            Давно хотели попробовать йогу, но не решались начать.
          </p>
        </div>

        <div className={styles.pointsInfo}>
          <img className={styles.points} src="images/2.svg" />
          <p className={styles.pointsText}>
            Хотите укрепить позвоночник, избавиться от болей в спине и суставах.
          </p>
        </div>

        <div className={styles.pointsInfo}>
          <img className={styles.points} src="images/3.svg" />
          <p className={styles.pointsText}>
            Ищете активность, полезную для тела и души.
          </p>
        </div>
      </div>

      <h2 className={styles.types}>Направления:</h2>
      <div className={styles.yogaAllTypes}>
        <ul className={styles.typesColumn}>
          <li>Йога для новичков </li>
          <li>Классическая йога </li>
          <li>Йогатерапия</li>
        </ul>
        <ul className={styles.typesColumn}>
          <li>Кундалини-йога </li>
          <li>Хатха-йога </li>
          <li>Аштанга-йога</li>
        </ul>
      </div>

      <p className={styles.yogaDescription}>
        Благодаря комплексному воздействию упражнений происходит проработка всех
        групп мышц, тренировка суставов, улучшается циркуляция крови. Кроме
        того, упражнения дарят отличное настроение, заряжают бодростью и
        помогают противостоять стрессам.
      </p>

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
    </div>
  )
}
