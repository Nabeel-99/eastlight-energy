import ConfirmationEmail from "@/components/emails/ConfirmationEmail";
import HotelBookingEmail from "@/components/emails/HotelBookingEmail";
import { appendToSheet } from "@/lib/google-sheet";
import { timestamp } from "@/lib/utils";

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);
export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.json();
    console.log("formData", formData);

    //  contact email
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "codingacademy599@gmail.com",
      replyTo: formData.email,
      subject: "New Hotel Booking Form Submission",
      react: HotelBookingEmail(formData),
    });

    // confirmation Email
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: formData.email,
      subject: "Confirmation Email",
      react: ConfirmationEmail({
        fullname: formData.fullname,
        formType: "hotel-booking",
      }),
    });

    await appendToSheet("Hotel Booking Form", [
      timestamp,
      formData.fullname,
      formData.email,
      `'${formData.phone}`,
      formData.location,
      `'${formData.number_of_guests}`,
      `'${formData.number_of_rooms}`,
      formData.check_in,
      formData.check_out,
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
