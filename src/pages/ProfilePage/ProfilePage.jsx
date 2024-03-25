import { useState } from "react";
import styles from "./ProfilePage.module.css";
import ModalChangeUserData from "../../components/modals/ModalChangeUserData/ModalChangeUserData.jsx";
import Card from "../../components/сard/Card.jsx";
import { Cards } from "../../constans.js";
import ModalChooseLesson from "../../components/modals/ModalChooseLesson/ModalChooseLesson.jsx";

export const ProfilePage = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  const [isPasswordChange, setIsPasswordChange] = useState(false);

  const openModal = (changePassword) => {
    setIsPasswordChange(changePassword);
    setIsModalOpen(true);
  };

  const closeProgressModal = () => {
    setIsOpen(false)
  }

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
              <Card key={card.id} card={card} showButton={true} setIsOpen={setIsOpen}/>
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
      {isOpen && (
      <div className={styles.modalOverlay}>
        <ModalChooseLesson closeProgressModal={closeProgressModal} />
      </div>
      )}
    </div>
  );
};
