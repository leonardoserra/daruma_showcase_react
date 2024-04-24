import LogoHero from "./components/LogoHero";
import ContentImageSection from "./components/ContentImageSection";
import ImageContentSection from "./components/ImageContentSection";
import CarouselImageList from "./components/CarouselImageList";
import CarouselSpotifyAlbums from "./components/CarouselSpotifyAlbums";

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
        <CarouselImageList/>{/* Still not a carousel */}
        <ImageContentSection/> 
        <CarouselSpotifyAlbums/>
      </div>
    </main>   
  );
}
