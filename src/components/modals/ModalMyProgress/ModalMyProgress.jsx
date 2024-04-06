import React, { useState } from 'react'
import styles from './ModalMyProgress.module.css'
import { BigButton } from '../../buttons/bigButton'
import { useDispatch } from 'react-redux'
import { updateCourseProgress } from '../../../store/workoutsSlice'

function ModalMyProgress({ closeModal, workout }) {
  const list = Object.values(workout.exercises)
  //console.log(`lists : ${JSON.stringify(list)}`)
  const [isProgressFixed, setIsProgressFixed] = useState(false)
  const [itemErrors, setItemErrors] = useState('')
  const [progress, setProgress] = useState({})
  const [errorMessage, setErrorMessage] = useState('')
  const isLoading = false

  const buttonValue = isLoading ? 'Отправка...' : 'Отправить'
  const dispatch = useDispatch()

  const handleClickOutside = (event) => {
    if (event.target.classList.contains(styles.pageContainer)) {
      closeModal()
    }
  }

  const handleItemChange = (event, index, itemQuantity) => {
    const inputValue = event.target.value
    event.target.value = event.target.value.replace(/\D/g, '').slice(0, 2)

    const updatedProgress = {
      ...progress,
      [index]: inputValue,
    }

    setProgress(updatedProgress)

    dispatch(
      updateCourseProgress({
        workoutId: workout._id,
        index,
        progress: updatedProgress[index],
      }),
    )

    let errors = { ...itemErrors }
    if (!inputValue) {
      errors[index] = 'Поле обязательно для заполнения'
    } 
    if (inputValue > itemQuantity) {
      errors[index] = `не более ${itemQuantity}`
    }else {
      errors[index] = ''
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
            src="/images/progress_fixed.svg"
            alt="Прогресс засчитан"
          />
        </div>
      ) : (
        <div className={styles.modalForm}>
          <h1 className={styles.title}>Мой прогресс</h1>
          <div className={styles.modalInputs}>
            <div className={styles.modalInputsResult}>
              {list?.map((item, index) => {
                const itemName =
                  item.name.charAt(0).toLowerCase() + item.name.slice(1)
                const itemNameExercise = itemName.replace(/\s*\(.*?\)\s*/g, '')
                const itemQuantity = item.quantity
                return (
                  <React.Fragment key={item.id}>
                    <p className={styles.modalText}>
                      Сколько раз вы сделали {itemNameExercise}?
                    </p>
                    <input
                      className={styles.modalInput}
                      name={index}
                      type="number"
                      pattern="\d+"
                      placeholder="Введите значение"
                      maxLength="2"
                      onInput={integerValidation}
                      onChange={(event) => handleItemChange(event, index, itemQuantity)}
                    />
                    <span className={styles.error}>{itemErrors[index]}</span>
                  </React.Fragment>
                )
              })}
            </div>
          </div>
          <div className={styles.buttons}>
            <BigButton
              value={buttonValue}
              onClick={handleProgressFixed}
              disabled={isLoading}
            />
          </div>
          <span className={styles.errorForm}>{errorMessage}</span>
        </div>
      )}
    </div>
  )
}

export default ModalMyProgress
