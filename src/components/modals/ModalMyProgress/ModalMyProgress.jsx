import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { BigButton } from '../../buttons/bigButton'
import { useUpdateUserCoursesMutation } from '../../../service/firebaseApi'
import styles from './ModalMyProgress.module.css'
import { updatePurchasedCourses } from '../../../store/usersSlice'

function ModalMyProgress({ closeModal, workout }) {
  const params = useParams();
  const courseId = params.courseId;
  const dispatch = useDispatch()
  const userId = useSelector((state) => state.auth.id)
  const [updateProgress] = useUpdateUserCoursesMutation()
  const purchasedCourses = useSelector(state => state.users.purchasedCourses)


  const exercises = Object.values(workout.exercises)
  const [purchasedWorkout, setPurchasedWorkout] = useState()
  const [isProgressFixed, setIsProgressFixed] = useState(false)
  const [itemErrors, setItemErrors] = useState({})
  const [progress, setProgress] = useState({})
  const [errorMessage, setErrorMessage] = useState('')
  const isLoading = false


  useEffect(() => {
    const pw = purchasedCourses.find((course) => course._id === courseId).workouts.find((w) => w._id === workout._id);
    if (!pw) return
    setPurchasedWorkout(pw)
    let res = {};
    for (let ex of pw.exercises) {
      res[ex.name] = ex.count
    }

    setProgress(res)
  }, [purchasedCourses, courseId, workout])


  const buttonValue = isLoading ? 'Отправка...' : 'Отправить'

  const handleClickOutside = (event) => {
    if (event.target.classList.contains(styles.pageContainer)) {
      closeModal()
    }
  }

  const handleItemChange = (event, name, itemQuantity) => {
    const value = Number(event.target.value)

    const updatedProgress = {
      ...progress,
      [name]: value,
    }

    setProgress(updatedProgress)

    let errors = { ...itemErrors }
    if (!value) {
      errors[name] = 'Поле обязательно для заполнения'
    } 
    if (value > itemQuantity) {
      errors[name] = `не более ${itemQuantity}`
    } else {
      errors[name] = ''
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

      dispatch(updatePurchasedCourses({courseId, workoutId: workout._id, progress, userId}))

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
              {exercises?.map((item, index) => {
                const itemName =
                  item.name.charAt(0).toLowerCase() + item.name.slice(1)
                const itemNameExercise = itemName.replace(/\s*\(.*?\)\s*/g, '')
                const itemQuantity = item.quantity
                return (
                  <React.Fragment key={item.name}>
                    <p className={styles.modalText}>
                      Сколько раз вы сделали {itemNameExercise}?
                    </p>
                    <input
                      className={styles.modalInput}
                      type="number"
                      pattern="\d+"
                      placeholder="Введите значение"
                      maxLength="2"
                      onInput={integerValidation}
                      onChange={(event) => handleItemChange(event, item.name, itemQuantity)}
                      defaultValue={progress[item.name]}
                    />
                    <span className={styles.error}>{itemErrors[item.name]}</span>
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
