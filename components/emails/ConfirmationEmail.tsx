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

interface ConfirmationEmailProps {
  fullname: string;
  formType:
    | "contact"
    | "solar-installation"
    | "solar-products"
    | "ac-service"
    | "hotel-booking"
    | "flight-booking"
    | "affiliate-program";
}

export default function ConfirmationEmail({
  fullname,
  formType,
  //   service,
}: ConfirmationEmailProps) {
  let message = "";
  switch (formType) {
    case "contact":
      message =
        "Thank you for contacting us. We will get back to you within 24 hours.";
      break;
    case "solar-installation":
      message =
        "Thank you for your interest in our solar installation service. We have received your request and our team will contact you within 24 hours.";
      break;
    case "solar-products":
      message =
        "Thank you for your interest in our solar products. We have received your request and our team will contact you within 24 hours.";
      break;
    case "ac-service":
      message =
        "Thank you for your interest in our AC service. We have received your request and our team will contact you within 24 hours.";
      break;
    case "hotel-booking":
      message =
        "Thank you for your interest in our hotel booking service. We have received your request and our team will contact you within 24 hours.";
      break;
    case "flight-booking":
      message =
        "Thank you for your interest in our flight booking service. We have received your request and our team will contact you within 24 hours.";
      break;
    case "affiliate-program":
      message =
        "Thank you for your interest in our affiliate program. We have received your request and our team will contact you within 24 hours.";
      break;
    default:
      message =
        "Thank you for your interest in our services. We have received your request and our team will contact you within 24 hours.";
      break;
  }
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
          <Heading>Thank You for Contacting Us!</Heading>

          <Section>
            <Text>Dear {fullname},</Text>
            <Text>{message}</Text>
          </Section>

          <Hr />

          <Section>
            <Text style={{ fontSize: "20px", fontWeight: "bold" }}>
              Contact Us:
            </Text>
            <Text>Phone: +234 XXX XXX XXXX</Text>
            <Text>Email: info@eastlightenergy.ng</Text>
          </Section>

          <Hr />

          <Text style={{ fontSize: "12px", color: "#6b7280" }}>
            Best regards,
            <br />
            Eastlight Energy Team
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
