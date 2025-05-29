import type { Metadata } from "next";
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
  title: "Shubh Verma | Full-Stack Web Developer",
  description:
    "Shubh Verma is a Full-Stack Web Developer skilled in MERN stack, Next.js, and building scalable web applications. Learning in public and building impactful tech.",
  verification: {
    google: "3Mi2PLSmwfA6DNdxoRjmaOKr4-kaqcwuCXgbJMddmjI",
  },
  openGraph: {
    title: "Shubh Verma | Full-Stack Web Developer",
    description:
      "Shubh Verma is a Full-Stack Web Developer skilled in MERN stack, Next.js, and building scalable web applications.",
    url: "https://shubhverma.me",
    siteName: "Shubh Verma",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubh Verma | Full-Stack Web Developer",
    description:
      "Portfolio of Shubh Verma — MERN & Next.js developer, building scalable web applications and learning in public.",
    creator: "@ShubhOnX", // update this to your actual Twitter handle
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
