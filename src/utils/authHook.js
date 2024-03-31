import { onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"
import { auth } from "../firebase"

export function useAuth(){

   const [authUser, setAuthUser] = useState(null)
   //Отслеживаем состояние авторизации
   onAuthStateChanged(auth, user => {
      if (user !== null) {
      console.log("logged in!")
      setAuthUser(true)
      } else {
      console.log("no user");
      setAuthUser(false)
      }
   })
 return authUser
}