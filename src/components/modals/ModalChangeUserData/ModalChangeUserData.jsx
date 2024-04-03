import React, { useEffect, useState } from 'react'
import styles from './ModalChangeUserData.module.css'
import { Link } from 'react-router-dom'
import {
  handleLoginChange,
  handlePasswordChange,
  handleRepeatPasswordChange,
} from '../../../utils/formValidation'
import { BigButton } from '../../buttons/bigButton'
import { useDispatch } from 'react-redux'
import {
  getAuth,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
  updateEmail,
} from 'firebase/auth';
import { auth } from '../../../firebase'
import { setAuth } from '../../../store/authSlice'

function ModalChangeUserData({ isPasswordChange, closeModal }) {
  const dispatch = useDispatch()
  const [loginError, setLoginError] = useState([])
  const [loginValue, setLoginValue] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [repeatPasswordError, setRepeatPasswordError] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [repeatPasswordValue, setRepeatPasswordValue] = useState('')
  const isLoading = false
   
  const buttonValue = isLoading ? 'Сохранение...' : 'Сохранить'

  const handleClickOutside = (event) => {
    if (event.target.classList.contains(styles.pageContainer)) {
      closeModal() // Закрываем модальное окно при клике вне него
    }
  }

  useEffect(() => {
    if (repeatPasswordError && repeatPasswordValue === passwordValue) {
      setRepeatPasswordError('')
    }
  }, [passwordValue, repeatPasswordValue])

  const handleChangeData = () => {
    if (
      isPasswordChange &&
      (!repeatPasswordValue || repeatPasswordError || passwordError)
    ) {
      setErrorMessage('Форма заполнена некорректно')
      return
    }

    if (!isPasswordChange && (loginError.length > 0 || !loginValue)) {
      setErrorMessage('Форма заполнена некорректно')
      return
    }
    else {

      async function changeLog(){
        const oldPassword = JSON.parse(localStorage.getItem('user')).password
        const oldLogin = JSON.parse(localStorage.getItem('user')).email
        const newLogin = loginValue

        const credentialOld = EmailAuthProvider.credential(
          oldLogin,
          oldPassword
        );

        await reauthenticateWithCredential(auth.currentUser, credentialOld);

        updateEmail(auth.currentUser, newLogin)
            .then(() => {
              console.log('Логин успешно изменен');
            })
            .catch((error) => {
              console.error('Ошибка изменения логина:', error);
            });
      
        dispatch(
          setAuth( 
            {
              password: oldPassword,
              id: auth.currentUser.uid,
              email: newLogin,
              accessToken: auth.currentUser.accessToken,
              refreshToken: auth.currentUser.stsTokenManager.refreshToken
            })
        )
        // const credentialNew = EmailAuthProvider.credential(
        //   newLogin,
        //   oldPassword
        // );
        //await reauthenticateWithCredential(auth.currentUser, credentialNew);
      }

      async function changePass(){
        const oldPassword = JSON.parse(localStorage.getItem('user')).password
        const newPassword = passwordValue
        const credentialOld = EmailAuthProvider.credential(
          auth.currentUser.email,
          oldPassword
        );
      
      await reauthenticateWithCredential(auth.currentUser, credentialOld);
      await updatePassword(auth.currentUser, newPassword);
        dispatch(
          setAuth( 
            {
            password: newPassword,
            id: auth.currentUser.uid,
            email: auth.currentUser.email,
            accessToken: auth.currentUser.accessToken,
            refreshToken: auth.currentUser.stsTokenManager.refreshToken
          })
        )
        const credentialNew = EmailAuthProvider.credential(
          auth.currentUser.email,
          newPassword
        );
        await reauthenticateWithCredential(auth.currentUser, credentialNew);
      }
    if(isPasswordChange === false) {
      changeLog();
    }
    
    if(isPasswordChange) {
      changePass();
    }
    
    console.log(auth.currentUser);
    closeModal();
    console.log('Смена данных прошла успешно!')

    setErrorMessage('')
  }
}

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
                    setPasswordValue,
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
                    setRepeatPasswordValue,
                  )
                }
              />
              <span className={styles.error}>{repeatPasswordError}</span>
            </div>
            <div className={styles.buttons}>
              <BigButton value={buttonValue} onClick={handleChangeData}/>
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
                  handleLoginChange(event, setLoginError, setLoginValue)
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
            <BigButton value={buttonValue} onClick={handleChangeData} disabled={isLoading}/>
            <span className={styles.errorForm}>{errorMessage}</span>
          </>
        )}
      </div>
    </div>
  )
}

export default ModalChangeUserData
