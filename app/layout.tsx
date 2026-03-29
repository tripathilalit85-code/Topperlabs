import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Topperlabs - AI-Powered Exam Generator for Schools",
  description:
    "Generate professional exam papers, mock tests, and answer keys in minutes. AI-powered question generation, extensive question bank, and seamless exam management for schools.",
  keywords: [
    "exam generator",
    "test paper maker",
    "AI questions",
    "school exams",
    "mock tests",
    "answer key generator",
  ],
  authors: [{ name: "Topperlabs" }],
  openGraph: {
    title: "Topperlabs - AI-Powered Exam Generator",
    description: "Generate professional exam papers in minutes",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#7c3aed",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
