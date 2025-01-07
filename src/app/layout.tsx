import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer"
import NavBar from "@/components/navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Monadnocks",
  description: "Monadnocks Group",
};

export default function RootLayout({
  children,
  }: Readonly<{
    children: React.ReactNode;
    }>) {
      return (
        <html lang="en">
      <body className={inter.className}>
      <NavBar/>
        {children}</body>
      <Footer/>
    </html>
  );
}
