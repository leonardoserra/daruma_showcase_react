import LogoHero from "./components/LogoHero";
import ContentImageSection from "./components/ContentImageSection";
import ImageContentSection from "./components/ImageContentSection";
import ImagesList from "./components/ImagesList";
import SpotifyAlbumsList from "./components/SpotifyAlbumsList";

export default function Home() {
  return (
    <main>
      <div className="mt-12 text-center">
      <div className="custom-cursor">
        <div className="cursor cursor--large"></div>
        <div className="cursor cursor--small"></div>
      </div>
        <LogoHero/>
        <ContentImageSection/>  
        <ImagesList/>{/* Still not a carousel */}
        <ImageContentSection/> 
        <SpotifyAlbumsList  />
      </div>
    </main>   
  );
}
