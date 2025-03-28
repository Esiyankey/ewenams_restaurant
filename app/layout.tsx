import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css";
import Navbar from "./(components)/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Eddie's Food Bites and Restaurant",
  description: "Delight in every bite with our thoughtfully crafted dishes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
