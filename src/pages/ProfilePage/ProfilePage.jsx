import styles from "./ProfilePage.module.css";

export const ProfilePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Мой профиль</h1>
      <div className={styles.data_profile}>
        <p className={styles.login}>Логин: sergey.petrov96</p>
        <p className={styles.password}>Пароль: 4fkhdj880d</p>
        <div className={styles.button_container}>
          <button className={styles.change_login_btn}>Редактировать логин</button>
          <button className={styles.change_password_btn}>Редактировать пароль</button>
        </div>
      </div>
      <h2 className={styles.title_courses}>Мои курсы</h2>
      <div className={styles.container_courses}>
        <div className={styles.img_container}> 
          <img className={styles.img_courses} alt="Йога" src="images/prof_card_2.png"/>
          <button className={styles.btn_courses}>Перейти →</button>
        </div>
        <div className={styles.img_container}> 
          <img className={styles.img_courses} alt="Стретчинг" src="images/prof_card_3.png"/>
          <button className={styles.btn_courses}>Перейти →</button>
        </div>
        <div className={styles.img_container}> 
          <img className={styles.img_courses} alt="Бодифлекс" src="images/prof_card_28.png"/>
          <button className={styles.btn_courses}>Перейти →</button>
        </div>
        {/* <div className={styles.img_container}> 
          <img className={styles.img_courses} alt="Степ-аэробика" src="images/prof_card_6.png"/>
          <button className={styles.btn_courses}>Перейти →</button>
        </div>
        <div className={styles.img_container}> 
          <img className={styles.img_courses} alt="Танцевальный фитнес" src="images/prof_card_20.png"/>
          <button className={styles.btn_courses}>Перейти →</button>
        </div> */}
      </div>
    </div>
  );
};