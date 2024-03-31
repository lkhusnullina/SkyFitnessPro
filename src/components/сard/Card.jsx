import styles from './Card.module.css'
import { Link } from 'react-router-dom'

function Card({ card, showButton, setIsOpen, picture }) {
  return (
    <div className={styles.card}>
      {showButton ? (
        <div
          onClick={() => setIsOpen(true)}
          id={card._id}
        >
          <h3 className={styles.card_title}>{card.nameRU}</h3>
          <img
            className={styles.card_img}
            src={picture.imgSrc}
            alt={picture.altCard}
          />
          <button className={styles.card_button}>Перейти →</button>
        </div>
      ) : (
        <Link to={`/course/${card._id}`} id={card._id}>
          <h3 className={styles.card_title}>{card.nameRU}</h3>
          <img
            className={styles.card_img}
            src={picture.imgSrc}
            alt={picture.altCard}
          />
        </Link>
      )}
    </div>
  )
}

export default Card
