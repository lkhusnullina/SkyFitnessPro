import styles from "./Header.module.css";


function Header(){
    return (
        <div>
            <div id="top" className={styles.header_block}>
                <img src="images/header_logo_black.svg" />
                <button>Войти</button>
            </div>
        </div>
    )
  };

  export default Header