import { Routes, Route } from 'react-router-dom'
import { LayoutPage } from './pages/LayoutPage/LayoutPage.jsx'
import { ProtectedRoute } from './components/protectedRoute/index.jsx'
import { MainPage } from './pages/MainPage/MainPage.jsx'
import { AuthPage } from './pages/AuthPage/AuthPage.jsx'
import { ProfilePage } from './pages/ProfilePage/ProfilePage.jsx'
import { CoursePage } from './pages/CoursePage/CoursePage.jsx'
import { WorkoutVideoPage } from './pages/WorkoutVideoPage/WorkoutVideoPage.jsx'
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage.jsx'

export const AppRoutes = () => {

  //Отслеживаем состояние авторизации
  onAuthStateChanged(auth, (user) => {
    if (user !== null) {
      console.log('logged in!')
    } else {
      console.log('no user')
    }
  })

  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<MainPage />} />
        <Route path="/course" element={<CoursePage />} />
        <Route element={<ProtectedRoute isAllowed={Boolean(true)} />}>
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
