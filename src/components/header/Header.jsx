import { useLocation } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  const location = useLocation();
  const home = location.pathname === "/";
  const logoUrl = home
    ? "images/header_logo.png"
    : "images/header_logo_black.png";

  const noUser = location.pathname === "/yoga";
  const userProfile =
    location.pathname === "/profile" || location.pathname === "/workout";

  const userUrl = noUser ? (
    <div></div>
  ) : userProfile ? (
    <div className={styles.header_user}>
      <img src="images/avatar.svg" alt="avatar" />
      <div className={styles.header_userName}>Сергей</div>
      <img src="images/arrow.svg" alt="avatar" />
    </div>
  ) : (
    <button className={styles.header_btn}>Войти</button>
  );

  return (
    <div>
      <div className={styles.header_block}>
        <img src={logoUrl} />
        <div>{userUrl}</div>
      </div>
    </div>
  );
}

export default Header;