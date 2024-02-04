import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import AppLayout from "./pages/AppLayout";
import MainPage from "./pages/MainPage";
import RegisterHackerPage from "./pages/RegisterHackerPage";
import { useEffect } from "react";
import RegisterCompanyPage from "./pages/RegisterCompany";
import AboutUs from "./pages/AboutUs";
import OpportunitiesHacker from "./pages/OpportunitiesHacker";
import OpportunitiesCompany from "./pages/OpportunitiesCompany";
import Dashboard from "./pages/WorkPages/Dashboard";
import WorkLayout from "./pages/WorkPages/WorkLayout";
import Programs from "./pages/WorkPages/Programs";
import SignupAsHacker from "./pages/SignupAsHacker";

import { Toaster } from "react-hot-toast";
import Ranking from "./pages/WorkPages/Ranking";
import Hactivity from "./pages/WorkPages/Hactivity";
import Profile from "./pages/WorkPages/Profile";

function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }
  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<MainPage />} />

          <Route path="registerhacker" element={<RegisterHackerPage />} />
          <Route path="signupashacker" element={<SignupAsHacker />} />
          <Route path="registercompany" element={<RegisterCompanyPage />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="opportunitieshacker" element={<OpportunitiesHacker />} />
          <Route
            path="opportunitiescompany"
            element={<OpportunitiesCompany />}
          />
        </Route>
        <Route path="/work" element={<WorkLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="programs" element={<Programs />} />
          <Route path="ranking" element={<Ranking />} />
          <Route path="hactivity" element={<Hactivity />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
