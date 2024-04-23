import type { Metadata } from "next";
import { Rubik_Bubbles, Reenie_Beanie, Ruluko } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const rubik_bubbles = Rubik_Bubbles({subsets: ["latin"], weight:"400"});
const reenie_beanie = Reenie_Beanie({ subsets: ["latin"], weight:"400"});
const ruluko = Ruluko({subsets: ["latin"], weight: "400"});

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
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
