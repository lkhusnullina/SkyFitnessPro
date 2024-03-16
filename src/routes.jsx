import { Routes, Route } from "react-router-dom";
import { LayoutPage } from "./pages/LayoutPage/LayoutPage.jsx";
import { ProtectedRoute } from "./components/protected-route/index.jsx";
import { MainPage } from "./pages/MainPage/MainPage.jsx";
import { AuthPage } from "./pages/AuthPage/AuthPage.jsx";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage.jsx";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route element={<ProtectedRoute isAllowed={Boolean(true)} />}>
          <Route index element={<MainPage />} />
          <Route path="/profile" element={<ProfilePage/>} />
        </Route>
      </Route>

      <Route path="/login" element={<AuthPage />} />
      <Route path="/registration" element={<AuthPage />} />
    </Routes>
  );
};
