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

interface SolarInstallerEmailProps {
  fullname: string;
  email: string;
  phone: string;
  location: string;
  message: string;
}

export default function SolarInstallerEmail({
  fullname,
  email,
  phone,
  location,
  message,
}: SolarInstallerEmailProps) {
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
            <Text style={{ fontSize: "16px", fontWeight: "bold" }}>
              Client Details:
            </Text>
            <Text>Name: {fullname}</Text>
            <Text>Email: {email}</Text>
            <Text>Phone: {phone}</Text>
            <Text>Location/State: {location}</Text>
          </Section>

          <Hr />

          <Section>
            <Text style={{ fontSize: "16px", fontWeight: "bold" }}>
              Installation Details:
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
