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

import type { Metadata } from 'next'
const domain = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3001";

export const metadata: Metadata = {
  title: 'Undangan Online, Digital, Web',
  description: 'Jasa Undangan Oline free (gratis) & Premium',
  icons: {
    icon: "/window.svg",
  },
  openGraph: {
    title: `Undangan Online, Digital dan Web`,
    description: "Jasa Undangan Oline free & Premium, Brebes",
    type: "website",
    images: [
      {
        url: `${domain}/one.png`,
        width: 1200,
        height: 630,
        alt: "Preview Undangan",
      },
    ],
  },
}

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
