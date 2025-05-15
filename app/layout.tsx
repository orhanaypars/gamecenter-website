"use client";

import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import WhatsappFab from "./_components/WhatsappFab";

const nunito = Nunito({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-nunito",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="tr" className={nunito.className}>
        <body className="antialiased">
          <div className="min-h-screen">
            <Navbar />
            {children}
          </div>
          <WhatsappFab />
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
