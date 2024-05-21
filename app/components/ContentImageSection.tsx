"use client"

import Image from "next/image";
import ArticleImage from "@/public/section_1_img.png";
import { Rubik_Bubbles } from "next/font/google";
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import sections from "@/app/utils/sections";
gsap.registerPlugin(ScrollTrigger, useGSAP) 

const rubik_bubbles = Rubik_Bubbles({ subsets: ["latin"], weight: "400", display:"swap" });
export default function ContentImageSection(){

  useGSAP(()=>{

    const tl = gsap.timeline({  scrollTrigger:{ trigger: "#article-image-1", start: 'top bottom',  end: 'center center' } })

    tl.from('#article-image-1', { duration:2, x: 500, ease: 'power1.out'})
    tl.to('#article-image-1',{  duration:2, y:-10, yoyo:true, repeat:-1,ease: 'power1.inOut', }, ">")
    tl.to('#article-image-1',{  duration:3, x: -5, yoyo:true, repeat:-1,ease: 'power1.inOut', }, "<")
   
  })

  return(
    <section className="w-100 my-52">
      <article className="w-100 px-32 flex flex-nowrap gap-6">

        <div className="w-[50%] article-content">
          <h3 className={rubik_bubbles.className + " text-[30px] mb-6 text-center"}> {sections.section_one.title}</h3>
          <p className="text-[26px] text-center leading-loose">
          {sections.section_one.description}
          </p>
        </div>

        <div className="w-[50%] article-image" id="article-image-1">
          <Image
            className="mx-auto image-1"
            src={ArticleImage} 
            alt="Daruma Image article"
            width={600}
            quality={100}
            priority={true}
          />
        </div>
        
      </article>
    </section>
  )
}