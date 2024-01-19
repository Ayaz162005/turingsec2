import { Button } from "../ui/button";

export default function Header() {
  return (
    <div className=" flex  justify-between xl:pb-12 pb-4 sm:py-8 flex-col-reverse text-[white] lg:flex-row items-center bg-[#31688F] dark:bg-inherit sm:px-16 mt-[52px] py-20 px-8">
      <div>
        <div className="md:text-[50px]  md:leading-[60px] text-center lg:text-left text-[28px] leading-[40px] md:mt-8 mt-2 animated-text font-[700] ">
          Discover Report,
          <br />
          <span className="md:text-[35px] text-[25px] "></span>
        </div>
        <p className="md:text-[20px] text-[14px] mt-4 text-center lg:text-left   leading-7 opacity-90 font-urbanist font-[500] ">
          Our Bug Bounty Platform Encourages
          <span className="lg:block inline"> Cybersecurity Collaboration</span>
        </p>
        <div className="flex justify-between my-6 md:w-[80%] m-auto flex-col md:flex-row space-y-4 md:space-y-0   lg:w-[100%] w-[100%] md:space-x-4 space-x-0 items-center">
          <Button className="hover:scale-110 transition-all duration-300 rounded-3xlpy-[7px] w-[220px] bg-[#FFDE31] hover:bg-[#FFDE31] text-black font-bold rounded-3xl">
            Register as a hacker
          </Button>
          <Button className="hover:scale-110 transition-all duration-300 rounded-3xl  py-[7px] w-[220px] bg-transparent text-white  border-2 border-[#FFDE31] font-[600] hover:bg-transparent">
            Register as a Company
          </Button>
        </div>
      </div>
      <div className="min-w-[50%]">
        <img
          src="/assets/images/headerpic.png"
          alt="assets"
          className="m-auto lg:w-[600px] md:w-[400px] w-[300px]"
          // width={600}
        />
      </div>
    </div>
  );
}
