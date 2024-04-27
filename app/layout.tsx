import type { Metadata } from "next";

import { Ruluko } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

const ruluko = Ruluko({subsets: ["latin"], weight: "400", display:"swap"});

//to use the font class  className={rubik_bubbles.className}

export const metadata: Metadata = {
  title: "Daruma.io",
  description: "Daruma, beatmaker and music producer from Italy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${ruluko.className} text-primaryBlack`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
