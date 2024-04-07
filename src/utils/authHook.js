import { onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react'
import { auth } from '../firebase'

export function useAuth() {
  const [authUser, setAuthUser] = useState(null)
  //Отслеживаем состояние авторизации
  onAuthStateChanged(auth, user => {
    setAuthUser(!!user)
  })
  return authUser
}