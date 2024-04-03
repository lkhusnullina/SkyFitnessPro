import styles from './MainPage.module.css'
import Cards from '../../components/cards/Cards.jsx'
import { useGetAllUsersQuery } from '../../service/getCourses.js';

export const MainPage = () => {
  const {data: users } = useGetAllUsersQuery();
  console.log(users);

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
              src="/images/sticker.svg"
              alt="change your body"
            />
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <Cards showButton={false}/>
        <div className={styles.footer}>
          <a href="#top">
            <button className={styles.footer__button}>Наверх ↑</button>
          </a>
        </div>
      </section>
    </div>
  )
}
