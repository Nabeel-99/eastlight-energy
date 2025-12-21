"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldContent,
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

interface SolarProductFormProps {
  preSelectedProduct?: string;
  parentCategory?: string;
  otherSeriesInCategory?: string[];
}

export function SolarProductForm({
  preSelectedProduct,
  parentCategory,
  otherSeriesInCategory = [],
}: SolarProductFormProps = {}) {
  const [loading, setLoading] = useState(false);
  const isFromDetailsPage = !!preSelectedProduct;

  const generatePlaceholder = () => {
    if (!isFromDetailsPage) {
      return "Please enter any additional information";
    }

    if (otherSeriesInCategory.length > 0) {
      const otherSeries = otherSeriesInCategory
        .filter((s) => s !== preSelectedProduct)
        .slice(0, 2)
        .join(" or ");

      return `Example: Also interested in ${otherSeries} from ${parentCategory}`;
    }

    return "Example: Also interested in other products like Inverters (specify model/series)";
  };

  const form = useForm<z.infer<typeof solarProductFormSchema>>({
    resolver: zodResolver(solarProductFormSchema),
    defaultValues: {
      fullname: "",
      email: "",
      phone: "",
      property: "",
      primary_product: preSelectedProduct || "",
      primary_category: parentCategory || "",
      quantity: "",
      additional_products: [],
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof solarProductFormSchema>) => {
    try {
      setLoading(true);
      const res = await axios.post("/api/solar-product", data);
      if (res.status === 200) {
        toast.success("Message sent successfully");
        form.reset({
          fullname: "",
          email: "",
          phone: "",
          property: "",
          primary_product: preSelectedProduct || "",
          primary_category: parentCategory || "",
          quantity: "",
          additional_products: [],
          message: "",
        });
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="mt-10 form-card lg:w-3/4 lg:mx-auto bg-teal-800/10 border-teal-400/10 text-white">
      <CardHeader>
        <CardTitle className="text-xl lg:text-2xl">
          {isFromDetailsPage ? "Request Quote" : "Cworth Solar Product Inquiry"}
        </CardTitle>
        <CardDescription>
          {isFromDetailsPage
            ? "Fill out the form below to request a quote for this product."
            : "Request information on our solar products."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="solar-product-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            {isFromDetailsPage && (
              <div className="mb-6 p-4 bg-teal-400/20 border border-teal-400/30 rounded-xl">
                <p className="text-sm text-gray-300 mb-2">
                  Requesting Quote For:
                </p>
                <div className="flex items-center gap-2">
                  <span className="px-4 py-2 bg-teal-400/30 text-white font-semibold rounded-lg text-base">
                    {parentCategory} - {preSelectedProduct}
                  </span>
                </div>
              </div>
            )}

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
                    <FieldLabel htmlFor="phone">Phone</FieldLabel>
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

            {isFromDetailsPage && (
              <Controller
                name="quantity"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="quantity">
                      Quantity (Optional)
                    </FieldLabel>
                    <Input
                      {...field}
                      id="quantity"
                      type="number"
                      min="1"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter quantity (e.g., 2)"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            )}

            <Controller
              name="additional_products"
              control={form.control}
              render={({ field, fieldState }) => (
                <FieldSet data-invalid={fieldState.invalid}>
                  <FieldLegend variant="label">
                    {isFromDetailsPage
                      ? "Also Interested In (Optional)"
                      : "Product Interest"}
                  </FieldLegend>
                  <FieldDescription>
                    {isFromDetailsPage
                      ? "Select any additional products. Specify models/series in the message below."
                      : "Select products of interest"}
                  </FieldDescription>
                  <FieldGroup data-slot="checkbox-group">
                    {solarProducts.map((product, index) => (
                      <Field
                        key={index}
                        orientation="horizontal"
                        data-invalid={fieldState.invalid}
                      >
                        <Checkbox
                          id={`additional-product-${index}`}
                          name={field.name}
                          aria-invalid={fieldState.invalid}
                          checked={
                            field.value?.includes(product.title) || false
                          }
                          onCheckedChange={(checked) => {
                            const currentValue = field.value || [];
                            const newValue = checked
                              ? [...currentValue, product.title]
                              : currentValue.filter(
                                  (value) => value !== product.title
                                );
                            field.onChange(newValue);
                          }}
                        />
                        <FieldLabel
                          htmlFor={`additional-product-${index}`}
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
                            value={property.title}
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
                  <FieldDescription>
                    {isFromDetailsPage && otherSeriesInCategory.length > 0
                      ? `Interested in other ${parentCategory} series? Specify models/quantities here.`
                      : "Please specify any additional products, models, or requirements"}
                  </FieldDescription>
                  <Textarea
                    {...field}
                    id="message"
                    aria-invalid={fieldState.invalid}
                    placeholder={generatePlaceholder()}
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
          ) : isFromDetailsPage ? (
            `Request Quote for ${preSelectedProduct}`
          ) : (
            "Request Product Information"
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
