import { Outlet } from "react-router-dom";
import styles from "./LayoutPage.module.css";
import Header from "../../components/header/Header";

const LayoutPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header/>
        <Outlet />
      </main>
    </div>
  );
};

export { LayoutPage };
