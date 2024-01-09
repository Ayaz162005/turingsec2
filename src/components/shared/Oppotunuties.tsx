import { Button } from "../ui/button";

export default function Oppotunuties() {
  return (
    <section className="px-16 pb-4">
      <h2 className="font-bold text-[32px] my-6">Opportunities</h2>
      <div className="flex w-full justify-between text-white gap-8 flex-col lg:flex-row">
        <div className="pt-16 bg-[url(/assets/images/hackerimg.webp)] bg-center rounded-2xl p-8 hover:cursor-pointer hover:scale-105 transition-all duration-300">
          <h2 className="text-[32px] font-medium">Hackers</h2>
          <p className="text-[16px] xl:w-[65%] w-[80%] ">
            inform ationf ormation informat ioninform ation inform ation
            informat ioninforma tion inform ationin form
          </p>
          <Button
            className="bg-white hover:bg-slate-white
            text-black mt-4 rounded-xl hover:scale-105 transition-all duration-300"
          >
            Get more information
          </Button>
        </div>
        <div className="pt-16 bg-[url(/assets/images/hackerimg.webp)] bg-center rounded-2xl p-8 hover:cursor-pointer hover:scale-105 transition-all duration-300">
          <h2 className="text-[32px] font-medium">Company</h2>
          <p className="text-[16px] xl:w-[65%] w-[80%] ">
            inform ationf ormation informat ioninform ation inform ation
            informat ioninforma tion inform ationin form
          </p>
          <Button
            className="bg-white hover:bg-slate-white
            text-black mt-4 rounded-xl hover:scale-105 transition-all duration-300"
          >
            Get more information
          </Button>
        </div>
      </div>
    </section>
  );
}
