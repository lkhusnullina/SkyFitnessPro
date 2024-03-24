import styles from "./Card.module.css";
import { Link } from "react-router-dom";

function Card({ card, showButton, setIsModalOpen }){

  return (
    <div className={styles.card}>
      { showButton ? (
        <div onClick={()=> setIsModalOpen(true)} id={card.id} className={styles.card_shadow}>
          <h3 className={styles.card_title}>{card.titleCard}</h3>
          <img
            className={styles.card_img}
            src={`/${card.imgCard}`}
            alt={card.altCard}
          />
          <button className={styles.card_button}>Перейти →</button>
        </div>
      ) : (
        <Link to={"/yoga"} id={card.id}>
          <h3 className={styles.card_title}>{card.titleCard}</h3>
          <img
            className={styles.card_img}
            src={`/${card.imgCard}`}
            alt={card.altCard}
          />
        </Link>
      )}
    </div>
  );
};

export default Card;
