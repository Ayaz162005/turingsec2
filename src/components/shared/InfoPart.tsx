import { Button } from "../ui/button";

export default function InfoPart() {
  return (
    <div className=" flex  flex-col sm:px-16  px-8 lg:flex-row  relative overflow-hidden z-10 items-center pb-8 lg:pb-14 bg-[#061723]">
      <div className="text-center mt-2 lg:text-left lg:mt-0  lg:px-0 text-white">
        <h2 className="font-bold text-[32px] py-6 text-white">About Us</h2>
        <h2 className="xl:text-[35px] md:text-[28px]  lg:leading-[40px] mb-8 mt-2  text-[22px] leading-[30px] font-[600] ">
          Enabling global efforts to create a more secure online environment
        </h2>
        <p className="xl:w-[85%] lg:w-[85%] w-full md:text-[22px] font-[300] mb-6 text-[18px]">
          At TuringSec, we believe in the power of collaboration. Our mission is
          to connect talented security researchers with organizations worldwide,
          creating a robust ecosystem where vulnerabilities are identified,
          reported, and swiftly resolved.
        </p>
        <Button
          className="bg-[#FFDE31] hover:bg-[#FFDE31]
            text-black mt-4 rounded-xl hover:scale-105 transition-all duration-300 px-8"
        >
          <p> More information</p>
          <img
            src="/assets/images/rightarrow.svg"
            alt=""
            width={20}
            className="ml-4"
          />
        </Button>
      </div>
      <div className="min-w-[50%] flex">
        <img
          src="/assets/images/infopartimg.png"
          alt=""
          width={582}
          className="m-auto md:w-[582px] w-[280px]"
        />
      </div>
    </div>
  );
}
