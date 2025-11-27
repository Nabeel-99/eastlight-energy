"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  flightBookingFormSchema,
  hotelBookingFormSchema,
  solarProductFormSchema,
} from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useState } from "react";
import { solarProducts } from "@/lib/data";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import axios from "axios";
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { cn, formatDate, isValidDate } from "@/lib/utils";
import { DatePicker } from "../ui/DatePicker";

const trips = [
  {
    id: "one-way",
    title: "One-Way",
  },
  {
    id: "round-trip",
    title: "Round-Trip",
  },
] as const;

const classes = [
  { id: "no-preference", title: "No preference" },
  {
    id: "economy",
    title: "Economy",
  },
  {
    id: "business",
    title: "Business",
  },
  {
    id: "first-class",
    title: "First Class",
  },
] as const;

export function FlightBookingForm() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(new Date("2025-06-01"));
  const [month, setMonth] = useState<Date | undefined>(date);
  const [value, setValue] = useState(formatDate(date));

  const form = useForm<z.infer<typeof flightBookingFormSchema>>({
    resolver: zodResolver(flightBookingFormSchema),
    defaultValues: {
      fullname: "",
      email: "",
      phone: "",
      trip_type: "one-way",
      departure_city: "",
      destination_city: "",
      departure_date: "",
      return_date: "",
      number_of_passengers: "",
      travel_class: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof flightBookingFormSchema>) => {
    // auth api
    try {
      const res = await axios.post("/api/flight-booking", data);
      console.log("res", res.data);
      setLoading(true);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl lg:text-2xl">
          Flight Booking Form
        </CardTitle>
        <CardDescription>
          Submit your flight booking request and we'll find the best options for
          you.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="flight-booking-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="fullname"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="fullname">Full Name</FieldLabel>
                  <Input
                    {...field}
                    id="fullname"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter full name"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    {...field}
                    id="email"
                    type="email"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter email address"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="phone"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="email">Phone</FieldLabel>
                  <Input
                    {...field}
                    id="phone"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter phone number"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="trip_type"
              control={form.control}
              render={({ field, fieldState }) => (
                <FieldSet data-invalid={fieldState.invalid}>
                  <FieldLegend>Trip Type</FieldLegend>
                  <RadioGroup
                    name={field.name}
                    value={field.value}
                    onValueChange={field.onChange}
                    aria-invalid={fieldState.invalid}
                  >
                    <div className="grid lg:grid-cols-2 gap-6">
                      {trips.map((trip) => (
                        <FieldLabel key={trip.id} htmlFor={`trip-${trip.id}`}>
                          <Field
                            orientation="horizontal"
                            data-invalid={fieldState.invalid}
                          >
                            <FieldContent>
                              <FieldTitle>{trip.title}</FieldTitle>
                            </FieldContent>
                            <RadioGroupItem
                              value={trip.id}
                              id={`trip-${trip.id}`}
                              aria-invalid={fieldState.invalid}
                            />
                          </Field>
                        </FieldLabel>
                      ))}
                    </div>
                  </RadioGroup>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </FieldSet>
              )}
            />
            <div className="grid lg:grid-cols-2 gap-6">
              <Controller
                name="departure_city"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="departure_city">
                      Departure City
                    </FieldLabel>
                    <Input
                      {...field}
                      id="departure_city"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter departure city"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="destination_city"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="destination_city">
                      Destination City
                    </FieldLabel>
                    <Input
                      {...field}
                      id="destination_city"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter destination city"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>

            <div
              className={cn(
                "grid  gap-6",
                form.watch("trip_type") === "one-way"
                  ? "lg:grid-cols-1"
                  : "lg:grid-cols-2"
              )}
            >
              <Controller
                name="departure_date"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="departure_date">
                      Departure Date
                    </FieldLabel>
                    <DatePicker
                      id="departure_date"
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Select departure date"
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              {form.watch("trip_type") === "round-trip" && (
                <Controller
                  name="return_date"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="return_date">Return Date</FieldLabel>
                      <DatePicker
                        id="return_date"
                        value={field.value}
                        onChange={field.onChange}
                        placeholder="Select check-out date"
                        aria-invalid={fieldState.invalid}
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              )}
            </div>
            <Controller
              name="number_of_passengers"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="number_of_passengers">
                    Number of Passengers
                  </FieldLabel>
                  <Input
                    {...field}
                    id="number_of_passengers"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter number of passengers"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="travel_class"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="travel_class">
                    Travel Class (optional)
                  </FieldLabel>
                  <Select
                    name={field.name}
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger
                      id="travel_class"
                      aria-invalid={fieldState.invalid}
                    >
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {classes.map((item) => (
                        <SelectItem key={item.id} value={item.id}>
                          {item.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="message">
                    Additional Information
                  </FieldLabel>
                  <Textarea
                    {...field}
                    id="message"
                    aria-invalid={fieldState.invalid}
                    placeholder="Please enter any additional information"
                    className="min-h-[120px] max-h-[120px]"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" form="flight-booking-form" className="w-full">
          Submit Booking Request
        </Button>
      </CardFooter>
    </Card>
  );
}
