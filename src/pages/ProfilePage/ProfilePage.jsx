import styles from "./ProfilePage.module.css";

export const ProfilePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Мой профиль</h1>
      <div className={styles.data_profile}>
        <p className={styles.login}>Логин: sergey.petrov96</p>
        <p className={styles.password}>Пароль: 4fkhdj880d</p>
      </div>
    </div>
  );
};