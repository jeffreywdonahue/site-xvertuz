import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Xvertuz | Premium Vape & Smoke Shop | UT · CO · ID · WY",
  description:
    "Elevate every puff with quality you can trust. Xvertuz offers premium vapes, disposables, CBD, kratom & smoke accessories across 4 locations in Vernal UT, Dinosaur CO, Pocatello ID, and Rock Springs WY.",
  keywords:
    "vape shop, smoke shop, disposables, CBD, kratom, Vernal UT, Dinosaur CO, Pocatello ID, Rock Springs WY",
  openGraph: {
    title: "Xvertuz | Premium Vape & Smoke Shop",
    description:
      "Vast selection. Real help. Fair prices. 4 locations across UT, CO, ID & WY.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
