import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const manrope = localFont({
  variable: "--font-manrope",
  display: "swap",
  src: [
    { path: "./fonts/manrope/manrope-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/manrope/manrope-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/manrope/manrope-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/manrope/manrope-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "./fonts/manrope/manrope-latin-800-normal.woff2", weight: "800", style: "normal" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.swaedpetroleum.com"),
  title: {
    default: "SWAED Petroleum — EPCC Contractor for Oil & Gas Infrastructure",
    template: "%s — SWAED Petroleum",
  },
  description:
    "SWAED Petroleum is an EPCC contractor delivering cross-country pipeline construction, live pipeline repair, field surface facilities, hot tapping, intelligent pigging, inspection & NDT, and operations & maintenance across Turkey, Sudan, South Sudan, Iraq, the UAE, Algeria and Syria.",
  keywords: [
    "SWAED Petroleum",
    "EPCC contractor",
    "pipeline repair",
    "oil and gas construction",
    "hot tapping",
    "South Sudan pipeline",
  ],
  openGraph: {
    title: "SWAED Petroleum — More Than a Company",
    description:
      "Engineering, procurement, construction and commissioning for onshore and offshore hydrocarbon infrastructure.",
    siteName: "SWAED Petroleum",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="min-h-screen bg-background text-text-primary flex flex-col">
        <TopBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
