export default function LeaderLine() {
  return (
    <div className="border-2 rounded-full border-black lg:px-8 px-4 flex items-center justify-between hover:scale-105 cursor-pointer transition-all duration-300">
      <div className="flex items-center justify-between  ">
        <p className="lg:min-w-12 sm:min-w-8 sm:text-[30px] text-[24px] min-w-[20px]">
          1
        </p>
        <div className="hexagon">
          <img src="/assets/images/testimg1.jpeg" alt="" />
        </div>
        <div className="flex flex-col lg:ml-8 ml-3 ">
          <p className="font-medium text-[18px] sm:text-[18px]">
            Hackers nickname
          </p>
          <p className="flex items-center gap-2">
            <img src="/assets/images/aze.svg" alt="flag" />
            <p>City</p>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between lg:w-1/2 md:w-[60%] ">
        <div className="md:flex items-center justify-between w-full  hidden">
          <div>
            <p className="text-[#828282]">Apr</p>
            <p className=" text-[22px]">65</p>
          </div>
          <div>
            <p className="text-[#828282]">May</p>
            <p className=" text-[22px]">65</p>
          </div>
          <div>
            <p className="text-[#828282]">Jun</p>
            <p className=" text-[22px]">65</p>
          </div>
          <div>
            <p className="text-[#828282]">Apr</p>
            <p className=" text-[22px]">65</p>
          </div>
          <div>
            <p className="text-[#828282]">Apr</p>
            <p className=" text-[22px]">65</p>
          </div>
          <div>
            <p className="text-[#828282]">Apr</p>
            <p className=" text-[22px]">65</p>
          </div>
        </div>
        <div className="bg-[#303085] rounded-xl text-white px-3  py-[2px] sm:px-4 font-medium sm:text-[25px] text-[18px] lg:ml-12 sm:ml-4 ml-4 sm:mr-4 mr-2">
          61
        </div>
        <button className="text-[2px] min-w-8">
          <img src="/assets/images/next.svg" alt="" />
        </button>
      </div>
    </div>
  );
}
