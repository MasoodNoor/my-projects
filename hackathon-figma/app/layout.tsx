import type { Metadata } from "next";
import "./globals.css";
import NavbarTop from "@/components/navbarTop";
import Footer from "@/components/footer";
import { Plus_Jakarta_Sans } from "next/font/google";
import type { Viewport } from 'next'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Hackathon Project",
  description: "Generated by Masood Noor",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${plusJakartaSans.variable} antialiased `  }>
        <NavbarTop />
        {children}
        <Footer />
      </body>
    </html>
  );
}
