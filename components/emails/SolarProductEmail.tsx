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

interface SolarBookingEmailProps {
  name: string;
  email: string;
  phone: string;
  state: string;
  systemSize: string;
  address: string;
  notes?: string;
}

export default function SolarProductEmail({
  name,
  email,
  phone,
  state,
  systemSize,
  address,
  notes,
}: SolarBookingEmailProps) {
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
          <Heading>New Solar Installation Request</Heading>

          <Section>
            <Text style={{ fontSize: "16px", lineHeight: "24px" }}>
              <strong>Client Details:</strong>
            </Text>

            <Text>
              <strong>Name:</strong> {name}
            </Text>
            <Text>
              <strong>Email:</strong> {email}
            </Text>
            <Text>
              <strong>Phone:</strong> {phone}
            </Text>
            <Text>
              <strong>State:</strong> {state}
            </Text>

            <Hr />

            <Text style={{ fontSize: "16px", lineHeight: "24px" }}>
              <strong>Installation Details:</strong>
            </Text>

            <Text>
              <strong>System Size:</strong> {systemSize}
            </Text>
            <Text>
              <strong>Address:</strong> {address}
            </Text>
            {notes && (
              <Text>
                <strong>Notes:</strong> {notes}
              </Text>
            )}
          </Section>

          <Hr />

          <Text style={{ fontSize: "12px", color: "#6b7280" }}>
            Submitted on {new Date().toLocaleDateString()}
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
