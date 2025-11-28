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
  affiliateFormSchema,
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
import { formatDate, isValidDate } from "@/lib/utils";
import { DatePicker } from "../ui/DatePicker";

const properties = [
  {
    id: "residential",
    title: "Residential (Home/Apartment)",
  },
  {
    id: "commercial",
    title: "Commercial (Office/Shop)",
  },
  {
    id: "industrial",
    title: "Industrial (Factory/Warehouse)",
  },
] as const;

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
export function AffiliateForm() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(new Date("2025-06-01"));
  const [month, setMonth] = useState<Date | undefined>(date);
  const [value, setValue] = useState(formatDate(date));

  const form = useForm<z.infer<typeof affiliateFormSchema>>({
    resolver: zodResolver(affiliateFormSchema),
    defaultValues: {
      fullname: "",
      email: "",
      phone: "",
      location: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof affiliateFormSchema>) => {
    // auth api
    try {
      const res = await axios.post("/api/affiliate", data);
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
          Affiliate Application
        </CardTitle>
        <CardDescription>
          Join our affiliate program and start earning commissions.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="affiliate-form" onSubmit={form.handleSubmit(onSubmit)}>
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

            <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="message">
                    Why do you want to join our affiliate program?
                  </FieldLabel>
                  <Textarea
                    {...field}
                    id="message"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter message"
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
        <Button type="submit" form="affiliate-form" className="w-full">
          Submit Application
        </Button>
      </CardFooter>
    </Card>
  );
}
