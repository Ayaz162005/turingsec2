import Select from "react-select";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import Line from "../../components/shared/WorkerShared/Line";
import RadioInput from "../../components/component/RadioInput";
import { Textarea } from "../../components/ui/textarea";
import { useGetProgramById } from "../../queryies/useGetProgramById";
import { useParams } from "react-router";
import { useGetCompanyById } from "../../queryies/useGetCompanyById";
import { useEffect, useState } from "react";
import { useSendReport } from "../../queryies/useSendReport";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import WeaknessLine from "../../components/component/WeaknessLine";

export default function ProgramSubmitPage() {
  const { programId } = useParams();
  const [methodName, setMethodName] = useState<string>("");
  const [proofConceptTitle, setProofConceptTitle] = useState<string>("");
  const [proofConceptDescription, setProofConceptDescription] =
    useState<string>("");
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    data: programData,
    isPending: programPending,
    isError: programError,
  } = useGetProgramById(programId);
  console.log(programData);
  const { data, isPending, isError } = useGetCompanyById(
    programData?.companyId
  );
  const fakeDATA = [
    {
      label: "Max Bounty",
      value: 1000,
    },
    {
      label: "Total Bounty",
      value: 1000,
    },
    {
      label: "Average Bounty",
      value: 1000,
    },
    {
      label: "Submitted Bounty",
      value: 1000,
    },
    {
      label: "Collaborated Bounty",
      value: 1000,
    },
    {
      label: "Closed Bounty",
      value: 1000,
    },
  ];
  const [allAssets, setAllAssets] = useState<string[]>([]);

  useEffect(() => {
    if (programData) {
      const assets = programData?.assetTypes?.map((item) => item.assetType);
      setAllAssets(assets);
    }
  }, [programData]);

  const mutation = useSendReport();
  async function submitReport() {
    try {
      if (!searchParams.get("line")) {
        return toast.error("Asset is required");
      }
      if (!searchParams.get("weaknessLine")) {
        return toast.error("Weakness is required");
      }
      if (!methodName) {
        return toast.error("Method name is required");
      }
      if (!proofConceptTitle) {
        return toast.error("Proof of concept title is required");
      }
      if (!proofConceptDescription) {
        return toast.error("Proof of concept description is required");
      }

      const response = await mutation.mutateAsync({
        asset: searchParams.get("line")!,
        weakness: searchParams.get("line")!,
        severity: "severity",
        methodName: methodName,
        proofOfConcept: proofConceptTitle,
        discoveryDetails: proofConceptDescription,
      });
      console.log(response);
      // Check if mutation was successful
      if (!response) {
        throw new Error("Wrong response");
      }

      toast.success("Report submitted successfully");
      setTimeout(() => {
        window.location.href = "/work/dashboard";
      }, 1000);
    } catch (err) {
      console.log(err);
      toast.error("Report submission failed");
    }
  }
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
            <h2 className="sm:text-[18px] text-[16px] font-[600]">{}</h2>
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
          <div className="flex-1 flex items-center gap-2 justify-end ml-4">
            <img
              src="/assets/images/starempty.png"
              alt="star"
              className="cursor-pointer"
            />
            <p>Bookmarks</p>
          </div>
        </div>
        <div className="flex my-4  gap-6 relative lg:hidden flex-col sm:mb-16 mb-4">
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
          <div className="flex-1 flex items-center gap-2 justify-end">
            <img
              src="/assets/images/starempty.png"
              alt="star"
              className="cursor-pointer"
            />
            <p>Bookmarks</p>
          </div>
        </div>
        <div className="flex sm:gap-8 flex-col sm:flex-row gap-4  ">
          <div className=" h-[30px] w-[30px] flex items-center justify-center hexagon6 !bg-[#2451F5]">
            1
          </div>
          <div className=" rounded-xl overflow-hidden  flex-1">
            <div className="sm:text-[18px] text-[16px] font-[600] bg-[#001D34] h-[60px] flex items-center px-8">
              Asset
            </div>
            <div className="bg-[#0A273D] py-8 sm:px-8 px-4">
              <div className="flex items-center gap-4 flex-col lg:flex-row">
                <div className="lg:w-[60%] w-full">
                  <Label className="flex  bg-[#2451F5] rounded-2xl px-4 w-full">
                    <img src="/assets/search.svg" alt="" />
                    <Input
                      type="text"
                      placeholder="Search"
                      className="bg-transparent text-white rounded-2xl focus:outline-none focus-visible:ring-0 border-none focus-visible:ring-offset-0 placeholder:text-white py-6"
                    />
                    <img
                      src="/assets/x.svg"
                      alt=""
                      className="cursor-pointer"
                    />
                  </Label>
                </div>
                <div className="lg:-[40%] w-full">
                  <Select
                    styles={{
                      control: (provided, state) => ({
                        ...provided,
                        backgroundColor: "#2451F5",
                        border: "none",
                        color: "white",
                        borderRadius: "20px",

                        width: "100%",
                        height: "50px",
                        padding: "0 10px",
                        "&:hover": {
                          borderColor: "none",
                        },
                      }),
                      option: (provided, state) => ({
                        ...provided,
                        backgroundColor: state.isFocused
                          ? "#2451F5"
                          : "#2451F5",
                        ":hover": { backgroundColor: "rgb(14 165 233)" },
                        color: state.isFocused ? "white" : "white",
                      }),
                      menuList: (provided, state) => ({
                        ...provided,
                        backgroundColor: "#2451F5",
                        color: "white",
                        padding: "0",
                      }),
                      placeholder: (provided) => ({
                        ...provided,
                        color: "white",
                      }),
                      singleValue: (provided, state) => {
                        const color = "white";
                        return { ...provided, color };
                      },
                    }}
                    options={fakeDATA}
                    isSearchable={false}
                    isClearable={true}
                    placeholder=" Period"
                  />
                </div>
              </div>
              <div className="overflow-y-scroll mt-4 bluescroll max-h-[280px]">
                {allAssets?.map((item: string) => (
                  <Line text={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex sm:gap-8 flex-col sm:flex-row gap-4 mt-4">
          <div className=" h-[30px] w-[30px] flex items-center justify-center hexagon6 !bg-[#2451F5]">
            2
          </div>
          <div className=" rounded-xl   flex-1">
            <div className="sm:text-[18px] text-[16px] font-[600] bg-[#001D34] h-[60px] flex items-center px-8">
              Report template
            </div>
            <div className="bg-[#0A273D] py-8 sm:px-8 px-4">
              <div className="flex items-center gap-4 flex-col lg:flex-row">
                <div className=" w-full">
                  <Select
                    styles={{
                      control: (provided, state) => ({
                        ...provided,
                        backgroundColor: "#2451F5",
                        border: "none",
                        color: "white",
                        borderRadius: "20px",

                        width: "100%",
                        height: "50px",
                        padding: "0 10px",
                        "&:hover": {
                          borderColor: "none",
                        },
                      }),
                      option: (provided, state) => ({
                        ...provided,
                        backgroundColor: state.isFocused
                          ? "#2451F5"
                          : "#2451F5",
                        ":hover": { backgroundColor: "rgb(14 165 233)" },
                        color: state.isFocused ? "white" : "white",
                      }),
                      menuList: (provided, state) => ({
                        ...provided,
                        backgroundColor: "#2451F5",
                        color: "white",
                        padding: "0",
                      }),
                      placeholder: (provided) => ({
                        ...provided,
                        color: "white",
                      }),
                      singleValue: (provided, state) => {
                        const color = "white";
                        return { ...provided, color };
                      },
                    }}
                    options={fakeDATA}
                    isSearchable={false}
                    isClearable={true}
                    placeholder=" Period"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex sm:gap-8 flex-col sm:flex-row gap-4 mt-4">
          <div className=" h-[30px] w-[30px] flex items-center justify-center hexagon6 !bg-[#2451F5]">
            3
          </div>
          <div className=" rounded-xl overflow-hidden  flex-1">
            <div className="sm:text-[18px] text-[16px] font-[600] bg-[#001D34] h-[60px] flex items-center px-8">
              Weakness
            </div>
            <div className="bg-[#0A273D] py-8 sm:px-8 px-4">
              <div className="flex items-center gap-4 flex-col lg:flex-row">
                <div className="lg:w-[60%] w-full">
                  <Label className="flex  bg-[#2451F5] rounded-2xl px-4 w-full">
                    <img src="/assets/search.svg" alt="" />
                    <Input
                      type="text"
                      placeholder="Search"
                      className="bg-transparent text-white rounded-2xl focus:outline-none focus-visible:ring-0 border-none focus-visible:ring-offset-0 placeholder:text-white py-6"
                    />
                    <img
                      src="/assets/x.svg"
                      alt=""
                      className="cursor-pointer"
                    />
                  </Label>
                </div>
                <div className="lg:-[40%] w-full">
                  <Select
                    styles={{
                      control: (provided, state) => ({
                        ...provided,
                        backgroundColor: "#2451F5",
                        border: "none",
                        color: "white",
                        borderRadius: "20px",

                        width: "100%",
                        height: "50px",
                        padding: "0 10px",
                        "&:hover": {
                          borderColor: "none",
                        },
                      }),
                      option: (provided, state) => ({
                        ...provided,
                        backgroundColor: state.isFocused
                          ? "#2451F5"
                          : "#2451F5",
                        ":hover": { backgroundColor: "rgb(14 165 233)" },
                        color: state.isFocused ? "white" : "white",
                      }),
                      menuList: (provided, state) => ({
                        ...provided,
                        backgroundColor: "#2451F5",
                        color: "white",
                        padding: "0",
                      }),
                      placeholder: (provided) => ({
                        ...provided,
                        color: "white",
                      }),
                      singleValue: (provided, state) => {
                        const color = "white";
                        return { ...provided, color };
                      },
                    }}
                    options={fakeDATA}
                    isSearchable={false}
                    isClearable={true}
                    placeholder=" Period"
                  />
                </div>
              </div>
              <div className="overflow-y-scroll mt-4 bluescroll h-[280px]">
                <WeaknessLine text="SQL Injection" />
                <WeaknessLine text="XSS" />
                <WeaknessLine text="CSRF" />
                <WeaknessLine text="XSS" />
                <WeaknessLine text="XXE" />
                <WeaknessLine text="RCE" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex sm:gap-8 mt-4 flex-col sm:flex-row gap-4">
          <div className=" h-[30px] w-[30px] flex items-center justify-center hexagon6 !bg-[#2451F5]">
            4
          </div>
          <div className=" rounded-xl overflow-hidden  flex-1">
            <div className="sm:text-[18px] text-[16px] font-[600] bg-[#001D34] h-[60px] flex items-center px-8">
              Severity
            </div>
            <div className="bg-[#0A273D] py-8 sm:px-8 px-4">
              <div className="flex justify-between lg:items-center mb-4 xl:w-[70%] w-full flex-col lg:flex-row gap-4 ">
                <RadioInput
                  name="test1"
                  value="test1"
                  id="test1"
                  label="Submit report without severity"
                />
                <RadioInput
                  name="test1"
                  value="test2"
                  id="test2"
                  label="Submit report with severity"
                  checked={true}
                />
              </div>
              <div className=" items-center gap-4">
                <h2 className="sm:text-[18px] text-[16px] font-[600] mb-2">
                  Severity calculation method
                </h2>
                <Select
                  styles={{
                    control: (provided, state) => ({
                      ...provided,
                      backgroundColor: "#2451F5",
                      border: "none",
                      color: "white",
                      borderRadius: "20px",

                      width: "100%",
                      height: "50px",
                      padding: "0 10px",
                      "&:hover": {
                        borderColor: "none",
                      },
                    }),
                    option: (provided, state) => ({
                      ...provided,
                      backgroundColor: state.isFocused ? "#2451F5" : "#2451F5",
                      ":hover": { backgroundColor: "rgb(14 165 233)" },
                      color: state.isFocused ? "white" : "white",
                    }),
                    menuList: (provided, state) => ({
                      ...provided,
                      backgroundColor: "#2451F5",
                      color: "white",
                      padding: "0",
                    }),
                    placeholder: (provided) => ({
                      ...provided,
                      color: "white",
                    }),
                    singleValue: (provided, state) => {
                      const color = "white";
                      return { ...provided, color };
                    },
                  }}
                  options={fakeDATA}
                  isSearchable={false}
                  isClearable={true}
                  placeholder=" Period"
                />
              </div>
              <div className="mt-4">
                <div className="xl:h-[70px] h-[110px] bg-[#2B5D83] flex xl:items-center sm:px-4 px-4 border-b border-black flex-col xl:flex-row gap-4">
                  <div className="min-w-[200px] mt-2 xl:mt-0">
                    Attack vector
                  </div>
                  <div className="xl:flex-nowrap grid xl:grid-cols-4  xl:gap-8 gap-y-0 gap-x-8 grid-cols-2 flex-1">
                    <RadioInput
                      name="attackvector"
                      value="Network"
                      id="Network"
                      label="Network"
                    />
                    <RadioInput
                      name="attackvector"
                      value="Adjacent"
                      id="Adjacent"
                      label="Adjacent"
                    />
                    <RadioInput
                      name="attackvector"
                      value="Local"
                      id="Local"
                      label="Local"
                    />
                    <RadioInput
                      name="attackvector"
                      value="Physical"
                      id="Physical"
                      label="Physical"
                    />
                  </div>
                </div>
                <div className="xl:h-[70px] h-[110px] bg-[#2B5D83] flex xl:items-center sm:px-4 px-4 border-b border-black flex-col xl:flex-row gap-4">
                  <div className="min-w-[200px] mt-2 xl:mt-0">
                    Attack complexity
                  </div>
                  <div className="xl:flex-nowrap grid xl:grid-cols-4  xl:gap-8 gap-y-0 gap-x-8 grid-cols-2 flex-1">
                    <RadioInput
                      name="attackcomplexity"
                      value="Low"
                      id="Low1"
                      label="Low"
                    />
                    <RadioInput
                      name="attackcomplexity"
                      value="High"
                      id="High1"
                      label="High"
                    />
                  </div>
                </div>
                <div className="xl:h-[70px] h-[110px] bg-[#2B5D83] flex xl:items-center sm:px-4 px-4 border-b border-black flex-col xl:flex-row gap-4">
                  <div className="min-w-[200px] mt-2 xl:mt-0">
                    Privileges required
                  </div>
                  <div className="xl:flex-nowrap grid xl:grid-cols-4  xl:gap-8 gap-y-0 gap-x-8 grid-cols-2 flex-1">
                    <RadioInput
                      name="Privilegesrequired"
                      value="None"
                      id="None"
                      label="None"
                    />
                    <RadioInput
                      name="Privilegesrequired"
                      value="Low"
                      id="Low2"
                      label="Low"
                    />
                  </div>
                </div>
                <div className="xl:h-[70px] h-[110px] bg-[#2B5D83] flex xl:items-center sm:px-4 px-4 border-b border-black flex-col xl:flex-row gap-4">
                  <div className="min-w-[200px] mt-2 xl:mt-0">
                    User interactions
                  </div>
                  <div className="xl:flex-nowrap grid xl:grid-cols-4  xl:gap-8 gap-y-0 gap-x-8 grid-cols-2 flex-1">
                    <RadioInput
                      name="Userinteractions"
                      value="None"
                      id="None1"
                      label="None"
                    />
                    <RadioInput
                      name="Userinteractions"
                      value="Required"
                      id="Required"
                      label="Required"
                    />
                  </div>
                </div>
                <div className="xl:h-[70px] h-[110px] bg-[#2B5D83] flex xl:items-center sm:px-4 px-4 border-b border-black flex-col xl:flex-row gap-4">
                  <div className="min-w-[200px] mt-2 xl:mt-0">Scope</div>
                  <div className="xl:flex-nowrap grid xl:grid-cols-4  xl:gap-8 gap-y-0 gap-x-8 grid-cols-2 flex-1">
                    <RadioInput
                      name="Scope"
                      value="Unchanged"
                      id="Unchanged"
                      label="Unchanged"
                    />
                    <RadioInput
                      name="Scope"
                      value="Changed"
                      id="Changed"
                      label="Changed"
                    />
                  </div>
                </div>
                <div className="xl:h-[70px] h-[110px] bg-[#2B5D83] flex xl:items-center sm:px-4 px-4 border-b border-black flex-col xl:flex-row gap-4">
                  <div className="min-w-[200px] mt-2 xl:mt-0">
                    Confidentiality
                  </div>
                  <div className="xl:flex-nowrap grid xl:grid-cols-4  xl:gap-8 gap-y-0 gap-x-8 grid-cols-2 flex-1">
                    <RadioInput
                      name="Confidentiality"
                      value="None"
                      id="None3"
                      label="None"
                    />
                    <RadioInput
                      name="Confidentiality"
                      value="Low"
                      id="Low3"
                      label="Low"
                    />
                    <RadioInput
                      name="Confidentiality"
                      value="High"
                      id="High4"
                      label="High"
                    />
                  </div>
                </div>
                <div className="xl:h-[70px] h-[110px] bg-[#2B5D83] flex xl:items-center sm:px-4 px-4 border-b border-black flex-col xl:flex-row gap-4">
                  <div className="min-w-[200px] mt-2 xl:mt-0">Integrity</div>
                  <div className="xl:flex-nowrap grid xl:grid-cols-4  xl:gap-8 gap-y-0 gap-x-8 grid-cols-2 flex-1">
                    <RadioInput
                      name="Integrity"
                      value="None"
                      id="None5"
                      label="None"
                    />
                    <RadioInput
                      name="Integrity"
                      value="Low"
                      id="Low5"
                      label="Low"
                    />
                    <RadioInput
                      name="Integrity"
                      value="High"
                      id="High5"
                      label="High"
                    />
                  </div>
                </div>
                <div className="xl:h-[70px] h-[110px] bg-[#2B5D83] flex xl:items-center sm:px-4 px-4 border-b border-black flex-col xl:flex-row gap-4">
                  <div className="min-w-[200px] mt-2 xl:mt-0">
                    Confidentiality
                  </div>
                  <div className="xl:flex-nowrap grid xl:grid-cols-4  xl:gap-8 gap-y-0 gap-x-8 grid-cols-2 flex-1">
                    <RadioInput
                      name="Availability"
                      value="None"
                      id="None6"
                      label="None"
                    />
                    <RadioInput
                      name="Availability"
                      value="Low"
                      id="Low6"
                      label="Low"
                    />
                    <RadioInput
                      name="Availability"
                      value="High"
                      id="High6"
                      label="High"
                    />
                  </div>
                </div>
                <Input
                  type="text"
                  placeholder="Method name"
                  className="bg-transparent text-white rounded-2xl focus:outline-none focus-visible:ring-0  focus-visible:ring-offset-0 border-2 border-[#2451F5]  placeholder:text-white py-6 mt-4"
                  value={methodName}
                  onChange={(e) => setMethodName(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex sm:gap-8 flex-col sm:flex-row gap-4 mt-4">
          <div className=" h-[30px] w-[30px] flex items-center justify-center hexagon6 !bg-[#2451F5]">
            5
          </div>
          <div className=" rounded-xl overflow-hidden  flex-1">
            <div className="sm:text-[18px] text-[16px] font-[600] bg-[#001D34] h-[60px] flex items-center px-8">
              Proof of Concept
            </div>
            <div className="bg-[#0A273D] py-8 sm:px-8 px-4">
              <div className="flex items-center gap-4 flex-col lg:flex-row">
                <div className="w-full">
                  <Input
                    type="text"
                    placeholder="Title"
                    className="bg-transparent text-white rounded-2xl focus:outline-none focus-visible:ring-0 border-2 border-[#2451F5]  focus-visible:ring-offset-0 placeholder:text-white py-6"
                    value={proofConceptTitle}
                    onChange={(e) => setProofConceptTitle(e.target.value)}
                  />
                </div>
              </div>
              <div className="my-4">
                <h2 className="sm:text-[18px] text-[16px] font-[600]">
                  Description
                </h2>
                <p className="sm:text-[18px] text-[16px] font-[400]">
                  InformationInformationInforma tio nI nformati onIn formati
                  onInform a tion Information Information Informa tionInformat
                  ionInformationI nfor mationInform ationInfor matio nInfor
                  mationIn format ionIn forma tionInformation Informa tion
                  nformationI nforma tionI nfo rma tion Informa tionI nformation
                  Information
                </p>
              </div>
              <div>
                <h2 className="sm:text-[18px] text-[16px] font-[600]">
                  Impact
                </h2>
                <Textarea
                  className="bg-transparent outline-none focus-visible:outline-none focus-visible:ring-offset-0 border-2 mt-4 rounded-xl 
                 focus-visible:ring-0
                  placeholder:text-white sm:h-[150px] h-[100px]"
                  placeholder="Write an Overview"
                  value={proofConceptDescription}
                  onChange={(e) => setProofConceptDescription(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex sm:gap-8 flex-col sm:flex-row gap-4 mt-4">
          <div className=" h-[30px] w-[30px] flex items-center justify-center hexagon6 !bg-[#2451F5]">
            6
          </div>
          <div className=" rounded-xl overflow-hidden  flex-1">
            <div className="sm:text-[18px] text-[16px] font-[600] bg-[#001D34] h-[60px] flex items-center px-8">
              Discovery details
            </div>
            <div className="bg-[#0A273D] py-8 sm:px-8 px-4">
              <div className="flex items-center gap-4 flex-col lg:flex-row">
                <div className="w-full">
                  <Input
                    type="text"
                    placeholder="Time spend"
                    className="bg-transparent text-white rounded-2xl focus:outline-none focus-visible:ring-0 border-2 border-[#2451F5]  focus-visible:ring-offset-0 placeholder:text-white py-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex gap-4  justify-end flex-col-reverse md:flex-row items-end">
          <Button className="hover:scale-105 transition-all duration-300 rounded-3xl  py-[7px]  bg-transparent text-white  border-2 border-[#2451F5] font-[600] hover:bg-transparent flex gap-4 px-4 w-[160px] ">
            Create Draft
          </Button>
          <Button
            className="hover:scale-105 transition-all duration-300 rounded-3xl  py-[7px]  bg-[#2451F5] text-white  border-2 border-[#2451F5] font-[600] hover:bg-[#2451F5] flex gap-4 px-4 w-[160px] "
            onClick={submitReport}
          >
            <p>Submit Report</p>
            <img src="/assets/sendbutton.svg" alt="" className="  " />
          </Button>
        </div>
      </div>
    </div>
  );
}
