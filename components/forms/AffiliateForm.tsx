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
import { affiliateFormSchema } from "@/lib/validation";
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
export function AffiliateForm() {
  const [loading, setLoading] = useState(false);

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
    try {
      setLoading(true);
      const res = await axios.post("/api/affiliate", data);
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
    <Card className="w-full form-card bg-teal-800/10 border-teal-400/10 text-white">
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
        <Button
          disabled={loading}
          type="submit"
          form="affiliate-form"
          className="w-full hover:bg-teal-400/50 bg-teal-400/60"
        >
          {loading ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            "Submit Application"
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
