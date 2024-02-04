import Select from "react-select";
import RankingLine from "../../components/component/Worker/RankingLine";
import HactivityLine from "../../components/component/Worker/HactivityLine";
export default function Hactivity() {
  const fakeData = [
    {
      bugtag: "Tag name",
      huntername: "Username",
      date: "Fri.26 Jan 2024",
      country: "az",
      status: "New",
    },
    {
      bugtag: "Tag name",
      huntername: "Username",
      date: "Fri.26 Jan 2024",
      country: "az",
      status: "New",
    },
    {
      bugtag: "Tag name",
      huntername: "Username",
      date: "Fri.26 Jan 2024",
      country: "az",
      status: "New",
    },
    {
      bugtag: "Tag name",
      huntername: "Username",
      date: "Fri.26 Jan 2024",
      country: "az",
      status: "New",
    },
    {
      bugtag: "Tag name",
      huntername: "Username",
      date: "Fri.26 Jan 2024",
      country: "az",
      status: "New",
    },
    {
      bugtag: "Tag name",
      huntername: "Username",
      date: "Fri.26 Jan 2024",
      country: "az",
      status: "New",
    },
    {
      bugtag: "Tag name",
      huntername: "Username",
      date: "Fri.26 Jan 2024",
      country: "az",
      status: "Resolve",
    },
    {
      bugtag: "Tag name",
      huntername: "Username",
      date: "Fri.26 Jan 2024",
      country: "az",
      status: "New",
    },
    {
      bugtag: "Tag name",
      huntername: "Username",
      date: "Fri.26 Jan 2024",
      country: "az",
      status: "Accepted",
    },
    {
      bugtag: "Tag name",
      huntername: "Username",
      date: "Fri.26 Jan 2024",
      country: "az",
      status: "New",
    },
    {
      bugtag: "Tag name",
      huntername: "Username",
      date: "Fri.26 Jan 2024",
      country: "az",
      status: "Accepted",
    },
  ];
  return (
    <div className="text-white flex-1 flex flex-col overflow-hidden min-h-screen">
      <section className="   font-[800] bg-[#1F44CC] h-[124px] flex items-center justify-center overflow-hidden ">
        <img
          src="/assets/iconnav7.svg"
          alt=""
          className="absolute z-[20] lg:left-[17%] md:left-[13%] sm:-left-[50px] top-0 w-[294px] md:w-[302px] -left-[80px]  "
        />
        <p className="md:text-[30px] text-[20px]">Hactivity</p>
        <img
          src="/assets/iconnav8.svg"
          alt=""
          className="absolute z-[20] md:-right-[0] top-0 sm:-right-[10%] -right-[20%]   overflow-hidden w-[204px] md:w-[242px]"
        />
      </section>
      <div className=" bg-[#1F44CC]  w-full absolute top-0 left-0 h-[30px] text-white"></div>

      <div className="bg-[#1E1E1E] flex-1 lg:px-20 px-8 py-16">
        <div className="mt-8 rounded-[20px] overflow-hidden">
          {fakeData.map((data, i) => (
            <HactivityLine data={data} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
