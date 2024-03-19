import styles from "./AuthPage.module.css";

export const AuthPage = () => {
  const isLoginMode = false;
  const isLoading = false;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.modalForm}>
        <div className={styles.modalLogo}>
          <img src="../images/header_logo_auth.png" alt="logo" />
        </div>

        {isLoginMode ? (
          <>
            <div className={styles.modalInputs}>
              <input
                className={styles.modalInput}
                type="text"
                name="login"
                placeholder="Логин"
              />
              <input
                className={styles.modalInput}
                type="password"
                name="password"
                placeholder="Пароль"
              />
            </div>
            <div className={styles.buttons}>
              <button className={styles.primaryButton} disabled={isLoading}>
                {isLoading ? "Загрузка..." : "Войти"}
              </button>

              <button className={styles.secondaryButton}>
                Зарегистрироваться
              </button>
            </div>
          </>
        ) : (
          <>
            <div className={styles.modalInputs}>
              <input
                className={styles.modalInput}
                type="text"
                name="login"
                placeholder="Логин"
              />
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
            <button className={styles.primaryButton} disabled={isLoading}>
              {isLoading ? "Регистрация..." : "Зарегистрироваться"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};
