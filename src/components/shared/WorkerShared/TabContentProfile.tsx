import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import Select from "react-select";

// import ReactCountryFlag from "react-country-flag";
import { Toaster, toast } from "react-hot-toast";
import countryList from "react-select-country-list";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";

import { formSchemaProfileUpdate } from "../../../lib/schemas";
import { useMemo } from "react";

import { Button } from "../../ui/button";
import InputCompany from "../../component/Company/InputCompany";
import { Label } from "../../ui/label";
import { Textarea } from "../../ui/textarea";
const breakpoints = [1040, 1224];

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
export default function TabContentProfile() {
  const form = useForm<z.infer<typeof formSchemaProfileUpdate>>({
    resolver: zodResolver(formSchemaProfileUpdate),
    defaultValues: {
      firstname: "",
      lastname: "",
      website: "",
      bio: "",
      username: "",
      bigfile: "",
      file: "",
      city: "",
      linkedin: "",
      twitter: "",
      github: "",

      country: {
        value: "",
        label: "Select Country...",
      },
    },
  });
  const options = useMemo(() => countryList().getData(), []);
  function onSubmit(data: z.infer<typeof formSchemaProfileUpdate>) {
    console.log(data);
  }
  return (
    <div className="mt-4">
      <h2 className="sm:text-[23px] text-[20px] font-[600] mb-8 ">
        Personal information
      </h2>
      <div className="main">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 sm:space-y-8
              "
          >
            <div className="flex items-center gap-4 flex-col sm:flex-row">
              <Label className="sm:text-[18px] text-[16px] font-[600] md:min-w-[130px] sm:min-w-[100px]">
                Full Name
              </Label>
              <div className="flex gap-4 flex-col lg:flex-row">
                <FormField
                  control={form.control}
                  name="firstname"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <InputCompany
                          type="text"
                          placeholder="Enter First Name"
                          {...field}
                          className="xl:min-w-[250px]"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastname"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <InputCompany
                          type="text"
                          placeholder="Enter Last Name"
                          {...field}
                          className="xl:min-w-[250px]"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="flex items-center gap-4 flex-col sm:flex-row">
              <Label className="sm:text-[18px] text-[16px] font-[600] md:min-w-[130px] sm:min-w-[100px]">
                Username
              </Label>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <InputCompany
                        type="text"
                        placeholder="Username"
                        {...field}
                        className="xl:min-w-[350px] scale-r-125"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex items-center gap-4 flex-col sm:flex-row">
              <Label className="sm:text-[18px] text-[16px] font-[600] md:min-w-[130px] sm:min-w-[100px]">
                Website
              </Label>
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <InputCompany
                        type="text"
                        placeholder="Bughunter.az"
                        {...field}
                        className="xl:min-w-[350px] scale-r-125"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex items-center gap-8 flex-col sm:flex-row">
              <Label className="bg-[#061724] rounded-2xl  sm:w-[559px] h-[160px] w-full"></Label>
              <FormField
                control={form.control}
                name="bigfile"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Label
                        className="bg-[#FFEC86] text-black hover:bg-[#FFEC86] 
                      min-w-[120px]
                      h-[40px]
                      text-[16px] font-[600]  rounded-xl flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300
                      "
                      >
                        Choose File
                        <Input
                          type="file"
                          {...field}
                          className="bg-[#FFEC86] text-black hidden w-full"
                        />
                      </Label>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex items-center gap-8 flex-col sm:flex-row">
              <Label className="bg-[#061724] hexagon3 py-8  md:m-0">
                <img src="/assets/images/newuserlogo.svg" alt="" />
              </Label>{" "}
              <FormField
                control={form.control}
                name="file"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Label
                        className="bg-[#FFEC86] text-black hover:bg-[#FFEC86] 
                      min-w-[120px]
                      h-[40px]
                      text-[16px] font-[600]  rounded-xl flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300
                      "
                      >
                        Choose File
                        <Input
                          type="file"
                          {...field}
                          className="bg-[#FFEC86] text-black hidden w-full"
                        />
                      </Label>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex items-center gap-4 flex-col sm:flex-row">
              <Label className="sm:text-[18px] text-[16px] font-[600] md:min-w-[130px] sm:min-w-[100px]">
                Location
              </Label>
              <div className="flex gap-4 flex-col lg:flex-row">
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select
                          {...field}
                          placeholder="Select Country"
                          options={options}
                          styles={{
                            control: (styles) => ({
                              ...styles,
                              background: "transparent",
                              borderRadius: "1rem",
                              width: "200px",
                              [mq[0]]: {
                                width: "250px",
                              },
                              [mq[1]]: {
                                width: "350px",
                              },
                              autocomplete: "none",
                              outline: "none",
                              paddingLeft: "8px",

                              border: "1",
                              color: "white",
                            }),
                            option: (styles) => ({
                              ...styles,
                              background: "#023059",
                              padding: "10px 20px",
                              scrollbarColor: "red",

                              ":hover": {
                                background: "rgb(100 116 139)",
                              },
                            }),
                            menuList: (styles) => ({
                              ...styles,
                              padding: "0px",

                              "::-webkit-scrollbar": {
                                width: "0px",
                                height: "0px",
                              },
                            }),
                            input: (styles) => ({
                              ...styles,
                              color: "white",
                              // background: "red",
                              // padding: "0 10px",
                              height: "38px",
                            }),
                            singleValue: (styles) => ({
                              ...styles,
                              color: "white",
                              padding: "10px",
                            }),
                            placeholder: (styles) => ({
                              ...styles,
                              color: "white",
                              padding: "10px",
                            }),
                          }}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <InputCompany
                          type="text"
                          placeholder="City"
                          {...field}
                          className="xl:min-w-[250px]"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="flex items-center gap-4 flex-col sm:flex-row">
              <Label className="sm:text-[18px] text-[16px] font-[600] md:min-w-[130px] sm:min-w-[100px]">
                Bio
              </Label>
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="bio"
                        className="bg-transparent text-white placeholder:text-white border focus-visible:border-none focus-visible:outline-none xl:w-[620px] h-[170px] lg:w-[350px] w-auto"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex items-center gap-4 flex-col sm:flex-row">
              <Label className="sm:text-[18px] text-[16px] font-[600] md:min-w-[130px] sm:min-w-[100px]">
                Linked in
              </Label>
              <FormField
                control={form.control}
                name="linkedin"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <InputCompany
                        type="text"
                        placeholder="Bughunter.az"
                        {...field}
                        className="xl:min-w-[350px] scale-r-125"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex items-center gap-4 flex-col sm:flex-row">
              <Label className="sm:text-[18px] text-[16px] font-[600] md:min-w-[130px] sm:min-w-[100px]">
                Twitter
              </Label>
              <FormField
                control={form.control}
                name="twitter"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <InputCompany
                        type="text"
                        placeholder="Bughunter.az"
                        {...field}
                        className="xl:min-w-[350px] scale-r-125"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex items-center gap-4 flex-col sm:flex-row">
              <Label className="sm:text-[18px] text-[16px] font-[600] md:min-w-[130px] sm:min-w-[100px]">
                Github
              </Label>
              <FormField
                control={form.control}
                name="github"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <InputCompany
                        type="text"
                        placeholder="Bughunter.az"
                        {...field}
                        className="xl:min-w-[350px] scale-r-125"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="sm:space-x-8 flex items-center mt-16 justify-end  flex-col sm:flex-row gap-4 sm:gap-0">
              <Button className="hover:scale-110 transition-all duration-300 rounded-xl h-[40px]  sm:h-[50px] w-[180px] sm:w-[220px] bg-[#2451F5] text-white  sm:text-[18px] font-[600] text-[16px]   hover:bg-[#2451F5]">
                Update password
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}