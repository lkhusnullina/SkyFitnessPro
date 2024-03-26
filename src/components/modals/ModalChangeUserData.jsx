import React, { useEffect, useState } from "react";
import styles from "./ModalChangeUserData.module.css";
import { Link } from "react-router-dom";
import {
  handleLoginChange,
  handlePasswordChange,
  handleRepeatPasswordChange,
} from "../../utils/formValidation";

function ModalChangeUserData({ isPasswordChange, closeModal }) {
  const [loginError, setLoginError] = useState([]);
  const [loginValue, setLoginValue] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [repeatPasswordError, setRepeatPasswordError] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [repeatPasswordValue, setRepeatPasswordValue] = useState("");
  const isLoading = false;

  const handleClickOutside = (event) => {
    if (event.target.classList.contains(styles.pageContainer)) {
      closeModal(); // Закрываем модальное окно при клике вне него
    }
  };

  useEffect(() => {
    if (repeatPasswordError && repeatPasswordValue === passwordValue) {
      setRepeatPasswordError("");
    }
  }, [passwordValue, repeatPasswordValue]);

  const handleChangeData = () => {
    if (
      isPasswordChange &&
      (!repeatPasswordValue || repeatPasswordError || passwordError)
    ) {
      setErrorMessage("Форма заполнена некорректно");
      return;
    }

    if (!isPasswordChange && (loginError.length > 0 || !loginValue)) {
      setErrorMessage("Форма заполнена некорректно");
      return;
    }

    console.log("Смена данных прошла успешно!");
    setErrorMessage("");
  };

  return (
    <div className={styles.pageContainer} onClick={handleClickOutside}>
      <div className={styles.modalForm}>
        <div className={styles.modalLogo}>
          <Link to="/">
            <img src="../images/header_logo_black.png" alt="logo" />
          </Link>
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
                onChange={(event) =>
                  handlePasswordChange(
                    event,
                    repeatPasswordValue,
                    setPasswordError,
                    setRepeatPasswordError,
                    setPasswordValue
                  )
                }
              />
              <span className={styles.error}>{passwordError}</span>
              <input
                className={styles.modalInput}
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                onChange={(event) =>
                  handleRepeatPasswordChange(
                    event,
                    passwordValue,
                    setRepeatPasswordError,
                    setRepeatPasswordValue
                  )
                }
              />
              <span className={styles.error}>{repeatPasswordError}</span>
            </div>
            <div className={styles.buttons}>
              <button
                className={styles.primaryButton}
                disabled={isLoading}
                onClick={handleChangeData}
              >
                {isLoading ? "Сохранение..." : "Сохранить"}
              </button>
              <span className={styles.errorForm}>{errorMessage}</span>
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
                onChange={(event) => {
                  handleLoginChange(event, setLoginError, setLoginValue);
                }}
              />
              <div className={styles.errorList}>
                {loginError.map((error, index) => (
                  <div key={index} className={styles.errorItem}>
                    {error}
                  </div>
                ))}
              </div>
            </div>
            <button
              className={styles.primaryButton}
              disabled={isLoading}
              onClick={handleChangeData}
            >
              {isLoading ? "Сохранение..." : "Сохранить"}
            </button>
            <span className={styles.errorForm}>{errorMessage}</span>
          </>
        )}
      </div>
    </div>
  );
}

export default ModalChangeUserData;
