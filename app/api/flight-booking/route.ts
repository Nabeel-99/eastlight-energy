import ConfirmationEmail from "@/components/emails/ConfirmationEmail";
import FlightBookingEmail from "@/components/emails/FlightBookingEmail";
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
      subject: "New Flight Booking Form Submission",
      react: FlightBookingEmail(formData),
    });

    // confirmation Email
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: formData.email,
      subject: "Confirmation Email",
      react: ConfirmationEmail({
        fullname: formData.fullname,
        formType: "flight-booking",
      }),
    });

    await appendToSheet("Flight Booking Form", [
      timestamp,
      formData.fullname,
      formData.email,
      `'${formData.phone}`,
      formData.trip_type,
      formData.departure_city,
      formData.destination_city,
      formData.departure_date,
      formData.return_date || "N/A",
      `'${formData.number_of_passengers}`,
      formData.travel_class || "N/A",
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
