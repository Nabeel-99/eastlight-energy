import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
} from "@react-email/components";

interface HotelBookingEmailProps {
  fullname: string;
  email: string;
  phone: string;
  location: string;
  check_in: string;
  check_out: string;
  number_of_rooms: string;
  number_of_guests: string;
  message: string;
}

export default function HotelBookingEmail({
  fullname,
  email,
  phone,
  location,
  check_in,
  check_out,
  number_of_rooms,
  number_of_guests,
  message,
}: HotelBookingEmailProps) {
  return (
    <Html>
      <Head />
      <Body
        style={{ backgroundColor: "#f6f9fc", fontFamily: "Arial, sans-serif" }}
      >
        <Container
          style={{
            backgroundColor: "#ffffff",
            margin: "0 auto",
            padding: "20px",
            maxWidth: "600px",
          }}
        >
          <Heading>New Hotel Booking Request</Heading>

          <Section>
            <Text style={{ fontSize: "16px", fontWeight: "bold" }}>
              Client Details:
            </Text>
            <Text>Name: {fullname}</Text>
            <Text>Email: {email}</Text>
            <Text>Phone: {phone}</Text>
          </Section>

          <Hr />

          <Section>
            <Text style={{ fontSize: "16px", fontWeight: "bold" }}>
              Booking Details:
            </Text>
            <Text>Location: {location}</Text>
            <Text>Check-in: {check_in}</Text>
            <Text>Check-out: {check_out}</Text>
            <Text>Number of Rooms: {number_of_rooms}</Text>
            <Text>Number of Guests: {number_of_guests}</Text>
          </Section>

          <Hr />

          <Section>
            <Text style={{ fontSize: "16px", fontWeight: "bold" }}>
              Special Requests:
            </Text>
            <Text>{message}</Text>
          </Section>

          <Hr />
          <Text style={{ fontSize: "12px", color: "#6b7280" }}>
            Submitted on {new Date().toLocaleDateString()} at{" "}
            {new Date().toLocaleTimeString()}
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
