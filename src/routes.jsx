import { Routes, Route } from 'react-router-dom'
import { LayoutPage } from './pages/LayoutPage/LayoutPage.jsx'
import { ProtectedRoute } from './components/protectedRoute/index.jsx'
import { MainPage } from './pages/MainPage/MainPage.jsx'
import { AuthPage } from './pages/AuthPage/AuthPage.jsx'
import { ProfilePage } from './pages/ProfilePage/ProfilePage.jsx'
import { CoursePage } from './pages/CoursePage/CoursePage.jsx'
import { WorkoutVideoPage } from './pages/WorkoutVideoPage/WorkoutVideoPage.jsx'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route element={<ProtectedRoute isAllowed={Boolean(true)} />}>
          <Route index element={<MainPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/course" element={<CoursePage />} />
          <Route path="/workout" element={<WorkoutVideoPage />} />
        </Route>
      </Route>

      <Route path="/login" element={<AuthPage isLoginMode={true} />} />
      <Route path="/registration" element={<AuthPage />} />
    </Routes>
  )
}
