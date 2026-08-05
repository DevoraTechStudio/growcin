import type { Metadata } from "next";
import { Golos_Text } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FinalCTA } from "@/components/layout/FinalCTA";
import "./globals.css";

const golos = Golos_Text({
  variable: "--font-golos",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Growcin | AI Marketing That Actually Grows Your Business",
  description:
    "Growcin is the AI marketing platform that automates SEO, social media, ads, email, and analytics — so your business grows without the busywork.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${golos.variable} h-full antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,0&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--color-base)] text-[var(--color-text-primary)] font-sans antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <FinalCTA />
        <Footer />
      </body>
    </html>
  );
}
