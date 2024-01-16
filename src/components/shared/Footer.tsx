import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="sm:px-16 px-8  bg-[#0C2F47] py-10">
      <h2 className="font-bold text-[32px] ">
        <img src="/assets/images/whitelogo.png" alt="" className="w-[182px]" />
      </h2>
      <div className="flex justify-between md:items-center xl:w-[85%] w-full md:flex-row flex-col items-start">
        <div className="flex flex-col mt-6 space-y-2">
          <Link to="/aboutus" className={`  text-white text-[18px]`}>
            About us
          </Link>
          <Link to="/leaderboard" className={`   text-white text-[18px]`}>
            Leaderboard
          </Link>
          <Link to="/bugbountyprograms" className={`  text-white text-[18px]`}>
            Bug Bounty programs
          </Link>
          <Link to="/opportunities" className={` text-white text-[18px]`}>
            Opportunities
          </Link>
        </div>
        <div className="flex flex-col mt-6 space-y-2">
          <Link to="/blog" className={`  text-white text-[18px]`}>
            Blog
          </Link>
          <Link to="/news" className={`   text-white text-[18px]`}>
            News
          </Link>
          <Link to="/contactus" className={`  text-white text-[18px]`}>
            Contact us
          </Link>
          <Link to="/securityteam" className={` text-white text-[18px]`}>
            Security Team
          </Link>
        </div>
        <div className="mt-6">
          <div className="space-x-4 hidden md:block">
            <button>
              <a href="#">
                <img src="/assets/images/instagram.svg" alt="instagramlogo" />
              </a>
            </button>
            <button>
              <a href="#">
                <img src="/assets/images/facebook.svg" alt="facebooklogo" />
              </a>
            </button>
            <button>
              <a href="#">
                <img src="/assets/images/linkedin.svg" alt="linkedinlogo" />
              </a>
            </button>
          </div>
          <p className="text-white mt-2 text-[18px] ">Get in touch with us</p>
          <div className="sm:space-x-4 space-x-0 items-center">
            <input
              type="email"
              placeholder="E-mail"
              className="text-black px-6 rounded-3xl py-2  mt-4 outline-none bg-[#FFEC86]  placeholder:text-black mr-[2px"
            />
            <button className="text-white border-2 border-[#FFEC86]   rounded-[15px]  hover:scale-110 transition-all duration-300  mt-4 sm:mt-0 py-2 px-3 sm:w-auto">
              <img src="/assets/images/newnext.svg" alt="" className="w-4" />
            </button>
          </div>
        </div>
        <div className="space-x-4 block md:hidden mt-8 ">
          <button>
            <a href="#">
              <img src="/assets/images/instagram.svg" alt="instagramlogo" />
            </a>
          </button>
          <button>
            <a href="#">
              <img src="/assets/images/facebook.svg" alt="facebooklogo" />
            </a>
          </button>
          <button>
            <a href="#">
              <img src="/assets/images/linkedin.svg" alt="linkedinlogo" />
            </a>
          </button>
        </div>
      </div>
      <p className="text-white mt-8">© Copyright turingsec 2024</p>
    </footer>
  );
}
