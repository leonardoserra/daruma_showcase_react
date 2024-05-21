import type { Metadata } from "next";

import { Ruluko } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AudioPlayer from "./components/AudioPlayer";
import LogoHero from "./components/LogoHero";
import ContentImageSection from "./components/ContentImageSection";
import ImageContentSection from "./components/ImageContentSection";
import ImagesList from "./components/ImagesList";
import SpotifyAlbumsList from "./components/SpotifyAlbumsList";

// export const dynamic = 'force-dynamic'

const ruluko = Ruluko({subsets: ["latin"], weight: "400", display:"swap", preload: true});

export const metadata: Metadata = {
  title: "Daruma.io",
  description: "Daruma, beatmaker and music producer from Italy",
  generator: 'Next.js',
  applicationName: 'Daruma | Beatmaker',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript', 'Daruma', 'Beatmaker', 'Music'],
  authors: [{ name: 'Leonardo Serra' }],
  creator: 'Leonardo Serra',
  publisher: 'github',
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${ruluko.className} text-primaryBlack relative`}>
        <Header/>
        <LogoHero/>
        <ContentImageSection/>  
        <ImagesList/>
        <ImageContentSection/> 
        {children}
        <SpotifyAlbumsList/>
        <Footer/>
        <AudioPlayer/>
      </body>
    </html>
  );
}
 