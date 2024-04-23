import LogoHero from "./components/LogoHero";
import ContentImageSection from "./components/ContentImageSection";
import ImageContentSection from "./components/ImageContentSection";
import Carousel from "./components/Carousel";



export default function Home() {
  return (
    <main>
      <div className="mt-12 text-center">
      
        <LogoHero/>

        <ContentImageSection/>  

        {/* <Carousel/> */}

        <ImageContentSection/>  

      </div>
    </main>   
  );
}
