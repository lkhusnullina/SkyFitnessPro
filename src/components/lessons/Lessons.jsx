import { BigButton } from '../buttons/bigButton';
import styles from './Lessons.module.css';

 function Lessons({ setIsOpen }){
    return (
        <div className={styles.workout_description}>
          <h2 className={styles.workout_header}>Упражнения</h2>
          <ul className={styles.workout_element}>
            <li>Наклон вперед (10 повторений)</li>
            <li>Наклон назад (10 повторений)</li>
            <li>Поднятие ног, согнутых в коленях (5 повторений)</li>
          </ul>
          <BigButton value='Заполнить свой прогресс' onClick={() => setIsOpen(true)} />
        </div>
    )
}

export default Lessons