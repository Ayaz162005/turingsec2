import { forwardRef } from "react";

const ShortInfo = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      className="mx-16 mt-6 flex justify-evenly py-8 flex-col md:flex-row back rounded-[90px] text-white mb-8"
      ref={ref}
    >
      <div className="flex flex-col  items-center leading-[60px]">
        <img
          src="/assets/world-white.svg"
          alt="world"
          className="md:w-[74px] w-[68px]"
        />
        <p className="md:text-[50px] font-bold text-[40px]">100</p>
        <p className="md:leading-6 md:text-[16px] text-center text-[14px] leading-5">
          GLOBAL BRANDS
          <br /> USE TURINGSEC
        </p>
      </div>
      <div className="flex flex-col  items-center leading-[60px]">
        <img
          src="/assets/bag-white.svg"
          alt="world"
          className="md:w-[74px] w-[68px]"
        />
        <p className="md:text-[50px] font-bold text-[40px]">254</p>
        <p className="md:leading-6 md:text-[16px] text-center text-[14px] leading-5">
          ETHICAL HACKERS
          <br /> AT THE READY
        </p>
      </div>
      <div className="flex flex-col  items-center leading-[60px]">
        <img
          src="/assets/click-white.svg"
          alt="world"
          className="md:w-[74px] w-[68px]"
        />
        <p className="md:text-[50px] font-bold text-[40px]">550</p>
        <p className="md:leading-6 md:text-[16px] text-center text-[14px] leading-5">
          VALID VULNERABILITIES
          <br /> RESOLVED TO DATE
        </p>
      </div>
    </div>
  );
});

export default ShortInfo;
