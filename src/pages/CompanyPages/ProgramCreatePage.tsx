import React from "react";
import LevelBar from "../../components/component/LevelBar";

import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import { cn } from "../../lib/utils";
import { format } from "date-fns";
import { Calendar } from "../../components/ui/calendar";
import { Textarea } from "../../components/ui/textarea";

export default function ProgramCreatePage() {
  const [fromdate, setFromDate] = React.useState<Date>();
  const [todate, setToDate] = React.useState<Date>();
  const [page, setPage] = React.useState(1);
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
              Bug Bounty Program name
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
          <div className="flex-1 flex justify-end">
            <button className="bg-[#1F44CC] rounded-full w-[40px] h-[40px] p-[5px] ">
              <img src="/assets/pen.svg" alt="edit" />
            </button>
          </div>
        </div>
        <div className="flex my-4  sm:gap-6 gap-2 relative lg:hidden flex-col sm:mb-16 mb-4">
          <div className="flex gap-6">
            <div className="hexagon5 mt-3  min-w-[60px]">
              <img src="/assets/images/programimage2.jpg" alt="" className="" />
            </div>
            <div className="xl:w-[60%] w-full">
              <h2 className="sm:text-[18px] text-[16px] font-[600]">
                Bug Bounty Program name
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
          <div className="flex-1 flex justify-end">
            <button className="bg-[#1F44CC] rounded-full  p-[5px]  ">
              <img src="/assets/pen.svg" alt="edit" />
            </button>
          </div>
        </div>
        <div>
          <div className="rounded-2xl overflow-hidden">
            <div className="bg-[#001D34] h-[70px] flex items-center px-8 justify-between">
              <div className="flex items-center gap-4">
                <img src="/assets/images/increase.png" alt="" />
                <p className="text-[#FFEC86]">Active Campaign</p>
              </div>
            </div>
            <div className="bg-[#0A273D] px-6 pt-6 pb-10">
              <div className="flex justify-between lg:mt-4 mb-4  xl:w-[70%] flex-col  lg:flex-row">
                <div className="flex items-center gap-4 mb-4 lg:mb-0">
                  <p className="sm:text-[18px] text-[16px] font-[600]">
                    Time spend
                  </p>
                  <img src="/assets/images/info.png" alt="" />
                </div>
                <div className="flex gap-4 flex-col lg:flex-row">
                  <div className="flex flex-col relative">
                    <Label className="mb-2 lg:absolute static -top-5">
                      From
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "rounded-3xl w-[200px] text-[16px] font-[600] lg:w-auto bg-[#2451F5] hover:bg-[#2451F5] justify-start text-left border-0 hover:text-white ",
                            !fromdate && "text-muted-foreground"
                          )}
                        >
                          {fromdate ? (
                            format(fromdate, "PPP")
                          ) : (
                            <span className="text-white">YYYY-MM-DD</span>
                          )}
                          <img
                            src="/assets/calendar.svg"
                            alt=""
                            className="ml-6 mr-4"
                          />
                          {/* <CalendarIcon className="mr-2 h-4 w-4" /> */}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 dark">
                        <Calendar
                          mode="single"
                          selected={fromdate}
                          onSelect={setFromDate}
                          initialFocus
                          className=""
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="flex flex-col relative">
                    <Label className="mb-2 lg:absolute -top-5 static">To</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "rounded-3xl w-[200px] text-[16px] font-[600] lg:w-auto bg-[#2451F5] hover:bg-[#2451F5] justify-start text-left border-0 hover:text-white ",
                            !todate && "text-muted-foreground"
                          )}
                        >
                          {todate ? (
                            format(todate, "PPP")
                          ) : (
                            <span className="text-white">YYYY-MM-DD</span>
                          )}
                          <img
                            src="/assets/calendar.svg"
                            alt=""
                            className="ml-6 mr-4"
                          />
                          {/* <CalendarIcon className="mr-2 h-4 w-4" /> */}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 dark">
                        <Calendar
                          mode="single"
                          selected={todate}
                          onSelect={setToDate}
                          initialFocus
                          className=""
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </div>
              <h2 className="sm:text-[18px] text-[16px] font-[600]">
                Assets eligible:All in-scope assets
              </h2>
              <div className="my-8 flex justify-between flex-col xl:flex-row">
                <LevelBar color="#FFDE31" level={60} label="Low" />
                <LevelBar color="#2342E3" level={60} label="Medium" />
                <LevelBar color="#5AFF31" level={60} label="High" />
                <LevelBar color="#E32323" level={60} label="Critical" />
              </div>

              <Textarea className="bg-transparent hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 border-2 border-[#2451F5] h-[160px] rounded-2xl" />
              <Button className="hover:scale-105 transition-all mt-4 duration-300 rounded-xl  py-[9px]  bg-transparent text-white  border-2 border-[#2451F5] font-[600] hover:bg-transparent flex gap-4 px-4 w-[120px] ml-auto">
                Done
              </Button>
            </div>
          </div>
        </div>
        <h2 className="my-[10px] sm:text-[20px] text-[16px] w-[600]">Reward</h2>
        <div className="rounded-2xl overflow-hidden">
          <div className="bg-[#001D34] h-[70px] items-center px-8 flex ">
            <div className="my-8 flex justify-between flex-1">
              {/* <LevelBar color="#FFDE31" level={60} label="Low" />
              <LevelBar color="#2342E3" level={60} label="Medium" />
              <LevelBar color="#5AFF31" level={60} label="High" />
              <LevelBar color="#E32323" level={60} label="Critical" /> */}
              <p className="flex-1 text-center">Level</p>
              <p className="flex-1 text-center">Asset Type</p>
              <p className="flex-1 text-center">Price</p>
            </div>
          </div>
          <div className="bg-[#0A273D] px-8 border-b border-black py-4">
            <div className="flex items-center justify-between">
              <div className="flex-1 flex justify-between">
                <LevelBar
                  color="#FFDE31"
                  level={60}
                  label="Low"
                  className="flex-1 justify-center"
                />
                <div className="flex-1 text-center">
                  <p className="sm:text-[18px] text-[16px] font-[600]">
                    admin.rezserver.com
                  </p>
                  <p className="sm:text-[18px] text-[16px] font-[600]">
                    admin.rezserver.com
                  </p>
                </div>
                <div className="flex-1 text-center">
                  <p className="sm:text-[18px] text-[16px] font-[600]">
                    $100-$150
                  </p>
                  <p className="sm:text-[18px] text-[16px] font-[600]">
                    $200-$350
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#0A273D] px-8 border-b border-black py-4">
            <div className="flex items-center justify-between">
              <div className="flex-1 flex justify-between">
                <LevelBar
                  color="#2342E3"
                  level={60}
                  label="Medium"
                  className="flex-1 justify-center"
                />
                <div className="flex-1 text-center">
                  <p className="sm:text-[18px] text-[16px] font-[600]">
                    admin.rezserver.com
                  </p>
                  <p className="sm:text-[18px] text-[16px] font-[600]">
                    admin.rezserver.com
                  </p>
                </div>
                <div className="flex-1 text-center">
                  <p className="sm:text-[18px] text-[16px] font-[600]">
                    $100-$150
                  </p>
                  <p className="sm:text-[18px] text-[16px] font-[600]">
                    $200-$350
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#0A273D] px-8 border-b border-black py-4">
            <div className="flex items-center justify-between">
              <div className="flex-1 flex justify-between">
                <LevelBar
                  color="#5AFF31"
                  level={60}
                  label="High"
                  className="flex-1 justify-center"
                />
                <div className="flex-1 text-center">
                  <p className="sm:text-[18px] text-[16px] font-[600]">
                    admin.rezserver.com
                  </p>
                  <p className="sm:text-[18px] text-[16px] font-[600]">
                    admin.rezserver.com
                  </p>
                </div>
                <div className="flex-1 text-center">
                  <p className="sm:text-[18px] text-[16px] font-[600]">
                    $100-$150
                  </p>
                  <p className="sm:text-[18px] text-[16px] font-[600]">
                    $200-$350
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#0A273D] px-8 border-b border-black py-4">
            <div className="flex items-center justify-between">
              <div className="flex-1 flex justify-between">
                <LevelBar
                  color="#E32323"
                  level={60}
                  label="Critical"
                  className="flex-1 justify-center"
                />
                <div className="flex-1 text-center">
                  <p className="sm:text-[18px] text-[16px] font-[600]">
                    admin.rezserver.com
                  </p>
                  <p className="sm:text-[18px] text-[16px] font-[600]">
                    admin.rezserver.com
                  </p>
                </div>
                <div className="flex-1 text-center">
                  <p className="sm:text-[18px] text-[16px] font-[600]">
                    $100-$150
                  </p>
                  <p className="sm:text-[18px] text-[16px] font-[600]">
                    $200-$350
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button className="hover:scale-105 transition-all mt-4 duration-300 rounded-xl  py-[9px]  bg-transparent text-white  border-2 border-[#2451F5] font-[600] hover:bg-transparent flex gap-4 px-4 w-[120px] ml-auto">
          Done
        </Button>
        <h2 className="my-[10px] sm:text-[20px] text-[16px] w-[600]">Policy</h2>
        <div className="bg-[#0A273D] p-8 rounded-xl">
          <Textarea className="bg-transparent hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 border-2 border-[#2451F5] h-[160px] rounded-2xl" />
          <Button className="hover:scale-105 transition-all mt-4 duration-300 rounded-xl  py-[9px]  bg-transparent text-white  border-2 border-[#2451F5] font-[600] hover:bg-transparent flex gap-4 px-4 w-[120px] ml-auto">
            Done
          </Button>
        </div>
      </div>
    </div>
  );
}