import CarouselImageList from "./CarouselImageList"

export default function Carousel(){

  return (
    <section>
      {/* <img src={imageList[0].image_path} alt="ciao" /> */}

      <div className="wrapper w-[100%] h-[400px] flex items-center relative overflow-x-scroll m-auto">
        <CarouselImageList/>

        {/* Black banner behind the images */}
        <div className="absolute left-0 top-12 banner w-[100%] h-[305px] bg-primaryBlack flex z-0"></div>

      </div>
    </section>
  )
}