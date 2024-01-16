import { Button } from "../ui/button";

export default function Oppotunuties() {
  return (
    <section className="sm:px-16 px-8 pb-4 bg-[#061723] ">
      <h2 className="font-bold text-[32px] py-6 text-white text-center lg:text-left ">
        Opportunities
      </h2>
      <div className="flex w-full justify-between text-white gap-8 flex-col lg:flex-row">
        <div className="pt-16 bg-[url(/assets/images/hackerimg.webp)] bg-center rounded-2xl p-8 hover:cursor-pointer hover:scale-105 transition-all duration-300 xl:w-1/2 w-full">
          <h2 className="text-[32px] font-medium">Hackers</h2>
          <p className="sm:text-[16px] xl:w-[45%] w-[85%] font-[200] text-[12px]">
            Bug bounty platforms offer several opportunities for hackers
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
        <div className="pt-16 bg-[url(/assets/images/hackerimg.webp)] bg-center rounded-2xl p-8 hover:cursor-pointer hover:scale-105 transition-all duration-300 xl:w-1/2 w-full">
          <h2 className="text-[32px] font-medium">Company</h2>
          <p className="sm:text-[16px] xl:w-[45%] w-[85%] font-[200] text-[12px]">
            Bug bounty platforms offer several opportunities for companies
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
      </div>
    </section>
  );
}
