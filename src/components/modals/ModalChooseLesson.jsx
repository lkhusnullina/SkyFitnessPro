import React from "react";
import styles from "./ModalChooseLesson.module.css";

function ModalChooseLesson({closeModal}) {

  const handleClickOutside = (event) => {
    if (event.target.classList.contains(styles.pageContainer)) {
      closeModal();
    }
  };


  return (
    <div className={styles.pageContainer} onClick={handleClickOutside}>
      <div className={styles.modalForm}>
        <h1 className={styles.title}>Выберите тренировку</h1>
        <div className={styles.lessonsContainerScroll}>
          <div className={styles.lessonsContainer}>
            <div className={styles.lessonContainer}>
              <h2 className={styles.lessonTitle}>Утренняя практика</h2>
              <p className={styles.lesson}>Йога на каждый день / 1 день</p>
            </div>
            <div className={styles.lessonContainer}>
              <h2 className={styles.lessonTitle}>Красота и здоровье</h2>
              <p className={styles.lesson}>Йога на каждый день / 2 день</p>
            </div>
            <div className={styles.lessonContainer}>
              <h2 className={styles.lessonTitle}>Асаны стоя</h2>
              <p className={styles.lesson}>Йога на каждый день / 3 день</p>
            </div>
            <div className={styles.lessonContainer}>
              <h2 className={styles.lessonTitle}>Растягиваем мышцы бедра</h2>
              <p className={styles.lesson}>Йога на каждый день / 4 день</p>
            </div>
            <div className={styles.lessonContainer}>
              <h2 className={styles.lessonTitle}>Гибкость спины</h2>
              <p className={styles.lesson}>Йога на каждый день / 5 день</p>
            </div>
            <div className={styles.lessonContainer}>
              <h2 className={styles.lessonTitle}>Утренняя практика</h2>
              <p className={styles.lesson}>Йога на каждый день / 6 день</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalChooseLesson;
