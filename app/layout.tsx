import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EastLight Energy",
  description:
    "Major Distributor for Cworth Energy Systems. Quality solar products powering homes & businesses..",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "EastLight Energy",
    description:
      "Major Distributor for Cworth Energy Systems. Quality solar products powering homes & businesses.",
    url: "https://eastlight-energy.vercel.app",
    siteName: "EastLight Energy",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "EastLight Energy Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EastLight Energy",
    description:
      "Major Distributor for Cworth Energy Systems. Quality solar products powering homes & businesses..",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
