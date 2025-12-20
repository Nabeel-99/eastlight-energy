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

interface SolarProductEmailProps {
  fullname: string;
  email: string;
  phone: string;
  property: string;
  product_interest: string[];
  message?: string;
  quantity?: number;
}

export default function SolarProductEmail({
  fullname,
  email,
  phone,
  property,
  product_interest,
  message,
  quantity,
}: SolarProductEmailProps) {
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
          <Heading>New Solar Product Inquiry</Heading>

          <Section>
            <Text style={{ fontSize: "16px", fontWeight: "bold" }}>
              Client Details:
            </Text>
            <Text>Name: {fullname}</Text>
            <Text>Email: {email}</Text>
            <Text>Phone: {phone}</Text>
            <Text>Property Type: {property}</Text>
          </Section>

          <Hr />

          <Section>
            <Text style={{ fontSize: "16px", fontWeight: "bold" }}>
              Products of Interest:
            </Text>
            {product_interest.map((product, index) => (
              <Text key={index}>• {product}</Text>
            ))}
            <Text>• Quantity: {quantity}</Text>
          </Section>

          {message && (
            <>
              <Hr />
              <Section>
                <Text style={{ fontSize: "16px", fontWeight: "bold" }}>
                  Additional Information:
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
