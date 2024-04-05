import styles from './AuthPage.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
  handleLoginChange,
  handlePasswordChange,
  handleRepeatPasswordChange,
} from '../../utils/formValidation'
import { BigButton } from '../../components/buttons/bigButton'
import { auth, } from '../../firebase'
import {  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from'firebase/auth'
import { useDispatch } from 'react-redux'
import { setAuth } from '../../store/authSlice'
import { useAddUserMutation } from '../../service/getCourses'

import {
  Database,
  getDatabase,
  ref,
  set,
  child,
  push,
  update,
  get,
} from '@firebase/database'

export const AuthPage = (
  { isLoginMode = false }
  ) => {
  // const isLoginMode = Boolean(localStorage.getItem('user'))
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState([])
  const [loginValue, setLoginValue] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [repeatPasswordError, setRepeatPasswordError] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [repeatPasswordValue, setRepeatPasswordValue] = useState('')
  const [errorAuthMessage, setErrorAuthMessage] = useState('')
  const isLoading = false
  
  const logButtonValue = isLoading ? 'Загрузка...' : 'Войти'
  const regButtonValue = isLoading ? 'Регистрация...' : 'Зарегистрироваться'
  const [addUser, { error }] = useAddUserMutation();

  useEffect(() => {
    if (repeatPasswordError && repeatPasswordValue === passwordValue) {
      setRepeatPasswordError('')
    }
  }, [passwordValue, repeatPasswordValue])

  const handleRegister = () => {
    if (
      loginError.length > 0 ||
      passwordError ||
      !passwordValue ||
      !loginValue
    ) {
      setErrorMessage('Форма заполнена некорректно')
      return
    }

    if (!isLoginMode && repeatPasswordError) {
      setErrorMessage('Форма заполнена некорректно')
      return
    }

    const email = loginValue
    const password = passwordValue 

    if (isLoginMode) {
      // Авторизоваться
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        
        dispatch(
          setAuth( 
            {
            password: password,
            id: user.uid,
            email: user.email,
            accessToken: user.accessToken,
            refreshToken: user.stsTokenManager.refreshToken
          }
          )
        )
       console.log(user);
        //console.log(userCredential);
        //навигация на главную страницу 
        navigate('/')
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        alert("Извините, мы не смогли найти ваш аккаунт. Пожалуйста, перепроверьте введённые данные.")
      });

      
    } else {
      // Зарегистрироваться
      createUserWithEmailAndPassword(getAuth(), email, password)
      .then((userCredential) => {
        
        // Signed up 
        console.log(userCredential);
        const user = userCredential.user;
        console.log(user);
        console.log('Вход/Регистрация прошла успешно!')
            // Функция сохраняет пользователя в базе
        const id = user.uid
        async function saveUser(id) {
          console.log(id)
          const db = getDatabase()
          set(ref(db, 'users/' + id), {
            _id: id,
            email: user.email,
          })
        }
        saveUser(id)
        // addUser({id: user.uid })
        //навигация на страницу авторизации
          navigate('/login')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    }
    setErrorMessage('')
  }

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
                    setPasswordValue,
                  )
                }
                required
              />
              <span className={styles.error}>{passwordError}</span>
            </div>
            <div className={styles.buttons}>
              <BigButton value={logButtonValue} onClick={handleRegister} disabled={isLoading} />
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
                    setPasswordValue,
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
                    setRepeatPasswordValue,
                  )
                }
                required
              />
              <span className={styles.error}>{repeatPasswordError}</span>
            </div>
            <BigButton value={regButtonValue} onClick={handleRegister} disabled={isLoading} />
            {errorMessage && (
              <span className={styles.errorForm}>{errorMessage}</span>
            )}
          </>
        )}
      </div>
    </div>
  )
}
