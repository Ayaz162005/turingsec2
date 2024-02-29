import { useNavigate, useParams } from "react-router";
import LevelBar from "../../components/component/LevelBar";

import { Button } from "../../components/ui/button";
import { useGetCompanyById } from "../../queryies/useGetCompanyById";
import { useGetProgramById } from "../../queryies/useGetProgramById";

export default function ProgramOnePage() {
  const { programId } = useParams();
  const {
    data: programData,
    isPending: programPending,
    isError: programError,
  } = useGetProgramById(programId);
  console.log(programData);
  const { data, isPending, isError } = useGetCompanyById(
    programData?.companyId
  );
  const navigate = useNavigate();
  return (
    <div className="text-white flex-1 flex flex-col overflow-hidden relative">
      <div className="bg-[url('/assets/images/programimage.jpeg')] h-[100px]  bg-center bg-cover  relative w-full">
        <div className="h-full w-full bg-black opacity-60"></div>
      </div>
      <div className="bg-[#1E1E1E] lg:px-20 sm:px-8 px-3  pb-16 flex-1 z-[400] ">
        <div className="lg:flex my-4  gap-6 relative hidden mb-16">
          <div className="hexagon5 mt-3  min-w-[60px]">
            <img src="/assets/images/programimage2.jpg" alt="" className="" />
          </div>
          <div className="xl:w-[60%] w-full">
            <h2 className="sm:text-[18px] text-[16px] font-[600]">
              {data?.first_name + " " + data?.last_name}
            </h2>
            <p className="sm:text-[18px] text-[16px] font-[600]">
              Business title
            </p>
            <a href="http://www.program.com/" className="text-[#5BA2F8]">
              http://www.program.com/
            </a>
            <div className="flex justify-between gap-2 flex-wrap">
              <div>
                <p className="sm:text-[18px] text-[16px] font-[600]">
                  Reports Resolved
                </p>
                <p className="sm:text-[18px] text-[16px] font-[600]">12</p>
              </div>
              <div>
                <p className="sm:text-[18px] text-[16px] font-[600]">
                  Reports Resolved
                </p>
                <p className="sm:text-[18px] text-[16px] font-[600]">12</p>
              </div>
              <div>
                <p className="sm:text-[18px] text-[16px] font-[600]">
                  Reports Resolved
                </p>
                <p className="sm:text-[18px] text-[16px] font-[600]">12</p>
              </div>
            </div>
          </div>{" "}
          <div className="flex-1 ">
            <Button
              className="hover:scale-105 transition-all duration-300 rounded-3xl  py-[7px]  bg-[#2451F5] text-white  border-2 border-[#2451F5] font-[600] hover:bg-[#2451F5] flex gap-4 px-4 w-[160px] ml-auto"
              onClick={() => navigate("submit")}
            >
              <p>Submit Report</p>
              <img src="/assets/sendbutton.svg" alt="" className="  " />
            </Button>
          </div>
        </div>
        <div className="flex my-4  gap-6 relative lg:hidden flex-col mb-16">
          <div className="flex gap-6">
            <div className="hexagon5 mt-3  min-w-[60px]">
              <img src="/assets/images/programimage2.jpg" alt="" className="" />
            </div>
            <div className="xl:w-[60%] w-full">
              <h2 className="sm:text-[18px] text-[16px] font-[600]">
                {data?.first_name + " " + data?.last_name}
              </h2>
              <p className="sm:text-[18px] text-[16px] font-[600]">
                Business title
              </p>
              <a href="http://www.program.com/" className="text-[#5BA2F8]">
                http://www.program.com/
              </a>
              <div className="flex justify-between gap-2 flex-wrap"></div>
            </div>
          </div>
          <div className="flex justify-between gap-2 flex-wrap lg:hidden">
            <div>
              <p className="sm:text-[18px] text-[16px] font-[600]">
                Reports Resolved
              </p>
              <p className="sm:text-[18px] text-[16px] font-[600]">12</p>
            </div>
            <div>
              <p className="sm:text-[18px] text-[16px] font-[600]">
                Reports Resolved
              </p>
              <p className="sm:text-[18px] text-[16px] font-[600]">12</p>
            </div>
            <div>
              <p className="sm:text-[18px] text-[16px] font-[600]">
                Reports Resolved
              </p>
              <p className="sm:text-[18px] text-[16px] font-[600]">12</p>
            </div>
          </div>
          <div className="flex-1 ">
            <Button
              className="hover:scale-105 transition-all duration-300 rounded-3xl  py-[7px]  bg-[#2451F5] text-white  border-2 border-[#2451F5] font-[600] hover:bg-[#2451F5] flex gap-4 px-4 w-[160px] ml-auto"
              onClick={() => navigate("submit")}
            >
              <p>Submit Report</p>
              <img src="/assets/sendbutton.svg" alt="" className="  " />
            </Button>
          </div>
        </div>
        <div>
          <div className="rounded-2xl overflow-hidden">
            <div className="bg-[#001D34] h-[70px] flex items-center px-8 justify-between">
              <div className="flex items-center gap-4">
                <img src="/assets/images/increase.png" alt="" />
                <p className="text-[#FFEC86]">Active Campaign</p>
              </div>
              <div className="flex items-center gap-4">
                <p className="hidden sm:block">Ends in 15 days</p>
                <img src="/assets/images/info.png" alt="" />
              </div>
            </div>
            <div className="bg-[#0A273D] px-6 pt-6 pb-10">
              <h2 className="sm:text-[18px] text-[16px] font-[600]">
                Assets eligible:All in-scope assets
              </h2>
              <div className="my-8 flex justify-between flex-col xl:flex-row">
                <LevelBar color="yellow-500" level={60} label="Low" />
                <LevelBar color="blue-500" level={60} label="Medium" />
                <LevelBar color="orange-400" level={60} label="High" />
                <LevelBar color="red-500" level={60} label="Critical" />
              </div>

              <p className="sm:text-[16px] text-[14px] font-[400]">
                "
                {
                  <span className="font-[700]">
                    Hello hackers!
                    <br />
                  </span>
                }
                We're excited to announce the launch of our campaign starting on
                February 17th. All the necessary details can be found on our
                policy page. We eagerly await your reports and appreciate your
                efforts in making our platform safer for our customers.
                Additionally, we're offering extra bonuses for vulnerabilities
                found specifically in our AI instance named Penny, but please
                note that these bonuses are only available for individuals based
                in the US.
                {
                  <span className="font-[700]">
                    <br />
                    Happy hacking!
                  </span>
                }
                "
              </p>
            </div>
          </div>
        </div>
        <h2 className="my-[10px] sm:text-[20px] text-[16px] w-[600]">Reward</h2>
        <div className="rounded-2xl overflow-hidden">
          <div className="bg-[#001D34] h-[70px] items-center px-8 flex ">
            <div className="my-8 flex justify-between flex-1">
              <LevelBar color="#FFDE31" level={60} label="Low" />
              <LevelBar color="#2342E3" level={60} label="Medium" />
              <LevelBar color="#5AFF31" level={60} label="High" />
              <LevelBar color="#E32323" level={60} label="Critical" />
            </div>
          </div>
          <div className="bg-[#0A273D] px-8 border-b border-black py-4">
            <div className="flex items-center justify-between">
              <div className="flex-1 text-center">
                <p>admin.rezserver.com</p>
                <p>$100-$150</p>
              </div>
              <p className="flex-1 text-center">$100-$150</p>
              <p className="flex-1 text-center">$100-$150</p>
              <p className="flex-1 text-center">$100-$150</p>
            </div>
          </div>
          <div className="bg-[#0A273D] px-8 border-b border-black py-4">
            <div className="flex items-center justify-between">
              <div className="flex-1 text-center">
                <p>admin.rezserver.com</p>
                <p>$100-$150</p>
              </div>
              <p className="flex-1 text-center">$100-$150</p>
              <p className="flex-1 text-center">$100-$150</p>
              <p className="flex-1 text-center">$100-$150</p>
            </div>
          </div>
          <div className="bg-[#0A273D] px-8  py-4">
            <div className="flex items-center justify-between">
              <div className="flex-1 text-center">
                <p>admin.rezserver.com</p>
                <p>$100-$150</p>
              </div>
              <p className="flex-1 text-center">$100-$150</p>
              <p className="flex-1 text-center">$100-$150</p>
              <p className="flex-1 text-center">$100-$150</p>
            </div>
          </div>
        </div>
        <h2 className="my-[10px] sm:text-[20px] text-[16px] w-[600]">Policy</h2>
        <div className="bg-[#0A273D] h-[365px] rounded-xl p-4">
          {" "}
          Information
        </div>
      </div>
    </div>
  );
}
