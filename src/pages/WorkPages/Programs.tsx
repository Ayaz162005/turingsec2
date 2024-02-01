import Box from "../../components/component/Worker/Box";

export default function Programs() {
  return (
    <div className="text-white flex-1 flex flex-col overflow-hidden ">
      <section className="   font-[800] bg-[#1F44CC] h-[124px] flex items-center justify-center overflow-hidden ">
        <img
          src="/assets/iconnav3.svg"
          alt=""
          className="absolute z-[20] lg:left-[17%] md:left-[13%] sm:-left-[50px] top-0 w-[294px] md:w-[302px] -left-[80px]  "
        />
        <p className="md:text-[30px] text-[20px]"> DASHBOARD</p>
        <img
          src="/assets/iconnav4.svg"
          alt=""
          className="absolute z-[20] md:-right-[0] top-0 sm:-right-[10%] -right-[20%]   overflow-hidden w-[204px] md:w-[242px]"
        />
      </section>
      <div className=" bg-[#1F44CC]  w-full absolute top-0 left-0 h-[30px]">
        ssdd
      </div>

      <div className="bg-[#1E1E1E] flex-1 lg:px-20 px-8 py-16">
        <h1 className="font-[600] text-[25px] mb-2">No Reports Found</h1>
        <p className="text-[20px] font-[400]">
          Discover the programs and start hunting to report your first
          vulnerability
        </p>
        <div className="my-8 grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:w-[60%] w-full ">
          <Box text="Max Bounty" />
          <Box text="Total Bounty" />
          <Box text="Average Bounty" />
          <Box text="Submitted Bounty" />
          <Box text="Collaborated Bounty" />
          <Box text="Closed Bounty" />
        </div>
        <div className="my-8 grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:grid-rows-[215px] md:grid-rows-[215px,215px] grid-rows-[215px,215px,215px]">
          <Box text="Report Bounty" />
          <Box text="Accepted invitations for Bug Bounty" />
          <Box text="Accepted invitations for Bug Bounty" />
        </div>
      </div>
    </div>
  );
}
