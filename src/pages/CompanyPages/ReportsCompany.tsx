import ReportElement from "../../components/component/Company/ReportElement";
import Box from "../../components/component/Worker/Box";

export default function ReportCompany() {
  return (
    <div className="text-white flex-1 flex flex-col overflow-hidden ">
      <section className="   font-[800] bg-[#1F44CC] h-[124px] flex items-center justify-center overflow-hidden ">
        <img
          src="/assets/iconnav1.svg"
          alt=""
          className="absolute z-[20] lg:left-[17%] md:left-[13%] sm:-left-[50px] top-0 w-[294px] md:w-[392px] -left-[80px]  "
        />
        <p className="md:text-[30px] text-[20px]"> REPORTS</p>
        <img
          src="/assets/iconnav2.svg"
          alt=""
          className="absolute z-[20] md:-right-[0] top-0 sm:-right-[10%] -right-[20%]   overflow-hidden w-[204px] md:w-[242px]"
        />
      </section>
      <div className=" bg-[#1F44CC]  w-full absolute top-0 left-0 h-[30px] ">
        ssdd
      </div>

      <div className="bg-[#1E1E1E] flex-1 lg:px-20 px-8 py-16">
        <h2 className="sm:text-[25px] font-[700] text-[20px] mb-6">
          Incoming Reports
        </h2>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 ">
          <ReportElement />
          <ReportElement />
          <ReportElement />
        </div>
      </div>
    </div>
  );
}
