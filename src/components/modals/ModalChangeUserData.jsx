import React, { useEffect, useState } from "react";
import styles from "./ModalChangeUserData.module.css";

function ModalChangeUserData({ isPasswordChange, closeModal }) {
  const [loginError, setLoginError] = useState([]);
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

  const handleLoginChange = (event) => {
    const loginValue = event.target.value;
    let errors = [];

    if (!loginValue) {
      errors.push(`Поле "логин" обязательно для заполнения`);
    } else {
      const loginPattern = /^[a-zA-Z0-9!@#$%^&*()_+=[\]{};':"\\|,.<>/?]+$/;

      if (!loginPattern.test(loginValue)) {
        errors.push("Должны быть только латинские буквы/цифры");
      }

      if (!loginValue.includes("@") || !loginValue.includes(".")) {
        errors.push("Отсутствуют символы @ и .");
      }
    }

    setLoginError(errors);
  };

  const handlePasswordChange = (event, repeatPasswordValue) => {
    const passwordValue = event.target.value;
    setPasswordValue(passwordValue);

    let passwordError = "";

    if (!passwordValue) {
      passwordError = `Поле "пароль" обязательно для заполнения`;
    } else if (passwordValue.length < 6) {
      passwordError = "Пароль должен содержать минимум 6 символов";
    } else {
      passwordError = "";
    }

    setPasswordError(passwordError);

    if (passwordValue === repeatPasswordValue) {
      setRepeatPasswordError("");
    } else {
      setRepeatPasswordError("Пароли не совпадают");
    }
  };

  const handleRepeatPasswordChange = (event) => {
    const repeatPasswordValue = event.target.value;
    setRepeatPasswordValue(repeatPasswordValue);

    if (repeatPasswordValue !== passwordValue) {
      setRepeatPasswordError("Пароли не совпадают");
    } else {
      setRepeatPasswordError("");
    }
  };

  useEffect(() => {
    if (repeatPasswordError && repeatPasswordValue === passwordValue) {
      setRepeatPasswordError("");
    }
  }, [passwordValue, repeatPasswordValue]);

  const handleChangeData = () => {
    if (loginError.length > 0) {
      setErrorMessage("Форма заполнена некорректно");
      return;
    }

    if (
      isPasswordChange &&
      (!repeatPasswordValue ||
        !repeatPasswordValue ||
        repeatPasswordError ||
        passwordError)
    ) {
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
                onChange={handlePasswordChange}
              />
              <span className={styles.error}>{passwordError}</span>
              <input
                className={styles.modalInput}
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                onChange={handleRepeatPasswordChange}
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
                onChange={handleLoginChange}
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
