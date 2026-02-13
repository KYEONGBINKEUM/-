import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/common/navbar";

export const metadata: Metadata = {
  title: "MEDWEB",
  description: "Hospital hompage design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
