import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Button } from "./components/ui/button";
import AppLayout from "./pages/AppLayout";
import MainPage from "./pages/MainPage";
import RegisterHackerPage from "./pages/RegisterHackerPage";
import { useEffect } from "react";
import RegisterCompanyPage from "./pages/RegisterCompany";
import AboutUs from "./pages/AboutUs";

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
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<MainPage />} />

          <Route path="registerhacker" element={<RegisterHackerPage />} />
          <Route path="registercompany" element={<RegisterCompanyPage />} />
          <Route path="aboutus" element={<AboutUs />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
