import { useNavigate } from "react-router-dom"
import { BigButton } from "../../components/buttons/bigButton"
import styles from './NotFoundPage.module.css'

export const NotFoundPage = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.notFoundPage__container}>
            <h3 className={styles.notFoundPage__title}>Страница не найдена</h3>
            <BigButton value={'Вернуться на главную'} onClick={() => navigate('/')}></BigButton>
        </div>
    )
}