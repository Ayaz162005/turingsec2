import { Button } from "../../ui/button";

export default function ProgramBox() {
  return (
    <div>
      <div className="bg-[#023059] lg:p-6 p-0 pb-20 rounded-2xl flex lg:items-center items-stretch gap-6 relative flex-col lg:flex-row">
        <div className="bg-[url('/assets/images/programimage.jpeg')] h-[190px]  bg-center bg-cover lg:w-[210px] relative w-full">
          <div className="bg-[#2451F5] rounded-xl absolute top-4 right-4 flex items-center justify-center py-2 px-5 text-[14px] font-[600]">
            100 reports
          </div>
        </div>
        <div className="px-8 lg:px-0">
          <h2 className="text-[18px] sm:text-[20px] font-[600] sm:font-[700] mb-4 lg:mb-0">
            Name
          </h2>
          <p className="text-[16px] font-[400]">Bug bounty</p>
          <div className="flex gap-4 mt-6 lg:flex-col xl:flex-row sm:flex-row flex-col">
            <div className="bg-[#FFDE31] rounded-xl text-[#023059] text-[14px] font-[500] py-2 px-8 w-[150px] sm:w-auto">
              2 Scopes
            </div>
            <div className="bg-[#FFDE31] rounded-xl text-[#023059] text-[14px] font-[500] py-2 px-8 w-[150px] sm:w-auto">
              Hall of fame
            </div>
          </div>
        </div>
        <Button className="hover:scale-110 transition-all duration-300 rounded-3xl  py-[7px]  bg-[#2451F5] text-white  border-2 border-[#2451F5] font-[600] hover:bg-[#2451F5] absolute flex gap-4 px-4 bottom-4 right-6">
          <p> Submit Report</p>
          <img src="/assets/sendbutton.svg" alt="" />
        </Button>
      </div>
    </div>
  );
}
