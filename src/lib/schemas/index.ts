import { z } from "zod";

export const formSchemaCompanyRegister = z.object({
  firstName: z.string().min(2, { message: "First name is too short" }),
  lastName: z.string().min(2, { message: "Last name is too short" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  companyName: z.string().min(2, { message: "Company name is too short" }),
  jobtitle: z.string().min(2, { message: "Job title is too short" }),
  message: z.string().min(2, { message: "Message is too short" }),
});

export const formSchemaHackerRegister = z.object({
  email: z.string().email({ message: "Please enter a valid email" }),
  password: z.string().min(8, { message: "Password is too short" }),
});
export const formSchemaHackerLogin = z.object({});
