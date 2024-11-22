"use client";

// compnents
import Header from "@/components/Header";
import { Providers } from "@/components/Proveders";
// style
import localFont from "next/font/local";
import "./globals.css";

// custom fonts provided for all documents
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// root layout with main tags
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html suppressHydrationWarning>
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased bg-light dark:bg-dark text-dark dark:text-light transition-all duration-200 flex flex-col min-h-screen`}
    >
      <Providers >
        <Header />        
          {children}
      </Providers>
    </body>
  </html>
  );
}

