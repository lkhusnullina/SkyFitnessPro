import styles from "./Header.module.css";

function Header(){
    return (
        <div>
            <div className={styles.header_block}>
                <img className={styles.header_logo} src="images/blacklogo.png" />
                <button className={styles.header_btn}>Войти</button>
            </div>
        </div>
    )
  };

  export default Header 