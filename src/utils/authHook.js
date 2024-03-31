// import { useSelector } from "react-redux";

import { onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"
import { auth } from "../firebase"
import { useDispatch } from "react-redux"


// export function useAuth() {
//    const uid = useSelector(state => state.auth.id)
//    const email = useSelector(state => state.auth.email)

//    console.log(email);
//    return {
//       isAuth: email,
//       userName: email,
//       idUser: uid
//    }
// }
export function useAuth(){
   const dispatch = useDispatch

   useEffect(() => {
      const listen = onAuthStateChanged(auth, (user) => {
         if(user) dispatch(setAuthUser(user))
         else dispatch(setAuthUser(null))
      })
      return () => {listen()}
   }, [dispatch])
   
}