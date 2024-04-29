"use client"

import Image from "next/image";
import ArticleImage from "@/public/section_2_img.png";
import { Rubik_Bubbles } from "next/font/google";
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
          <h3 className={rubik_bubbles.className + " text-[30px] mb-6"}>ORIGINS</h3>

          <p className="text-[26px] text-center leading-loose">
            Daruma is a musician, a producer, MPC head and sp404 player, beatmaker who loves finger drums, performance, busking and street art. His sound is always unpredictable, passing from gritty dusty boombap to triphop to drunken beats, laid back or chill beats. After many ep and albums released by himself indipendently he decided to work with labels as Vinyl Digital (Germany) , and he is part of the label and collective Beat&apos;s Tailors (Bologna, Italy) and collaborate with more collective as The Farseers (Budapest, Hungary) and with the trio Florence Lofi Sunset (Florence, Italy). Also he made a collab Ep with Empty Sentiment  (Canada).He&apos;s part of the sp404 Italian Crew.He played a fundamental role in the Mercolofi, Vol. I, Mercolofi, Vol. II,  Mercolofi, Vol. III  project incipit made by Sasha Shinezz. Currently based in Bologna ( Italy)
          </p>
        </div>

      </article>
    </section>
  )
}