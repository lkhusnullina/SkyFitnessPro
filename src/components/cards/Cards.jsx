import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BigButton } from '../buttons/bigButton'
import Card from '../сard/Card'
import styles from './Cards.module.css'

function Cards({ showButton, setIsOpen, setCourseId, courses }) {
  const navigate = useNavigate()
  const pictures = useSelector((state) => state.courses.pictures)

  const goToMainPage = () => {
    navigate('/')
  }

  return (
    <div className={styles.cards_block}>
      {courses && courses.length > 0 ?
        courses.map((course) => (
          <Card key={course._id} card={course} showButton={showButton} setIsOpen={setIsOpen}
                setCourseId={setCourseId} picture={pictures.find(p => p.altCard === course.nameEN)} />
        )) :
        !setIsOpen ?
          <h3>Нет доступных курсов</h3>
          :
          <div className={styles.cards_noCourses_container}>
            <h3 className={styles.cards_noCourses_message}>У вас ещё нет приобретённых курсов</h3>
            <BigButton value="Выбрать курс" onClick={goToMainPage} />
          </div>
        }
    </div>
  )
}

export default Cards
