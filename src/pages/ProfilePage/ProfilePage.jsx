import { useState } from "react";
import styles from "./ProfilePage.module.css";
import ModalChangeUserData from "../../components/modals/ModalChangeUserData";
import Card from "../../components/Card/Card.jsx";
import { Cards } from "../../constans.js";
import ModalChooseLesson from "../../components/modals/ModalChooseLesson.jsx";

export const ProfilePage = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPasswordChange, setIsPasswordChange] = useState(false);

  const openModal = (changePassword) => {
    setIsPasswordChange(changePassword);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Мой профиль</h1>
      <div className={styles.data_profile}>
        <p className={styles.login}>Логин: sergey.petrov96</p>
        <p className={styles.password}>Пароль: 4fkhdj880d</p>
        <div className={styles.button_container}>
          <button
            className={styles.change_login_btn}
            onClick={() => openModal(false)}
          >
            Редактировать логин
          </button>
          <button
            className={styles.change_password_btn}
            onClick={() => openModal(true)}
          >
            Редактировать пароль
          </button>
        </div>
      </div>
      <h2 className={styles.title_courses}>Мои курсы</h2>
      <div className={styles.cards_block}>
        {Cards?.map((card) => (
              <Card key={card.id} card={card} showButton={true} setIsModalOpen={setIsModalOpen}/>
          ))}
      </div>
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <ModalChangeUserData
            isPasswordChange={isPasswordChange}
            closeModal={closeModal}
          />
        </div>
      )}
      {isModalOpen && <ModalChooseLesson closeModal={closeModal} />}
    </div>
  );
};
