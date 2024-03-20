import React from "react";
import styles from "./ModalMyProgress.module.css";

function ModalMyProgress() {
  const isProgressFixed = true;
  const isLoading = false;

  return (
    <div className={styles.pageContainer}>
      {isProgressFixed ? (
        <div className={styles.modalFixedProgress}>
          <h1 className={styles.fixedTitle}>Ваш прогресс засчитан!</h1>
          <img
            className={styles.fixedImg}
            src="../images/progress_fixed.svg"
            alt="Прогресс засчитан"
          />
        </div>
      ) : (
        <div className={styles.modalForm}>
          <h1 className={styles.title}>Мой прогресс</h1>
          <div className={styles.modalInputs}>
            <div className={styles.modalInputsResult}>
              <p className={styles.modalText}>
                Сколько раз вы сделали наклоны вперед?
              </p>
              <input
                className={styles.modalInput}
                type="text"
                name="text"
                placeholder="Введите значение"
              />
            </div>
            <div className={styles.modalInputsResult}>
              <p className={styles.modalText}>
                Сколько раз вы сделали наклоны назад?
              </p>
              <input
                className={styles.modalInput}
                type="text"
                name="text"
                placeholder="Введите значение"
              />
            </div>
            <div className={styles.modalInputsResult}>
              <p className={styles.modalText}>
                Сколько раз вы сделали поднятие ног, согнутых в коленях?
              </p>
              <input
                className={styles.modalInput}
                type="text"
                name="text"
                placeholder="Введите значение"
              />
            </div>
          </div>

          <div className={styles.buttons}>
            <button className={styles.primaryButton} disabled={isLoading}>
              {isLoading ? "Отправка..." : "Отправить"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalMyProgress;
