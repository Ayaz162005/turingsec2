import { Button } from "../ui/button";

export default function InfoPart() {
  return (
    <div className=" dark:bg-slate-900 flex flex-col lg:flex-row  curve relative overflow-hidden z-10 items-center pb-8 lg:pb-14">
      <div className="min-w-[50%] flex">
        <img
          src="/assets/images/infopartimg.png"
          alt=""
          width={582}
          className="m-auto md:w-[582px] w-[280px]"
        />
      </div>
      <div className="text-center mt-2 lg:text-left lg:mt-0 px-16 lg:px-0">
        <h2 className="xl:text-[35px] md:text-[30px] font-bold lg:leading-[45px] mb-2 text-md:[30px] text-[22px] leading-[30px]">
          Enabling global efforts to create a
          <span className=" lg:block inline ">
            {" "}
            more secure online environment
          </span>{" "}
        </h2>
        <p className="xl:w-[50%] lg:w-[70%] w-full text-[16px]">
          informatio nformatio ninf ormationi nformationi nformationin format
          ioninformationinf ormati oninfo rmatio ninformationf ormation informa
          tionin formation information informa tioninformat ioninformat ionin
          formation
        </p>
        <Button className="hover:scale-110 transition-all duration-300 rounded-3xl text-white py-[7px] w-[220px] bg-[#303085] hover:bg-[#303085] mt-2">
          Get more information
        </Button>
      </div>
    </div>
  );
}
