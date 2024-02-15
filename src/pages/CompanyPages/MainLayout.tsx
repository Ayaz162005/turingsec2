import { Outlet, useNavigate } from "react-router";
import Navbar from "../../components/shared/WorkerShared/Navbar";
import { useCurrentUser } from "../../context/CurrentUser";
import { useEffect } from "react";
import CompanyNavbar from "../../components/shared/Company/CompanyNavbar";

export default function MainLayout() {
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
    <div className="font-sans relative md:ml-[270px] ml-[74px] flex">
      <CompanyNavbar />
      <Outlet />
    </div>
  );
}
