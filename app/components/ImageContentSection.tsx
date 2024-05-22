"use client"

import Image from "next/image";
import ArticleImage from "@/public/section_2_img.png";
import { Rubik_Bubbles } from "next/font/google";
import { sections } from "@/app/utils/sections";
const rubik_bubbles = Rubik_Bubbles({ subsets: ["latin"], weight: "400", display:"swap" });

//GSAP
import gsap from 'gsap'
import  { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(useGSAP, ScrollTrigger) 


export default function ImageContentSection(){

  useGSAP(()=>{

    const tl = gsap.timeline({ scrollTrigger:{ trigger: "#article-image-2", start: 'top bottom', end: 'center center',} })
   
    tl.from("#article-image-2", { duration:2, x: -500, ease: 'power1.out', })
    tl.to('#article-image-2',{  duration:2, y:-10, yoyo:true, repeat:-1,ease: 'power1.inOut', }, ">")
    tl.to('#article-image-2',{  duration:3, x: -5, yoyo:true, repeat:-1,ease: 'power1.inOut', }, "<")

   
  })
  return(

    <section className="w-100 my-52">
      <article className="w-100 px-32 flex flex-nowrap gap-6">

        <div id="article-image-2" className="w-[50%] article-image">
          <Image
            className="mx-auto"
            src={ArticleImage} 
            alt="Daruma Image article"
            width={600}
            quality={100}
          />
          
        </div>
        
        <div className="w-[50%] article-content">
          <h3 className={rubik_bubbles.className + " text-[30px] mb-6 text-center"}>{sections.section_two.title}</h3>

          <p className="text-[26px] text-center leading-loose">
          {sections.section_two.description}
          </p>
        </div>

      </article>
    </section>
  )
}