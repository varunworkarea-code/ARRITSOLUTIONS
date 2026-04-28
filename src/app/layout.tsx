import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ARR IT SOLUTIONS INC | Smart IT Solutions & Staffing",
  description: "Premium IT staffing and consulting company with over 20 years of credibility. Your partner in smart IT solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased text-foreground bg-background`}>
        {children}
      </body>
    </html>
  );
}
