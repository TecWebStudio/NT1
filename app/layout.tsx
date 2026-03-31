import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NT1 Service SRL — Lavorazioni Meccaniche di Precisione",
  description:
    "NT1 Service SRL: lavorazione di precisione su acciaio, gomma e plastica con tecnologia CNC all'avanguardia. San Stino di Livenza (VE).",
  keywords:
    "lavorazioni meccaniche, CNC, acciaio, gomma, plastica, precisione, fresatura, tornitura, San Stino di Livenza",
  openGraph: {
    title: "NT1 Service SRL — Lavorazioni Meccaniche di Precisione",
    description:
      "Al servizio delle aziende per sviluppare ed assistere le vostre idee.",
    type: "website",
    locale: "it_IT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
