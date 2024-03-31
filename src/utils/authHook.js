import { useSelector } from "react-redux";


export function useAuth() {
   const uid = useSelector(state => state.auth.uid)
   const email = useSelector(state => state.auth.email)

   console.log(email);
   return {
      isAuth: email,
      userName: email,
      idUser: uid
   }
}