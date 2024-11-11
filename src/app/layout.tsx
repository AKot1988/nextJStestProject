import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header, Footer } from "@/components";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer title={"footer"} />
      </body>
    </html>
  );
}
