import { string, object } from "zod";

export const loginSchema = object({
  email: string({ required_error: "Email is required" }).email({
    message: "Enter a valid email",
  }),
  password: string({ required_error: "Password is required" })
    .min(8, { message: "Password should be of minimum 8 characters" })
    .max(16, { message: "Password should be of minimum 16 characters" }),
});
