import styles from "./MainPage.module.css";

export const MainPage = () => {
  return (
    <main className={styles.main}>
      <section className={styles.top}>
        <div className={styles.top__first}>
          <h3 className={styles.top__sub_title}>Онлайн-тренировки для занятий дома</h3>
          <h1 className={styles.top__title}>Начните заниматься спортом и улучшите качество жизни</h1>
        </div>
        <div className={styles.top__second}>
            <img className={styles.top__svg} src="images/mainPagePictures/change_your_body_logo.svg" alt="change your body" />
        </div>
      </section>
    </main>
  );
};
