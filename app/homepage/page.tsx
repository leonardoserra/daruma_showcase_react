"use client"

import LogoHero from "../components/LogoHero";
import ContentImageSection from "../components/ContentImageSection";
import ImageContentSection from "../components/ImageContentSection";
import ImagesList from "../components/ImagesList";
import SpotifyAlbumsList from "../components/SpotifyAlbumsList";

export default function HomePage() {
  return (
    <>
      <LogoHero/>
      <ContentImageSection/>  
      <ImagesList/>{/* Still not a carousel */}
      <ImageContentSection/> 
      <SpotifyAlbumsList />
    </>
  );
}
