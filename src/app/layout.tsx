import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Dasehn Group Limited | Logistics, Materials and Equipment Leasing",
  description:
    "A modern rebuild for Dasehn Group Limited, serving Kenyan infrastructure projects with logistics, construction materials and equipment leasing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={orbitron.variable}>{children}</body>
    </html>
  );
}
