import { Outlet, useNavigate } from "react-router";
import Navbar from "../../components/shared/WorkerShared/Navbar";
import { useCurrentUser } from "../../context/CurrentUser";
import { useEffect, useState } from "react"; // Import useState
import CompanyNavbar from "../../components/shared/Company/CompanyNavbar";
import { set } from "date-fns";

export default function WorkLayout() {
  const navigate = useNavigate();
  const { currentUser } = useCurrentUser();
  const [loading, setLoading] = useState(false); // Add loading state
  const arr: boolean[] = [];
  console.log(currentUser);

  // Render the component only if currentUser is defined and activated

  return (
    <div className="font-sans relative md:ml-[270px] ml-[74px] flex">
      <Navbar />
      <Outlet />
    </div>
  );
}
