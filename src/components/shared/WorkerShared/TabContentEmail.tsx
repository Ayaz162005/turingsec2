import InputCompany from "../../component/Company/InputCompany";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

import { Label } from "../../ui/label";
import { useState } from "react";
import { Button } from "../../ui/button";

export default function TabContentEmail() {
  const [currentpasswordVisible, setCurrentPasswordVisible] = useState(false);

  const togglePasswordVisibility = (
    func: React.Dispatch<React.SetStateAction<boolean>>,
    item: boolean
  ) => {
    func(!item);
  };

  return (
    <div className="mt-4">
      <h2 className="sm:text-[23px] text-[16px] font-[600] mb-2 ">Email</h2>
      <p className="sm:text-[18px] text-[12px] font-[500]">
        Want to change your email or password? You've come to the right place.
      </p>
      <div className="sm:mt-14 mt-8 sm:space-y-14 space-y-8">
        <div className="flex md:items-center gap-2 flex-col md:flex-row">
          <Label className="sm:text-[18px] text-[14px] font-[600] lg:min-w-[300px] md:min-w-[200px]">
            Password
          </Label>
          <Label
            className="relative flex items-center border rounded-2xl
          ring-offset-0 ring-0 focus-within:ring-offset-1 "
          >
            <InputCompany
              type={currentpasswordVisible ? "text" : "password"}
              placeholder=""
              className="relative  focus-visible:ring-offset-0 border-none py-2 "
            />
            {currentpasswordVisible && (
              <FaRegEye
                className="w-[40px] mr-3 h-[20px] cursor-pointer"
                onClick={() =>
                  togglePasswordVisibility(
                    setCurrentPasswordVisible,
                    currentpasswordVisible
                  )
                }
              />
            )}
            {!currentpasswordVisible && (
              <FaRegEyeSlash
                className="w-[40px] mr-3 h-[20px] cursor-pointer"
                onClick={() =>
                  togglePasswordVisibility(
                    setCurrentPasswordVisible,
                    currentpasswordVisible
                  )
                }
              />
            )}
          </Label>
        </div>
        <div className="flex md:items-center gap-2 flex-col md:flex-row">
          <Label className="sm:text-[18px] text-[14px] font-[600] lg:min-w-[300px] md:min-w-[200px]">
            New email
          </Label>
          <InputCompany
            type="email"
            placeholder=""
            className="py-2 md:w-[250px]  min-w-0"
          />
        </div>
      </div>
      <div className="sm:space-x-8 flex items-center sm:mt-16 mt-8 justify-end  flex-col sm:flex-row gap-4 sm:gap-0">
        <Button className="hover:scale-110 transition-all duration-300  rounded-xl  w-full h-[50px] sm:h-[50px]  sm:w-[200px] bg-[#2451F5] text-white  sm:text-[18px] font-[600] text-[16px]   hover:bg-[#2451F5]">
          Change Email
        </Button>
      </div>
    </div>
  );
}
