import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
  Link,
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
            borderRadius: "8px",
          }}
        >
          <Heading>Thank You for Contacting EastLight Energy!</Heading>

          <Section>
            <Text style={{ fontSize: "16px", lineHeight: "1.6" }}>
              Dear {fullname},
            </Text>
            <Text style={{ fontSize: "16px", lineHeight: "1.6" }}>
              {message}
            </Text>
          </Section>

          <Hr style={{ margin: "24px 0", borderColor: "#e5e7eb" }} />

          <Section>
            <Text
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "12px",
                color: "#1f2937",
              }}
            >
              Contact Us:
            </Text>
            <Text
              style={{ fontSize: "14px", margin: "8px 0", lineHeight: "1.6" }}
            >
              <strong>Phone:</strong>{" "}
              <Link href="tel:+2347072245877">07072245877</Link>
              {" | "}
              <Link href="tel:+2347072252441">07072252441</Link>
            </Text>
            <Text
              style={{ fontSize: "14px", margin: "8px 0", lineHeight: "1.6" }}
            >
              <strong>Email:</strong>{" "}
              <Link href="mailto:info@eastlightenergy.com">
                info@eastlightenergy.com
              </Link>
            </Text>
            <Text
              style={{ fontSize: "14px", margin: "8px 0", lineHeight: "1.6" }}
            >
              <strong>Office:</strong> 16 Gwani Street, Wuse Zone 4, Abuja
            </Text>
            <Text
              style={{ fontSize: "14px", margin: "8px 0", lineHeight: "1.6" }}
            >
              <strong>Hours:</strong> Monday - Friday, 9:00 AM - 4:00 PM
            </Text>
          </Section>

          <Hr style={{ margin: "24px 0", borderColor: "#e5e7eb" }} />

          <Text
            style={{
              fontSize: "12px",
              color: "#6b7280",
              lineHeight: "1.6",
            }}
          >
            Best regards,
            <br />
            <strong>EastLight Energy Team</strong>
            <br />
            Major Distributor for Cworth Energy Systems
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
