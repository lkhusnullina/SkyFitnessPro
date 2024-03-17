import Button from "../Buttons/Button";
import styles from "./Header.module.css";


function Header(){
    return (
        <div>
            <div className={styles.header_block}>
                <img src="images/header_logo.png" />
                <Button/>
            </div>
        </div>
    )
  };

  export default Header