import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { formSchemaCompanyRegister } from "../lib/schemas";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
export default function RegisterCompanyPage() {
  const form = useForm<z.infer<typeof formSchemaCompanyRegister>>({
    resolver: zodResolver(formSchemaCompanyRegister),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
      jobtitle: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchemaCompanyRegister>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className=" flex  flex-col justify-between xl:pb-40 pb-4 sm:py-18  text-[white] lg:flex-row items-center bg-[#061723] dark:bg-inherit sm:px-16 mt-[52px] py-20 px-8 ">
      <div className="lg:w-[60%] w-auto  ">
        <div className="">
          <h2 className="font-[700] sm:text-[45px] text-[28px] mb-2">
            Join as Company
          </h2>
          <p className="font-[400] sm:text-[20px] mb-8  text-[18px]">
            See a personalized demo to learn how strategic penetration testing
            helps you take control of your vulnerabilities, spot security gaps,
            and boost your overall security.
          </p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 w-[100%] m-auto lg:m-0 sm:w-[450px]
            "
            >
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="First Name"
                        {...field}
                        className="bg-[#023059] rounded-xl h-[60px] sm:w-[450px] w-[317px]
                      outline-none border-none 
                      placeholder:text-white
                    pl-8
                      focus-visible:ring-0
                      focus-visible:ring-offset-1
                    
                     "
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Last Name"
                        {...field}
                        className="bg-[#023059] rounded-xl  h-[60px] sm:w-[450px] w-[317px]
                      outline-none 
                      pl-8 border-none 
                      placeholder:text-white
                    
                      focus-visible:ring-0
                      focus-visible:ring-offset-1
                    
                     "
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Company Email Address"
                        {...field}
                        className="bg-[#023059] rounded-xl  h-[60px] sm:w-[450px] w-[317px]
                      outline-none border-none 
                      placeholder:text-white
                    pl-8
                      focus-visible:ring-0
                      focus-visible:ring-offset-1
                    
                     "
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Company Name"
                        {...field}
                        className="bg-[#023059] rounded-xl h-[60px] sm:w-[450px] w-[317px]
                      outline-none border-none 
                      placeholder:text-white
                    pl-8
                      focus-visible:ring-0
                      focus-visible:ring-offset-1
                    
                     "
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="jobtitle"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Job Title"
                        {...field}
                        className="bg-[#023059] rounded-xl  h-[60px] sm:w-[450px] w-[317px]
                      outline-none border-none 
                      placeholder:text-white
                    pl-8
                      focus-visible:ring-0
                      focus-visible:ring-offset-1
                    
                     "
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select {...field}>
                        <SelectTrigger
                          className="bg-[#023059] rounded-xl h-[60px] xl:w-[630px] w-[100%] 
                      outline-none border-none 
                      placeholder:text-white
                    pl-8
                      focus-visible:ring-0
                      focus-visible:ring-offset-1
                    
                     "
                        >
                          <SelectValue placeholder="What assets are you interested in testing?" />
                        </SelectTrigger>
                        <SelectContent className="dark">
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Write you message..."
                        {...field}
                        className="bg-[#023059] h-[170px] xl:w-[630px] w-[100%]  pt-4  rounded-xl 
                      outline-none border-none 
                      placeholder:text-white
                    pl-8
                      focus-visible:ring-0
                      focus-visible:ring-offset-1
                    
                     "
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                className="bg-[#FFDE31] hover:bg-[#FFDE31]
            text-black  rounded-xl hover:scale-105  sm:w-[450px] w-[317px] transition-all duration-300  font-[700]  h-[60px]  "
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <div className="lg:w-[100%] mt-8 w-auto pb-12 pt-2">
        <img
          src="/assets/images/seclog.png"
          alt=""
          className="m-auto w-[300px]"
        />
      </div>
    </div>
  );
}
