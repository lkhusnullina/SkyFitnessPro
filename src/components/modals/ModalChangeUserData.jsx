import React from "react";
import styles from "./ModalChangeUserData.module.css";

function ModalChangeUserData({ isPasswordChange, closeModal }) {
  const isLoading = false;

  const handleClickOutside = (event) => {
    if (event.target.classList.contains(styles.pageContainer)) {
      closeModal(); // Закрываем модальное окно при клике вне него
    }
  };

  return (
    <div className={styles.pageContainer} onClick={handleClickOutside}>
      <div className={styles.modalForm}>
        <div className={styles.modalLogo}>
          <img src="../images/header_logo_black.png" alt="logo" />
        </div>

        {isPasswordChange ? (
          <>
            <p className={styles.modalText}>Новый пароль:</p>
            <div className={styles.modalInputs}>
              <input
                className={styles.modalInput}
                type="password"
                name="password"
                placeholder="Пароль"
              />
              <input
                className={styles.modalInput}
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
              />
            </div>
            <div className={styles.buttons}>
              <button className={styles.primaryButton} disabled={isLoading}>
                {isLoading ? "Сохранение..." : "Сохранить"}
              </button>
            </div>
          </>
        ) : (
          <>
            <p className={styles.modalText}>Новый логин:</p>
            <div className={styles.modalInputs}>
              <input
                className={styles.modalInput}
                type="text"
                name="login"
                placeholder="Логин"
              />
            </div>
            <button className={styles.primaryButton} disabled={isLoading}>
              {isLoading ? "Сохранение..." : "Сохранить"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ModalChangeUserData;
