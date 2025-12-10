import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eastlightenergy.com"),

  title: {
    default: "EastLight Energy - Solar Solutions for Homes & Businesses",
    template: "%s | EastLight Energy",
  },
  description:
    "Major distributor for Cworth Energy Systems. Quality solar products, installation services, and energy solutions for homes and businesses across Nigeria.",
  keywords: [
    "solar energy Nigeria",
    "solar panels Abuja",
    "Cworth Energy distributor",
    "solar installation Nigeria",
    "renewable energy",
    "solar products",
    "inverters Nigeria",
    "solar batteries",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "EastLight Energy - Solar Solutions for Homes & Businesses",
    description:
      "Major distributor for Cworth Energy Systems. Quality solar products, installation services, and energy solutions across Nigeria.",
    url: "https://eastlightenergy.com",
    siteName: "EastLight Energy",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EastLight Energy - Sustainable Solar Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EastLight Energy - Solar Solutions",
    description:
      "Major distributor for Cworth Energy Systems. Quality solar products and installation services across Nigeria.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
