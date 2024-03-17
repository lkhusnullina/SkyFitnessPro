import { useState } from "react"
import styles from "./Button.module.css"


function Button(){
   const [isActiveBtn, setIsActiveBtn] = useState(false);
   const hendelClick = () => {
      setIsActiveBtn(true);

   }
    return 
      <button className={isActiveBtn? styles.btnActive : styles.btn}>
         Войти
      </button>
  };

  export default Button
  