import { Button } from "../ui/button";

export default function Header() {
  return (
    <div className=" flex  justify-between xl:pb-12 pb-4  flex-col-reverse lg:flex-row items-center bg-white dark:bg-inherit px-16 mt-[52px]">
      <div>
        <div className="md:text-[50px] font-bold md:leading-[60px] text-center lg:text-left text-[28px] leading-[40px] md:mt-8 mt-2 animated-text">
          Uncover Report,
          <br />
          <span></span>{" "}
        </div>
        <p className="md:text-[25px] text-[14px] mt-4 text-center lg:text-left font-medium">
          Join our bug bounty platform and
          <span className="lg:block inline">
            {" "}
            strengthen Cybersecurity together
          </span>
        </p>
        <div className="flex justify-between my-6 md:w-[80%] m-auto flex-col md:flex-row space-y-4 md:space-y-0   lg:w-[100%] w-[100%] lg:space-x-4 space-x-0 items-center">
          <Button className="hover:scale-110 transition-all duration-300 rounded-3xl text-white py-[7px] w-[220px] bg-[#303085] hover:bg-[#303085]">
            Register as a hacker
          </Button>
          <Button className="hover:scale-110 transition-all duration-300 rounded-3xl  py-[7px] w-[220px] bg-white text-black  border-2 border-black hover:bg-white">
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
