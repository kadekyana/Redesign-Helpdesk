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

export const metadata = {
  title: {
    default: "MISSU - Manajemen Issue Undiksha",
    template: "%s | MISSU Undiksha",
  },
  description:
    "Sistem Manajemen Issue Undiksha (MISSU) - Dokumentasi dan penanganan issue berupa pengaduan dan permohonan informasi di Universitas Pendidikan Ganesha.",
  icons: {
    icon: [
      { url: "/undiksha-logo.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/undiksha-logo.svg",
    apple: "/undiksha-logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
