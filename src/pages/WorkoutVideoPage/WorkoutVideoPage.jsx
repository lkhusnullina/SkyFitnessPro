import { useState } from 'react'
import ModalMyProgress from '../../components/modals/ModalMyProgress/ModalMyProgress.jsx'
import Video from '../../components/workoutVideo/WorkoutVideo'
import styles from './WorkoutVideoPage.module.css'
import { BigButton } from '../../components/buttons/bigButton.jsx'

export const WorkoutVideoPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <h2 className={styles.title}>Йога</h2>
      <div className={styles.description}>
        Красота и здоровье / Йога на каждый день / 2 день
      </div>
      <Video />
      <div className={styles.workout_block}>
        <div className={styles.workout_description}>
          <h2 className={styles.workout_header}>Упражнения</h2>
          <ul className={styles.workout_element}>
            <li>Наклон вперед (10 повторений)</li>
            <li>Наклон назад (10 повторений)</li>
            <li>
              Поднятие ног, согнутых в коленях <br />
              (5 повторений)
            </li>
          </ul>
          <BigButton value='Заполнить свой прогресс' onClick={() => setIsOpen(true)} />
          {/* <button
            className={styles.button_progress}
            onClick={() => setIsOpen(true)}
          >
            Заполнить свой прогресс
          </button> */}
        </div>
        <div className={styles.progress_block}>
          <div className={styles.progress_header}>
            Мой прогресс по тренировке 2:
          </div>
          <div className={styles.progress_percentages}>
            <div className={styles.progress_percent}>
              <div className={styles.progress_percent__name}>
                Наклоны вперед
              </div>
              <progress
                className={styles.progress_percent__value1}
                value="45"
                max="100"
              ></progress>
              <span className={styles.progress_percent__count}>45%</span>
            </div>
            <div className={styles.progress_percent}>
              <div className={styles.progress_percent__name}>Наклоны назад</div>
              <progress
                className={styles.progress_percent__value2}
                value="45"
                max="100"
              ></progress>
              <span className={styles.progress_percent__count}>45%</span>
            </div>
            <div className={styles.progress_percent}>
              <div className={styles.progress_percent__name}>
                Поднятие ног, <br /> согнутых в коленях
              </div>
              <progress
                className={styles.progress_percent__value3}
                value="45"
                max="100"
              ></progress>
              <span className={styles.progress_percent__count}>45%</span>
            </div>
          </div>
        </div>
      </div>
      {isOpen && <ModalMyProgress isOpen={isOpen} closeModal={closeModal} />}
    </div>
  )
}
