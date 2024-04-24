"use client"

import Image from "next/image"
import { imageList } from '../utils/imageList'

export default function CarouselImageList(){


  return (
    <section className="horizontal-scroll">
      <div className="wrapper h-[400px] w-[300rem]">
        <div className="w-[100%] relative flex justyfy-around gap-3">
          {imageList.map((image) => {
            return (
              <div key={image.path} className="w-[600] h-[400px] mx-3 z-10">
                <Image className="carousel-image  rounded-lg" src={image.path} alt={image.name} width={400} height={300} />
              </div>
            )
          })}
          {/* banner */}
          <div className="absolute left-0 top-12 banner w-[100%] h-[305px] bg-primaryBlack z-0"></div>
        </div>
      </div>
    </section>
  )
}