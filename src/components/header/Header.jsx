import styles from "./Header.module.css";


function Header(){
    return (
        <div>
            <div className={styles.header_block}>
                <img src="images/header_logo.png" />
                <button>Войти</button>
            </div>
        </div>
    )
  };

  export default Header