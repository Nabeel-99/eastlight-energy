import ACServiceEmail from "@/components/emails/ACServiceEmail";
import ConfirmationEmail from "@/components/emails/ConfirmationEmail";
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
      from: "EastLight Energy <noreply@eastlightenergy.com>",
      to: process.env.EMAIL!,
      replyTo: formData.email,
      subject: "New AC Service Form Submission",
      react: ACServiceEmail(formData),
    });

    // confirmation Email
    await resend.emails.send({
      from: "EastLight Energy <noreply@eastlightenergy.com>",
      to: formData.email,
      subject: "Confirmation Email",
      react: ConfirmationEmail({
        fullname: formData.fullname,
        formType: "ac-service",
      }),
    });

    await appendToSheet("AC Service Form", [
      timestamp,
      formData.fullname,
      formData.email,
      `'${formData.phone}`,
      formData.service,
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
