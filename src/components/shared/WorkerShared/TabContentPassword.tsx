import InputCompany from "../../component/Company/InputCompany";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

import { Label } from "../../ui/label";
import { useState } from "react";
import { Button } from "../../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import { z } from "zod";
import { Input } from "../../ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

export default function TabContentPassword() {
  const [currentpasswordVisible, setCurrentPasswordVisible] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  function handleSubmit() {
    try {
    } catch (e) {
      console.log(e);
      toast.error("An error occured");
    }
  }
  const formSchema = z
    .object({
      currentPassword: z.string().min(8, {
        message: "Username must be at least 8 characters.",
      }),
      newPassword: z.string().min(8, {
        message: "Username must be at least 8 characters.",
      }),
      confirmPassword: z.string().min(8, {
        message: "Username must be at least 8 characters.",
      }),
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });
  const togglePasswordVisibility = (
    func: React.Dispatch<React.SetStateAction<boolean>>,
    item: boolean
  ) => {
    func(!item);
  };
  const [newpasswordVisible, setNewPasswordVisible] = useState(false);

  const [confirmpasswordVisible, setConfirmPasswordVisible] = useState(false);

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }
  return (
    <div className="mt-4">
      <h2 className="sm:text-[23px] text-[16px] font-[600] mb-2 ">Password</h2>
      <p className="sm:text-[18px] text-[12px] font-[500]">
        Please enter your current password to change your password
      </p>
      <div className="sm:mt-14 mt-6 sm:space-y-14 space-y-6">
        <div className="flex md:items-center gap-2 flex-col md:flex-row">
          <Label className="sm:text-[18px] text-[12px] font-[600] lg:min-w-[300px] md:min-w-[200px]">
            Current password
          </Label>
          <Label className="relative flex items-center border rounded-2xl">
            <InputCompany
              type={currentpasswordVisible ? "text" : "password"}
              placeholder=""
              className="relative  focus-visible:ring-offset-0 border-none py-2 "
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
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
        <div
          className="flex md:items-center gap-2
        flex-col md:flex-row"
        >
          <Label className="sm:text-[18px] text-[12px] font-[600] lg:min-w-[300px] md:min-w-[200px]">
            New password
          </Label>
          <Label className="relative flex items-center border rounded-2xl">
            <InputCompany
              type={newpasswordVisible ? "text" : "password"}
              placeholder=""
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="relative  focus-visible:ring-offset-0 border-none py-2 "
            />
            {newpasswordVisible && (
              <FaRegEye
                className="w-[40px] mr-3 h-[20px] cursor-pointer"
                onClick={() =>
                  togglePasswordVisibility(
                    setNewPasswordVisible,
                    newpasswordVisible
                  )
                }
              />
            )}
            {!newpasswordVisible && (
              <FaRegEyeSlash
                className="w-[40px] mr-3 h-[20px] cursor-pointer"
                onClick={() =>
                  togglePasswordVisibility(
                    setNewPasswordVisible,
                    newpasswordVisible
                  )
                }
              />
            )}
          </Label>
        </div>
        <div
          className="flex md:items-center gap-2
        flex-col md:flex-row"
        >
          <Label className="sm:text-[18px] text-[12px] font-[600] lg:min-w-[300px] md:min-w-[200px]">
            Confirm new Password
          </Label>
          <Label className="relative flex items-center border rounded-2xl">
            <InputCompany
              type={confirmpasswordVisible ? "text" : "password"}
              placeholder=""
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="relative  focus-visible:ring-offset-0 border-none py-2 "
            />
            {confirmpasswordVisible && (
              <FaRegEye
                className="w-[40px] mr-3 h-[20px] cursor-pointer"
                onClick={() =>
                  togglePasswordVisibility(
                    setConfirmPasswordVisible,
                    confirmpasswordVisible
                  )
                }
              />
            )}
            {!confirmpasswordVisible && (
              <FaRegEyeSlash
                className="w-[40px] mr-3 h-[20px] cursor-pointer"
                onClick={() =>
                  togglePasswordVisibility(
                    setConfirmPasswordVisible,
                    confirmpasswordVisible
                  )
                }
              />
            )}
          </Label>
        </div>
      </div>
      <div className="sm:space-x-8 flex items-center sm:mt-16 mt-6 justify-end  flex-col-reverse sm:flex-row gap-4 sm:gap-0">
        <Button className="hover:scale-110 transition-all duration-300 rounded-xl h-[45px]  sm:h-[50px] w-full sm:w-[150px] bg-transparent text-white  sm:text-[18px] font-[600] text-[12px] border border-[#2451F5]  hover:bg-transparent">
          Cancel
        </Button>
        <Button
          className="hover:scale-110 transition-all duration-300 rounded-xl h-[45px]  sm:h-[50px] w-full sm:w-[220px] bg-[#2451F5] text-white  sm:text-[18px] font-[600] text-[16px]   hover:bg-[#2451F5]"
          onClick={() => handleSubmit()}
        >
          Update password
        </Button>
      </div>
    </div>
  );
}
