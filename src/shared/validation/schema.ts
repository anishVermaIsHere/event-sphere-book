import z, { string, object, array } from "zod";

export const loginSchema = object({
  email: string({ required_error: "Email is required" }).email({
    message: "Enter a valid email",
  }),
  password: string({ required_error: "Password is required" })
    .min(8, { message: "Password should be of minimum 8 characters" })
    .max(16, { message: "Password should be of minimum 16 characters" }),
});


export const ticketBookSchema = object({
  eventId: string({ required_error: "Event is required"}).nonempty(),
  ticketType: z.enum(['general', 'vip']),
  date: string({ required_error: "Date is required" }).date("Invalid date string"),
  attendees: array(object({  name: string({ required_error: "Attendee name is required" }).nonempty().min(3) })).nonempty().max(10)
});


