import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Eye Point Optics | আই পয়েন্ট অপটিক্স",
  description: "Premium Optical Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Navbar />
        {children}
      </body>
    </html>
  );
}