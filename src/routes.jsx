import { Routes, Route } from 'react-router-dom'
import { LayoutPage } from './pages/LayoutPage/LayoutPage.jsx'
import { ProtectedRoute } from './components/protectedRoute/index.jsx'
import { MainPage } from './pages/MainPage/MainPage.jsx'
import { AuthPage } from './pages/AuthPage/AuthPage.jsx'
import { ProfilePage } from './pages/ProfilePage/ProfilePage.jsx'
import { CoursePage } from './pages/CoursePage/CoursePage.jsx'
import { WorkoutVideoPage } from './pages/WorkoutVideoPage/WorkoutVideoPage.jsx'
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage.jsx'
import { useSelector } from 'react-redux'
import { useAuth } from './utils/authHook.js'
// import { useDispatch } from 'react-redux'
// import { useEffect } from 'react'
// import { setIsAllowed } from './store/slice.jsx'

export const AppRoutes = () => {
  //const dispatch = useDispatch
  // useEffect(() => {
  //   const isAllowed = Boolean(localStorage.getItem('user'))
  //   dispatch(setIsAllowed(isAllowed))
  //   console.log(isAllowed);
  // },[dispatch])
  const isAllowed = Boolean(localStorage.getItem('user'))
  // const email = useSelector(state => state.auth.email)
  // console.log(email);
  // const isAllowed = email
  // console.log(isAllowed);
  // useAuth()
  
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
