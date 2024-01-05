import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";

export default function AppLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
