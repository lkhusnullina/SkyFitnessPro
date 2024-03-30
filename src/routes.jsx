import { Routes, Route } from 'react-router-dom'
import { LayoutPage } from './pages/LayoutPage/LayoutPage.jsx'
import { ProtectedRoute } from './components/protectedRoute/index.jsx'
import { MainPage } from './pages/MainPage/MainPage.jsx'
import { AuthPage } from './pages/AuthPage/AuthPage.jsx'
import { ProfilePage } from './pages/ProfilePage/ProfilePage.jsx'
import { CoursePage } from './pages/CoursePage/CoursePage.jsx'
import { WorkoutVideoPage } from './pages/WorkoutVideoPage/WorkoutVideoPage.jsx'
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage.jsx'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase.js'
import { useDispatch, useSelector } from 'react-redux'
import { setIsAllowed } from './store/slice.jsx'
import { useEffect } from 'react'

export const AppRoutes = () => {

  const dispatch = useDispatch()
  //Отслеживаем состояние авторизации
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user !== null) {
        dispatch(setIsAllowed(true))
        console.log("logged in!")
      } else {
        dispatch(setIsAllowed(false))
        console.log("no user");
      }
    })
  }, [dispatch])

  const isAllowed = useSelector(store => store.courses.isAllowed);
  console.log(isAllowed);
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<MainPage />} />
        <Route path="/course" element={<CoursePage />} />
        <Route element={<ProtectedRoute isAllowed={isAllowed} />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/workout" element={<WorkoutVideoPage />} />
        </Route>
      </Route>
      <Route path="/login" element={<AuthPage isLoginMode={true} />} />
      <Route path="/registration" element={<AuthPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
