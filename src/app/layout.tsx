import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import ClientLayoutSwitcher from "./ClientLayoutSwitcher";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pataki Landing Studio",
  description: "Software para poner el mundo en tus manos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body
          className={`${poppins.variable} ${inter.variable} antialiased`}
        >
          <ClientLayoutSwitcher>{children}</ClientLayoutSwitcher>
        </body>
      </html>
      <Analytics />
    </>
  );
}
