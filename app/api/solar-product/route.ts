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

    //  contact email
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "codingacademy599@gmail.com",
      replyTo: formData.email,
      subject: "New Solar Product Form Submission",
      react: SolarProductEmail(formData),
    });

    // confirmation Email
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: formData.email,
      subject: "Confirmation Email",
      react: ConfirmationEmail({
        fullname: formData.fullname,
        formType: "solar-products",
      }),
    });

    await appendToSheet("Solar Products Form", [
      timestamp,
      formData.fullname,
      formData.email,
      `'${formData.phone}`,
      formData.product_interest.join(", "),
      formData.property,
      formData.message,
    ]);

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
};
