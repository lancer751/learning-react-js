import { Route, Routes, useLocation } from "react-router";
import SignUpPage from "@/pages/auth/signup/SignUpPage";
import LoginPage from "@/pages/auth/login/LoginPage";
import HomePage from "./pages/home/HomePage";
import Sidebar from "./components/common/Sidebar";
import RightPanel from "./components/common/RightPanel";
import NotificationPage from "./pages/notification/NotificationPage";
import ProfilePage from "./pages/profile/ProfilePage";

function App() {
  const currentLocation = useLocation();
  const authenticated = !currentLocation.pathname.includes("/signup") ||  currentLocation.pathname !== "/login";
  return (
    <div className="flex max-w-6xl mx-auto">
      {authenticated && <Sidebar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/notifications" element={<NotificationPage />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
      </Routes>
      {authenticated && <RightPanel />}
    </div>
  );
}

export default App;
