import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const url = `/${useLocation().pathname.split("/")[2]}`;

  return (
    <div className="bg-[#023059] py-14  rounded-tr-[30px]  z-30 md:w-[270px] w-[74px] left-0 fixed ">
      <ul>
        <Link className="hidden md:block px-10 " to={"/"}>
          <img src="/assets/images/newlogo.png" alt="logo" width={200} />
        </Link>
        <Link to={"/"} className="block md:hidden">
          <img
            src="/assets/newsmalllogo.png"
            alt="logo"
            width={45}
            className="m-auto"
          />
        </Link>
        <div className="mt-8 ">
          <Link
            to={"dashboard"}
            className={`flex items-center text-white text-[22px] gap-5 font-[600]  ${
              url == "/dashboard" ? "bg-[#2451F5]" : ""
            } py-4  md:rounded-full rounded-[30px] md:px-10 px-2`}
          >
            <img
              src="/assets/icon17.svg"
              alt=""
              className="md:w-[32px] w-[40px] m-auto md:m-0"
            />
            <p className="hidden md:block">Dashboard</p>
          </Link>
          <Link
            to={"programs"}
            className={`flex items-center text-white text-[22px] gap-5 font-[600] ${
              url == "/programs" ? "bg-[#2451F5]" : ""
            } py-4  md:rounded-full rounded-[30px] md:px-10 px-2`}
          >
            <img
              src="/assets/icon18.svg"
              alt=""
              className="md:w-[32px] w-[40px] m-auto md:m-0"
            />
            <p className="hidden md:block">Programs</p>
          </Link>
          <Link
            to={"hactivity"}
            className={`flex items-center text-white text-[22px] gap-5 font-[600] ${
              url == "/hactivity" ? "bg-[#2451F5]" : ""
            } py-4  md:rounded-full rounded-[30px] md:px-10 px-2`}
          >
            <img
              src="/assets/icon19.svg"
              alt=""
              className="md:w-[32px] w-[40px] m-auto md:m-0"
            />
            <p className="hidden md:block">Hactivity</p>
          </Link>
          <Link
            to={"ranking"}
            className={`flex items-center text-white text-[22px] gap-5 font-[600] ${
              url == "/ranking" ? "bg-[#2451F5]" : ""
            } py-4  md:rounded-full rounded-[30px] md:px-10 px-2`}
          >
            <img
              src="/assets/icon20.svg"
              alt=""
              className="md:w-[32px] w-[40px] m-auto md:m-0"
            />
            <p className="hidden md:block">Ranking</p>
          </Link>
          <Link
            to={"report"}
            className={`flex items-center text-white text-[22px] gap-5 font-[600] ${
              url == "/report" ? "bg-[#2451F5]" : ""
            } py-4  md:rounded-full rounded-[30px] md:px-10 px-2`}
          >
            <img
              src="/assets/icon21.svg"
              alt=""
              className="md:w-[32px] w-[40px] m-auto md:m-0"
            />
            <p className="hidden md:block">Report</p>
          </Link>
          <Link
            to={"profile"}
            className={`flex items-center text-white text-[22px] gap-5 font-[600] ${
              url == "/profile" ? "bg-[#2451F5]" : ""
            } py-4  md:rounded-full rounded-[30px] md:px-10 px-2`}
          >
            <img
              src="/assets/icon22.svg"
              alt=""
              className="md:w-[32px] w-[40px] m-auto md:m-0"
            />
            <p className="hidden md:block">Profile</p>
          </Link>
        </div>
        <div className="mt-4">
          <Link
            to={"notifications"}
            className={`flex items-center text-white text-[22px] gap-5 font-[600] ${
              url == "/notifications" ? "bg-[#2451F5]" : ""
            } py-4  md:rounded-full rounded-[30px] md:px-10 px-2`}
          >
            <img
              src="/assets/icon24.svg"
              alt=""
              className="md:w-[32px] w-[40px] m-auto md:m-0"
            />
            <p className="hidden md:block">Notifications</p>
          </Link>
          <Link
            to={"inbox"}
            className={`flex items-center text-white text-[22px] gap-5 font-[600] ${
              url == "/inbox" ? "bg-[#2451F5]" : ""
            } py-4  md:rounded-full rounded-[30px] md:px-10 px-2`}
          >
            <img
              src="/assets/icon25.svg"
              alt=""
              className="md:w-[32px] w-[40px] m-auto md:m-0"
            />
            <p className="hidden md:block">Inbox</p>
          </Link>
          <Link
            to={"settings"}
            className={`flex items-center text-white text-[22px] gap-5 font-[600] ${
              url == "/settings" ? "bg-[#2451F5]" : ""
            } py-4  md:rounded-full rounded-[30px] md:px-10 px-2`}
          >
            <img
              src="/assets/icon23.svg"
              alt=""
              className="md:w-[32px] w-[40px] m-auto md:m-0"
            />
            <p className="hidden md:block">Settings</p>
          </Link>
        </div>
      </ul>
    </div>
  );
}
