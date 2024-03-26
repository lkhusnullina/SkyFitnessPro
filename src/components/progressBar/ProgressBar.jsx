import { useState } from 'react';
import styles from './ProgressBar.module.css'

export const ProgressBar = (props) => {

  const [progress, setProgress] = useState(45);

  const progressBarData = [
    { bgcolor: '#565EEF', progress: 45 },
    { bgcolor: '#FF6D00', progress: 45 },
    { bgcolor: '#9A48F1', progress: 45 },
  ]
  
  // {progressBarData.map((item, idx) => (
  //   <ProgressBar
  //     key={idx}
  //     bgcolor={item.bgcolor}
  //     completed={item.completed}
  //   />
  // ))}

  return (
    <div className={styles.progress_block}>
      <div className={styles.progress_header}>
        Мой прогресс по тренировке 2:
      </div>
      <div className={styles.progress_percentages}>
        <div className={styles.progress_percent}>
          <div className={styles.progress_percent__name}>Наклоны вперед</div>
          <input
            // className={styles.progress_percent__value1}
            type="range"
            name="range"
            min="0"
            max="100"
            step="1"
            value={progress}
          />{`${progress}%`}
          {/* <span className={styles.progress_percent__count}>45%</span> */}
        </div>
        {/* <div className={styles.progress_percent}>
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
            </div> */}
      </div>
    </div>
  )
}

