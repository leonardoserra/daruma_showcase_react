"use client"

import Image from "next/image"

const carouselFolder = '/carousel_imgs/'

const imageList = [
  {
    name:'carousel_image',
    path: carouselFolder + 'carosello_1.jpg'
  },
  {
    name:'carousel_image',
    path: carouselFolder + 'carosello_2.jpg'
  },
  {
    name:'carousel_image',
    path: carouselFolder + 'carosello_3.jpg'
  }
]
export default function CarouselImageList(){


  return (
    <>
    <div className="w-[100%] relative flex gap-3">
      {imageList.map((image)=>{
        return (
        <div className="w-1/3 h-[400px] mx-3 z-10">
          <Image className="carousel-image  rounded-lg" src={image.path} alt={image.name} width={400} height={300}/>
        </div>
      )
      })}
    {/* banner */}
    <div className="absolute left-0 top-12 banner w-[100%] h-[305px] bg-primaryBlack z-0"></div>
    </div>
    </>
  )
}