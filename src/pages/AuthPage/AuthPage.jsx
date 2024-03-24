import styles from "./AuthPage.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const AuthPage = ({ isLoginMode = false }) => {
  const [loginError, setLoginError] = useState([]);
  const [passwordError, setPasswordError] = useState("");
  const [repeatPasswordError, setRepeatPasswordError] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [repeatPasswordValue, setRepeatPasswordValue] = useState("");
  const isLoading = false;

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

  const handleRegister = () => {
    if (loginError.length > 0 || passwordError || !passwordValue) {
      setErrorMessage("Форма заполнена некорректно");
      return;
    }

    if (!isLoginMode && repeatPasswordError) {
      setErrorMessage("Форма заполнена некорректно");
      return;
    }

    console.log("Вход/Регистрация прошла успешно!");
    setErrorMessage("");
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.modalForm}>
        <div className={styles.modalLogo}>
          <img src="../images/header_logo_black.png" alt="logo" />
        </div>

        {isLoginMode ? (
          <>
            <div className={styles.modalInputs}>
              <input
                className={styles.modalInput}
                type="text"
                name="login"
                placeholder="Логин"
                onChange={handleLoginChange}
                required
              />
              <div className={styles.errorList}>
                {loginError.map((error, index) => (
                  <div key={index} className={styles.errorItem}>
                    {error}
                  </div>
                ))}
              </div>
              <input
                className={styles.modalInput}
                type="password"
                name="password"
                placeholder="Пароль"
                onChange={handlePasswordChange}
                required
              />
              <span className={styles.error}>{passwordError}</span>
            </div>
            <div className={styles.buttons}>
              <button
                className={styles.primaryButton}
                disabled={isLoading}
                onClick={handleRegister}
              >
                {isLoading ? "Загрузка..." : "Войти"}
              </button>
              <Link to="/registration">
                <button className={styles.secondaryButton}>
                  Зарегистрироваться
                </button>
              </Link>
            </div>
            {errorMessage && (
              <span className={styles.errorForm}>{errorMessage}</span>
            )}
          </>
        ) : (
          <>
            <div className={styles.modalInputs}>
              <input
                className={styles.modalInput}
                type="text"
                name="login"
                placeholder="Логин"
                onChange={handleLoginChange}
                required
              />
              <div className={styles.errorList}>
                {loginError.map((error, index) => (
                  <div key={index} className={styles.errorItem}>
                    {error}
                  </div>
                ))}
              </div>
              <input
                className={styles.modalInput}
                type="password"
                name="password"
                placeholder="Пароль"
                onChange={handlePasswordChange}
                required
              />
              <span className={styles.error}>{passwordError}</span>
              <input
                className={styles.modalInput}
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                onChange={handleRepeatPasswordChange}
                required
              />
              <span className={styles.error}>{repeatPasswordError}</span>
            </div>
            <button
              className={styles.primaryButton}
              disabled={isLoading}
              onClick={handleRegister}
            >
              {isLoading ? "Регистрация..." : "Зарегистрироваться"}
            </button>
            {errorMessage && (
              <span className={styles.errorForm}>{errorMessage}</span>
            )}
          </>
        )}
      </div>
    </div>
  );
};
