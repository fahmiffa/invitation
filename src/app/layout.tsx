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

const domain = process.env.NEXT_PUBLIC_BASE_URL || "https://undangan.qrana.biz.id";


export const metadata: Metadata = {
  title: "The Wedding Of Mastiroh & Dwi aji Saputra",
  description: "The Wedding Of Mastiroh & Dwi aji Saputra",
  icons: {
    icon: "/window.svg",
  },
  openGraph: {
    title: "The Wedding Of Mastiroh & Dwi Aji Saputra",
    description: "Undangan Pernikahan Online. Hadir dan beri doa terbaik untuk kami.",
    url: domain,
    type: "website",
    images: [
      {
        url: `${domain}/home.jpg`,
        width: 1200,
        height: 630,
        alt: "Preview Undangan",
      },
    ],
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
