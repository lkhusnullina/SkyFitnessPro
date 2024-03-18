import styles from "./YogaPage.module.css";
export const YogaPage = () => {
    return (
       
        <div className={styles.container}>
            <img className={styles.yogaImg} src="images/yoga.jpg" />
          <h1 className={styles.yogaTitle}>Подойдет для вас, если: </h1>

          <div className={styles.description}>
            <div className={styles.pointsInfo}>
            <img className={styles.points} src="images/1.svg" />
            <p className={styles.pointsText}>Давно хотели попробовать йогу, но не решались начать.</p>
            </div>

            <div className={styles.pointsInfo}>
            <img className={styles.points} src="images/2.svg" />
            <p className={styles.pointsText}>Хотите укрепить позвоночник, избавиться от болей в спине и суставах.</p>
            </div>

            <div className={styles.pointsInfo}>
            <img className={styles.points} src="images/3.svg" />
            <p className={styles.pointsText}>Ищете активность, полезную для тела и души.</p>
            </div>
          </div>

          <h1 className={styles.types}>Направления:</h1>
          <div className={styles.yogaAllTypes}>
          <ul className={styles.typesColumn}>
          <li сlassName={styles.yogaTypes}>  Йога для новичков </li>
          <li сlassName={styles.yogaTypes}>   Классическая йога </li>
          <li сlassName={styles.yogaTypes}>   Йогатерапия</li>
          </ul>
          <ul className={styles.typesColumn}>
          <li сlassName={styles.yogaTypes}>  Кундалини-йога </li>
          <li сlassName={styles.yogaTypes}>   Хатха-йога </li>
          <li сlassName={styles.yogaTypes}>   Аштанга-йога</li>
          </ul>
          </div>

          <p className={styles.yogaDescription}>Благодаря комплексному воздействию упражнений происходит проработка всех групп мышц, тренировка суставов, улучшается циркуляция крови. Кроме того, упражнения дарят отличное настроение, заряжают бодростью и помогают противостоять стрессам.</p>
         
          <div className={styles.footerGroup}>
            <div className={styles.footerInfo}>
                <p className={styles.footerText}>Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с выбором направления и тренера, с которым тренировки принесут здоровье и радость!</p>
             <button className={styles.footerButton}>Записаться на тренировку</button>
            </div>
          <img className={styles.handImg} src="images/hand.svg" />
          </div>
        </div>


      );
    }

