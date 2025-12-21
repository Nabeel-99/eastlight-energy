import ConfirmationEmail from "@/components/emails/ConfirmationEmail";
import SolarProductEmail from "@/components/emails/SolarProductEmail";
import { appendToSheet } from "@/lib/google-sheet";
import { timestamp } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.json();

    // Contact email
    await resend.emails.send({
      from: "EastLight Energy <noreply@eastlightenergy.com>",
      to: process.env.EMAIL!,
      replyTo: formData.email,
      subject: "New Solar Product Form Submission",
      react: SolarProductEmail(formData),
    });

    // Confirmation Email
    await resend.emails.send({
      from: "EastLight Energy <noreply@eastlightenergy.com>",
      to: formData.email,
      subject: "Confirmation Email",
      react: ConfirmationEmail({
        fullname: formData.fullname,
        formType: "solar-products",
      }),
    });

    const isFromDetailsPage = !!formData.primary_product;

    const primaryProductColumn = isFromDetailsPage
      ? `${formData.primary_category} - ${formData.primary_product}`
      : "N/A";

    const quantityColumn = `'${formData.quantity}` || "N/A";

    const additionalProductsColumn =
      formData.additional_products && formData.additional_products.length > 0
        ? formData.additional_products.join(", ")
        : "N/A";

    await appendToSheet("Solar Products Form", [
      timestamp,
      formData.fullname,
      formData.email,
      `'${formData.phone}`,
      formData.property,
      primaryProductColumn,
      quantityColumn,
      additionalProductsColumn,
      formData.message || "N/A",
    ]);

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
};
