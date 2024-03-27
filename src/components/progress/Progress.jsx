import styles from './Progress.module.css'
import { ProgressBar } from '../../components/progressBar/ProgressBar.jsx'
export const Progress = () => {
  const progressBarData = [
    { id: 1, progress: 60, lessons: 'Наклоны вперед', bgColor: '#565EEF'},
    { id: 2, progress: 45, lessons: 'Наклон назад', bgColor: '#FF6D00'},
    { id: 3, progress: 90, lessons: 'Поднятие ног, согнутых в коленях', bgColor: '#9A48F1'},
  ]

  return (
    <div className={styles.progress_block}>
      <div className={styles.progress_header}>
        Мой прогресс по тренировке 2:
      </div>
      <div className={styles.progress_percentages}>
        <div className={styles.progress_percent}>
          {progressBarData.map((item) => (
            <ProgressBar key={item.id} progress={item.progress} lessons={item.lessons} bgColor={item.bgColor}/>
          ))}
        </div>
      </div>
    </div>
  )
}
