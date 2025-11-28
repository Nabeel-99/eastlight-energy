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
  contactFormSchema,
  solarInstallerFormSchema,
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
import { locations, solarProducts } from "@/lib/data";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import axios from "axios";

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
export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullname: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof contactFormSchema>) => {
    // auth api
    try {
      const res = await axios.post("/api/contact", data);
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
        <CardTitle className="text-xl lg:text-2xl">Get in Touch</CardTitle>
        <CardDescription>
          Have questions or feedback? Reach out to us and we’ll get back to you
          promptly.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="contact-form" onSubmit={form.handleSubmit(onSubmit)}>
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
            <div className="grid lg:grid-cols-2 gap-6">
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
            </div>

            <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="message">
                    How can we help you?
                  </FieldLabel>
                  <Textarea
                    {...field}
                    id="message"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your message"
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
        <Button type="submit" form="contact-form" className="w-full">
          Send Your Message
        </Button>
      </CardFooter>
    </Card>
  );
}
