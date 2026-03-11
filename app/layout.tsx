import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Flora Jaya - Segarkan Ruanganmu",
  description:
    "Bawa keindahan alam ke dalam rumah Anda dengan koleksi tanaman hias terbaik dari Flora Jaya. Tanaman indoor, outdoor, kaktus, sukulen, dan perlengkapan berkebun.",
  keywords: [
    "tanaman hias",
    "Flora Jaya",
    "tanaman indoor",
    "kaktus",
    "sukulen",
    "pot tanaman",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} font-display antialiased bg-background-light shadow-2xl max-w-md mx-auto text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
