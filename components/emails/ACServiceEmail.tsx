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

interface ACServiceEmailProps {
  fullname: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export default function ACServiceEmail({
  fullname,
  email,
  phone,
  service,
  message,
}: ACServiceEmailProps) {
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
          <Heading>New AC Service Request</Heading>

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
              Service Requested:
            </Text>
            <Text>{service}</Text>
          </Section>

          <Hr />

          <Section>
            <Text style={{ fontSize: "16px", fontWeight: "bold" }}>
              Additional Information:
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
