import styles from "./MainPage.module.css";
import { Link } from "react-router-dom";

export const MainPage = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.top}>
          <div className={styles.top__first}>
            <h3 className={styles.top__sub_title}>
              Онлайн-тренировки для занятий дома
            </h3>
            <h1 className={styles.top__title}>
              Начните заниматься спортом и улучшите качество жизни
            </h1>
          </div>
          <div className={styles.top__second}>
            <img
              className={styles.top__svg}
              src="images/mainPagePictures/change_your_body_logo.svg"
              alt="change your body"
            />
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.middle}>
          <Link to="#">
            <div className={styles.middle__card}>
              <img
                className={styles.middle__img}
                src="images/mainPagePictures/ioga.svg"
                alt="ioga"
              />
            </div>
          </Link>
          <Link to="#">
            <div className={styles.middle__card}>
              <img
                className={styles.middle__img}
                src="images/mainPagePictures/stretch.svg"
                alt="stretch"
              />
            </div>
          </Link>
          <Link to="#">
            <div className={styles.middle__card}>
              <img
                className={styles.middle__img}
                src="images/mainPagePictures/fitnes.svg"
                alt="fitnes"
              />
            </div>
          </Link>
          <Link to="#">
            <div className={styles.middle__card}>
              <img
                className={styles.middle__img}
                src="images/mainPagePictures/step.svg"
                alt="aerobic"
              />
            </div>
          </Link>
          <Link to="#">
            <div className={styles.middle__card}>
              <img
                className={styles.middle__img}
                src="images/mainPagePictures/body_flex.svg"
                alt="body_flex"
              />
            </div>
          </Link>
        </div>
      </section>
      <section className={styles.section}>
      <div className={styles.footer}>
        <a href="#top">
        <button  className={styles.footer__button}>
        <img className={styles.footer__svg} src="/images/mainPagePictures/text_button.svg" alt="on up" />
      </button>
        </a>
      </div>
      </section>
    </>
  );
};
