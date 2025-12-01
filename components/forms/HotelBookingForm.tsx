"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
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
import { hotelBookingFormSchema } from "@/lib/validation";
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
import axios from "axios";
import { LoaderCircle } from "lucide-react";
import { DatePicker } from "../ui/DatePicker";
import { toast } from "sonner";

const locations = [
  {
    id: "lagos",
    title: "Lagos",
  },
  {
    id: "abuja",
    title: "Abuja",
  },
  {
    id: "port-harcourt",
    title: "Port Harcourt",
  },
  {
    id: "kano",
    title: "Kano",
  },
  {
    id: "ibadan",
    title: "Ibadan",
  },
  {
    id: "enugu",
    title: "Enugu",
  },
  {
    id: "calabar",
    title: "Calabar",
  },
  {
    id: "uyo",
    title: "Uyo",
  },
  {
    id: "warri",
    title: "Warri",
  },
  {
    id: "benin-city",
    title: "Benin City",
  },
  {
    id: "other",
    title: "Other Location",
  },
];
export function HotelBookingForm() {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof hotelBookingFormSchema>>({
    resolver: zodResolver(hotelBookingFormSchema),
    defaultValues: {
      fullname: "",
      email: "",
      phone: "",
      location: "",
      check_in: "",
      check_out: "",
      number_of_rooms: "",
      number_of_guests: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof hotelBookingFormSchema>) => {
    try {
      setLoading(true);
      const res = await axios.post("/api/hotel-booking", data);
      if (res.status === 200) {
        toast.success("Message sent successfully");
        form.reset();
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl lg:text-2xl">
          Hotel Booking Form
        </CardTitle>
        <CardDescription>
          Submit your booking request and we'll help you find the perfect hotel.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="hotel-booking-form" onSubmit={form.handleSubmit(onSubmit)}>
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
              name="location"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="location">Location</FieldLabel>
                  <Select
                    name={field.name}
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger
                      id="location"
                      aria-invalid={fieldState.invalid}
                    >
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((location) => (
                        <SelectItem key={location.id} value={location.id}>
                          {location.title}
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
            <div className="grid lg:grid-cols-2 gap-6">
              <Controller
                name="number_of_guests"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="number_of_guests">Guests</FieldLabel>
                    <Input
                      {...field}
                      id="number_of_guests"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter number of guests"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="number_of_rooms"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="number_of_rooms">Rooms</FieldLabel>
                    <Input
                      {...field}
                      id="number_of_rooms"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter number of guests"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <Controller
                name="check_in"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="check_in">Check-In Date</FieldLabel>
                    <DatePicker
                      id="check_in"
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Select check-in date"
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="check_out"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="check_out">Check-Out Date</FieldLabel>
                    <DatePicker
                      id="check_out"
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
            </div>

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
        <Button
          disabled={loading}
          type="submit"
          form="hotel-booking-form"
          className="w-full"
        >
          {loading ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            "Submit Booking Request"
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
