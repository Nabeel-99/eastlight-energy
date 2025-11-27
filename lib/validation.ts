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

export const hotelBookingFormSchema = z.object({
  fullname: z.string().min(1, { error: "Fullname is required" }),
  email: z.email({ error: "Invalid email address" }),
  phone: z.string().min(1, { error: "Phone number is required" }),
  location: z.string().min(1, { error: "Please select a location" }),
  check_in: z.string().min(1, { error: "Please select a check-in date" }),
  check_out: z.string().min(1, { error: "Please select a check-out date" }),
  number_of_rooms: z
    .string()
    .min(1, { message: "Please select number of rooms" }),
  number_of_guests: z
    .string()
    .min(1, { message: "Please select number of guests" }),
  message: z
    .string()
    .min(1, { error: "Please provide additional information." }),
});

export const flightBookingFormSchema = z.object({
  fullname: z.string().min(1, { message: "Full name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  trip_type: z.enum(["one-way", "round-trip"]),
  departure_city: z.string().min(1, { message: "Departure city is required" }),
  destination_city: z
    .string()
    .min(1, { message: "Destination city is required" }),
  departure_date: z.string().min(1, { message: "Departure date is required" }),
  return_date: z.string().optional(),
  number_of_passengers: z
    .string()
    .min(1, { message: "Number of passengers is required" }),
  travel_class: z.string().optional(), // Economy, Business, First Class
  message: z.string().optional(),
});
