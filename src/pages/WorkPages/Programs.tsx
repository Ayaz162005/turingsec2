import ProgramBox from "../../components/component/Worker/ProgramBox";

export default function Programs() {
  return (
    <div className="text-white flex-1 flex flex-col overflow-hidden relative">
      <section className="   font-[800] bg-[#1F44CC] h-[124px] flex items-center justify-center overflow-hidden ">
        <img
          src="/assets/iconnav3.svg"
          alt=""
          className="absolute z-[20] lg:-left-[10%] md:-left-[24%] sm:-left-[50px] top-0 w-[294px] md:w-[302px] -left-[80px]  "
        />
        <p className="md:text-[30px] text-[20px]">PROGRAMS</p>
        <img
          src="/assets/iconnav4.svg"
          alt=""
          className="absolute z-[20] md:-right-[0] top-0 sm:-right-[10%] -right-[20%]   overflow-hidden w-[204px] md:w-[242px]"
        />
      </section>

      <div className="bg-[#1E1E1E] flex-1 lg:px-20 px-8 py-16 space-y-6">
        <ProgramBox />
        <ProgramBox />
        <ProgramBox />
      </div>
    </div>
  );
}
