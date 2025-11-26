import z from "zod";

export const solarProductFormSchema = z.object({
  fullname: z.string().min(1, { error: "Fullname is required" }),
  email: z.email({ error: "Invalid email address" }),
  phone: z.string().min(1, { error: "Phone number is required" }),
  property: z.string().min(1, { error: "Please select a property" }),
  product_interest: z
    .array(z.string())
    .min(1, { error: "Please select at least one product interest" }),
  message: z
    .string()
    .min(1, { error: "Please provide additional information." }),
});

export const acServiceFormSchema = z.object({
  fullname: z.string().min(1, { error: "Fullname is required" }),
  email: z.email({ error: "Invalid email address" }),
  phone: z.string().min(1, { error: "Phone number is required" }),
  service: z.string().min(1, { error: "Please select a service" }),
  message: z
    .string()
    .min(1, { error: "Please provide additional information." }),
});
