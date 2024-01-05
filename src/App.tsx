import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Button } from "./components/ui/button";
import AppLayout from "./pages/AppLayout";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<MainPage />} />
          <Route path="aboutus" element={<Button />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
