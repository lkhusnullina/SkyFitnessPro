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
import { useEffect, useState } from 'react'

export const AppRoutes = () => {
  //const isAllowed = Boolean(localStorage.getItem('user'))
  const [isAllowed, setIsAllowed] = useState(null)
  //  
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user !== null) {
      console.log("logged in!")
      setIsAllowed(true)
      } else {
      console.log("no user");
      setIsAllowed(false)
      }
   })
  }, [isAllowed])

  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<MainPage />} />
        <Route path="/course/:id" element={<CoursePage />} />
        <Route element={<ProtectedRoute isAllowed={isAllowed} />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/workout/:id" element={<WorkoutVideoPage />} />
        </Route>
      </Route>
      <Route path="/login" element={<AuthPage isLoginMode={true} />} />
      <Route path="/registration" element={<AuthPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
