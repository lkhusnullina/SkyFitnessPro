import React, { useState } from 'react'
import styles from './ModalMyProgress.module.css'
import { BigButton } from '../../buttons/bigButton'

function ModalMyProgress({ closeModal, workout }) {
  const list = Object.values(workout.exercises)
  console.log(`lists : ${JSON.stringify(list)}`);
  const [isProgressFixed, setIsProgressFixed] = useState(false)
  const [itemErrors, setItemErrors] = useState({
    forwardBends: '',
    backwardBends: '',
    kneeRaises: '',
  })
  const [errorMessage, setErrorMessage] = useState('')
  const isLoading = false

  const buttonValue = isLoading ? 'Отправка...' : 'Отправить'

  const handleClickOutside = (event) => {
    if (event.target.classList.contains(styles.pageContainer)) {
      closeModal()
    }
  }

  const handleItemChange = (event, fieldName) => {
    const itemValue = event.target.value
    event.target.value = event.target.value.replace(/\D/g, '').slice(0, 2)

    let errors = { ...itemErrors }
    if (!itemValue) {
      errors[fieldName] = 'Поле обязательно для заполнения'
    } else {
      errors[fieldName] = ''
    }
    setItemErrors(errors)
  }

  const integerValidation = (event) => {
    event.target.value = event.target.value.replace(/[^\d]+/g, '')
  }

  const handleProgressFixed = () => {
    const areInputsFilled = Array.from(
      document.querySelectorAll('input[type="number"]'),
    ).every((input) => input.value.trim() !== '')

    if (
      areInputsFilled &&
      Object.values(itemErrors).every((error) => error === '')
    ) {
      setIsProgressFixed(true)
      setErrorMessage('')
      console.log('Отправка данных прошла успешно!')
    } else {
      setErrorMessage('Форма заполнена некорректно')
    }
  }

  return (
    <div className={styles.pageContainer} onClick={handleClickOutside}>
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
              {list?.map((item) => {
                return <>
                 <p key={item.id} className={styles.modalText}>Сколько раз вы делали {item.name}?</p>
                <input
                className={styles.modalInput}
                name="forwardBends"
                type="number"
                pattern="\d+"
                placeholder="Введите значение"
                onInput={integerValidation}
                onChange={(event) => handleItemChange(event, 'forwardBends')}
              />
              <span className={styles.error}>{itemErrors.forwardBends}</span>
                </>
              })} 
            </div>
          </div>
          <div className={styles.buttons}>
            <BigButton value={buttonValue} onClick={handleProgressFixed} disabled={isLoading}/>
          </div>
          <span className={styles.errorForm}>{errorMessage}</span>
        </div>
      )}
    </div>
  )
}

export default ModalMyProgress
