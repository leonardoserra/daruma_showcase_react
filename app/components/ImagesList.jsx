"use client"

import { imageList } from '../utils/imageList'
import { Suspense } from 'react';
import Image from 'next/image';

import gsap from "gsap";
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin( useGSAP , ScrollTrigger, Draggable  )

// gsap.registerPlugin(useGSAP, ScrollTrigger) 
export default function ImagesList(){
  gsap.config({
    nullTargetWarn: false,
  })

  //this don't WORK TODO
  useGSAP(()=>{
    Draggable.create(".wrapper", {
      type: "x",
      bounds: ".horizontal-scroll"
    });

   const cards = document.querySelectorAll('.carousel-image')

   cards.forEach(function(card, index){
     gsap.to(card, {
       autoAlpha: 1,
       y:0,
       delay:index - (0.66 * index),
       scrollTrigger:{
         trigger:"#carousel-image-container",
       }
     })
 
     card.addEventListener('mouseover', function(){
       gsap.to(this, {
         duration:0.2,
         scale:1.3,
         paddingRight:20,
         paddingLeft:20,
       })
     })
 
     card.addEventListener('mouseout', function(){
       gsap.to(this, {
         duration:0.4,
         scale:1,
         paddingRight:0,
         paddingLeft:0,


       })
     })
 
   })
 })
 

  return (
    imageList &&(
    <section className="horizontal-scroll">
      <div className="wrapper h-[400px] w-[300rem]">
        <div id="carousel-image-container" className="w-[100%] relative flex justify-around gap-3">
          <Suspense fallback={<div>LOADING...</div>}>
            {imageList.map((image, index) => {
              return (
                <div key={image.path + index} className="single-picture w-[600] h-[400px] mx-3 z-10">
                  <Image  loader={() => image.path + '?w=400&h=300&q=100' } className="carousel-image w-[400px] h-[300px] rounded-lg" src={image.path} alt={image.name} width={400} height={300} quality={100}/>
                </div>
              )
            })}
          </Suspense>
          {/* banner */}
          <div className="absolute left-0 top-12 banner w-[100%] h-[305px] bg-primaryBlack z-0"></div>
        </div>
      </div>
    </section>
    )
  )
}