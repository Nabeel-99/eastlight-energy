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
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { solarProductFormSchema } from "@/lib/validation";
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
import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";

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
export function SolarProductForm() {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof solarProductFormSchema>>({
    resolver: zodResolver(solarProductFormSchema),
    defaultValues: {
      fullname: "",
      email: "",
      phone: "",
      property: "",
      product_interest: [],
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof solarProductFormSchema>) => {
    try {
      setLoading(true);
      const res = await axios.post("/api/solar-product", data);
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
    <Card className="mt-10 lg:w-3/4 lg:mx-auto bg-teal-800/10 border-teal-400/10 text-white">
      <CardHeader>
        <CardTitle className="text-xl lg:text-2xl">
          Cworth Solar Product Inquiry
        </CardTitle>
        <CardDescription>
          Request information on our solar products.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="solar-product-form" onSubmit={form.handleSubmit(onSubmit)}>
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
                    className=""
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
              name="product_interest"
              control={form.control}
              render={({ field, fieldState }) => (
                <FieldSet data-invalid={fieldState.invalid}>
                  <FieldLegend variant="label">Product Interest</FieldLegend>
                  <FieldDescription>
                    Select products of interest
                  </FieldDescription>
                  <FieldGroup data-slot="checkbox-group">
                    {solarProducts.map((product, index) => (
                      <Field
                        key={index}
                        orientation="horizontal"
                        data-invalid={fieldState.invalid}
                      >
                        <Checkbox
                          id={`product-interest-${index}`}
                          name={field.name}
                          aria-invalid={fieldState.invalid}
                          checked={field.value.includes(product.title)}
                          onCheckedChange={(checked) => {
                            const newValue = checked
                              ? [...field.value, product.title]
                              : field.value.filter(
                                  (value) => value !== product.title
                                );
                            field.onChange(newValue);
                          }}
                        />
                        <FieldLabel
                          htmlFor={`product-interest-${index}`}
                          className="font-normal"
                        >
                          {product.title}
                        </FieldLabel>
                      </Field>
                    ))}
                  </FieldGroup>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </FieldSet>
              )}
            />
            <Controller
              name="property"
              control={form.control}
              render={({ field, fieldState }) => (
                <FieldSet data-invalid={fieldState.invalid}>
                  <FieldLegend>Property</FieldLegend>
                  <FieldDescription>Select your property type</FieldDescription>
                  <RadioGroup
                    name={field.name}
                    value={field.value}
                    onValueChange={field.onChange}
                    aria-invalid={fieldState.invalid}
                  >
                    {properties.map((property) => (
                      <FieldLabel
                        key={property.id}
                        htmlFor={`property-${property.id}`}
                      >
                        <Field
                          orientation="horizontal"
                          data-invalid={fieldState.invalid}
                        >
                          <FieldContent>
                            <FieldTitle>{property.title}</FieldTitle>
                          </FieldContent>
                          <RadioGroupItem
                            value={property.id}
                            id={`property-${property.id}`}
                            aria-invalid={fieldState.invalid}
                          />
                        </Field>
                      </FieldLabel>
                    ))}
                  </RadioGroup>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </FieldSet>
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
        <Button
          disabled={loading}
          type="submit"
          form="solar-product-form"
          className="w-full hover:bg-teal-400/50 bg-teal-400/60"
        >
          {loading ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            "Request Product Information"
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
