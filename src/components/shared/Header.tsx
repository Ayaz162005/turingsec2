import { Button } from "../ui/button";

export default function Header() {
  return (
    <div className="pt-24 flex justify-between pb-16 flex-col lg:flex-row items-center bg-[#D9D9D9] dark:bg-inherit px-16 mt-[52px]">
      <div>
        <div className="text-[50px] font-bold leading-[60px] text-center md:text-left">
          Uncover Report,<span className="lg:block inline"> Reward</span>{" "}
        </div>
        <p className="text-500 mt-4 text-center lg:text-left">
          Join our bug bounty platform and
          <span className="lg:block inline">
            {" "}
            strengthen Cybersecurity together
          </span>
        </p>
        <div className="flex justify-between my-6 md:w-[70%] m-auto flex-col md:flex-row space-y-4 md:space-y-0   lg:w-[100%] w-[40%]">
          <Button className="hover:scale-110 transition-all duration-300 rounded-xl hover:bg-blue-800 dark:hover:bg-violet-900 dark:hover:text-white">
            Register as a hacker
          </Button>
          <Button className="hover:scale-110 transition-all duration-300 rounded-xl hover:bg-blue-800 dark:hover:bg-violet-900 dark:hover:text-white">
            Register as a company
          </Button>
        </div>
      </div>
      <div className="min-w-[50%]">
        <img src="/assets/images/Vector.svg" alt="assets" className="m-auto" />
      </div>
    </div>
  );
}
