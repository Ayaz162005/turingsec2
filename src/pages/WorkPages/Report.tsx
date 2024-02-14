import TabContentAll from "../../components/shared/WorkerShared/TabContentAll";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

export default function Report() {
  return (
    <div className="text-white flex-1 flex flex-col overflow-hidden relative">
      <section className="   font-[800] bg-[#1F44CC] h-[124px] flex items-center justify-center overflow-hidden ">
        <img
          src="/assets/iconnav1.svg"
          alt=""
          className="absolute z-[20] lg:-left-[10%] md:-left-[24%] sm:-left-[50px] top-0 w-[294px] md:w-[392px] -left-[80px]  "
        />
        <p className="md:text-[30px] text-[20px]"> Reports</p>
        <img
          src="/assets/iconnav2.svg"
          alt=""
          className="absolute z-[20] md:-right-[0] top-0 sm:-right-[10%] -right-[20%]   overflow-hidden w-[204px] md:w-[242px]"
        />
      </section>

      <div className="bg-[#1E1E1E] flex-1 lg:px-20 px-8 py-16">
        <Tabs defaultValue="account" className=" xl:w-[80%] w-[100%]">
          <TabsList className="flex bg-[#2451F5] h-[50px] px-0 rounded-2xl lg:pr-[20%] pr-0">
            <TabsTrigger
              value="All"
              className="bg-transparent sm:text-[18px] text-[16px] font-[600]
              data-[state=active]:bg-[#FFDE31]
              data-[state=active]:rounded-2xl
              flex-1
              h-[50px]
              
              "
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="New"
              className="bg-transparent sm:text-[18px] text-[16px] font-[600]
              data-[state=active]:bg-[#FFDE31]
              data-[state=active]:rounded-2xl
              flex-1
              h-[50px]
              
              "
            >
              New
            </TabsTrigger>
            <TabsTrigger
              value="Closed"
              className="bg-transparent sm:text-[18px] text-[16px] font-[600]
              data-[state=active]:bg-[#FFDE31]
              data-[state=active]:rounded-2xl
              flex-1
              h-[50px]
              
              "
            >
              Closed
            </TabsTrigger>
            <TabsTrigger
              value="Accepted"
              className="bg-transparent sm:text-[18px] text-[16px] font-[600]
              data-[state=active]:bg-[#FFDE31]
              data-[state=active]:rounded-2xl
              flex-1
              h-[50px]
              
              "
            >
              Accepted
            </TabsTrigger>
          </TabsList>
          <TabsContent value="All">
            <TabContentAll />
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
