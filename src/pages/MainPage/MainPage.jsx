import styles from "./MainPage.module.css";
import Card from "../../components/сard/Card.jsx";
import { useSelector } from "react-redux";

export const MainPage = () => {
  const cards = useSelector((state) => state.courses.cards);

  return (
    <div>
      <section className={styles.section}>
        <h3 className={styles.top__sub_title}>
          Онлайн-тренировки для занятий дома
        </h3>
        <div className={styles.top__block}>
          <div className={styles.top__left}>
            <h1 className={styles.top__title}>
              Начните заниматься спортом и улучшите качество жизни
            </h1>
          </div>
          <div className={styles.top__right}>
            <img
              className={styles.top__sticker}
              src="images/mainPagePictures/change_your_body_logo.svg"
              alt="change your body"
            />
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.cards_block}>
          {cards?.map((card) => (
            <Card key={card.id} card={card} showButton={false}/>
          ))}
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.footer}>
          <a href="#top">
            <button className={styles.footer__button}>
              <img
                src="/images/mainPagePictures/text_button.svg"
                alt="on up"
              />
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};
