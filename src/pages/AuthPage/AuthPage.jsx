import styles from "./AuthPage.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  handleLoginChange,
  handlePasswordChange,
  handleRepeatPasswordChange,
} from "../../utils/formValidation";

export const AuthPage = ({ isLoginMode = false }) => {
  const [loginError, setLoginError] = useState([]);
  const [loginValue, setLoginValue] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [repeatPasswordError, setRepeatPasswordError] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [repeatPasswordValue, setRepeatPasswordValue] = useState("");
  const isLoading = false;

  useEffect(() => {
    if (repeatPasswordError && repeatPasswordValue === passwordValue) {
      setRepeatPasswordError("");
    }
  }, [passwordValue, repeatPasswordValue]);

  const handleRegister = () => {
    if (
      loginError.length > 0 ||
      passwordError ||
      !passwordValue ||
      !loginValue
    ) {
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
          <Link to="/">
            <img src="../images/header_logo_black.png" alt="logo" />
          </Link>
        </div>

        {isLoginMode ? (
          <>
            <div className={styles.modalInputs}>
              <input
                className={styles.modalInput}
                type="text"
                name="login"
                placeholder="Логин"
                onChange={(event) =>
                  handleLoginChange(event, setLoginError, setLoginValue)
                }
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
                onChange={(event) =>
                  handlePasswordChange(
                    event,
                    repeatPasswordValue,
                    setPasswordError,
                    setRepeatPasswordError,
                    setPasswordValue
                  )
                }
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
                onChange={(event) =>
                  handleLoginChange(event, setLoginError, setLoginValue)
                }
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
                onChange={(event) =>
                  handlePasswordChange(
                    event,
                    repeatPasswordValue,
                    setPasswordError,
                    setRepeatPasswordError,
                    setPasswordValue
                  )
                }
                required
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
