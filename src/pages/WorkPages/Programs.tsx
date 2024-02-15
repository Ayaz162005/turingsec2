import ProgramBox from "../../components/component/Worker/ProgramBox";

export default function Programs() {
  return (
    <div className="text-white flex-1 flex flex-col overflow-hidden relative">
      <section className="   font-[800] bg-[#1F44CC] h-[124px] flex items-center justify-center overflow-hidden ">
        <img
          src="/assets/iconnav3.svg"
          alt=""
          className="absolute z-[20] lg:-left-[10%] md:-left-[34%] sm:-left-[100px] top-0 w-[294px] md:w-[352px] -left-[150px]  "
        />
        <p className="md:text-[30px] text-[20px]">Progrmas</p>
        <img
          src="/assets/iconnav4.svg"
          alt=""
          className="absolute z-[20] md:-right-[60px] top-0 lg:right-0 sm:-right-[10%] -right-[20%]   overflow-hidden w-[224px] md:w-[242px]"
        />
      </section>

      <div className="bg-[#1E1E1E] flex-1 lg:px-20 sm:px-8 px-3  py-16 space-y-6">
        <ProgramBox />
        <ProgramBox />
        <ProgramBox />
      </div>
    </div>
  );
}
