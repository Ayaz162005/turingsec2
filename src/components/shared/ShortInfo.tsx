export default function ShortInfo() {
  return (
    <div className="mx-16 bg-[#AAA] dark:dark:bg-slate-900 mt-6 flex justify-evenly py-8 flex-col md:flex-row">
      <div className="flex flex-col  items-center leading-[60px]">
        <img src="/assets/images/world.svg" alt="world" width={74} />
        <p className="text-[50px] font-bold">100</p>
        <p className="leading-6 text-[16px] text-center">
          GLOBAL BRANDS
          <br /> USE TURINGSEC
        </p>
      </div>
      <div className="flex flex-col  items-center leading-[60px]">
        <img src="/assets/images/bag.svg" alt="world" width={74} />
        <p className="text-[50px] font-bold">254</p>
        <p className="leading-6 text-[16px] text-center">
          ETHICAL HACKERS
          <br /> AT THE READY
        </p>
      </div>
      <div className="flex flex-col  items-center leading-[60px]">
        <img src="/assets/images/tick.svg" alt="world" width={74} />
        <p className="text-[50px] font-bold">550</p>
        <p className="leading-6 text-[16px] text-center">
          VALID VULNERABILITIES
          <br /> RESOLVED TO DATE
        </p>
      </div>
    </div>
  );
}
