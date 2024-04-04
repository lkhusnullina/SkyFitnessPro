import styles from './MainPage.module.css'
import Cards from '../../components/cards/Cards.jsx'
import { useAddMutation } from '../../service/firestoreApi.js';
import { useSelector } from 'react-redux';

export const MainPage = () => {
  const courses = useSelector((state) => state.courses.courses);
  const [addNew, {Loading}] = useAddMutation();
  const course = courses.find(p => p._id === "q02a6i")
  console.log(courses);
  if (!course) return;
  
  const update = async () => {
    if (course && !Loading) {
      const newCourse = {...course, users: [...course.users, "NEKIY USER ID"]}
      console.log(newCourse);
      const res = await addNew(newCourse)
      console.log(res);
    }
  }


  return (
    <div>
      <button onClick={() => update()}>TRY UP</button>
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
