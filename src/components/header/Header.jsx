import styles from "./Header.module.css";

function Header(){
    return (
        <div>
            <div className={styles.header_block}>
                <img className={styles.header_logo} src="images/logo.png" />
                <div className={styles.account_block}>
                  <img className={styles.account_avatar} />
                  <p className={styles.account_nickname}>Сергей</p>
                </div>
                
                {/* <button className={styles.header_btn}>Войти</button> */}
            </div>
        </div>
    )
  };

  export default Header