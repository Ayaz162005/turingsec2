import { Outlet } from "react-router";
import Navbar from "../../components/shared/WorkerShared/Navbar";

export default function WorkLayout() {
  return (
    <div className="font-sans flex overflow-hidden relative">
      <Navbar />
      <Outlet />
    </div>
  );
}
