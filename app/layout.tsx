import type { Metadata } from "next";
import { Space_Grotesk, Inter_Tight } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const display = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

const sans = Inter_Tight({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: {
    default: "MORAK — Fotovoltika, klimatizácie, kamerové systémy a elektroinštalácie",
    template: "%s | MORAK"
  },
  description:
    "MORAK je certifikovaný realizátor fotovoltických elektrární, klimatizačných systémov, kamerových systémov a elektroinštalácií na Slovensku. Kompletný servis od návrhu po dlhodobú údržbu.",
  keywords: [
    "fotovoltika",
    "fotovoltické elektrárne",
    "klimatizácie",
    "kamerové systémy",
    "elektroinštalácie",
    "dotácie fotovoltika",
    "MORAK",
    "Slovensko"
  ],
  authors: [{ name: "MORAK" }],
  creator: "MORAK",
  openGraph: {
    type: "website",
    locale: "sk_SK",
    title: "MORAK — energetické a elektro riešenia",
    description:
      "Fotovoltika, klimatizácie, kamerové systémy a elektroinštalácie. Realizácia na kľúč s päťročnou zárukou.",
    siteName: "MORAK"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
