"use client"

import Image from "next/image"
import { imageList } from '../utils/imageList'

import gsap from "gsap";
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin( ScrollTrigger, useGSAP )


// gsap.registerPlugin(useGSAP, ScrollTrigger) 
export default function ImagesList(){
  gsap.config({
    nullTargetWarn: false,
  })

  //this don't WORK TODO
  gsap.to('.single-picture', {
    autoAlpha: 1,
    y:0,
    stagger: 0.7,
    scrollTrigger:{
      trigger:'#carousel-image-container'
    }
  })

  return (
    <section className="horizontal-scroll">
      <div className="wrapper h-[400px] w-[300rem]">
        <div id="carousel-image-container" className="w-[100%] relative flex justify-around gap-3">
          {imageList?.map((image, index) => {
            return (
              <div key={image.path + index} className="single-picture w-[600] h-[400px] mx-3 z-10">
                <Image className="carousel-image rounded-lg" src={image.path} alt={image.name} width={400} height={300} />
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