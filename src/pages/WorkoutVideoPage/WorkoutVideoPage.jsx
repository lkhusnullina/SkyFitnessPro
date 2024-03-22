import { useState } from "react";
import ModalMyProgress from "../../components/modals/ModalMyProgress";
import Video from "../../components/workoutVideo/WorkoutVideo";
import styles from "./WorkoutVideoPage.module.css";

export const WorkoutVideoPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <h2 className={styles.title}></h2>
      <div className={styles.description}>   /     / 2 </div>
      <Video/>
      <div className={styles.workout_block}>
        <div className={styles.workout_description}>
            <h2 className={styles.workout_header}></h2>
            <ul className={styles.workout_element}>
                <li>  (10 )</li>
                <li>  (10 )</li>
                <li> ,    <br/>(5 )</li>
            </ul>
            <button className={styles.button_progress} onClick={() => setIsOpen(true)}>  </button>
        </div>
        <div className={styles.progress_block}>
            <div className={styles.progress_header}>    2:</div>
            <div className={styles.progress_percentages}>
                <div className={styles.progress_percent}>
                    <div className={styles.progress_percent__name}> </div>
                    <progress className={styles.progress_percent__value1} value="45" max="100"></progress>
                    <span className={styles.progress_percent__count}>45%</span>
                </div>
                <div className={styles.progress_percent}>
                    <div className={styles.progress_percent__name}> </div>
                    <progress  className={styles.progress_percent__value2} value="45" max="100"></progress>
                    <span className={styles.progress_percent__count}>45%</span>
                </div>
                <div className={styles.progress_percent}>
                    <div className={styles.progress_percent__name}> , <br />   </div>
                    <progress className={styles.progress_percent__value3} value="45" max="100"></progress>
                    <span className={styles.progress_percent__count}>45%</span>
                </div>
            </div>
        </div>
      </div>
      {isOpen && <ModalMyProgress isOpen={isOpen} closeModal={closeModal}/>}
    </div>
  );
};
