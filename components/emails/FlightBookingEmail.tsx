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

interface FlightBookingEmailProps {
  fullname: string;
  email: string;
  phone: string;
  trip_type: string;
  departure_city: string;
  destination_city: string;
  departure_date: string;
  return_date?: string;
  number_of_passengers: string;
  travel_class?: string;
  message?: string;
}

export default function FlightBookingEmail({
  fullname,
  email,
  phone,
  trip_type,
  departure_city,
  destination_city,
  departure_date,
  return_date,
  number_of_passengers,
  travel_class,
  message,
}: FlightBookingEmailProps) {
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
          <Heading>New Flight Booking Request</Heading>

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
              Flight Details:
            </Text>
            <Text>
              Trip Type: {trip_type === "one-way" ? "One-Way" : "Round Trip"}
            </Text>
            <Text>From: {departure_city}</Text>
            <Text>To: {destination_city}</Text>
            <Text>Departure Date: {departure_date}</Text>
            {return_date && <Text>Return Date: {return_date}</Text>}
            <Text>Passengers: {number_of_passengers}</Text>
            {travel_class && <Text>Class: {travel_class}</Text>}
          </Section>

          {message && (
            <>
              <Hr />
              <Section>
                <Text style={{ fontSize: "16px", fontWeight: "bold" }}>
                  Special Requests:
                </Text>
                <Text>{message}</Text>
              </Section>
            </>
          )}

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
