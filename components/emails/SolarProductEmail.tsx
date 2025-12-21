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
  primary_product?: string;
  primary_category?: string;
  quantity?: number;
  additional_products?: string[];
  message?: string;
}

export default function SolarProductEmail({
  fullname,
  email,
  phone,
  property,
  primary_product,
  primary_category,
  quantity,
  additional_products = [],
  message,
}: SolarProductEmailProps) {
  const isFromDetailsPage = !!primary_product;

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

          {/* PRIMARY PRODUCT */}
          {isFromDetailsPage && (
            <Section>
              <Text style={{ fontSize: "16px", fontWeight: "bold" }}>
                Primary Product Request:
              </Text>
              <Text style={{ marginLeft: "10px" }}>
                • {primary_category} - {primary_product}
              </Text>
              <Text style={{ marginLeft: "20px", color: "#6b7280" }}>
                Quantity: {quantity || 1} unit(s)
              </Text>
            </Section>
          )}

          {/* ADDITIONAL PRODUCTS */}
          {additional_products.length > 0 && (
            <>
              {isFromDetailsPage && <Hr />}
              <Section>
                <Text style={{ fontSize: "16px", fontWeight: "bold" }}>
                  {isFromDetailsPage
                    ? "Also Interested In:"
                    : "Products of Interest:"}
                </Text>
                {additional_products.map((product, index) => (
                  <Text key={index} style={{ marginLeft: "10px" }}>
                    • {product}
                  </Text>
                ))}
              </Section>
            </>
          )}

          {/* MESSAGE */}
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
