import { Outlet, useNavigate } from "react-router";
import Navbar from "../../components/shared/WorkerShared/Navbar";
import { useCurrentUser } from "../../context/CurrentUser";
import { useEffect } from "react";

export default function WorkLayout() {
  // const navigate = useNavigate();
  // const { currentUser } = useCurrentUser();

  // useEffect(() => {
  //   console.log("log", currentUser);
  //   if (currentUser && !currentUser.activated) {
  //     navigate("/");
  //   } else if (!currentUser) {
  //     navigate("/");
  //   }
  // }, [currentUser, navigate]);

  // Render the component only if currentUser is defined

  return (
    <div className="font-sans flex overflow-hidden relative">
      <Navbar />
      <Outlet />
    </div>
  );
}
