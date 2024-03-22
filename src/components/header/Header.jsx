import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

function Header(){
    const location = useLocation();
    const home = location.pathname === "/";
    console.log(home);
    const logoUrl = home ? "images/header_logo.png" : "images/header_logo_black.png";
    return (
        <div id="top">
            <div className={styles.header_block}>
                <img src={logoUrl} />
                <Link to="/login">
                <button className={styles.header_btn}>Войти</button>
                </Link>
            </div>
        </div>
    )
  };

  export default Header 