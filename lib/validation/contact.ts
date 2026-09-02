import { z } from "zod";
export const contactSchema=z.object({name:z.string().min(2,"Enter your name"),email:z.string().email("Enter a valid email"),phone:z.string().optional(),company:z.string().optional(),application:z.enum(["horticulture","agriculture","construction","industrial","insulation","other","unspecified"]),message:z.string().min(10,"Tell us a little more about your requirement")});
export type ContactFormValues=z.infer<typeof contactSchema>;
