"use client"

import Image from "next/image"

const carouselFolder = '/carousel_imgs/'

const imageList = [
  {
    path: carouselFolder + 'carosello_1.jpg'
  },
  {
    path: carouselFolder + 'carosello_2.jpg'
  },
  {
    path: carouselFolder + 'carosello_3.jpg'
  },
  {
    path: carouselFolder + 'carosello_3.jpg'
  },
  {
    path: carouselFolder + 'carosello_3.jpg'
  },
  {
    path: carouselFolder + 'carosello_3.jpg'
  },
]
export default function CarouselImageList(){


  return (
    <>
      {imageList.map((image)=>{
        return (
        <div className="w-[700px] h-[400px] mx-12 -mt-12 z-10">
          <Image className="carousel-image-wrapper" src={image.path} alt={image.path} width={400} height={300}/>
        </div>
      )
      })}
    </>
  )
}